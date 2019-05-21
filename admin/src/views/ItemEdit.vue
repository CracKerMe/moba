<template>
  <div>
    <h1>{{id ? '编辑' : '新增'}}物品</h1>
    <el-form ref="form" :model="form" label-width="120px" @submit.prevent.native="save">
      <!-- <el-form-item label="上级物品">
        <el-select v-model="form.parent" placeholder="请选择上级物品">
          <el-option v-for="parent in parentOptions" :key="parent._id" :label="parent.name" :value="parent._id"></el-option>
        </el-select>
      </el-form-item> -->
      <el-form-item label="物品名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="图标">
        <el-upload
          class="avatar-uploader"
          :action="$http.defaults.baseURL+'/upload'"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
            <img v-if="form.icon" :src="form.icon" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button style="success" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: 'ItemEdit',
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
      if (this.id) {
        await this.$http.put(`rest/item/${this.id}`, this.form)
      } else {
        await this.$http.post('rest/item', this.form)
      }
      this.$router.push('/item/list')
      this.$message({
        type: 'success',
        message: '保存成功'
      })
    },
    async fetch () {
      let res = await this.$http.get(`rest/item/${this.id}`)
      this.form = res.data
    },
    handleAvatarSuccess (res) {
      console.log(res)
      this.$set(this.form, 'icon', res.url)
      // this.form.icon = res.url
    },
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    }
  },
  created () {
    if (this.id) {
      this.fetch()
    }
  }
}
</script>
<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  display: block;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
