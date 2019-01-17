<template>
    <div>
        <h1 class="red">
            {{text}}
            {{msg}}
        </h1>
        <p>
          <img src="./assets/img/bg.jpg"/>
        </p>
    </div>
</template>
<script>
  import _ from 'lodash'
  import $ from 'jquery'
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
      console.log($(".red").html())
    }
  }
</script>
<style lang="less">
    @import "assets/style/common.less";
    /*@import "assets/style/basic.css";*/
    .red{
        color: red;
    }
</style>
