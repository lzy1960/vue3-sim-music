<template>
  <div class="home">
    <!-- 推荐歌单 -->
    <el-skeleton loading animated>
      <template #template>
        <el-skeleton-item
          v-if="!data.length"
          variant="image"
          :style="{ width: '200px', height: '200px' }"
        ></el-skeleton-item>
        <el-row v-else class="item-list" :gutter="20">
          <el-col :span="4" :xs="6" :lg="3" :xl="2" v-for="item in data">
            <div class="one-item" @click="goToPlaylist(item)">
              <el-image :src="item.coverImgUrl">
                <template #placeholder>
                  <div class="image-slot">
                    <el-icon :size="50" class="is-loading">
                      <Loading></Loading>
                    </el-icon>
                  </div>
                </template>
              </el-image>
              <div class="name">{{ item.name }}</div>
            </div>
          </el-col>
        </el-row>
      </template>
    </el-skeleton>
  </div>
</template>

<script lang="ts" setup>
import { Loading } from '@element-plus/icons-vue'
import { ref } from 'vue';
import service from '../apis/index'
import { ElMessage } from 'element-plus';
import { TopPlaylistDTO, TopPlaylist } from '../models/index';
import { useRouter } from 'vue-router';

const data = ref<TopPlaylist[]>([])
const getTopPlaylist = async () => {
  const query = {}
  const res = await service.getTopPlaylist(query) as TopPlaylistDTO
  if (res.code === 200) {
    console.log(res)
    data.value = res.playlists
  } else {
    ElMessage.error(res.message)
  }
}
getTopPlaylist()

const router = useRouter()
const goToPlaylist = (item: TopPlaylist) => {
  router.push({
    name: 'playlist',
    params: {
      id: item.id
    }
  })
}
</script>

<style lang='scss' scoped>
.item-list {
  .one-item {
    margin-bottom: 20px;
    background-color: #fafafa;
    box-sizing: border-box;
    border-radius: 20px;
    text-align: center;
    vertical-align: middle;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.2s ease;
    &:hover {
      transform: scale(1.1);
    }
    .image-slot {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      background: #f5f7fa;
      color: var(--el-text-color-secondary);
      font-size: 14px;
      vertical-align: middle;
    }
    .name {
      padding: 10px 20px;
    }
  }
}
</style>
