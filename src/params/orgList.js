/** @type {import('@sveltejs/kit').ParamMatcher} */
export function match(param) {
    console.log('orgList', param, typeof param);
    if(param === '') {
        return true;
    }
    if(['cl', 'ar', 'la'].indexOf(param) > -1) {
        return true
    }
    const paramSplit = param.split('/');
    if(paramSplit[0].length === 2) {
        return true;
    }
    return false;// /^\d+$/.test(param);
}