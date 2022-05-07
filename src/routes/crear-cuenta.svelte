<script>
import Input from '$lib/Input.svelte'
import Logo from '../assets/logo_clasico.svg'
function selectRegistryType() {

}

</script>

<div class="container p-3 m-auto max-w-screen-md">
    <div class="prose">
        <h1>Cuenta SDLA</h1>
        <p>Tu identidad digital SDLA permite identificarte en los partidos y organizaciones de nuestra red.</p>
    </div>
    <form>
        <div class="flex flex-col">
            <Input label="Nombres" />
            <Input label="Apellidos" />
            <Input label="País" />
            <Input label="DNI" />
        </div>

        <button>Crear cuenta</button>
    </form>
    <a href="/">Ya tengo una cuenta</a>
</div>