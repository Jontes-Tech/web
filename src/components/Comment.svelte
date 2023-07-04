<script lang="ts">
  export let post: string;
  import { onMount } from "svelte";
  import { comment } from "svelte/internal";
  import { writable } from "svelte/store";
  const signedIn = writable(false);
  onMount(async () => {
    const gotComments = await fetch(
      "https://api.jontes.page/comments/" + encodeURIComponent(post)
    );
    if (gotComments.ok && gotComments.status === 200) {
      let thosecomments = await gotComments.json();
      thosecomments = thosecomments.sort(
        (a: any, b: any) => b.created - a.created
      );
      comments.comments = thosecomments;
    }
    if (localStorage.getItem("supersecrettoken")) {
      signedIn.set(true);
    } else {
      // Check for url parameter "token"
      const urlParams = new URLSearchParams(window.location.search);
      const token = urlParams.get("token");
      if (token) {
        localStorage.setItem("supersecrettoken", token);
        window.history.replaceState({}, document.title, post);
        signedIn.set(true);
      }
    }
  });

  // Comment interface
  interface Comment {
    userName: string;
    text: string;
    created: number;
    post: string;
    id: string;
    userIsAdmin: boolean;
  }
  interface CommentResponse {
    comments: Comment[];
  }

  // Sample Comments data, sorted latest first
  const comments: CommentResponse = {
    comments: [],
  };
  const submit = async () => {
    const jwt = localStorage.getItem("supersecrettoken");
    if (!jwt) {
      window.location.href =
        "https://identity.nt3.me?redirect_uri=" +
        encodeURIComponent(window.location.href);
      return;
    }
    const username = JSON.parse(
      window.atob(jwt.split(".")[1].replace("-", "+").replace("_", "/"))
    ).displayName;

    // Now JWT must exist.
    const text = document.getElementById("text") as HTMLInputElement;

    const newComment = {
      userName: username,
      text: text.value,
      created: new Date().getTime(),
      post: post,
      id: Math.random().toString(),
      userIsAdmin: JSON.parse(
        window.atob(jwt.split(".")[1].replace("-", "+").replace("_", "/"))
      ).admin,
    };

    comments.comments = [newComment, ...comments.comments];
    try {
      const fetched = await fetch("https://api.jontes.page/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: jwt,
        },
        body: JSON.stringify({
          text: text.value,
          post: post,
        }),
      });
      if (fetched.status !== 200) {
        // Remove comment from list
        comments.comments = comments.comments.filter(
          (comment) => comment.id !== newComment.id
        );
        alert("Failed to send comment: "+fetched.statusText);
        return;
      }
    } catch {
      comments.comments = comments.comments.filter(
        (comment) => comment.id !== newComment.id
      );
      alert("Failed to send comment");
      return;
    }

    text.value = "";
  };
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
<hr class="rounded" />
<h2 class="text-white text-2xl font-bold">Comments</h2>
{#if !$signedIn}
  <p class="text-white">
    <a
      class="hover:underline"
      href={"https://identity.nt3.me?redirect_uri=https://jontes.page" +
        encodeURIComponent(post)}>Sign in to post a comment</a
    >
  </p>
{:else}
  <form on:submit|preventDefault={submit}>
    <input
      id="text"
      disabled={!$signedIn}
      placeholder="Write a comment!"
      class="p-2 rounded bg-neutral-800 text-white w-96"
    />
    <button class="p-2 rounded bg-neutral-800 text-white">Comment</button>

    <button
      on:click={() => {
        localStorage.removeItem("supersecrettoken");
        signedIn.set(false);
      }}
      class="text-white bg-neutral-800 p-2 rounded">Log out</button
    >
  </form>
{/if}
<!-- Comment section -->
<ul>
  {#each comments.comments as comment (comment.id)}
    <li class="bg-neutral-800 p-4 my-2 flex flex-row">
      <p class="text-gray-200">
        <span class="font-bold">{comment.userName}: </span>{comment.text}
      </p>
      <p class="text-gray-400 ml-auto">
        {formatDate(new Date(comment.created).getTime())}
        {#if comment.userIsAdmin}
          <span class="text-red-500"> (Admin)</span>
        {/if}
      </p>
    </li>
  {/each}
</ul>
