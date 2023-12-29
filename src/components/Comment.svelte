<script lang="ts">
  export let post: string;
  import { onMount } from "svelte";
  import { writable } from "svelte/store";
  const signedIn = writable(false);
  onMount(async () => {
    const gotComments = await fetch(
      "https://api.jontes.page/comments/https%3A%2F%2Fjontes.page" +
        encodeURIComponent(post),
    );
    if (gotComments.ok && gotComments.status === 200) {
      let thosecomments = await gotComments.json();
      thosecomments = thosecomments.sort(
        (a: any, b: any) => b.created - a.created,
      );
      comments = thosecomments;
    }
    if (localStorage.getItem("supersecrettoken")) {
      const token = localStorage.getItem("supersecrettoken") || "";
      // Check the expiration date
      const jwtData = JSON.parse(
        window.atob(token.split(".")[1].replace("-", "+").replace("_", "/")),
      );
      if (jwtData.exp < new Date().getTime() / 1000) {
        localStorage.removeItem("supersecrettoken");
        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get("token");
        if (token) {
          localStorage.setItem("supersecrettoken", token);
          jwt = token;
          window.history.replaceState({}, document.title, post);
          signedIn.set(true);
        }
        return;
      }
      signedIn.set(true);
    } else {
      // Check for url parameter "token"
      const urlParams = new URLSearchParams(window.location.search);
      const token = urlParams.get("token");
      if (token) {
        localStorage.setItem("supersecrettoken", token);
        jwt = token;
        window.history.replaceState({}, document.title, post);
        signedIn.set(true);
      }
    }
  });

  // Comment interface
  interface Comment {
    id: string;
    authorId: string;
    text: string;
    created: number;
    post: string;
    author: {
      displayName: string;
      admin: boolean;
    };
  }

  type CommentResponse = Comment[];

  // Sample Comments data, sorted latest first
  let comments: CommentResponse = [];
  let jwt = localStorage.getItem("supersecrettoken");
  let jwtData: any = {};
  if (jwt) {
    jwtData = JSON.parse(
      window.atob(jwt.split(".")[1].replace("-", "+").replace("_", "/")),
    );
  }
  const submit = async () => {
    // Now JWT must exist.
    const text = document.getElementById("text") as HTMLInputElement;
    jwt = localStorage.getItem("supersecrettoken") || "a.b.c";
    jwtData = JSON.parse(
      window.atob(jwt.split(".")[1].replace("-", "+").replace("_", "/")),
    );
    const newComment = {
      text: text.value,
      created: new Date().getTime(),
      post: "https://jontes.page" + post,
      id: Math.random().toString(),
      authorId: jwtData.id,
      author: {
        displayName: jwtData.displayName,
        admin: jwtData.admin,
      },
    };

    comments = [newComment, ...comments];
    try {
      const fetched = await fetch("https://api.jontes.page/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: jwt + "",
        },
        body: JSON.stringify({
          text: text.value,
          post: "https://jontes.page" + post,
        }),
      });
      if (fetched.status !== 200) {
        comments = comments.filter((comment) => comment.id !== newComment.id);
        alert("Failed to send comment: " + fetched.statusText);
        return;
      }
    } catch {
      comments = comments.filter((comment) => comment.id !== newComment.id);
      alert("Failed to send comment");
      return;
    }

    text.value = "";
  };
  async function deleteComment(id: string) {
    if (confirm("Are you sure you want to delete your comment?"))
      try {
        const fetched = await fetch("https://api.jontes.page/comment/" + id, {
          method: "DELETE",
          headers: {
            Authorization: localStorage.getItem("supersecrettoken") + "",
            "Content-Type": "application/json",
          },
        });
        if (fetched.status !== 200) {
          alert("Failed to delete comment: " + fetched.statusText);
          return;
        }
      } catch {
        alert("Failed to delete comment");
        return;
      }
    comments = comments.filter((comment) => comment.id !== id);
  }
  const formatDate = (date: number) => {
    const now = new Date().getTime();
    const diff = now - date;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    if (days == 0) {
      return "Today";
    } else if (days == 1) {
      return "Yesterday";
    } else {
      return days + " days ago";
    }
  };
</script>

<!-- Comment form -->
<hr class="rounded mb-1" />
<h2 class="text-white text-2xl font-bold">Comments</h2>
{#if !$signedIn}
  <p class="text-white">
    <a
      class="hover:underline"
      href={"https://identity.nt3.me?redirect=https://jontes.page" +
        encodeURIComponent(post)}>Easily sign in/up to post!</a
    >
  </p>
{:else}
  <form on:submit|preventDefault={submit} class="flex">
    <input
      id="text"
      disabled={!$signedIn}
      placeholder="Write a comment!"
      class="p-2 bg-neutral-800 text-white w-auto flex-grow mr-1"
    />
    <button class="p-2 bg-neutral-800 text-white mr-1">Comment</button>

    <button
      on:click={() => {
        localStorage.removeItem("supersecrettoken");
        signedIn.set(false);
      }}
      class="text-white bg-neutral-800 p-2">Log out</button
    >
  </form>
{/if}
<!-- Comment section -->
<ul>
  {#each comments as comment (comment.id)}
    <li
      class="p-4 my-2 flex flex-row bg-[url(https://astro.build/assets/noise.webp)] bg-neutral-800 bg-blend-overlay"
    >
      <p class="text-gray-200">
        <span class="font-bold">{comment.author.displayName}: </span>{comment.text}
      </p>
      <p class="text-gray-400 ml-auto">
        {formatDate(new Date(comment.created).getTime())}
        {#if comment.author.admin}
          <span class="text-red-500"> (Admin)</span>
        {/if}
        {#if comment.author.admin === jwtData.displayName}
          <button
            on:click={() => {
              deleteComment(comment.id);
            }}
            class="bg-neutral-700">X</button
          >
        {/if}
      </p>
    </li>
  {/each}
</ul>
