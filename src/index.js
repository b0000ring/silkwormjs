import engine from './engine';
import renderDOM from './DOM/DOM';

/**
 * @IT starts the library
 * @param {object} appMap object with components links
 * @param {object} functionsMap object with functions map
 * @return {object} object with library open functions
 */
function silkworm(appMap, functionsMap) {
  /**
   * @IT init render cycle
   */
  function render() {
    /* here must be some kind of virtual dom complete object */
    const components = engine(appMap, functionsMap);
    renderDOM(components);
  }

  return {
    render: render,
  };
};

export default silkworm;

