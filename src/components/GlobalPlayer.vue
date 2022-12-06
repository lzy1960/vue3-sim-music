<template>
  <div class="global-player">
    <div
      class="background"
      :style="{ backgroundImage: `url(${curSongPicUrl})` }"
    ></div>
    <el-link
      @click="isGlobalShow = false"
      class="expand-icon iconfont icon-exit-fullscreen"
      :underline="false"
    ></el-link>
    <SimAudio></SimAudio>
    <div class="info">
      <div class="left">
        <div class="circle">
          <el-image :src="curSongPicUrl"></el-image>
        </div>
        <div class="song-info">
          <p class="title">{{ curSongTitle }}</p>
          <p class="author">{{ curSongAuthor }}</p>
        </div>
      </div>
      <div class="right">
        <Lyric></Lyric>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from '../store'
import Lyric from './Lyric.vue'
import SimAudio from './SimAudio.vue'
import { storeToRefs } from 'pinia'

const store = useStore()
const { curSongTitle, curSongAuthor, curSongPicUrl, isGlobalShow } =
  storeToRefs(store)
</script>

<style lang="scss" scoped>
.global-player {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100vh - 60px - 60px);
  position: absolute;
  bottom: 120px;
  left: 0;
  overflow: hidden;
  box-sizing: border-box;
  z-index: 10;

  .background {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #452243;
    background-size: cover;
    background-position: center;
    filter: blur(20px);
    transform: scale(1.08);
  }

  .expand-icon {
    position: absolute;
    width: 50px;
    height: 50px;
    top: 50px;
    right: 50px;
    color: #eee;
    font-size: 24px;
  }

  .info {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    display: flex;
    justify-content: center;
    flex: 1;
    z-index: 1;

    .left {
      padding: 10px;
      flex: 0 0 300px;
      margin: auto 0;
      height: 100%;
      box-sizing: border-box;

      .circle {
        width: 300px;
        height: 300px;
        border-radius: 50%;
        background-color: #eee;
        margin: 30% auto 0;
        overflow: hidden;
        box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.1);
      }

      .song-info {
        margin-top: 40px;
        text-align: center;

        .title {
          font-weight: 700;
          font-size: 20px;
          color: #fff;
          text-shadow: 2px 2px rgba(0, 0, 0, 0.7);
        }

        .author {
          font-size: 16px;
          color: #eee;
          text-shadow: 2px 2px rgba(0, 0, 0, 0.5);
        }
      }
    }

    .right {
      padding: 0;
      width: 500px;
      flex: 1;
      color: #fff;
    }
  }
}
</style>
