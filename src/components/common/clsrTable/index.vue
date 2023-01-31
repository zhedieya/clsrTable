<template lang="">
  <!-- 表格内容 -->
  <div class="main_table">
    <!-- 表格头部操作按钮 -->
    <div class="table_header">
      <!-- 该插槽显示操作按钮 -->
      <slot name="tableHeader"></slot>
    </div>
    <el-table ref="tableRef" :data="tableData" border stripe style="width: 100%">
      <template v-for="item in tableColumns">
        <el-table-column v-if="item.type == 'selection' || item.type == 'index'" v-bind="item" :align="item.align ?? 'center'"> </el-table-column>
        <!-- expand 支持 tsx 语法 && 作用域插槽 (tsx > slot) -->
        <el-table-column v-bind="item" :align="item.align ?? 'center'" v-if="item.type == 'expand'" v-slot="scope">
          <!-- tsx语法渲染 -->
          <component :is="item.render" :row="scope.row" v-if="item.render"> </component>
          <!-- 作用域插槽渲染 -->
          <slot :name="item.type" :row="scope.row" v-else></slot> <!-- 相当于将usetable.vue里scope.row渲染进去 -->
        </el-table-column>
        <TableColumn v-if="!item.type && item.prop" :column="item">
          <!-- 渲染剩余插槽 -->
          <!-- 目前存在的slot是expand和tableHeader -->
          <template v-for="slot in Object.keys($slots)" #[slot]="scope">
            <slot :name="slot" :row="scope.row"></slot>
          </template>
        </TableColumn>
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

