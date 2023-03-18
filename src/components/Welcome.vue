<template>
  <div>
    <el-button type="primary" @click="enterHello">HelloWorld</el-button>
    <el-button type="primary" @click="enterTable">clsrTable</el-button>
    <el-button type="primary" @click="enterATree">antTree</el-button>
  </div>
</template>
<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const enterHello = () => {
  router.push({
    name: 'helloworld',
  })
}
const enterTable = () => {
  router.push({
    name: 'usetable',
  })
}
const enterATree = () => {
  router.push({
    name: 'anttree',
  })
}
</script>
<style lang=""></style>
