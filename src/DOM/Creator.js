/* eslint max-len: ["error", { "ignoreStrings": true, "ignoreComments": true }]*/

/**
 *
 */
export default class Creator {
 /**
   * @It must find and call component by node id, and inject it in dom
   * @return {string} id of template in this component for components, or number of next component for controllers
   * @param {string} node name of component and his function
   * @param {string} templateNodeId id of template where component will be rendered
  */
  creator(node, templateNodeId) {
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
}
