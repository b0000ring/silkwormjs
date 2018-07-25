function test1() {
  console.log('test1')
  let innerElement = document.createElement('div')
  innerElement.className = 'template'

  let outerElement = document.createElement('div')
  outerElement.appendChild(innerElement)
  
  return outerElement
}

export default test1