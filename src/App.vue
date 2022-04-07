<template>
  <el-container>
    <Header></Header>
    <el-main>
      <router-view></router-view>
    </el-main>
    <el-footer>
      <BottomToolbox></BottomToolbox>
    </el-footer>
  </el-container>
  <transition name="move">
    <GlobalPlayer v-show="store.isGlobalShow"></GlobalPlayer>
  </transition>
</template>

<script lang="ts" setup>
import BottomToolbox from '@/components/BottomToolbox.vue'
import Header from '@/components/Header.vue';
import GlobalPlayer from '@/components/GlobalPlayer.vue';
import { useStore } from './store/index';

const store = useStore()
</script>

<style lang="scss" scoped>
.el-container {
  height: 100vh;
  overflow: hidden;
  &::after {
    content: "";
    width: 100%;
    height: 100%;
    background-size: cover;
    background-image: url("https://pc-index-skin.cdn.bcebos.com/883531d6c79a2810ff689e7a6896d263.jpg?x-bce-process=image/crop,x_286,y_89,w_1213,h_757");
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
}
.el-header {
  // background-color: #87ceeb;
  display: flex;
  align-items: center;
}
.el-main {
  // background-color: #87ceeb;
  height: calc(100vh - 60px - 120px);
  overflow: auto;
}
.el-footer {
  height: 120px;
  padding: 0;
  background-color: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
}

.move-enter-active,
.move-leave-active {
  transition: all 0.5s ease;
  transform: translate(0, 0) scale(1);
}
.move-enter-from,
.move-leave-to {
  transform: translate(-50%, 100%) scale(0);
}
.move-leave-from,
.move-enter-to {
  transform: translate(0, 0) scale(1);
}
</style>
