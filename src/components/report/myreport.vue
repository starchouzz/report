<template>
<div class="myreport">
  <div v-for="item in reportList" class="list">
    <div :class="{success: item.adStatus === 0, error: item.adStatus === 2, error2: item.adStatus === 3, effective: item.adStatus === 6}" class="label-item title">
      <div>
        <span>{{item.adStatus === 0 ? '提交成功' : item.adStatus === 2 ? '已取消' : item.adStatus === 3 ? '已失效' : '报备生效'}}</span>
        <span class="subtitle" v-if="item.adStatus === 0">({{getEffectiveTime(item.effectiveTime)}}天后失效)</span>
      </div>
      <div @click="cancelRecord(item.id)" v-if="item.adStatus === 0" class="cancel">取消</div>
    </div>
    <div class="label-item">赞助商联系人姓名：<span>{{item.realName}}</span></div>
    <div class="label-item">赞助商联系人电话：<span>{{item.phone}}</span></div>
    <div class="label-item">广告名称：<span>{{item.comName}}</span></div>
    <div class="label-item">公司名称：<span>{{item.comLicence}}</span></div>
    <div class="label-item">选手ID：<span>{{item.userCode}}</span></div>
    <div class="label-item">广告位置：<span>{{item.adArea}}</span></div>
    <div class="label-item">提交时间：<span>{{item.createTime}}</span></div>
  </div>
</div>
</template>
<script>
import {mapState, mapActions} from 'vuex'
import {
  getStorage
} from '../../utils/authService'
export default {
  data() {
    return {
      list: [{
        state: '提交成功',
        name: '张三',
        phone: '13372783212',
        unit: '哇哈哈',
        company: '杭州哇哈哈集团',
        id: '12312',
        position: '右边广告位1',
        submitTime: '2017-09-03 12:21:21'
      }]
    }
  },
  computed: {
    ...mapState({
      reportList: ({myreport}) => myreport.reportList
    })
  },
  methods: {
    ...mapActions([
      'gadrecord',
      'updtAdRecord'
    ]),
    cancelRecord(id) {
      this.$confirm('是否取消报备?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
        // type: 'warning'
      }).then(() => this.updtAdRecord({id: id, adStatus: 2}))
    },
    getEffectiveTime(date) {
      var oDate = new Date()
      var nY = oDate.getFullYear()
      var nM = oDate.getMonth()
      var nD = oDate.getDate()
      var newDate = new Date(nY, nM, nD, 0, 0, 0)
      date = date.split(' ')[0].split('-')
      var lastDate = new Date(date[0], (date[1] - 1), date[2], 0, 0, 0)
      var result = ''
      if (newDate.getTime() > lastDate.getTime()) {
        result = (newDate.getTime() - lastDate.getTime()) / 86400000
      } else {
        result = Math.abs(newDate.getTime() - lastDate.getTime()) / 86400000
      }
      return result
    }
  },
  mounted() {
    this.gadrecord({
      // loginId: getStorage('loginId')
      loginId: JSON.parse(getStorage('loginInfo')).accountNo
    })
  }
}
</script>
<style lang="scss">
@import '../../common/util.scss';
@import './scss/myreport.scss';
</style>
