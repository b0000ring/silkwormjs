import silkworm from '../../dist/silkworm';
import appMap from './appMap'
import componentsMap from './componentsMap'
window.state = true
silkworm(appMap, componentsMap).render()
