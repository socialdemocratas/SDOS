<script>
    import {  page } from '$app/stores';

    $: country = $page.params.slug ? $page.params.slug.split('/')[0] : ''
</script>


<img src="https://storage.googleapis.com/chile-travel-newsite-static-content/2021/08/parque-nacional-tres-cruces-ruta-atacama-2.jpg" 
class="w-full" />

<div class="container m-auto prose p-4">
    <h1 class="font-semibold">Somos las y los socialdemócratas de Chile</h1>

    <p>Somos un movimiento político nuevo,
        formado por estudiantes, trabajadores e independientes de distintas clases sociales que aspiramos
        a una sociedad más igualitaria, abierta al progreso, amigable con el medio ambiente y
        sin renunciar al desarrollo y a la modernidad.
    </p>
    <p>
        Somos parte de una red de movimientos socialdemócratas en latinoamérica
    </p>

</div>