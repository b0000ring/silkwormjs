import Comparator from './Comparator';
import Injector from './Injector';
/**
 *@IT must store, update and compare virtual dom
 */
export default class VirtualDOM {
  /**
   * @IT constructor for VirtualDOM class
   */
  costructor() {
    this.virtualDOM = null;
    this.comparator = new Comparator();
    this.injector = new Injector();
  }
  /**
   * @IT must call comparator for current version of virtual DOM and previous
   */
  compare() {

  }
  /**
   * @IT must save new virtual DOM
   * @param {object} newDOM a new map of components
   */
  save(newDOM) {

  }
}
