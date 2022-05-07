
<script>
    import "../../app.css";
    import context from "$lib/context";

    import Icon from '@iconify/svelte';
    import unfoldMoreRounded from '@iconify/icons-material-symbols/unfold-more-rounded';
    import annotationIcon from '@iconify/icons-heroicons-outline/annotation';
    import bookOpen from '@iconify/icons-heroicons-outline/book-open';
    import identificationIcon from '@iconify/icons-heroicons-outline/identification';
    import newspaperIcon from '@iconify/icons-heroicons-outline/newspaper';
    import calendarIcon from '@iconify/icons-heroicons-outline/calendar';
    import archiveIcon from '@iconify/icons-heroicons-outline/archive';
    import menu from '@iconify/icons-heroicons-outline/menu';
    import calculatorIcon from '@iconify/icons-heroicons-outline/calculator';

    import SDCL_Logo from '../../assets/logo.svg'
    import SDLA_Logo from '../../assets/sdla-3.png'

    import {  page } from '$app/stores';
    import { fly, fade } from 'svelte/transition';

    $: url = new URL($page.url)
    $: isLocalhost = url.hostname === 'localhost'

    $: country = isLocalhost ? 
    ($page.params.slug ? $page.params.slug.split('/')[0] : '') : 
    (url.hostname.split('.')[0])

    $: isWiki = $page.routeId === '[...slug]' || $page.routeId === '[...slug]/wiki/[...app_slug]';
    $: isMural = $page.routeId === '[...slug]/mural/[...app_slug]';
    $: isTransparencia = $page.routeId === '[...slug]/transparencia/[...app_slug]';
    $: isCalendario = $page.routeId === '[...slug]/calendario/[...app_slug]';

    $: urlWiki = `/${$page.params.slug}`
    $: urlMural = $page.params.slug ? `/${$page.params.slug}/mural` : '/mural'
    $: urlTransparencia = $page.params.slug ? `/${$page.params.slug}/transparencia` : '/transparencia'
    $: urlCalendario = $page.params.slug ? `/${$page.params.slug}/calendario` : '/calendario'

    $: name = ({
        "": "Socialdemócratas de Latinoamérica",
        "ar": "Socialdemócratas de Argentina",
        "cl": "Socialdemócratas de Chile",
        "cl/r2": "SDCL: Regional Antofagasta",
        "cl/r2/antofagasta": "SDCL: Comunal Antofagasta",
        "cl/jsd": "Juventudes Socialdemócratas",
        "pe": "Socialdemócratas de Peru",
    })[$page.params.slug.toLowerCase()]

    $: logo = country === 'cl' ? SDCL_Logo : SDLA_Logo

    let showSelector = false

    

    // https://commons.wikimedia.org/wiki/File:00_percent.svg
</script>

URL:{url}

{#if false}
<div class="w-full h-52 bg-cover bg-center absolute top-0"
style="background-image: url(http://storage.googleapis.com/chile-travel-newsite-static-content/2021/07/santiago_1.jpg);" ></div>
<div class="w-full h-52 absolute top-0 bg-gradient-to-t from-white" >
</div>
{/if}

{#if showSelector}
<div transition:fade class="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-10"
on:click={() => showSelector = false}></div>
<div class="fixed top-0 left-0 right-0 bg-white"
transition:fly="{{ y: -400, duration: 250 }}">
    <div class="container p-4 m-auto prose">
        <ul on:click={() => showSelector = false}>
            <li><a href={ isLocalhost ? '/' : 'https://socialdemocratas.org' }>SDLA</a></li>
            <li><a href={ isLocalhost ? '/ar' : 'https://socialdemocratas.org/ar' }>SDAR</a></li>
            <li><a href={ isLocalhost ? '/cl' : 'https://cl.socialdemocratas.org' }>SDCL</a></li>
            <li>
                <ul>
                    <li><a href="/cl/r2">Regional Antofagasta</a></li>
                    <li>
                        <ul>
                            <li><a href="/cl/r2/antofagasta">Comunal Antofagasta</a></li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li><a href="/pe">SDPE</a></li>
        </ul>
    </div>
</div>
{/if}

<div class="container m-auto flex flex-row -absolute top-0">
    <div class="flex-1 flex items-center">
        <div class="rounded-none flex-1 flex flex-row items-center overflow-hidden bg-opacity-90 bg-white active:(bg-primary bg-opacity-25)"
        on:click={() => { showSelector = true }}>
            <img class="w-11 h-11 ml-2 rounded-lg" src={logo} alt="SDCL logo" />
            <h1 class="font-semibold leading-none m-2 flex-1">{name} <svg class="inline" xmlns="http://www.w3.org/2000/svg" width="9" height="9">
                <path fill="#FFF" stroke="#CCC" d="m1.5,1.5h6v6h-6zm3,0v6m3-3h-6"/>
                </svg></h1>
            <Icon icon={unfoldMoreRounded} width="24" height="24" class="mr-2" />
        </div>
    </div>
    <div class="mr-2 h-14 flex flex-row items-center">
        <Icon icon={annotationIcon} width="42" height="42" class="p-2 rounded-full bg-opacity-90 bg-white" />
        <Icon icon={menu} width="42" height="42" class="p-2 rounded-full bg-opacity-90 bg-white" />
    </div>
</div>

<slot></slot>

<div class="fixed bottom-0 right-0 left-0 bg-white">
    <div class="container m-auto flex flex-row">
    <a href={urlWiki} class="flex flex-col items-center flex-1 pb-1 pt-2">
        <Icon icon={bookOpen} width="42" height="42" class="p-2 rounded-full {isWiki && 'bg-secondary bg-opacity-25'}" />
        
    </a>

    <a href={urlMural} class="flex flex-col items-center flex-1 pb-1 pt-2">
        <Icon icon={newspaperIcon} width="42" height="42" class="p-2 rounded-full {isMural && 'bg-secondary bg-opacity-25'}" />
        
    </a>

    <a href={urlTransparencia} class="flex flex-col items-center flex-1 pb-1 pt-2">
        <Icon icon={calculatorIcon} width="42" height="42" class="p-2 rounded-full {isTransparencia && 'bg-secondary bg-opacity-25'}" />
        
    </a>

    <a href={urlCalendario} class="flex flex-col items-center flex-1 pb-1 pt-2">
        <Icon icon={calendarIcon} width="42" height="42" class="p-2 rounded-full {isCalendario && 'bg-secondary bg-opacity-25'}" />
        
    </a>

    <div class="flex flex-col items-center flex-1 pb-1 pt-2">
        <Icon icon={identificationIcon} width="42" height="42" class="p-2 pb-0 rounded-full bg-opacity-90 bg-white" />
        <!--<small class="leading-none">Membresía</small>-->
    </div>
</div>
</div>


<style>
    .selectedApp {
        @apply bg-secondary bg-opacity-25;
    }
</style>