export async function get({ params, platform }) {

    const org_slug = params.org_slug;
    const slug = params.slug || 'home';

    const item = await platform.env.SDOS.get(`${org_slug}/page/${slug}`, {
        type: 'json'
    });

    if (item === null) {
        return {
            status: 404
        };
    }

    return {
        body: { item }
    }

}


export async function post({ request, params, platform }) {

    const org_slug = params.org_slug;
    const slug = params.slug || 'home';

    // "Fresh", because Cloudflare KV is not 
    const item = await platform.env.SDOS.get(`${org_slug}/page/${slug}`, {
        type: 'json'
    });
    const fd = await request.formData();
    item.content = fd.get('content');
    item.last_edit.date = new Date().toString();

    await platform.env.SDOS.put(`${org_slug}/page/${slug}`, JSON.stringify(item));

    return {
        body: { ok: true, exitEditMode: true }
    }

}