<script context="module">
import {marked} from 'marked'
//import presentation from '../texts/presentacion.md';

export const load = async () => {
    return {
      props: {
        page: `
# Socialdemócratas de Chile

Añlkjs dflksjd flksjd fñlskdj ñlkasj fkñasjfñoiwej fñaslkdj fñioawej ñals fasf.

`,
      },
    }
}
</script>

<script>
    
    
</script>

<div class="container max-w-screen-md m-auto">
    <form>
        <h1>Ingresar a tu cuenta</h1>
        <label class="flex flex-col font-medium border mb-2">
            Usuario
            <input name="user" class="outline-none" />
        </label>
        <label class="flex flex-col font-medium border mb-2">
            Clave:
            <input name="pass" class="outline-none" />
        </label>
        <button type="submit">Ingresar</button>
    </form>
    <p><a href="/registro">No tengo una cuenta</a></p>
</div>

<style>
	textarea {
		resize: none;
		padding: 1rem;
		line-height: 1.5;
        overflow: hidden;
	}
</style>