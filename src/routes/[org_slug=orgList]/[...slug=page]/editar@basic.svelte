<script>
  import { goto } from "$app/navigation";
  import { orgCountry } from "$lib/stores";
  import { page } from '$app/stores';
  import Icon from "@iconify/svelte";
  import eyeIcon from "@iconify/icons-heroicons-outline/eye";
  import checkIcon from "@iconify/icons-heroicons-outline/check";
  import xIcon from "@iconify/icons-heroicons-outline/x";
  import documentText from "@iconify/icons-heroicons-outline/document-text";
  import pencilIcon from "@iconify/icons-heroicons-outline/pencil";
  import questionMarkCircle from "@iconify/icons-heroicons-outline/question-mark-circle";
  import photographIcon from "@iconify/icons-heroicons-outline/photograph";

  import { marked } from "marked";
  export let item;

  let content = item.content;
  $: contentRendered = marked(content);

  let preview = false;
  let exitEditMode;

  async function goBack() {
    const path = $page.url.pathname.substring(0, $page.url.pathname.lastIndexOf('/editar')) + '/';
    console.log('goBack', path)
    try {
      await goto(path);
    } catch(e) {
      console.log('cannot navigate', e)
    }
  }

  if(exitEditMode) {
    goBack();
    exitEditMode = false;
  }

</script>

<form method="post">
<div class="mb-14">
  <div class="container m-auto max-w-lg lg:max-w-5xl p-2">
    <div>
      <small class="font-medium">Editando: {item.title}</small>
    </div>
    <div class="flex flex-col lg:flex-row">
      <textarea
        name="content"
        class="{preview &&
          'hidden'} lg:block min-h-screen focus:outline-none w-full pb-5 outline-hidden border-none"
        bind:value={content}
      />
      <div
        class="{!preview && 'hidden'} lg:block min-h-screen w-full prose pb-5"
      >
        {@html contentRendered}
      </div>
    </div>
  </div>
</div>

<div
  class="fixed bottom-0 right-0 left-0 select-none bg-white lg:top-0 lg:right-auto lg:bg-secondary lg:bg-opacity-25)"
>
  <div class="container m-auto flex flex-row lg:flex-col">
    {#if preview}
      <button
        on:click={() => {
          preview = false;
        }}
        class="flex flex-col focus:bg-transparent items-center flex-1 pb-1 pt-2 lg:pl-1 lg:pr-2"
      >
        <Icon
          icon={pencilIcon}
          width="42"
          height="42"
          class="text-gray-600 w-3/4 h-6 rounded-full"
        />
        <small
          class="font-semibold text-center text-[10px] text-gray-600 text-ellipsis overflow-hidden w-[66px]"
          >Editar</small
        >
      </button>
    {:else}
      <button
        on:click={goBack}
        class="flex flex-col focus:bg-transparent items-center flex-1 pb-1 pt-2 lg:pl-1 lg:pr-2"
      >
        <Icon
          icon={xIcon}
          width="42"
          height="42"
          class="text-gray-600 w-3/4 h-6 rounded-full"
        />
        <small
          class="font-semibold text-center text-[10px] text-gray-600 text-ellipsis overflow-hidden w-[66px]"
          >Cancelar</small
        >
      </button>
      <button
        class="flex flex-col focus:bg-transparent items-center flex-1 pb-1 pt-2 lg:pl-1 lg:pr-2"
      >
        <Icon
          icon={questionMarkCircle}
          width="42"
          height="42"
          class="text-gray-600 w-3/4 h-6 rounded-full"
        />
        <small
          class="font-semibold text-center text-[10px] text-gray-600 text-ellipsis overflow-hidden w-[66px]"
          >Ayuda</small
        >
      </button>
      <button
        on:click={() => {
          preview = true;
        }}
        class="flex flex-col focus:bg-transparent items-center flex-1 pb-1 pt-2 lg:pl-1 lg:pr-2"
      >
        <Icon
          icon={eyeIcon}
          width="42"
          height="42"
          class="text-gray-600 w-3/4 h-6 rounded-full"
        />
        <small
          class="font-semibold text-center text-[10px] text-gray-600 text-ellipsis overflow-hidden w-[66px]"
          >Vista Previa</small
        >
      </button>
      <button
        disabled
        class="flex flex-col focus:bg-transparent items-center flex-1 pb-1 pt-2 lg:pl-1 lg:pr-2"
      >
        <Icon
          icon={photographIcon}
          width="42"
          height="42"
          class="text-gray-600 w-3/4 h-6 rounded-full"
        />
        <small
          class="font-semibold text-center text-[10px] text-gray-600 text-ellipsis overflow-hidden w-[66px]"
          >Insertar</small
        >
      </button>
      <button
        type="submit"
        class="flex flex-col focus:bg-transparent items-center flex-1 pb-1 pt-2 lg:pl-1 lg:pr-2"
      >
        <Icon
          icon={checkIcon}
          width="42"
          height="42"
          class="text-gray-600 w-3/4 h-6 rounded-full"
        />
        <small
          class="font-semibold text-center text-[10px] text-gray-600 text-ellipsis overflow-hidden w-[66px]"
          >Confirmar</small
        >
      </button>
    {/if}
  </div>
</div>
</form>