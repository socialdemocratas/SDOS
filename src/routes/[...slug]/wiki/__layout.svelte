<script>
    import context from "$lib/context";
    context.update((c) => {
        c.app = 'wiki'
        return c;
    });
</script>
<slot></slot>