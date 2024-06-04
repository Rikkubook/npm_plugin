  import MyeButton from './components/MyeButton.vue'
  import MyHeader from './components/MyHeader.vue'
  
  const Components = [
  MyeButton, MyHeader
  ]
  const install = function (App: any) {
  Components.forEach(component => {
    App.component(component.name, component)
  })
  }
  export default {
  install
  }