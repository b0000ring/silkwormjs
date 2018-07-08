/**
 * @It must create dom object from componentsMap
 * @param {object} componentsMap object with components links
 * @param {object} functionsMap object with functions map
 * @return {object} prepared map of components
 */
function engine(componentsMap = {}, functionsMap = {}) {
  /**
   * @It must get over appMap and creator func
   * @return {undefined} nothing
   * @param {object} map application map config
   * @param {string} nodeId id of root component template
  */
  function selector(map, nodeId) {
    // last component in branch
    if (typeof map === 'string') {
      creator(map, nodeId);
    // not last component in branch
    } else {
      for (let node in map) {
        if (typeof parseInt(node) === 'number' && !isNaN(parseInt(node))) {
          selector(map[node], nodeId);
        } else {
          let templateId = creator(node, nodeId);
          // controller logic
          if (typeof templateId === 'number') {
            selector(map[node][templateId], nodeId);
            return;
           // component logic
          } else {
            selector(map[node], templateId);
          }
        }
      }
    }
  }

  /**
   * @It must create root component and start over app map render cycle
   * @return {undefined} nothing
  */
  function render() {
    let currentId = null;
    let rootComponent = functionsMap['root']();
    const appDiv = document.getElementById('app');
    let template = rootComponent.querySelector('.template');
    currentId = generateId();
    template.id = currentId;
    appDiv.appendChild(rootComponent);

    selector(componentsMap.root, currentId);
  }

  if (componentsMap.root) {
    return render();
  } else {
    throw new Error('There is no root components map');
  }
}

export default engine;
