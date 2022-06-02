
<script>
    import "../../app.css";

    import { orgCountry } from "$lib/stores";

    import Icon from '@iconify/svelte';
    import unfoldMoreRounded from '@iconify/icons-material-symbols/unfold-more-rounded';
    import annotationIcon from '@iconify/icons-heroicons-outline/annotation';
    import bookOpen from '@iconify/icons-heroicons-outline/book-open';
    import bookOpenSolid from '@iconify/icons-heroicons-solid/book-open';
    import identificationIcon from '@iconify/icons-heroicons-outline/identification';
    import newspaperIcon from '@iconify/icons-heroicons-outline/newspaper';
    import calendarIcon from '@iconify/icons-heroicons-outline/calendar';
    import archiveIcon from '@iconify/icons-heroicons-outline/archive';
    import menu from '@iconify/icons-heroicons-outline/menu';
    import calculatorIcon from '@iconify/icons-heroicons-outline/calculator';
    import speakerphoneIcon from '@iconify/icons-heroicons-outline/speakerphone';
    import userCircle from '@iconify/icons-heroicons-outline/user-circle';
    import loginIcon from '@iconify/icons-heroicons-outline/login';

    import SDCL_Logo from '../../assets/logo.svg'
    import SDLA_Logo from '../../assets/sdla-3.png'

    import {  page } from '$app/stores';
    import { fly, fade } from 'svelte/transition';

    $: country = $orgCountry.org_slug

    $: isPaginas = $page.routeId === '[org_slug=orgList]/[...slug=page]';
    $: isMural = $page.routeId === '[org_slug=orgList]/mural/[...app_slug]';
    $: isTransparencia = $page.routeId === '[org_slug=orgList]/transparencia/[...app_slug]';
    $: isCalendario = $page.routeId === '[org_slug=orgList]/calendario/[...app_slug]';
    $: isYo = $page.routeId === '[org_slug=orgList]/yo/[...app_slug]';

    $: urlPaginas = `/${$page.params.org_slug}`
    $: urlMural = $page.params.org_slug ? `/${$page.params.org_slug}/mural` : '/mural'
    $: urlTransparencia = $page.params.org_slug ? `/${$page.params.org_slug}/transparencia` : '/transparencia'
    $: urlCalendario = $page.params.org_slug ? `/${$page.params.org_slug}/calendario` : '/calendario'
    $: urlYo = $page.params.org_slug ? `/${$page.params.org_slug}/yo` : '/yo'

    $: logo = country === 'cl' ? SDCL_Logo : SDLA_Logo

    let showSelector = false

    // https://commons.wikimedia.org/wiki/File:00_percent.svg
</script>

<svelte:head>
    <title>🌹🇨🇱</title>
</svelte:head>

