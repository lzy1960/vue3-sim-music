<template>
  <div class="current-play">
    <div class="left-image">
      <el-image :src="curSongPicUrl"></el-image>
      <span class="cover">
        <el-link
          @click="isGlobalShow = !isGlobalShow"
          class="expand-icon iconfont"
          :class="isGlobalShow ? 'icon-exit-fullscreen' : 'icon-full'"
          :underline="false"
        ></el-link>
      </span>
    </div>
    <div class="right">
      <el-tooltip
        :content="curSongTitle"
        placement="right"
      >
        <div class="title">{{ curSongTitle }}</div>
      </el-tooltip>
      <el-tooltip
        :content="curSongAuthor"
        placement="right"
      >
        <div class="author">{{ curSongAuthor }}</div>
      </el-tooltip>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from '../store/index';
import { storeToRefs } from 'pinia';

const store = useStore()
const { curSongPicUrl, curSongTitle, curSongAuthor, isGlobalShow } = storeToRefs(store)

</script>

<style lang='scss' scoped>
.current-play {
  display: flex;
  align-items: center;

  .left-image {
    position: relative;
    width: 80px;
    height: 80px;

    .cover {
      display: inline-block;
      position: absolute;
      left: 0;
      height: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(69, 34, 67, 0.2);
      opacity: 0;
      transition: opacity 0.3s ease;

      &:hover {
        opacity: 1;
      }

      .el-link {
        width: 100%;
        height: 100%;
        color: #eee;
      }
    }
  }

  .right {
    width: 100px;
    margin-left: 20px;
    text-align: left;

    .title,
    .author {
      -webkit-line-clamp: 2;
      text-overflow: ellipsis;
      overflow: hidden;
      word-break: break-all;
      -webkit-box-orient: vertical;
      display: -webkit-box;
    }

    .title {
      font-size: 20px;
      font-weight: 700;
      color: #333;
      margin-bottom: 5px;
    }

    .author {
      font-size: 14px;
      color: #999;
    }
  }
}
</style>
