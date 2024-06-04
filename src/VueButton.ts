// MyPlugin.ts
import MyButton from './components/MyeButton.vue';
import { App } from 'vue';

export default {
  install: (app: App) => {
    // 添加全局組件
    app.component('my-button',MyButton);
  }
};
