import { TableColumnCtx } from 'element-plus/es/components/table/src/table-column/defaults'

export interface ColumnProps<T = any> extends Partial<Omit<TableColumnCtx<T>, 'children' | 'renderHeader' | 'renderCell'>> {
  tag?: boolean // 是否是标签展示
  render?: (scope: { row: T }) => any // 自定义单元格内容渲染（tsx语法）
}
