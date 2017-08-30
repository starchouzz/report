<template>
  <div id="app">
    <router-view></router-view>
    <message></message>
  </div>
</template>

<script>
import message from './components/report/mssage'
export default {
  name: 'app',
  components: {message}
}
</script>

<style lang="scss">
@import './common/common.scss';
</style>
