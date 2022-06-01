/** @type {import('@sveltejs/kit').ParamMatcher} */
export function match(param) {
    if(param === '') {
        return true;
    }
    if(param.indexOf('/') == -1) {
        return true;
    }
    return false;
}