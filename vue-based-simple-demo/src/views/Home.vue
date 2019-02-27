<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- 下面就是一个组件 -->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Counter/>
  </div>
</template>

<script>
  // 下面的“@”是一个别名，表示src目录
  import HelloWorld from '@/components/HelloWorld.vue'
  import Counter from '@/components/Counter.vue'

  export default {
    name: 'home',
    components: {
      HelloWorld,
      Counter
    }
  }
</script>
