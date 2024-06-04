// MyPlugin.ts
import MyHeader from './components/MyHeader.vue';
import { App } from 'vue';

export default {
  install: (app: App, options: any) => {
    // 添加全局組件
    app.component('my-header',MyHeader);
    // v-directive 內部指定
      // app.directive('font-size',(el, binding, vnode) =>{
      //   var size = 16
      //   switch (binding.arg){
      //     case "small":
      //       size = 12;
      //       break;
      //     case "large":
      //       size = 24;
      //       break;
      //     default:
      //       size = 16;
      //       break;
      //   }
      //   el.style.fontSize = size + "px";
      // });
    // v-directive 外部指定
    app.directive('font-size',(el, binding) =>{
      var size = 16
      switch (binding.arg){
        case "small":
          size = options.fontSize.small;
          break;
        case "large":
          size = options.fontSize.large;
          break;
        default:
          size = options.fontSize.medium;
          break;
      }
      el.style.fontSize = size + "px";
    });
    app.mixin({
      data() {
          return{
            featuredLink: "https://www.youtube.com/watch?v=ar1fJECxbyU"
          }
      },
      created(){
        console.log("featuredLink")
      }
    })
  }
};
