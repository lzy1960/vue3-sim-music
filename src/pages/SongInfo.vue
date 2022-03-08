<template>
  <div class="song-info">
    <div class="left">
      <el-image :src="songInfo?.al.picUrl">
        <template #placeholder>
          <el-skeleton-item variant="image" style="width: 200px; height: 200px" />
        </template>
      </el-image>
      <p class="title">{{ songInfo?.name }}</p>
      <p class="author">{{ songInfo?.ar[0]?.name }}</p>
      <p class="desc">
        <template v-for="alia in songInfo?.alia">{{ alia }}</template>
      </p>
    </div>
    <el-scrollbar class="lyric" height="calc(100vh - 60px - 120px - 80px)">
      <p v-for="line in lyric">{{ formatLyric(line.lyric) }}</p>
    </el-scrollbar>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useStore } from '../store/index';
import { useRoute } from 'vue-router';
import service from '../apis/index';
import { ElMessage } from 'element-plus';
import { storeToRefs } from 'pinia';
import { getSongDetailDTO, Song } from '../models/index';

const store = useStore()
const { lyric, curSongPicUrl } = storeToRefs(store)
store.isGlobalShow = false

const route = useRoute()
const isLoading = ref(false)
let songInfo = ref<Song>()
const getSongDetail = async () => {
  isLoading.value = true
  const query = {
    ids: route.params.id
  }
  try {
    const res = await service.getSongDetail(query) as getSongDetailDTO
    if (res.code === 200) {
      console.log(res)
      songInfo.value = res.songs[0]
    } else {
      ElMessage.error(res.message)
    }
  } finally {
    isLoading.value = false
  }
}
getSongDetail()

const formatLyric = (lyric: string) => {
  return lyric.replace(/\[.*\]/, '')
}

const { curSongId } = storeToRefs(store)
watch(curSongId, () => {
  if (curSongId.value === Number(route.params.id)) {

  }
})

</script>

<style lang='scss' scoped>
.song-info {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  box-shadow: var(--el-box-shadow-light);
  min-height: calc(100vh - 60px - 120px - 40px);
  .left {
    margin-top: 40px;
    flex: 1;
    margin-right: 50px;
    text-align: center;
    .el-image {
      width: 200px;
      height: 200px;
    }
    .title {
      font-size: 24px;
      font-weight: 700;
      color: #333;
    }
    .author {
      color: #999;
    }
    .desc {
      font-size: 14px;
      line-height: 28px;
      color: #666;
    }
  }
  .lyric {
    margin-top: 20px;
    flex: 2;
    font-size: 14px;
    text-align: center;
  }
}
</style>

