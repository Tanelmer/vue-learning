<template>
  <div class="tab">
    <h1>{{ msg }}</h1>
    <h2>Tab components - tanelmer</h2>
    <p>1.vue tab组件</p>
  	<p>2.vue路由相关</p>
  </div>
</template>

<script>
export default {
  name: 'tab',
  data () {
    return {
      msg: '首次尝试用vue写tab组件'
    }
  }
}
</script>