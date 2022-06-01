export function get(event) {
    
    const slug = event.params.slug

    return {
        body: {
            text: 'Hola'
        }
    };
}