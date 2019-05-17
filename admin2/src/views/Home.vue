<template>
  <el-form ref="form" :model="form" label-width="80px" @submit.prevent.native="save()">
      <el-form-item label="上级分类">
        <el-select v-model="form.region" placeholder="请选择上级分类">
          <el-option label="新闻" value="shanghai"></el-option>
          <el-option label="视频" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="分类名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button style="success" native-type="submit">提交</el-button>
      </el-form-item>
    </el-form>
</template>
<script>
export default {
  name: 'home',
  data () {
    return {
      form: {}
    }
  }
}
</script>