// 暂时写死表格数据
const tableData = [
  {
    id: '63345132664688877125',
    username: '雷勇',
    gender: 2,
    user: {
      detail: {
        age: 19,
      },
    },
    idCard: '63345132664688877125',
    email: 'e.qdwtcrf@epfwqej.bh',
    address: '辽宁省 锦州市',
    createTime: '2008-04-10 14:33:08',
    status: 1,
    avatar: 'https://iamge-1259297738.cos.ap-chengdu.myqcloud.com/img/20220728110012.jpg',
  },
  {
    id: '53743537546164045445',
    username: '李敏',
    gender: 2,
    user: {
      detail: {
        age: 20,
      },
    },
    idCard: '53743537546164045445',
    email: 'k.skpt@guloxps.pl',
    address: '安徽省 芜湖市',
    createTime: '1981-08-09 17:38:18',
    status: 0,
    avatar: 'https://iamge-1259297738.cos.ap-chengdu.myqcloud.com/img/20220728110012.jpg',
  },
  {
    id: '35648846805353135265',
    username: '龚娜',
    gender: 1,
    user: {
      detail: {
        age: 26,
      },
    },
    idCard: '35648846805353135265',
    email: 'b.qpcingqdlw@vunlecpbzl.bh',
    address: '海南省 三亚市',
    createTime: '1983-01-07 14:21:43',
    status: 1,
    avatar: 'https://iamge-1259297738.cos.ap-chengdu.myqcloud.com/img/20220728110015.jpg',
  },
  {
    id: '58232615548674139374',
    username: '白秀兰',
    gender: 2,
    user: {
      detail: {
        age: 24,
      },
    },
    idCard: '58232615548674139374',
    email: 't.mxey@rkcqgxte.yu',
    address: '重庆 重庆市',
    createTime: '2018-07-17 01:35:19',
    status: 0,
    avatar: 'https://iamge-1259297738.cos.ap-chengdu.myqcloud.com/img/20220728110032.jpg',
  },
  {
    id: '90088393613735691343',
    username: '苏杰',
    gender: 1,
    user: {
      detail: {
        age: 25,
      },
    },
    idCard: '90088393613735691343',
    email: 'g.nikk@rvprlhimce.ke',
    address: '澳门特别行政区 澳门半岛',
    createTime: '1991-11-14 10:41:27',
    status: 0,
    avatar: 'https://iamge-1259297738.cos.ap-chengdu.myqcloud.com/img/20220728110032.jpg',
  },
  {
    id: '08842615640464274135',
    username: '魏静',
    gender: 2,
    user: {
      detail: {
        age: 24,
      },
    },
    idCard: '08842615640464274135',
    email: 'x.rceffvbj@qqhhcmfrf.net',
    address: '云南省 丽江市',
    createTime: '1993-06-08 19:44:40',
    status: 0,
    avatar: 'https://iamge-1259297738.cos.ap-chengdu.myqcloud.com/img/20220728110012.jpg',
  },
  {
    id: '23802413307538524438',
    username: '郑军',
    gender: 2,
    user: {
      detail: {
        age: 20,
      },
    },
    idCard: '23802413307538524438',
    email: 'j.jxbh@vuqqdxsz.mil',
    address: '河南省 周口市',
    createTime: '2002-08-12 03:39:58',
    status: 1,
    avatar: 'https://iamge-1259297738.cos.ap-chengdu.myqcloud.com/img/20220728110012.jpg',
  },
  {
    id: '68241321164345933697',
    username: '廖丽',
    gender: 1,
    user: {
      detail: {
        age: 19,
      },
    },
    idCard: '68241321164345933697',
    email: 'p.cvnun@nuuzvnln.中国互联.公司',
    address: '澳门特别行政区 澳门半岛',
    createTime: '2010-04-19 03:38:50',
    status: 0,
    avatar: 'https://iamge-1259297738.cos.ap-chengdu.myqcloud.com/img/20220728110015.jpg',
  },
  {
    id: '40725070832531443988',
    username: '姚勇',
    gender: 1,
    user: {
      detail: {
        age: 20,
      },
    },
    idCard: '40725070832531443988',
    email: 'o.tzjtdjzpcn@wift.museum',
    address: '吉林省 延边朝鲜族自治州',
    createTime: '1990-07-25 01:29:59',
    status: 1,
    avatar: 'https://iamge-1259297738.cos.ap-chengdu.myqcloud.com/img/20220728110032.jpg',
  },
  {
    id: '47104525352781789449',
    username: '万磊',
    gender: 1,
    user: {
      detail: {
        age: 22,
      },
    },
    idCard: '47104525352781789449',
    email: 's.xtxofe@digfgqsj.biz',
    address: '内蒙古自治区 鄂尔多斯市',
    createTime: '1972-11-06 06:37:08',
    status: 0,
    avatar: 'https://iamge-1259297738.cos.ap-chengdu.myqcloud.com/img/20220728110032.jpg',
  },
]
// const tableData = {
//   tableData: [
//     {
//       id: '63345132664688877125',
//       username: '雷勇',
//       gender: 2,
//       user: {
//         detail: {
//           age: 19,
//         },
//       },
//       idCard: '63345132664688877125',
//       email: 'e.qdwtcrf@epfwqej.bh',
//       address: '辽宁省 锦州市',
//       createTime: '2008-04-10 14:33:08',
//       status: 1,
//       avatar: 'https://iamge-1259297738.cos.ap-chengdu.myqcloud.com/img/20220728110012.jpg',
//     },
//     {
//       id: '53743537546164045445',
//       username: '李敏',
//       gender: 2,
//       user: {
//         detail: {
//           age: 20,
//         },
//       },
//       idCard: '53743537546164045445',
//       email: 'k.skpt@guloxps.pl',
//       address: '安徽省 芜湖市',
//       createTime: '1981-08-09 17:38:18',
//       status: 0,
//       avatar: 'https://iamge-1259297738.cos.ap-chengdu.myqcloud.com/img/20220728110012.jpg',
//     },
//     {
//       id: '35648846805353135265',
//       username: '龚娜',
//       gender: 1,
//       user: {
//         detail: {
//           age: 26,
//         },
//       },
//       idCard: '35648846805353135265',
//       email: 'b.qpcingqdlw@vunlecpbzl.bh',
//       address: '海南省 三亚市',
//       createTime: '1983-01-07 14:21:43',
//       status: 1,
//       avatar: 'https://iamge-1259297738.cos.ap-chengdu.myqcloud.com/img/20220728110015.jpg',
//     },
//     {
//       id: '58232615548674139374',
//       username: '白秀兰',
//       gender: 2,
//       user: {
//         detail: {
//           age: 24,
//         },
//       },
//       idCard: '58232615548674139374',
//       email: 't.mxey@rkcqgxte.yu',
//       address: '重庆 重庆市',
//       createTime: '2018-07-17 01:35:19',
//       status: 0,
//       avatar: 'https://iamge-1259297738.cos.ap-chengdu.myqcloud.com/img/20220728110032.jpg',
//     },
//     {
//       id: '90088393613735691343',
//       username: '苏杰',
//       gender: 1,
//       user: {
//         detail: {
//           age: 25,
//         },
//       },
//       idCard: '90088393613735691343',
//       email: 'g.nikk@rvprlhimce.ke',
//       address: '澳门特别行政区 澳门半岛',
//       createTime: '1991-11-14 10:41:27',
//       status: 0,
//       avatar: 'https://iamge-1259297738.cos.ap-chengdu.myqcloud.com/img/20220728110032.jpg',
//     },
//     {
//       id: '08842615640464274135',
//       username: '魏静',
//       gender: 2,
//       user: {
//         detail: {
//           age: 24,
//         },
//       },
//       idCard: '08842615640464274135',
//       email: 'x.rceffvbj@qqhhcmfrf.net',
//       address: '云南省 丽江市',
//       createTime: '1993-06-08 19:44:40',
//       status: 0,
//       avatar: 'https://iamge-1259297738.cos.ap-chengdu.myqcloud.com/img/20220728110012.jpg',
//     },
//     {
//       id: '23802413307538524438',
//       username: '郑军',
//       gender: 2,
//       user: {
//         detail: {
//           age: 20,
//         },
//       },
//       idCard: '23802413307538524438',
//       email: 'j.jxbh@vuqqdxsz.mil',
//       address: '河南省 周口市',
//       createTime: '2002-08-12 03:39:58',
//       status: 1,
//       avatar: 'https://iamge-1259297738.cos.ap-chengdu.myqcloud.com/img/20220728110012.jpg',
//     },
//     {
//       id: '68241321164345933697',
//       username: '廖丽',
//       gender: 1,
//       user: {
//         detail: {
//           age: 19,
//         },
//       },
//       idCard: '68241321164345933697',
//       email: 'p.cvnun@nuuzvnln.中国互联.公司',
//       address: '澳门特别行政区 澳门半岛',
//       createTime: '2010-04-19 03:38:50',
//       status: 0,
//       avatar: 'https://iamge-1259297738.cos.ap-chengdu.myqcloud.com/img/20220728110015.jpg',
//     },
//     {
//       id: '40725070832531443988',
//       username: '姚勇',
//       gender: 1,
//       user: {
//         detail: {
//           age: 20,
//         },
//       },
//       idCard: '40725070832531443988',
//       email: 'o.tzjtdjzpcn@wift.museum',
//       address: '吉林省 延边朝鲜族自治州',
//       createTime: '1990-07-25 01:29:59',
//       status: 1,
//       avatar: 'https://iamge-1259297738.cos.ap-chengdu.myqcloud.com/img/20220728110032.jpg',
//     },
//     {
//       id: '47104525352781789449',
//       username: '万磊',
//       gender: 1,
//       user: {
//         detail: {
//           age: 22,
//         },
//       },
//       idCard: '47104525352781789449',
//       email: 's.xtxofe@digfgqsj.biz',
//       address: '内蒙古自治区 鄂尔多斯市',
//       createTime: '1972-11-06 06:37:08',
//       status: 0,
//       avatar: 'https://iamge-1259297738.cos.ap-chengdu.myqcloud.com/img/20220728110032.jpg',
//     },
//   ],
//   pageable: {
//     pageNum: 1,
//     pageSize: 10,
//     total: 2000,
//   },
//   searchParam: {
//     createTime: ['2022-11-12 11:35:00', '2022-12-12 11:35:00'],
//   },
//   searchInitParam: {
//     createTime: ['2022-11-12 11:35:00', '2022-12-12 11:35:00'],
//   },
//   totalParam: {
//     createTime: ['2022-11-12 11:35:00', '2022-12-12 11:35:00'],
//     pageNum: 1,
//     pageSize: 10,
//     type: 1,
//   },
// }
</script>
<style lang=""></style>
