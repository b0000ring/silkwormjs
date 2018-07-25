function test4() {
  console.log('test4')
  let innerElement = document.createElement('button')
  innerElement.onclick = function() {
    window.state = !window.state
    window.render()
  }
  
  innerElement.innerHTML = 'Change status'

  let outerElement = document.createElement('div')
  outerElement.appendChild(innerElement)
  
  return outerElement
}

export default test4