const fakeDb = {
    '': {
        slug: '',
        title: 'Socialdemócratas',
        content: 'Socialdemócratas de [EDITAR]\n==========\n\n*Editar esta página*',
        last_edit: { auth: { id: 342, nombre: 'Rodrigo González'}, date: '' }
    },
    'manual-de-elecciones': {
        slug: 'manual-de-elecciones',
        title: 'Manual de elecciones',
        content: '# Manual de elecciones de [[EDITAR]]\n\n*Editar esta pági<span style="color:red" class="text-xl">na</span>*',
        last_edit: { auth: { id: 342, nombre: 'Canela Calicó'}, date: '' }
    }
}


export async function get({ params, platform }) {

    const org_slug = params.org_slug;
    const slug = params.slug || 'home';

    const page = await platform.env.SDOS.get(`${org_slug}/page/${slug}`, {
        type: 'json'
    });

    if (page === null) {
        return {
            body: {
                no_found: `${org_slug}/page/${slug}`,
                ...fakeDb['']
            }
        };
    }

    return {
        body: { page }
    }

}