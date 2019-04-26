/**
 *@IT must store, update and compare virtual dom
 */
class VirtualDOM {
  /**
   * @IT constructor for VirtualDOM class
   */
  costructor() {
    this.VDOMobject = {};
  }
  /**
   * @IT must call comparator for current version of virtual DOM and previous
   */
  compare(newDOM) {
    // temporary
    return [{ parent: 'root', object: newDOM }]
  }
  /**
   * @IT must save new virtual DOM
   * @param {object} newDOM a new map of components
   */
  save(newDOM) {
    let differences = this.compare(newDOM)
    this.VDOMobject = newDOM
    return differences 
  }
}

export default new VirtualDOM()