{#if false}
<div class="w-full h-52 absolute z-0">
    <div class="w-full h-52 bg-cover bg-center absolute top-0"
    style="background-image: url(http://storage.googleapis.com/chile-travel-newsite-static-content/2021/07/santiago_1.jpg);" ></div>
    <div class="w-full h-12 absolute bottom-0 bg-gradient-to-t from-white" >
    </div>
</div>
{/if}

{#if showSelector}
<div transition:fade class="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-10 z-40"
on:click={() => showSelector = false}></div>
<div class="fixed top-0 left-0 right-0 bg-white z-50 rounded-b-lg"
transition:fly="{{ y: -400, duration: 250 }}">
    <div class="container p-4 m-auto prose">
        <ul on:click={() => showSelector = false}>
            <li><a href='/'>SDLA</a></li>
            <li><a href='/ar'>SDAR</a></li>
            <li><a href='/cl'>SDCL</a></li>
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

<div class="container m-auto flex flex-row fixed top-0 z-10 lg:mr-12 bg-white">
    <div class="flex-1 flex items-center">
        <div class="hover:bg-gray-100 rounded-lg ml-1 cursor-pointer
        flex-1 flex flex-row items-center overflow-hidden bg-opacity-90 bg-white active:(bg-primary bg-opacity-25)"
        on:click={() => { showSelector = true }}>
            <img class="w-11 h-11 ml-2 rounded-lg" src={$orgCountry.logo} alt="{$orgCountry.code} logo" />
            <h1 class="font-semibold leading-none m-2 flex-1">{$orgCountry.title} <svg class="inline" xmlns="http://www.w3.org/2000/svg" width="9" height="9">
                <path fill="#FFF" stroke="#CCC" d="m1.5,1.5h6v6h-6zm3,0v6m3-3h-6"/>
                </svg></h1>
            <Icon icon={unfoldMoreRounded} width="24" height="24" class="mr-2" />
        </div>
    </div>
    <div class="mr-2 h-14 flex flex-row items-center">
        <Icon icon={annotationIcon} width="42" height="42" class="p-2 rounded-full bg-opacity-90 bg-white hover:bg-gray-100" />
        <Icon icon={menu} width="42" height="42" class="p-2 rounded-full bg-opacity-90 bg-white hover:bg-gray-100" />
    </div>
</div>

<div class="mt-14 mb-14">
    <slot></slot>
</div>

<div class="fixed bottom-0 right-0 left-0 select-none bg-white lg:top-0 lg:right-auto lg:bg-secondary lg:bg-opacity-25)">
    <div class="container m-auto flex flex-row lg:flex-col">
    <a href={urlPaginas} class="flex flex-col focus:bg-transparent items-center flex-1 pb-1 pt-2 lg:pl-1 lg:pr-2">
        <Icon icon={bookOpen} width="42" height="42" class="text-gray-600 w-3/4 h-6 rounded-full {isPaginas && 'text-black bg-secondary bg-opacity-25 lg:bg-white lg:bg-opacity-100'}" />
        <small class="font-semibold text-center text-[10px] text-gray-600 {isPaginas && 'text-black'} text-ellipsis overflow-hidden w-[66px]">Páginas</small>
    </a>

    <a href={urlMural} class="flex flex-col items-center flex-1 pb-1 pt-2 lg:pl-1 lg:pr-2">
        <Icon icon={newspaperIcon} width="42" height="42" class="text-gray-600 w-3/4 h-6 rounded-full {isMural && 'text-black bg-secondary bg-opacity-25 lg:bg-white lg:bg-opacity-100'}" />
        <small class="font-semibold text-center text-[10px] text-gray-600 {isMural && 'text-black'} text-ellipsis overflow-hidden w-[66px]">Novedades</small>
    </a>

    <a href={urlTransparencia} class="flex flex-col items-center flex-1 pb-1 pt-2 lg:pl-1 lg:pr-2">
        <Icon icon={calculatorIcon} width="42" height="42" class="text-gray-600 w-3/4 h-6 rounded-full {isTransparencia && 'text-black bg-secondary bg-opacity-25 lg:bg-white lg:bg-opacity-100'}" />
        <small class="font-semibold text-center text-[10px] text-gray-600 {isTransparencia && 'text-black'} text-ellipsis overflow-hidden w-[66px]">Transparencia</small>
    </a>

    <a href={urlCalendario} class="flex flex-col items-center flex-1 pb-1 pt-2 lg:pl-1 lg:pr-2">
        <Icon icon={calendarIcon} width="42" height="42" class="text-gray-600 w-3/4 h-6 rounded-full {isCalendario && 'text-black bg-secondary bg-opacity-25 lg:bg-white lg:bg-opacity-100'}" />
        <small class="font-semibold text-center text-[10px] text-gray-600 {isCalendario && 'text-black'} text-ellipsis overflow-hidden w-[66px]">Eventos</small>
    </a>

    <a href={urlYo} class="flex flex-col items-center flex-1 pb-1 pt-2 lg:pl-1 lg:pr-2">
        <Icon icon={userCircle} width="42" height="42" class="text-gray-600 w-3/4 h-6 rounded-full {isYo && 'text-black bg-secondary bg-opacity-25 lg:bg-white lg:bg-opacity-100'}" />
        <small class="font-semibold text-center text-[10px] text-gray-600 {isYo && 'text-black'} text-ellipsis overflow-hidden w-[66px]">Membresía</small>
        <!--<small class="leading-none">Membresía</small>-->
    </a>
</div>
</div>


<style>
    .selectedApp {
        @apply bg-secondary bg-opacity-25;
    }
</style>