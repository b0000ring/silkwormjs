function controller() {
  console.log('controller')
  if(window.state){
    return 1
  }else{
    return 2
  }
}

export default controller