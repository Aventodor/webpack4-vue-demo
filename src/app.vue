<template>
  <div>
    <h1 class="red">{{text }} this is main</h1>
    <!--<router-link to="/login">login</router-link>-->
    <!--<router-link to="/center">center</router-link>-->
    <!--<router-view/>-->
  </div>
</template>
<script>
import _ from 'lodash'
// import $ from 'jquery'

export default {
  computed: {
    msg () {
      return _.camelCase('Foo bar')
    }
  },
  data () {
    return {
      text: 'hello world'
    }
  },
  mounted () {
    console.log('app is mounted')
    // console.log($('.red').html())
  }
}
</script>
<style>
  /*@import "assets/style/common.less";*/
  /*@import "assets/style/basic.css";*/
  .red {
    color: red;
  }
</style>
