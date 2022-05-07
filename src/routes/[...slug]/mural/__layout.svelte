<script>
    import context from "$lib/context";
    context.update((c) => {
        c.app = 'mural'
        return c;
    });
</script>
<slot></slot>