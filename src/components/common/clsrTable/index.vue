<template lang="">
  <!-- 表格内容 -->
  <div class="main_table">
    <!-- 表格头部操作按钮 -->
    <div class="table_header">
      <!-- 该插槽显示操作按钮 -->
      <slot name="tableHeader"></slot>
    </div>
    <el-table ref="tableRef">
      <template v-for="item in tableColumns">
        <el-table-column v-if="item.type == 'selection' || item.type == 'index'" v-bind="item" :align="item.align ?? 'center'"> </el-table-column>
        <TableColumn v-if="!item.type" :column="item"> </TableColumn>
      </template>
    </el-table>
  </div>
</template>
<script setup lang="ts">
import { ref, watch, computed, provide } from 'vue'
import { ColumnProps } from '@/components/common/clsrTable/interface/index'
import { ElTable, TableProps } from 'element-plus'
import TableColumn from '@/components/common/clsrTable/components/TableColumn.vue'

interface clsrTableProps extends Partial<Omit<TableProps<any>, 'data'>> {
  columns: ColumnProps[]
}

const props = withDefaults(defineProps<clsrTableProps>(), {
  columns: () => [],
})
// 表格配置项
let tableColumns = ref<ColumnProps[]>(props.columns)
console.log(props.columns)
</script>
<style lang=""></style>
