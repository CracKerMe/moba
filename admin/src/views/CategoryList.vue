<template>
  <div>
    <h1>分类列表</h1>
    <el-container>
      <el-table :data="items">
        <el-table-column prop="_id" label="id" width="240">
        </el-table-column>
        <el-table-column prop="parent.name" label="上级分类" width="160">
        </el-table-column>
        <el-table-column prop="name" label="分类">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="180">
          <template slot-scope="scope">
            <!-- <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button> -->
            <el-button type="primary" @click="$router.push(`/category/edit/${scope.row._id}`)" size="small">编辑</el-button>
            <el-button type="text" @click="remove(scope.row)" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-container>
  </div>
</template>
<script>
export default {
  name: 'CategoryEdit',
  data () {
    return {
      items: []
    }
  },
  methods: {
    async fetch () {
      let res = await this.$http.get('rest/category')
      this.items = res.data
    },
    async remove (row) {
      this.$confirm(`是否要删除分类 『${row.name}』`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async () => {
        await this.$http.delete(`rest/category/${row._id}`)
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
