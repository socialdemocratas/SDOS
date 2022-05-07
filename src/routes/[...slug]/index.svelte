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

    <div class="bg-yellow-100 m-auto mb-5 w-3/4 p-4">
        <h1 class="leading-relaxed font-medium text-lg">Página en construcción, por favor, considerar que todo lo que se expone está en desarrollo.</h1>
        <p class="leading-normal">En ocasiones agregaré unos textos e imagenes para ir viendo como se ve, no considerar esos textos hasta que se elimine este cartel por favor.</p>
        <small>07-05-2022</small><br>
        <small><a href="https://github.com/socialdemocratas/SDOS">CC-BY-4.0, Github</a></small>
    </div>

    <a href="/ar">SDAR</a>
    <a href="/cl">SDCL</a>
    <a href="/pe">SDPE</a>
</div>
{/if}