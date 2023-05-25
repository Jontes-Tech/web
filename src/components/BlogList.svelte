<script>
  import { onMount } from "svelte";
  export let posts;
  let displayedPosts = [];
  $: displayedPosts = posts.slice((page - 1) * 6, page * 6);
  let page = 1;
</script>

<div>
  <div class="flex flex-col m-4 text-white">
    {#each displayedPosts as post}
      <div class="py-6 flex gap-6 md:gap-10 items-start">
        <a href={post.url} class="shrink-0">
          {#if post.frontmatter.cover}
            <img
              src={post.frontmatter.cover &&
                (post.frontmatter.cover.startsWith("https://")
                  ? post.frontmatter.cover
                  : post.url + "/" + post.frontmatter.cover)}
              alt={post.title}
              width="160"
              height="160"
              class="w-20 h-20 md:w-40 md:h-40 rounded bg-stone-200 object-cover"
            />
          {:else}
            <div class="w-20 h-20 md:w-40 md:h-40 rounded bg-purple-200" />
          {/if}
        </a>
        <div class="flex flex-col gap-4">
          <h2 class="text-2xl font-bold">
            <a class="hover:underline" href={post.url}
              >{post.frontmatter.title}</a
            >
          </h2>
          <p class="text-sm text-base-content/70">
            {post.frontmatter.description}
          </p>
        </div>
      </div>
    {/each}
  </div>

  <div class="text-white flex justify-center gap-4">
    {#if page * 6 < posts.length}<button on:click={() => page++}>Older</button
      >{/if}
    {#if page > 1}<button on:click={() => page--}>Newer</button>
    {/if}
  </div>
</div>
