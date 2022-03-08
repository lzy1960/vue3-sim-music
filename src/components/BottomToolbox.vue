<template>
  <div class="bottom-toolbox">
    <Progress></Progress>
    <div class="wrapper">
      <CurrentPlay></CurrentPlay>
      <div class="center-control">
        <div class="time-progress">{{ curTimeFormat }} / {{ totalTimeFormat }}</div>
        <el-button type="text" @click="store.previousSong" :disabled="!curPlaylistIndex">
          <template #icon>
            <span class="iconfont icon-24gf-previous"></span>
          </template>
        </el-button>
        <el-button class="play-button" type="primary" circle @click="togglePlay">
          <template #icon>
            <span :class="['iconfont', store.isPlaying ? 'icon-24gf-pause2' : 'icon-24gf-play']"></span>
          </template>
        </el-button>
        <el-button
          type="text"
          @click="store.nextSong"
          :disabled="curPlaylistIndex >= playlist.length - 1"
        >
          <template #icon>
            <span class="iconfont icon-24gf-next"></span>
          </template>
        </el-button>
        <el-link @click="showPlayer">{{ isGlobalShow ? '收起' : '展开' }}</el-link>
      </div>
      <div class="volume">
        <i
          class="iconfont"
          :class="(curVolume && !muted) ? 'icon-24gf-volumeMiddle' : 'icon-24gf-volumeDisable'"
          @click="store.setMuted(!muted)"
        ></i>
        <el-slider v-model="curVolume" @input="changeVolume"></el-slider>
      </div>
      <GlobalPlaylist></GlobalPlaylist>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from '../store/index';
import Progress from './Progress.vue';
import { storeToRefs } from 'pinia';
import { computed, ref } from 'vue';
import { formatSeconds } from '../utils/index';
import CurrentPlay from './CurrentPlay.vue';
import GlobalPlaylist from './GlobalPlaylist.vue';

const store = useStore()
const { curTime, totalTime, volume, isGlobalShow, isPlaying, muted, curPlaylistIndex, playlist } = storeToRefs(store)
const curTimeFormat = computed(() => formatSeconds(curTime.value + ''))
const totalTimeFormat = computed(() => formatSeconds(totalTime.value + ''))
const showPlayer = () => {
  console.log('显示')
  isGlobalShow.value = !isGlobalShow.value
}
const togglePlay = () => {
  isPlaying.value = !isPlaying.value
}
const curVolume = ref(0)
curVolume.value = volume.value * 100
const changeVolume = () => {
  store.setVolume(curVolume.value / 100)
}

</script>

<style lang='scss' scoped>
.bottom-toolbox {
  position: relative;
  text-align: center;
  width: 100%;
  height: 100%;
  padding: 20px 0;
  background-color: #fff;
  box-sizing: border-box;
  z-index: 9;
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    // background-color: #fff;
    .el-button {
      margin: 0 20px;
      &.play-button {
        width: 50px;
        height: 50px;
      }
      .iconfont {
        font-size: 24px;
        &.icon-24gf-play {
          padding: 10px;
        }
      }
    }
    .center-control {
      flex: 1;
      .time-progress {
        margin-bottom: 10px;
      }
    }
    .volume {
      display: flex;
      align-items: center;
      width: 100px;
      right: 20px;
      .iconfont {
        margin-right: 10px;
        color: #409eff;
      }
    }
  }
}
</style>
