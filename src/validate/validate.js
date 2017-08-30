import Vue from 'vue'
import VeeValidate, {
  Validator
} from 'vee-validate'
import zhCN from 'vee-validate/dist/locale/zh_CN'
import {
  limitMaxLength,
  getLength
} from '../utils/authService'

const dictionary = {
  zh_CN: {
    messages: {
      required: (field) => '请输入' + field
    },
    attributes: {
      sponsorName: '赞助商联系人姓名',
      advert: '广告名称',
      phone: '手机号',
      companyName: '公司名称',
      id: '选手ID'
    }
  }
}
Validator.extend('name', {
  messages: {
    zh_CN: field => '名称请输入中文'
  },
  validate: value => {
    return /[\u4e00-\u9fa5]/.test(value)
  }
})
Validator.extend('phone', {
  messages: {
    zh_CN: field => '手机号格式不正确'
  },
  validate: value => {
    return value.length === 11 && /^1[34578]\d{9}$/.test(value)
  }
})
Validator.extend('advert', {
  messages: {
    zh_CN: field => 'ID请输入选手6位ID号'
  },
  validate: value => {
    // if (getLength(value) > 8) {
    //   return value = limitMaxLength(value, 8)
    // }
  }
})
Validator.addLocale(zhCN)
Validator.updateDictionary(dictionary)

Vue.use(VeeValidate, {
  locale: 'zh_CN'
})
