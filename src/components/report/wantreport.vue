<template>
  <div class="wantreport">
    <div class="content">
      <div class="label-item">
        赞助商联系人姓名：<input name="sponsorName" v-validate="'required|name'" type="text" v-model="payload.realName" placeholder="请输入">
        <span v-show="errors.has('sponsorName')" class="help is-danger">{{ errors.first('sponsorName') }}</span>
      </div>
      <div class="label-item">
        赞助商联系人电话：<input name="phone" v-validate="'required|phone'" type="number" v-model="payload.phone" placeholder="请输入">
        <span v-show="errors.has('phone')" class="help is-danger">{{ errors.first('phone') }}</span>
      </div>
      <div class="label-item">
        广告名称：<input name="advert" v-validate="'required'" @input="onInput" type="text" v-model="payload.comName" placeholder="广告名称会展示在直播间">
        <span v-show="errors.has('advert')" class="help is-danger">{{ errors.first('advert') }}</span>
      </div>
      <div class="label-item">
        公司名称：<input name="companyName" v-validate="'required'" type="text" v-model="payload.comLicence" placeholder="赞助商的营业执照名称">
        <span v-show="errors.has('companyName')" class="help is-danger">{{ errors.first('companyName') }}</span>
      </div>
      <div class="label-item">
        选手ID：<input name="id" v-validate="'required|numeric|max:6|min:6'" type="number" v-model="payload.userCode" placeholder="请输入要冠名的选手ID">
        <span v-show="errors.has('id')" class="help is-danger">{{ errors.first('id') }}</span>
      </div>
    </div>
    <div class="color-bar"></div>
    <div class="position">
      <div class="title">广告位置：</div>
      <div class="position-contain">
        <div v-for="(item,index) in positionList" @click="changeIndex(item.id)" :class="{active: payload.adArea === item.id}" class="position-item">{{item.name}}</div>
      </div>
    </div>
    <div class="footer">
      <div class="tel">客服热线：400-009-8003</div>
      <button @click="submitForm" class="submit">提交报备</button>
    </div>
    <router-link class="nav" to="myreport"></router-link>
  </div>
</template>
<script>
import {mapActions} from 'vuex'
import { Validator } from 'vee-validate'
import {
  getStorage
} from '../../utils/authService'
export default {
  data() {
    return {
      payload: {
        // loginId: getStorage('loginId'),
        loginId: JSON.parse(getStorage('loginInfo')).accountNo,
        realName: '',
        phone: '',
        comName: '',
        comLicence: '',
        userCode: undefined,
        adArea: undefined
      },
      // formList: [{name: '赞助商联系人姓名：', model: 'name', type: 'text', placeholder: '请输入'},
      // {name: '赞助商联系人电话：', model: 'phone', type: 'number', placeholder: '请输入'},
      // {name: '广告名称：', model: 'content', type: 'text', placeholder: '购买广告要输入的内容'},
      // {name: '公司名称：', model: 'company', type: 'text', placeholder: '赞助商的营业执照名称'},
      // {name: '选手ID：', model: 'id', type: 'number', placeholder: '请输入要冠名的选手ID'}],
      positionList: [{
        id: '1',
        name: '右边广告位1'
      }, {
        id: '2',
        name: '右边广告位2'
      }, {
        id: '3',
        name: '右边广告位3'
      }, {
        id: '4',
        name: '右边广告位4'
      }, {
        id: '5',
        name: '冠名广告位'
      }]
    }
  },
  mounted() {
  },
  methods: {
    ...mapActions([
      'addLiveAdrecord',
      'openMessage'
    ]),
    changeIndex(index) {
      this.payload.adArea = index
    },
    submitForm(store) {
      console.log(this.payload)
      this.$validator.validateAll().then(result => {
        if (result) {
          this.addLiveAdrecord(this.payload)
        } else {
          this.openMessage(result)
        }
      }).catch(() => {
        
      })
    },
    getLength(str) {
      return str.replace(/[^ -~]/g, 'AA').length
    },
    limitMaxLength(str, maxLength) {
      var result = []
      for (var i = 0; i < maxLength; i++) {
        var char = str[i]
        if (/[^ -~]/.test(char)) maxLength--
        result.push(char)
      }
      return result.join('')
    },
    onInput() {
      if (this.getLength(this.payload.comName) > 8) {
        this.payload.comName = this.limitMaxLength(this.payload.comName, 8)
      }
    }
  }
}
</script>
<style lang="scss">
@import '../../common/util.scss';
@import './scss/wantreport.scss';
</style>
