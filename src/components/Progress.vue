<template>
  <div class="progress">
    <el-slider
      v-model="nowTime"
      @change="timeChange"
      :format-tooltip="formatTooltip"
    ></el-slider>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue';
import { useStore } from '../store/index';
import { storeToRefs } from 'pinia';
import { formatSeconds } from '../utils/index';

const store = useStore()
const startTime = ref('00:00')
const endTime = ref('00:00')
const { curTime, totalTime } = storeToRefs(store)
const nowTime = ref(0)

watch(curTime, () => {
  startTime.value = formatSeconds(curTime.value + '')
  endTime.value = formatSeconds(totalTime.value + '')
  nowTime.value = (curTime.value / totalTime.value) * 100
})
const timeChange = () => {
  store.setChangeTime(totalTime.value * (nowTime.value * 0.01))
}
const formatTooltip = (value: number) => formatSeconds(totalTime.value * (value * 0.01) + '')
</script>

<style lang='scss' scoped>
.progress {
  display: flex;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  position: absolute;
  top: -15px;

  .el-slider::v-deep {
    text-align: center;
    margin: 0 auto;

    .el-slider__runway {
      background-color: rgba(0, 0, 0, 0);
    }
  }
}
</style>
