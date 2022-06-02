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


export async function post({ request, params, platform }) {

    const org_slug = params.org_slug;
    const slug = params.slug || 'home';

    // "Fresh", because Cloudflare KV is not 
    const page = await platform.env.SDOS.get(`${org_slug}/page/${slug}`, {
        type: 'json'
    });
    page.content = request.formData().get('content');

    await platform.env.SDOS.put(`${org_slug}/page/${slug}`, JSON.stringify(page));

    return {
        body: { ok: true }
    }

}