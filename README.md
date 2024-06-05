# 製作 vue3+vite 元件
1. 製作元件
2. 設定主輸出檔案
3. 設定 package.json 編譯檔
4. 設定 vite.config 編譯檔
5. 打包
---
1. 進入 dist
2. `npm init -y`
3. 配置打包的plugins訊息
4. npm adduser (確定登入 npm 帳號)
5. npm publish
6. [rikku-plugin](https://www.npmjs.com/package/rikku-plugin)

# 使用
## vite
1. main.js

```js
import { createApp } from 'vue'
import './style.css'
import TestBtnUI from 'test-btn-ui'
import RikkuUI from 'rikku-plugin'
import App from './App.vue'

createApp(App).use(TestBtnUI).use(RikkuUI).mount('#app')
```
2. App.vue
```js
  <MyButton>rikkuboon</MyButton>
  <MyHeader>
    <template #title >text</template>
  </MyHeader>
```

## nuxt
1. plugins/rikku-ui.js
```js
import { defineNuxtPlugin } from '#app'
import RikkuUI from 'rikku-plugin'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(RikkuUI)
})
```

2. nuxt.config.ts
```js
export default defineNuxtConfig({
  plugins: [
    '~/plugins/rikku-ui.js'
  ]
})

```