<template>
  <div>
    <clsrTable ref="clsrTable" :columns="columns">
      <!-- 具名作用域插槽 插入表格头部操作按钮-->
      <template #tableHeader="scope">
        <el-button type="primary">新增</el-button>
        <el-button type="primary">删除</el-button>
      </template>
    </clsrTable>
  </div>
</template>

<script lang="tsx" setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import clsrTable from '../common/clsrTable/index.vue'
import { ColumnProps } from '@/components/common/clsrTable/interface/index'

// 表格配置项
const columns: ColumnProps[] = [
  { type: 'selection', fixed: 'left', width: 80 },
  { type: 'index', label: '序号', width: 80 },
  { type: 'expand', label: 'Expand', width: 100 },
  {
    prop: 'username',
    label: '用户姓名',
    render: (scope) => {
      return <el-button type="primary">hey</el-button>
    },
  },
  {
    prop: 'gender',
    label: '性别',
  },
  { prop: 'idCard', label: '身份证号' },
  { prop: 'email', label: '邮箱' },
  { prop: 'address', label: '居住地址' },
  { prop: 'operation', label: '操作', fixed: 'right', width: 330 },
]
</script>

<style lang="less" scoped></style>
