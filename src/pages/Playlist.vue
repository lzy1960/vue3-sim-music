<template>
  <div class="play-list" v-loading="isLoading">
    <div class="left">
      <el-image :src="playlistInfo?.coverImgUrl"></el-image>
    </div>
    <el-card class="right">
      <template #header>
        <div class="title">{{ playlistInfo?.name }}</div>
        <div class="desc">{{ playlistInfo?.description }}</div>
      </template>
      <div v-if="playlistSongs.length" class="search-list">
        <div v-if="playlistSongs.length" class="search-item" v-for="item in playlistSongs">
          <el-link
            class="name"
            :class="{ 'playing': item.id === curSongId }"
            @click="goToSongInfo(item.id)"
          >{{ item.name }}</el-link>
          <el-button @click="playSong(item)" size="small" type="primary">
            {{
              item.fee === 1
                ?
                '试听'
                :
                (
                  item.id === curSongId && isPlaying
                    ?
                    '暂停'
                    :
                    '播放'
                )
            }}
            <template
              #icon
            >
              <i
                :class="['iconfont', item.id === curSongId && isPlaying ? 'icon-24gf-pause2' : 'icon-24gf-play']"
              ></i>
            </template>
          </el-button>
          <div class="desc">
            <el-tag v-if="item.fee === 1" size="small" class="vip">VIP</el-tag>
            <span class="author">{{ item.ar[0].name }}</span>
          </div>
        </div>
      </div>
      <el-empty v-else :image-size="200"></el-empty>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import service from '../apis/index';
import { ElMessage } from 'element-plus';
import { getPlaylistDTO, getSongDetailDTO, Song, Playlist } from '../models/index';
import { storeToRefs } from 'pinia';
import { useStore } from '../store/index';

const store = useStore()
const { curSongId, isPlaying } = storeToRefs(store)

const route = useRoute()

const isLoading = ref(false)
const playlistInfo = ref<Playlist | null>(null)
const playlistSongs = ref<Song[]>([])
const trackIds = ref<number[]>([])
const getPlaylist = async (id: number) => {
  isLoading.value = true
  const query = {
    id
  }
  const res = await service.getPlaylist(query) as getPlaylistDTO
  if (res.code === 200) {
    playlistInfo.value = res.playlist
    trackIds.value = res.playlist.trackIds.map((item) => item.id)
    getSongDetail()
  } else {
    ElMessage.error(res.message)
  }
}
getPlaylist(Number(route.params.id))

const getSongDetail = async () => {
  console.log('获取详情')
  const query = {
    ids: trackIds.value.join(',')
  }
  try {
    const res = await service.getSongDetail(query) as getSongDetailDTO
    if (res.code === 200) {
      console.log(res)
      playlistSongs.value = res.songs
      console.log(playlistSongs.value)
    } else {
      ElMessage.error(res.message)
    }
  } finally {
    isLoading.value = false
  }
}

const router = useRouter()
const goToSongInfo = (id: number) => {
  router.push({
    name: 'songInfo',
    params: {
      id
    }
  })
}

const playSong = (item: Song) => {
  console.log(item)
  if (item.id === curSongId.value) {
    store.setIsPlaying(!store.isPlaying)
    return
  }
  store.setSongId(item.id)
}

</script>

<style lang='scss' scoped>
.play-list {
  position: relative;
  display: flex;
  justify-content: center;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  z-index: 1;
  overflow: hidden;
  border-radius: 20px;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.3);
    z-index: -1;
  }
  .left {
    top: 0;
    .el-image {
      position: sticky;
      top: 0;
      width: 200px;
      height: 200px;
      margin-right: 20px;
      box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.5);
      box-sizing: border-box;
    }
  }
  .right {
    align-items: center;
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 20px;
    .title {
      margin-bottom: 10px;
      font-weight: 700;
      font-size: 24px;
    }
    .desc {
      font-size: 14px;
      color: #999;
      line-height: 28px;
    }
    .search-list {
      .search-item {
        padding: 10px 0;
        &:hover {
          background-color: #eee;
        }
        .name {
          font-size: 16px;
          font-weight: 700;
          margin-right: 20px;
          &.playing {
            color: #87ceeb;
          }
        }
        .desc {
          .author {
            font-size: 14px;
            color: #999;
            vertical-align: middle;
          }
        }
        .el-button {
          .iconfont {
            font-size: 10px;
          }
        }
      }
    }
  }
}
</style>
