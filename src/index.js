  import MyButton from './components/MyButton.vue'
  import MyHeader from './components/MyHeader.vue'
  import MyCarousel from './components/MyCarousel.vue'

  export { MyButton, MyHeader, MyCarousel } 

  const Components = [
    MyButton, MyHeader, MyCarousel
  ]
  const install = function (App) {
  Components.forEach(component => {
    App.component(component.name, component)
  })
  }
  export default {
  install
  }