import { createApp } from 'vue';
import App from './App.vue';
import VideoPlayer from 'vue-video-player';
// 引入 video.js 的样式文件
import 'video.js/dist/video-js.css';
createApp(App).use(VideoPlayer).mount('#app');
