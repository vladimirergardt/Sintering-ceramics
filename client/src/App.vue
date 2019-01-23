<template>
  <div id="app">
    <router-view name="menu"></router-view>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  @import "assets/style/main.css";

</style>
