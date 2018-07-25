function root() {
  console.log('root')
  let innerElement = document.createElement('div')
  innerElement.className = 'template'

  let outerElement = document.createElement('div')
  outerElement.appendChild(innerElement)
  
  return outerElement
}

export default root