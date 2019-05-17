<template>
  <div>
    <h1>分类列表</h1>
    <el-container>
      <el-table :data="items">
        <el-table-column prop="_id" label="id" width="240">
        </el-table-column>
        <el-table-column prop="name" label="分类" width="160">
        </el-table-column>
        <el-table-column prop="parent" label="父级">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="100">
          <template slot-scope="scope">
            <!-- <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button> -->
            <el-button type="primary" @click="$router.push(`/category/edit/${scope.row._id}`)" size="small">编辑</el-button>
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
      let res = await this.$http.get('category')
      this.items = res.data
    }
  },
  created () {
    this.fetch()
  }
}
</script>
