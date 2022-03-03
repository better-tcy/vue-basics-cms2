<template>
  <div
    class="whole"
    :style="{
      backgroundImage: `url(${loginBgImg})`,
      backgroundColor: loginBgColor
    }"
  >
    <div class="card_content">
      <div class="title">Hello Betteryourself</div>
      <div class="form">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="130px">
          <el-form-item label="用户名:" prop="username">
            <el-input v-model="ruleForm.username"></el-input>
          </el-form-item>
          <el-form-item label="密码:" prop="password">
            <el-input v-model="ruleForm.password"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <div class="btn" @click="toFrameWork('ruleForm')">登录</div>
    </div>
  </div>
</template>

<script>
import menuData from '@/assets/data/menuData'

import { mapMutations } from 'vuex'
import { SET_MENU_DATA } from '@/store/types'

export default {
  name: 'login',
  inject: ['loginBgImg', 'loginBgColor'],
  components: {},

  data() {
    return {
      ruleForm: {
        username: '',
        password: ''
      },

      rules: {
        username: [{ required: true, message: '请输入账号', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      }
    }
  },

  created() {},

  computed: {},

  methods: {
    ...mapMutations({
      SET_MENU_DATA
    }),

    // 登录(前端检验)
    toFrameWork(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.toWhole()
        } else {
          return false
        }
      })
    },

    // 前端验证完毕 请求后端登录
    toWhole() {
      this.$myMessage({
        message: '登录成功',
        type: 'success'
      })

      localStorage.setItem('token', '后端返回的token')

      // 用户对应的菜单 存储到vuex (此时使用的是模拟数据,ps:真正的菜单数据 是根据登录的用户 后台返回的)
      this.SET_MENU_DATA(menuData)

      this.$router.replace('/content')
    }
  }
}
</script>

<style scoped>
.el-input {
  width: 362px;
}
.whole {
  height: 100vh;
  width: 100vw;

  background-size: cover;

  display: flex;
  justify-content: center;
  align-items: center;
}

.card_content {
  width: 600px;
  height: 300px;

  padding: 36px;

  border-radius: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  font-weight: bold;
  font-size: 20px;
}

.form {
  width: 100%;
  margin-top: 36px;
}

.btn {
  margin-top: 10px;

  width: 300px;
  height: 50px;
  background-color: #000000;

  text-align: center;
  line-height: 50px;
  color: #ffffff;

  border-radius: 10px;
}
</style>
