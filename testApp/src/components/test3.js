function test3() {
  console.log('test3')
  let innerElement = document.createElement('div')
  innerElement.className = 'template'

  let outerElement = document.createElement('div')
  outerElement.appendChild(innerElement)
  
  return outerElement
}

export default test3