<template>
  <div class="search-list">
    <el-card v-loading="isLoading">
      <div v-if="searchList.length" class="search-item" v-for="item in searchList">
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
          <span class="author">{{ item.artists[0].name }}</span>
        </div>
      </div>
      <el-empty v-else :image-size="200"></el-empty>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';
import { useStore } from '../store/index';
import { ElMessage } from 'element-plus';
import service from '../apis/index';
import { ref, watchEffect } from 'vue';
import { storeToRefs } from 'pinia';
import { SearchSongDTO, Song } from '../models/index';

const store = useStore()
store.isGlobalShow = false
const { curSongId, isPlaying } = storeToRefs(store)

const route = useRoute()

const isLoading = ref(false)
const searchList = ref<Song[]>([])
const searchSong = async () => {
  isLoading.value = true
  const query = {
    keywords: route.query.keywords
  }
  try {
    const res = await service.searchSong(query) as SearchSongDTO
    if (res.code === 200) {
      console.log(res.result)
      searchList.value = res.result.songs
    } else {
      ElMessage.error(res.message)
    }
  } finally {
    isLoading.value = false
  }
}

watchEffect(() => {
  console.log(route.query.keywords)
  searchSong()
})

const playSong = (item: Song) => {
  console.log(item)
  if (item.id === curSongId.value) {
    store.setIsPlaying(!store.isPlaying)
    return
  }
  store.setSongId(item.id)
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
</script>

<style lang='scss' scoped>
.search-list {
  padding: 0 300px;
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
        color: #409eff;
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
</style>
