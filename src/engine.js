/**
 * @It must create dom object from componentsMap
 * @param {object} appMap object with components links
 * @param {object} componentsMap object with components
 * @return {object} prepared map of components
 */
function engine(appMap = {}, componentsMap = {}) {
  /**
   * @It must get over appMap and creator func
   * @return {undefined} nothing
   * @param {object} map application map config
   * @param {string} nodeId id of root component template
  */
  function selector(map, nodeId) {
    
  }

  /**
   * @It must check object that component returns
   * @param {object} component object
   * @return {undefined} nothing
  */
  function checkComponent(component) {

  }

  /**
   * @It must start over app map render cycle
   * @return {undefined} nothing
  */
  function render() {

  }

  if (componentsMap.root) {
    return render();
  } else {
    throw new Error('There is no root in app map');
  }
}

export default engine;
