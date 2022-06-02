import { derived } from 'svelte/store';
import { page } from '$app/stores';

import SDCL_Logo from '../assets/logo.svg'
import SDLA_Logo from '../assets/sdla_1.png'

interface CountryData {
    code:string
    org_slug:string
    title:string
    lang:string[],
    logo: string
}
const countries:{[org_slug:string]: CountryData} = {
    ar: {
        code: 'SDAR',
        org_slug: 'ar',
        title: 'Socialdemócratas, Argentina',
        lang: ['es-ar', 'pt', 'en'],
        logo: SDLA_Logo
    },
    bo: {
        code: 'SDBO',
        org_slug: 'bo',
        title: 'Socialdemócratas, Bolivia',
        lang: ['es', 'pt', 'en'],
        logo: SDLA_Logo
    },
    br: {
        code: 'SDBR',
        org_slug: 'br',
        title: 'Socialdemocratas, Brasil',
        lang: ['pt', 'es', 'en'],
        logo: SDLA_Logo
    },
    cl: {
        code: 'SDCL',
        org_slug: 'cl',
        title: 'Socialdemócratas, Chile',
        lang: ['es', 'pt', 'en'],
        logo: SDCL_Logo
    },
    co: {
        code: 'SDCO',
        org_slug: 'co',
        title: 'Socialdemócratas, Colombia',
        lang: ['es', 'pt', 'en'],
        logo: SDLA_Logo
    },
    cr: {
        code: 'SDCR',
        org_slug: 'cr',
        title: 'Socialdemócratas, Costa Rica',
        lang: ['es', 'pt', 'en'],
        logo: SDLA_Logo
    },
    cu: {
        code: 'SDCU',
        org_slug: 'cu',
        title: 'Socialdemócratas, Cuba',
        lang: ['es', 'pt', 'en'],
        logo: SDLA_Logo
    },
    do: {
        code: 'SDDO',
        org_slug: 'do',
        title: 'Socialdemócratas, República Dominicana',
        lang: ['es', 'pt', 'en'],
        logo: SDLA_Logo
    },
    ec: {
        code: 'SDEC',
        org_slug: 'ec',
        title: 'Socialdemócratas, Ecuador',
        lang: ['es', 'pt', 'en'],
        logo: SDLA_Logo
    },
    gt: {
        code: 'SDGT',
        org_slug: 'gt',
        title: 'Socialdemócratas, Guatemala',
        lang: ['es', 'pt', 'en'],
        logo: SDLA_Logo
    },
    hn: {
        code: 'SDHN',
        org_slug: 'hn',
        title: 'Socialdemócratas, Honduras',
        lang: ['es', 'pt', 'en'],
        logo: SDLA_Logo
    },
    ht: {
        code: 'SDHT',
        org_slug: 'ht',
        title: 'Sosyal Demokrat, Ayisyen',
        lang: ['ht', 'es', 'pt', 'en'],
        logo: SDLA_Logo
    },
    mx: {
        code: 'SDMX',
        org_slug: 'mx',
        title: 'Socialdemócratas, México',
        lang: ['es', 'pt', 'en'],
        logo: SDLA_Logo
    },
    ni: {
        code: 'SDNI',
        org_slug: 'ni',
        title: 'Socialdemócratas, Nicaragua',
        lang: ['es', 'pt', 'en'],
        logo: SDLA_Logo
    },
    pa: {
        code: 'SDPA',
        org_slug: 'pa',
        title: 'Socialdemócratas, Panamá',
        lang: ['es', 'pt', 'en'],
        logo: SDLA_Logo
    },
    pe: {
        code: 'SDPE',
        org_slug: 'pe',
        title: 'Socialdemócratas, Perú',
        lang: ['es', 'pt', 'en'],
        logo: SDLA_Logo
    },
    py: {
        code: 'SDPY',
        org_slug: 'py',
        title: 'Socialdemócratas, Paraguay',
        lang: ['es', 'pt', 'en'],
        logo: SDLA_Logo
    },
    sv: {
        code: 'SDSV',
        org_slug: 'sv',
        title: 'Socialdemócratas, Salvador',
        lang: ['es', 'pt', 'en'],
        logo: SDLA_Logo
    },
    uy: {
        code: 'SDUY',
        org_slug: 'uy',
        title: 'Socialdemócratas, Uruguay',
        lang: ['es', 'pt', 'en'],
        logo: SDLA_Logo
    },
    la: {
        code: 'SDLA',
        org_slug: 'la',
        title: 'Socialdemócratas de Latinoamérica',
        lang: ['es', 'pt', 'en', 'fr'],
        logo: SDLA_Logo
    },
};


export const orgCountry = derived(page, ($page): CountryData | null => {
    const pathnameSplit = $page.url.pathname.split('/');
    if(pathnameSplit.length === 1) return null;
    // for example: cl:r2, cl, cl:comunal_antofagasta
    const slugSplit = pathnameSplit[1].split(':');
    if(slugSplit[0] in countries) {
        return countries[slugSplit[0]]
    }
    return null;
});