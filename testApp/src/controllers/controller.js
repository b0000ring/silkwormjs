function controller() {
  console.log('controller')
  if(window.state){
    return 0
  }else{
    return 1
  }
}

export default controller