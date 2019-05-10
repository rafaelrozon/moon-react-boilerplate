import { createTypes } from 'reduxsauce';
import { NS } from './constants';

const prefix = `${NS}/`;

export default createTypes(`
    ADD
    TOGGLE
    CHANGE_FILTER
`, { prefix });
