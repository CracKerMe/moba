<template>
  <div>
    <h1>物品列表</h1>
    <el-container>
      <el-table :data="items">
        <el-table-column prop="_id" label="id" width="240">
        </el-table-column>
        <el-table-column prop="name" label="物品名称">
        </el-table-column>
        <el-table-column prop="icon" label="物品图标">
          <template slot-scope="scope">
            <el-image
              style="width: 100px; height: 100px"
              :src="scope.row.icon">
            </el-image>
          </template>
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="180">
          <template slot-scope="scope">
            <!-- <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button> -->
            <el-button type="primary" @click="$router.push(`/item/edit/${scope.row._id}`)" size="small">编辑</el-button>
            <el-button type="text" @click="remove(scope.row)" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-container>
  </div>
</template>
<script>
export default {
  name: 'ItemEdit',
  data () {
    return {
      items: []
    }
  },
  methods: {
    async fetch () {
      let res = await this.$http.get('rest/item')
      this.items = res.data
    },
    async remove (row) {
      this.$confirm(`是否要删除物品 『${row.name}』`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async () => {
        await this.$http.delete(`rest/item/${row._id}`)
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
        this.fetch()
      })
    }
  },
  created () {
    this.fetch()
  }
}
</script>
