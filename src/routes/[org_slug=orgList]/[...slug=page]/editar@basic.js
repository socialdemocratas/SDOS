export async function get({ params, platform }) {

    const org_slug = params.org_slug;
    const slug = params.slug || 'home';

    const page = await platform.env.SDOS.get(`${org_slug}/page/${slug}`, {
        type: 'json'
    });

    if (page === null) {
        return {
            status: 404
        };
    }

    return {
        body: { page }
    }

}


export async function post({ params, platform }) {

    const org_slug = params.org_slug;
    const slug = params.slug || 'home';

    // "Fresh", because Cloudflare KV is not 
    const pageFresh = await platform.env.SDOS.get(`${org_slug}/page/${slug}`, {
        type: 'json'
    });
    const pageToSave = Object.assign({}, pageFresh, params.content)

    await platform.env.SDOS.put(`${org_slug}/page/${slug}`, JSON.stringify(pageToSave));

    return {
        body: { ok: true }
    }

}