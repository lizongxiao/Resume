<template>
  <div>
    <!-- video-player 组件用于展示视频 -->
    <video-player
      class="video-player vjs-custom-skin"
      :options="playerOptions"
      @play="handlePlay"
      @pause="handlePause"
    />
  </div>
</template>

<script setup>
import mp4src from '@/assets/video/Ramadan 3D Animations_free.mp4';

const playerOptions = {
  autoplay: false, // 不自动播放
  controls: true, // 显示控制条
  preload: 'auto',
  aspectRatio: '16:9',
  sources: [
    {
      type: 'video/mp4',
      src: mp4src, // 替换为你的视频文件路径,
    },
  ],
};

const handlePlay = () => {
  console.log('视频开始！😊');
};

const handlePause = () => {
  console.log('视频暂停。');
};
</script>

<style scoped>
.video-player {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}
</style>
