import virtualDOM from './VirtualDOM'

/**
 * @It must start real DOM update cycle
*/
function update(updateable) {
  updateable.forEach((item) => {
    inject(item.parent, convert(item.object))
  })
}

/**
 * @IT converts js components objects to html objects
 */
function convert(object) {
  // WRONG LOGIC!!!
  console.log(object)
  let parent = document.createElement(object.type)
  if(Array.isArray(object.content)){
    object.content.forEach((item) => {
      if(typeof item === 'object'){
        parent.innerHTML = convert(item)
      } else {
        parent.innerHTML = item
      }
    })
  } else {
    parent.innerHTML = object.content
  }
  return parent
}

/**
 * @IT must inject virtual DOM nodes to real DOM
 */
function inject(nodeId, children) {
  let parent = document.getElementById(nodeId)
  console.log(children)
  parent.innerHTML = children 
}

/**
 * @IT init DOM render cycle
 */
export default function renderDOM(newVirtualDOM) {
  console.log(virtualDOM)
  let differences = virtualDOM.save(newVirtualDOM)
  update(differences)
}

