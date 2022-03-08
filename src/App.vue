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
}
.el-header {
  background-color: #409eff;
  display: flex;
  align-items: center;
}
.el-main {
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
  transform: translateY(0);
}
.move-enter-from,
.move-leave-to {
  transform: translateY(110%);
}
.move-leave-from,
.move-enter-to {
  transform: translateY(0);
}
</style>
