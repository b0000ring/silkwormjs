function test2() {
  console.log('test2')
  let innerElement = document.createElement('div')
  innerElement.className = 'template'

  let outerElement = document.createElement('div')
  outerElement.appendChild(innerElement)
  
  return outerElement
}

export default test2