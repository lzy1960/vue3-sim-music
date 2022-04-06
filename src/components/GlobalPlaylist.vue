<template>
  <div class="global-playlist">
    <el-popover placement="top" :width="200" trigger="click" :teleported="false">
      <div v-if="playlist.length">
        <div
          class="playlist-item"
          :class="{ 'playing': curSongId === item.id }"
          v-for="item in playlist"
          @click="store.setSongId(item.id)"
        >
          <div class="title">{{ item.name }}</div>
          <div class="author">{{ item.author }}</div>
        </div>
      </div>
      <el-empty v-else />
      <template #reference>
        <el-button type="text">
          <template #icon>
            <i class="iconfont icon-24gf-playlistMusic2"></i>
          </template>
        </el-button>
      </template>
    </el-popover>
  </div>
</template>

<script lang="ts" setup>import { ref } from 'vue';
import { useStore } from '../store/index';
import { storeToRefs } from 'pinia';

const store = useStore()
const { playlist, curSongId } = storeToRefs(store)
</script>

<style lang='scss' scoped>
.global-playlist {
  .playlist-item {
    padding: 10px 0;
    cursor: pointer;
    &.playing {
      color: #87ceeb;
    }
  }
  .title {
    font-size: 16px;
    font-weight: 700;
  }
  .el-button {
    margin-left: 20px;
    .iconfont {
      font-size: 24px;
      &.icon-24gf-play {
        padding: 10px;
      }
    }
  }
}
</style>
