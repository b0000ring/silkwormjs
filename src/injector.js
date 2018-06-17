/* eslint max-len: ["error", { "ignoreStrings": true, "ignoreComments": true }]*/

/**
 * @It must create dom from componentsMap
 * @param {object} componentsMap object with components links
 * @param {object} functionsMap object with functions map
 */
function injector(componentsMap = {}, functionsMap = {}) {
  /**
   * @return {string} randomly generated id
  *  @It return some random generated id
  */
  function generateId() {
    let text = '';
    const possible= 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 10; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }
  /**
   * @It must find and call component by node id, and inject it in dom
   * @return {string} id of template in this component for components, or number of next component for controllers
   * @param {string} node name of component and his function
   * @param {string} templateNodeId id of template where component will be rendered
  */
  function creator(node, templateNodeId) {
    // controllers logic
    let component = null;
    if (functionsMap[node]) {
      component = functionsMap[node]();
    } else {
      throw new Error(`There is no component '${node}' in components map`);
    }
    if (typeof component === 'number') {
      return component; // here are number of next component
    // components logic
    } else {
      let templateId = generateId();
      let template = component.querySelector('.template');
      const parent = document.getElementById(templateNodeId);
      if (template) {
        template.id = templateId;
      }
      parent.appendChild(component);
      return templateId;
    }
  }

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
    // not las component in branch
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
  function createRootComponent() {
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
   createRootComponent();
  } else {
    throw new Error('There is no root components map');
  }
}

export default injector;
