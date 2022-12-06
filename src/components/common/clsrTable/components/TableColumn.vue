<template>
  <component :is="renderLoop(column)"></component>
</template>

<script lang="tsx" setup>
import { ref, useSlots } from 'vue'
import { ColumnProps } from '@/components/common/clsrTable/interface/index'
import { ElTableColumn } from 'element-plus'

const slots = useSlots()
const props = defineProps<{
  column: ColumnProps
}>()

const renderLoop = (item: ColumnProps) => {
  console.log(item)
  return <>{<ElTableColumn {...item}></ElTableColumn>}</>
}
</script>

<style lang="less" scoped></style>
