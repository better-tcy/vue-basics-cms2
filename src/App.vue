<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import basicsConfig from '@/assets/data/basicsConfig'
import { setVuexData, getDataMergeVuex } from '@/utils/operationVuexData'
export default {
  provide: basicsConfig,
  data() {
    return {}
  },
  created() {
    setVuexData()
    getDataMergeVuex()
  }
}
</script>

<style>
@import url('assets/css/index.css');
@import url('assets/css/reset-element.css');
</style>
