const fakeDb = {
    'inicio': {
        slug: 'inicio',
        title: 'Socialdemócratas',
        content: 'Socialdemócratas de [EDITAR]\n==========\n\n*Editar esta página*',
        last_edit: { auth: { id: 342, nombre: 'Rodrigo González'}, date: '' }
    },
    'manual-de-elecciones': {
        slug: 'manual-de-elecciones',
        title: 'Manual de elecciones',
        content: '# Manual de elecciones de [[EDITAR]]\n\n*Editar esta pági<span style="color:red" class="text-xl">na</span>*',
        last_edit: { auth: { id: 342, nombre: 'Carla Sepu'}, date: '' }
    }
}


export async function get({ params }) {

    const slug = params.slug || 'inicio';
    console.log('params', params)

    if(!(slug in fakeDb)) {
        return {
            status: 404
        };
    }

    const page = fakeDb[slug]

    return {
        body: { page }
    }

}