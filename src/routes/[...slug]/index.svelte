<script>
    import {  page } from '$app/stores';

    $: country = $page.params.slug ? $page.params.slug.split('/')[0] : ''
</script>

{#if country === 'cl'}
<img src="https://storage.googleapis.com/chile-travel-newsite-static-content/2021/08/parque-nacional-tres-cruces-ruta-atacama-2.jpg" 
class="w-full" />

<div class="container m-auto prose p-4">
    <h1>Somos SDCL</h1>

    <p>Socialdemócratas de Chile (SDCL), somos un movimiento político nuevo,
        formado por estudiantes y trabajadores de distintas clases sociales que aspiramos
        a una sociedad más igualitaria, abierta al progreso, amigable con el medio ambiente y
        sin renunciar al desarrollo y a la modernidad.
    </p>
    <p>
        Somos parte de una red de movimientos socialdemócratas en latinoamérica
    </p>

</div>
{:else}
<div class="container m-auto prose p-4">
    <a href="/ar">SDAR</a>
    <a href="/cl">SDCL</a>
    <a href="/pe">SDPE</a>
</div>
{/if}