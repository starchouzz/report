import {
  addLiveAdrecord,
  loginGroup,
  gadrecord,
  updtAdRecord
} from './resource'

export default {
  addLiveAdrecord: (reportInfo) => {
    return addLiveAdrecord.save({
      loginId: reportInfo.loginId,
      userCode: reportInfo.userCode,
      realName: reportInfo.realName,
      phone: reportInfo.phone,
      comName: reportInfo.comName,
      comLicence: reportInfo.comLicence,
      adArea: reportInfo.adArea
    })
  },
  loginGroup: (loginInfo) => {
    return loginGroup.save({
      accountNo: loginInfo.accountNo,
      pwd: loginInfo.pwd,
      rolegroup: loginInfo.rolegroup
    })
  },
  gadrecord: (loginId) => {
    return gadrecord.get({
      loginId: loginId
    })
  },
  updtAdRecord: (recordInfo) => {
    return updtAdRecord.save({
      id: recordInfo.id,
      adStatus: recordInfo.adStatus
    })
  }
}
