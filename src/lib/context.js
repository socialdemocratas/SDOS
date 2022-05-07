import { writable } from 'svelte/store';

export default writable({
    space: '/',
    group: {
        code: 'SDLA',
        name: 'Socialdemócratas de Latinoamérica'
    },
    app: 'wiki'
});