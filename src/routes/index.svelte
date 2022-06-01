<script>
    import "../app.css";

    import {  page } from '$app/stores';

    import Icon from '@iconify/svelte';
    import arIcon from '@iconify/icons-circle-flags/ar.js';
    import boIcon from '@iconify/icons-circle-flags/bo.js';
    import brIcon from '@iconify/icons-circle-flags/br.js';
    import clIcon from '@iconify/icons-circle-flags/cl.js';
    import coIcon from '@iconify/icons-circle-flags/co.js';
    import crIcon from '@iconify/icons-circle-flags/cr.js';
    import cuIcon from '@iconify/icons-circle-flags/cu.js';
    import doIcon from '@iconify/icons-circle-flags/do.js';
    import ecIcon from '@iconify/icons-circle-flags/ec.js';
    import gtIcon from '@iconify/icons-circle-flags/gt.js';
    import hnIcon from '@iconify/icons-circle-flags/hn.js';
    import htIcon from '@iconify/icons-circle-flags/ht.js';
    import mxIcon from '@iconify/icons-circle-flags/mx.js';
    import niIcon from '@iconify/icons-circle-flags/ni.js';
    import paIcon from '@iconify/icons-circle-flags/pa.js';
    import peIcon from '@iconify/icons-circle-flags/pe.js';
    import pyIcon from '@iconify/icons-circle-flags/py.js';
    import svIcon from '@iconify/icons-circle-flags/sv.js';
    import uyIcon from '@iconify/icons-circle-flags/uy.js';
    import globeIcon from '@iconify/icons-heroicons-outline/globe.js';

    import LatamIlustration from '../assets/latam-by-at-fragmentos.collage.jpg';

    const codeIcons = [
        ['ar', arIcon],
        ['bo', boIcon],
        ['br', brIcon],
        ['cl', clIcon],
        ['co', coIcon],
        ['cr', crIcon],
        ['cu', cuIcon],
        ['do', doIcon],
        ['ec', ecIcon],
        ['gt', gtIcon],
        ['hn', hnIcon],
        ['ht', htIcon],
        ['mx', mxIcon],
        ['ni', niIcon],
        ['pa', paIcon],
        ['pe', peIcon],
        ['py', pyIcon],
        ['sv', svIcon],
        ['uy', uyIcon]
    ];

    $: country = $page.params.slug ? $page.params.slug.split('/')[0] : ''
</script>

<div class="container m-auto prose p-4">

    <div class="bg-yellow-100 m-auto mb-5 w-3/4 p-4">
        <h1 class="leading-relaxed font-medium text-lg">Página en construcción, por favor, considerar que todo lo que se expone está en desarrollo.</h1>
        <p class="leading-normal">En ocasiones agregaré unos textos e imagenes para ir viendo como se ve, no considerar esos textos hasta que se elimine este cartel por favor.</p>
        <small>01-06-2022</small><br>
        <small><a href="https://github.com/socialdemocratas/SDOS">CC-BY-4.0, Github</a></small>
    </div>

    <h1 class="font-semibold">Socialdemócratas de latinoamérica, <span class="text-primary">unámonos</span></h1>

    <img class="w-full" src={LatamIlustration}
    alt="collage de flores formando el cortorno de latinoamérica" />

    <div class="grid grid-cols-3 sm:grid-cols-4">
        {#each codeIcons as codeIcon }
        <a href="/{codeIcon[0]}"
        class="text-center flex flex-row h-16 items-center
        hover:bg-primary hover:bg-opacity-5 hover:border-primary
        border border-transparent
        decoration-transparent font-semibold rounded-md">
            <Icon icon={codeIcon[1]} class="h-7 w-7 mr-1" />
            SD{String(codeIcon[0]).toUpperCase()}
        </a>
        {/each}
        <a href="/"
        class="text-center flex flex-row h-14 items-center
        hover:bg-primary hover:bg-opacity-5 hover:border-primary
        border border-transparent
        decoration-transparent font-semibold rounded-md">
            <Icon icon={globeIcon} class="h-8 w-8 mr-1" />
            <span class="flex flex-col items-start">SDLA
            </span>
        </a>
        
    </div>
</div>
