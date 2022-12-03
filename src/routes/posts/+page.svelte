<script>
    export let data;
</script>

<div>
    {#each data.posts as post}
        <a href="/"><b>{post.title}</b></a>
        <p>{post.body}</p>
    {/each}
</div>