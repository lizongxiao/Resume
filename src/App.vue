<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="丢掉幻想，准备斗争" /> -->
  <!-- <MyText /> -->
  <div>点击查看视频</div>
  <!-- <video src="@/assets/video/Ramadan 3D Animations_free.mp4" controls></video> -->
  <MyVideo />
  <SpeedInsights />
</template>

<script setup>
import MyVideo from "./components/MyVideo.vue";
import { SpeedInsights } from "@vercel/speed-insights/vue";
</script>
<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
