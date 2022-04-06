<template>
  <el-header>
    <el-col :span="8">
      <el-button @click="goToHome" type="text" style="color: #fff;">
        <span class="logo">SIM MUSIC</span>
      </el-button>
    </el-col>
    <el-col :span="8">
      <SimSearch></SimSearch>
    </el-col>
    <el-col style="text-align:right;" :span="8">
      <el-avatar
        v-if="!store.isLogin"
        @click="login"
        :size="40"
        src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
      ></el-avatar>
      <el-dropdown v-else>
        <el-avatar
          :size="40"
          src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
        ></el-avatar>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>
              <span @click="logout">退出登录</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </el-col>
  </el-header>
</template>

<script setup lang="ts">
import {
  Search,
} from '@element-plus/icons-vue'
import { ref } from 'vue';
import { useStore } from '../store/index';
import SimSearch from './SimSearch.vue';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';

const store = useStore()
const { isGlobalShow } = storeToRefs(store)
const login = () => {
  console.log('登录')
}
const logout = () => {
  console.log('退出登录')
}

const router = useRouter()
const goToHome = () => {
  isGlobalShow.value = false
  router.push({
    name: 'home'
  })
}
</script>

<style lang='scss' scoped>
.logo {
  font-size: 20px;
  font-weight: 700;
}
</style>
