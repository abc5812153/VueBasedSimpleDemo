import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 阻止 vue 在启动时生成生产提示
Vue.config.productionTip = false

/*
 新建一个vue实例并挂载在id是app的标签上。这里也将vue router（下面的“router”）和vuex（下面的“store”）注入到这个vue实例中
 */
new Vue({
  router,
  store,
  // 此处是template的高级写法，不用理会它的原理，只要知道它是将“App.vue”这个单文件注入vue实例就行
  render: h => h(App)
}).$mount('#app')
