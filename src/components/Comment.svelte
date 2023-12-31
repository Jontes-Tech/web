<script lang="ts">
  export let post: string;
  import { get, writable } from "svelte/store";
  const signedIn = writable(false);
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
  interface JWTData {
    id: string;
    admin: boolean;
    exp: number;
    displayName: string;
  }

  let comments = writable<Comment[]>([]);

  const validateComments = async () => {
    const res = await fetch(
      "https://api.jontes.page/comments/" + encodeURIComponent("https://jontes.page"+post),
      {
        cache: "no-cache",
      },
    );
    const data: Comment[] = await res.json();
    comments.set(data);
  };
  validateComments();

  const getJWTData = () => {
    const dummy:JWTData = {
      id: "",
      admin: false,
      exp: 0,
      displayName: "",
    };
    const jwt = localStorage.getItem("supersecrettoken");
    let jwtData:JWTData = jwt
      ? JSON.parse(
          window.atob(jwt.split(".")[1].replace("-", "+").replace("_", "/")),
        )
      : {};
    // If query param ?token is set, use that instead
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
    if (token) {
      // We'll assume noone provides an expired token, so we don't check it
      localStorage.setItem("supersecrettoken", token);
      window.location.href = window.location.href.split("?")[0];
      jwtData = JSON.parse(
        window.atob(token.split(".")[1].replace("-", "+").replace("_", "/")),
      );
    }

    if (!jwt && !token) {
      signedIn.set(false);
      return dummy;
    }

    if (jwtData.exp < new Date().getTime() / 1000) {
      localStorage.removeItem("supersecrettoken");
      signedIn.set(false);
      return dummy;
    }
    signedIn.set(true);
    return jwtData;
  };

  const jwtData = getJWTData();

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
  <div class="flex">
    <input
      id="text"
      disabled={!$signedIn}
      placeholder="Write a comment!"
      class="p-2 bg-neutral-800 text-white w-auto flex-grow mr-1"
    />
    <button
      on:click|stopPropagation={async () => {
        // @ts-ignore
        const text = document.getElementById("text").value + "";

        const res = await fetch("https://api.jontes.page/comments", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("supersecrettoken") || "",
          },
          body: JSON.stringify({
            text,
            post: "https://jontes.page" + post,
          }),
        });
        if (res.status == 200) {
          // @ts-ignore
          document.getElementById("text").value = "";
          comments.set([
            {
              id: Math.random().toString(36).substring(7),
              authorId: jwtData.id,
              text: text,
              created: new Date().getTime(),
              post: post,
              author: {
                displayName: jwtData.displayName,
                admin: jwtData.admin,
              },
            },
            ...get(comments),
          ]);
          await fetch(
            "https://api.jontes.page/comments/" + encodeURIComponent(post),
            {
              cache: "no-cache",
            },
          );
        } else {
          alert("Error: " + (await res.text()));
        }
      }}
      class="p-2 bg-neutral-800 text-white mr-1">Comment</button
    >

    <button
      on:click={() => {
        localStorage.removeItem("supersecrettoken");
        signedIn.set(false);
      }}
      class="text-white bg-neutral-800 p-2">Log out</button
    >
  </div>
{/if}
<ul>
  {#if $comments}
    {#each $comments as comment (comment.id)}
      <li
        class="p-4 my-2 flex flex-row bg-[url(https://astro.build/assets/noise.webp)] bg-neutral-800 bg-blend-overlay"
      >
        <p class="text-gray-200">
          <span class="font-bold"
            >{comment.author.displayName}:
          </span>{comment.text}
        </p>
        <p class="text-gray-400 ml-auto">
          {formatDate(new Date(comment.created).getTime())}
          {#if comment.author.admin}
            <span class="text-red-500"> (Admin)</span>
          {/if}
          <!-- {#if comment.authorId === jwtData?.id || jwtData?.admin}
            <button
              on:click={() => {
                deleteComment(comment.id);
              }}
              class="bg-neutral-700">X</button
            >
          {/if} -->
        </p>
      </li>
    {/each}
  {/if}
</ul>
