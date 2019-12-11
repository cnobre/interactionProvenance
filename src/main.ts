import { Greeter } from './greeter';
import './styles/styles.css';
import { initProvenance } from '@visdesignlab/provenance-lib-core';

const g = new Greeter('Juri');
g.greet();

// initProvenance();
document.querySelector('body').innerHTML = 'cnobre';
