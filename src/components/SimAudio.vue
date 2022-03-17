<template>
  <div class="sim-audio">
    <audio
      :ref="(el) => {
        audioRef = el as HTMLAudioElement
      }"
      :src="curSongUrl"
      @canplay="canplay"
      @ended="ended"
      @timeupdate="timeupdate"
      @emptied="emptied"
    ></audio>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { onMounted, ref, watch, watchEffect, nextTick } from 'vue';
import { useStore } from '../store/index';
import { ElMessage } from 'element-plus';
import service from '../apis/index';
import { Song, getSongDetailDTO, SearchUrlDTO } from '../models/index';

const store = useStore()
const { curSongId, curSongTitle, curSongAuthor, curSongUrl, isPlaying, changeTime, volume, muted, curSongPicUrl, curPlaylistIndex, playlist } = storeToRefs(store)

const audioRef = ref<HTMLAudioElement>()

const togglePlay = () => {
  console.log(audioRef.value)
  isPlaying.value ? audioRef.value!.play() : audioRef.value!.pause()
  console.log('正在播放是' + isPlaying.value)
}
watch(isPlaying, () => {
  nextTick(() => {
    togglePlay()
  })
})
watch(muted, () => {
  audioRef.value!.muted = muted.value
})
watch(volume, () => {
  console.log(volume.value)
  store.setMuted(false)
  return audioRef.value!.volume = volume.value
})
onMounted(() => {
  audioRef.value!.volume = volume.value
})
watch(changeTime, () => {
  audioRef.value!.currentTime = changeTime.value
})

watchEffect(() => {
  console.log(curSongUrl.value)
})

// 如果id变了，就保存到localStorage里
watch(curSongId, async () => {
  console.log(curSongId.value)
  localStorage.setItem('curSongId', curSongId.value + '')
  // searchUrl()
  const requestUrl = await searchUrl(curSongId.value)
  if (requestUrl) {
    store.setSongUrl(requestUrl)
  } else {
    const songUrl = `https://music.163.com/song/media/outer/url?id=${curSongId.value}.mp3`
    store.setSongUrl(songUrl)
  }
  getSongDetail()
})

// watch(curPlaylistIndex, () => {
//   console.log(curPlaylistIndex.value)
//   store.setSongId(playlist.value[curPlaylistIndex.value].id)
// })

const getSongDetail = async () => {
  console.log('获取详情')
  const query = {
    ids: curSongId.value
  }
  const res = await service.getSongDetail(query) as getSongDetailDTO
  if (res.code === 200) {
    console.log(res)
    const songInfo: Song = res.songs[0]
    playSong(songInfo)
  } else {
    ElMessage.error(res.message)
  }
}
const searchUrl = async (id: number) => {
  console.log('获取详情')
  const query = {
    id: curSongId.value
  }
  const res = await service.searchUrl(query) as SearchUrlDTO
  if (res.code === 200) {
    console.log(res)
    // const songInfo: Song = res.songs[0]
    // playSong(songInfo)
    return res.data[0]?.url || ''
  } else {
    ElMessage.error(res.message)
  }
}

const playSong = async (item: Song) => {
  console.log(item.id)
  console.log(curSongId.value)
  // curSongId.value = item.id
  curSongTitle.value = item.name
  curSongAuthor.value = item.ar[0].name
  curSongPicUrl.value = item.al.picUrl
  // 添加到播放列表
  store.setPlaylist({
    id: curSongId.value,
    name: curSongTitle.value,
    author: curSongAuthor.value,
  })
  store.setIsPlaying(false)
  nextTick(() => {
    store.setIsPlaying(true)
  })
}
// 先从localStorage里拿到id
store.setSongId(Number(localStorage.getItem('curSongId')))

const emptied = () => {
  console.log('emptied')
  store.setIsPlaying(false)
}

const canplay = () => {
  console.log('canplay')
  store.setTotalTime(audioRef.value!.duration)
}
const ended = () => {
  console.log('ended')
}
const timeupdate = () => {
  console.log('timeupdate')
  store.setCurTime(audioRef.value!.currentTime)
}
</script>

<style lang='scss' scoped>
</style>
