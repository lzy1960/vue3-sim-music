<template>
  <div class="search">
    <el-row>
      <el-col :span="22">
        <el-autocomplete
          v-model="searchText"
          :placeholder="searchTextPlaceholder"
          :fetch-suggestions="searchSuggest"
          @keyup.enter="searchName(searchText || searchTextPlaceholderRealKeyword)"
        >
          <template #default="{ item }">
            <div @click="searchId(item.id)">{{ item.name }}</div>
          </template>
        </el-autocomplete>
      </el-col>
      <el-col :span="2">
        <el-button
          :icon="Search"
          circle
          @click="searchName(searchText || searchTextPlaceholderRealKeyword)"
        ></el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import {
  Search,
} from '@element-plus/icons-vue'
import { ref } from 'vue';
import service from '../apis/index';
import { ElMessage } from 'element-plus';
import { useRouter, useRoute } from 'vue-router';
import { SearchSuggestDTO, SearchDefaultDTO } from '../models/index';
import { useStore } from '../store/index';
import { storeToRefs } from 'pinia';

const route = useRoute()
const searchText = ref('')
const searchTextPlaceholder = ref('')
const searchTextPlaceholderRealKeyword = ref('')
searchText.value = route.query?.keywords?.toString() || ''

const router = useRouter()

const getSearchDefault = async () => {
  const query = {}
  const res = await service.getSearchDefault(query) as SearchDefaultDTO
  if (res.code === 200) {
    console.log(res.data)
    searchTextPlaceholder.value = res.data!.showKeyword
    searchTextPlaceholderRealKeyword.value = res.data!.realkeyword
  } else {
    ElMessage.error(res.message)
  }
}
getSearchDefault()

const searchSuggest = async (queryString: string, cb: (arg: any) => void) => {
  if (!queryString) {
    cb([])
    return
  }
  const query = {
    keywords: queryString,
  }
  const res = await service.searchSuggest(query) as SearchSuggestDTO
  if (res.code === 200) {
    console.log(res.result)
    cb(res.result.songs)
  } else {
    ElMessage.error(res.message)
  }
}

const store = useStore()
const { isGlobalShow } = storeToRefs(store)
const searchName = (name: string) => {
  isGlobalShow.value = false
  console.log('搜索name', name)
  if (!name) {
    ElMessage.warning('无搜索内容')
    return
  }
  if (!searchText.value) {
    searchText.value = name
  }
  router.push({
    name: 'searchList',
    query: {
      keywords: name
    }
  })
}
const searchId = (id: number) => {
  console.log('搜索id', id)
  if (!id) {
    ElMessage.warning('无内容')
    return
  }
  router.push({
    name: 'songInfo',
    params: {
      id
    }
  })
}


</script>

<style lang='scss' scoped>
.search {
  :deep(.el-autocomplete) {
    width: 100%;
  }
}
</style>
