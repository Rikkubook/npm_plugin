  import MyButton from './components/MyButton.vue'
  import MyHeader from './components/MyHeader.vue'
  
  export { MyButton, MyHeader } 

  const Components = [
    MyButton, MyHeader
  ]
  const install = function (App) {
  Components.forEach(component => {
    App.component(component.name, component)
  })
  }
  export default {
  install
  }