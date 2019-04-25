function root() {
  // console.log('root')
  return {
    type: 'div',
    class: 'root',
    content: [
        '$CHILDREN$'	
    ]
  }
}
  
export default root