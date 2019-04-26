/**
 * @It must create dom object from componentsMap
 * @param {object} appMap object with components links
 * @param {object} componentsMap object with components
 * @return {object} prepared map of components
 */
function engine(appMap = {}, componentsMap = {}) {
  /**
   * @It must accumulate components and create virtualDOM object
   * @return {undefined} nothing
   * @param {object} map application map config
   * @param {string} nodeId id of root component template
  */
  function accumulate(map, nodeId) {
    const resultObject = createComponent(nodeId)
    // if true, this is controller
    if(typeof resultObject === 'number'){
      return getComponent(map[resultObject])
    } else {
      resultObject.content.forEach((item, i) => {
        if(item === '$CHILDREN$'){
          if(typeof map === 'string'){
            resultObject.content[i] = createComponent(map)
          } else {
            resultObject.content[i] = getComponent(map[nodeId])
          }
        }
      })
    }
    return resultObject
  }

  /**
   * @It must get component by its children type
   * @param {object} component object
   * @return {undefined} nothing
  */
  function getComponent(component) {
    if(typeof component === 'string'){
      return createComponent(component)
    } else if (Array.isArray(component)){
      return component.map((item) => {
        return getComponent(item)
      })
    } else if (typeof component === 'object') {
      for(let key in component){
        return accumulate(component[key], key)
      }
    }
  }

  function createComponent(id) {
    try{
      return componentsMap[id]()
    } catch (e) {
      throw new Error('Try to call nonexistent component ' + id)
    }
  }

  if (appMap.root) {
    return accumulate(appMap, 'root')
  } else {
    throw new Error('There is no root in app map');
  }
}

export default engine;
