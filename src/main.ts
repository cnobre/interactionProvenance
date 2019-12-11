import { Greeter } from './greeter';
import './styles/styles.css';
import { initProvenance } from '@visdesignlab/provenance-lib-core/lib';

const g = new Greeter('Juri');
g.greet();

initProvenance();
document.querySelector('body').innerHTML = 'Nobre';
