function root() {
  return {
    type: 'div',
    attributes: {
      class: 'root',
    },
    content: [
      '$CHILDREN$'	
    ]
  }
}
  
export default root