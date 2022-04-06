<template>
  <div class="current-play">
    <el-image :src="curSongPicUrl"></el-image>
    <div class="right">
      <el-tooltip :content="curSongTitle" placement="right">
        <div class="title">{{ curSongTitle }}</div>
      </el-tooltip>
      <el-tooltip :content="curSongAuthor" placement="right">
        <div class="author">{{ curSongAuthor }}</div>
      </el-tooltip>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from '../store/index';
import { storeToRefs } from 'pinia';

const store = useStore()
const { curSongPicUrl, curSongTitle, curSongAuthor } = storeToRefs(store)

</script>

<style lang='scss' scoped>
.current-play {
  display: flex;
  align-items: center;

  .el-image {
    width: 80px;
    height: 80px;
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
