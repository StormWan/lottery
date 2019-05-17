<template>
  <div id="app">
<!--    <keep-alive>-->
      <router-view/>
<!--    </keep-alive>-->
    <router-view name="tabbar"/>
  </div>
</template>

<style>
  html {
    touch-action: manipulation;
  }
</style>
