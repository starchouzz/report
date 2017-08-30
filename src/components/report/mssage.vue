<template>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  data() {
    return {
    }
  },
  computed: {
    ...mapState({
      msg: ({message}) => message.message,
      confirm: ({message}) => message.confirm
    })
  },
  watch: {
    'msg': {
      handler: function(val, oldVal) {
        if (val.content !== '') {
          this.openMessage(val.content, val.type)
        }
      },
      deep: true
    },
    'confirm': {
      handler: function(val, oldVal) {
        if (val.content !== '') {
          this.openConfirm(val.content, val.title, val.handle)
        }
      },
      deep: true
    }
  },
  methods: {
    openConfirm(content, handle) {
      this.$confirm(content, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      }).then(() => {
        handle()
      }).catch(() => {
        return
      })
    },
    openMessage(content, type) {
      this.$message({
        message: content,
        showClose: true,
        type
      })
    }
  }
}
</script>
<style lang="css" scoped>
</style>
