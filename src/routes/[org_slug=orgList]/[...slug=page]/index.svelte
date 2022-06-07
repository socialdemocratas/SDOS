<script>
import { orgCountry } from "$lib/stores";
import {marked} from 'marked'
export let item;

const content = marked(item.content);

$: baseUrl = item.slug === 'home' ? $orgCountry.org_slug : item.slug;

</script>

<div class="container m-auto max-w-lg p-2">
    <div>
        <small>{item.title}</small>
    </div>
    <div class="min-h-screen prose pb-5">
        {@html content}
    </div>
    <div>
        <hr>
        <div class="prose">
            <small>
                <p>Última edición por <a href="/miembros/{item.last_edit.auth.id}">{item.last_edit.auth.nombre}</a>, a las 12:45h del martes 14 de noviembre 2022.
                <a href="{baseUrl}/editar">Editar</a>,
                <a href="{baseUrl}/historial">Historial de ediciones</a></p>
            </small>
        </div>
    </div>
</div>