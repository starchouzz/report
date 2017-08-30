<template>
  <div class="login">
    <img class="banner" src="../../assets/report-login.png">
    <div class="form">
      <el-input class="username" placeholder="请输入登录账号" v-model="loginInfo.accountNo">
        <div slot="prepend" class="username-pre"></div>
      </el-input>
      <el-input class="password" placeholder="请输入登录密码" v-model="loginInfo.pwd" type="password">
        <div slot="prepend" class="password-pre"></div>
      </el-input>
      <el-button @click="login">登  录</el-button>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import {
  getStorage
} from '../../utils/authService.js'
export default {
  data() {
    return {
      loginInfo: {
        accountNo: '',
        pwd: '',
        rolegroup: 2
      }
    }
  },
  methods: {
    ...mapActions([
      'loginGroup'
    ]),
    login() {
      this.loginGroup(this.loginInfo)
    }
  },
  mounted() {
  }
}
</script>
<style lang="scss">
@import '../../common/util.scss';
@import './scss/login.scss';
</style>
