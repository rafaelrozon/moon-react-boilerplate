import { createTypes } from 'reduxsauce';

const prefix = 'todos/';

export default createTypes(`
    ADD
    TOGGLE
    CHANGE_FILTER
`, { prefix });
