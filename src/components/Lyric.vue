<template>
  <div class="lyric-area">
    <div ref="lyricRef" class="lyric">
      <p
        :ref="(el) => {
          if (curLyricIndex === index) {
            lyricLineRef = el as HTMLDivElement
          }
        }"
        v-for="(line, index) in lyric"
        :class="{ current: curLyricIndex === index }"
      >{{ formatLyric(line.lyric) }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, watchEffect, onMounted } from 'vue';
import { useStore } from '../store/index';
import { storeToRefs } from 'pinia';
import { ElMessage } from 'element-plus';
import service from '../apis/index';
import { getLyricDTO, Lyric } from '../models/index';

const store = useStore()
const { curSongId, curTime, isPlaying } = storeToRefs(store)

let lyric = ref<Lyric[]>([])
const lyricRef = ref<HTMLDivElement>()
const lyricLineRef = ref<HTMLDivElement>()
onMounted(() => {
  lyricLineRef.value?.scrollIntoView()
})
// 默认第一行00:00，先滚动到中间

const getLyric = async (curSongId: number) => {
  const query = {
    id: curSongId
  }
  const res = await service.getLyric(query) as getLyricDTO
  if (res.code === 200) {
    console.log(res)
    lyric.value = res.lrc.lyric.split('\n')
      .filter((item: string) => item!)
      .map((item: string) => {
        // 00:00.000
        // 转换为store.duration，然后跟当前时间作对比
        const timeArr: string[] | null = item.match(/^\[(.*)\:(.*)\.(.*)\]/)
        return {
          lyric: item.replace(/\[.*\]/, ''),
          time: (item.match(/\[(.*)\]/) && item.match(/\[(.*)\]/)![1]) || '',
          duration: timeArr ? Number(timeArr[1]) * 60 + Number(timeArr[2]) * 1 + Number(timeArr[3]) * 0.001 : 0
        }
      })
    store.setLyric(lyric.value)
  } else {
    ElMessage.error(res.message)
  }
}

const curLyricIndex = ref(0)
watch(curTime, () => {
  curLyricIndex.value = lyric.value.filter(item => item.duration < curTime.value).length - 1
  console.log(curLyricIndex.value)
})
watch(isPlaying, () => {
  if (isPlaying.value) {
    lyricLineRef.value?.scrollIntoView({ block: 'center', behavior: 'smooth' })
  }
})
watchEffect(() => {
  lyricLineRef.value?.scrollIntoView({ block: 'center', behavior: 'smooth' })
})

onMounted(() => {
  lyricRef.value?.addEventListener
})

if (curSongId.value) {
  getLyric(curSongId.value)
}

const formatLyric = (lyric: string) => {
  return lyric.replace(/\[.*\]/, '')
}
watch(curSongId, () => {
  getLyric(curSongId.value)
})

</script>

<style lang='scss' scoped>
.lyric-area {
  position: relative;
  margin: 150px 0;
  overflow: auto;
  height: calc(100vh - 580px);
  padding: 0 50px;
  -webkit-mask-image: linear-gradient(
    to bottom,
    transparent,
    rgba(0, 0, 0, 1) 30%,
    rgba(0, 0, 0, 1) 70%,
    transparent
  );
  mask-image: linear-gradient(
    to right,
    transparent,
    rgba(0, 0, 0, 1) 30%,
    rgba(0, 0, 0, 1) 70%,
    transparent
  );
  .lyric {
    text-align: center;
    padding: 50% 0;
    text-shadow: 2px 2px rgba(0, 0, 0, 0.7);
    line-height: 24px;
    .current {
      font-size: 32px;
      line-height: 48px;
      color: #452243;
    }
  }
}
</style>
