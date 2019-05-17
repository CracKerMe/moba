<template>
  <div>
    <h1>{{id ? '编辑' : '新增'}}分类</h1>
    <el-form ref="form" :model="form" label-width="120px" @submit.prevent.native="save">
      <el-form-item label="上级分类">
        <el-select v-model="form.parent" placeholder="请选择上级分类">
          <el-option label="新闻" value="news"></el-option>
          <el-option label="视频" value="video"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="分类名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button style="success" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: 'CategoryEdit',
  props: {
    id: {}
  },
  data () {
    return {
      form: {}
    }
  },
  methods: {
    async save () {
      if(this.id) {
        await this.$http.put(`category/${this.id}`, this.form)
      } else {
        await this.$http.post('category', this.form)
      }
      this.$router.push('/category/list')
      this.$message({
        type: 'success',
        message: '保存成功'
      })
      console.log(this.form.name)
    },
    async fetch () {
      let res = await this.$http.get(`category/${this.id}`)
      this.form = res.data
    },
  },
  created() {
    if(this.id) {
      this.fetch()
    }
  },
}
</script>
