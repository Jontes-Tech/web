<script lang="ts">
  import { writable } from "svelte/store";
  import { onMount } from "svelte";
  import { draggable } from "@neodrag/svelte";
  import { slide } from "svelte/transition";

  interface Application {
    name: string;
  }
  interface Applications {
    [key: string]: Application;
  }
  const applications = writable<Applications>({
    wallpaper: {
      name: "Wallpaper",
    },
    browser: {
      name: "Browser",
    },
  });
  let current = writable("");
  let openapplications = writable<string[]>([]);
  let formattedDate = "Mon 1 00:00 AM";

  const refreshDate = () => {
    const date = new Date();
    formattedDate = date
      .toLocaleString("en-US", {
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      })
      .replace(",", "");
  };
  refreshDate();
  setInterval(() => {
    refreshDate();
  }, 60000);
  onMount(() => {
    const bg = document.getElementById("background");
    if (!bg) return;
    bg.style.backgroundSize = "cover";
    bg.style.backgroundImage =
      "url(" + localStorage.getItem("background") + ")";
  });
  let activities = false;
  const toggleActivities = () => {
    activities = !activities;
  };
  const opened = (app: string) => {
    if ($openapplications.includes(app)) {
      current.set(app);
    } else {
      openapplications.set([...$openapplications, app]);
      current.set(app);
    }
  };
  interface EventTargetWithFiles extends EventTarget {
    files: FileList;
  }

  export function handleImageUpload(event: Event): void {
    const target = event.target as EventTargetWithFiles;
    const file = target.files[0];
    // Restrict to 1.8MB
    if (file.size > 1_800_000) {
      alert("File is too big, we only accept files up to 1.8MB");
      // Reset the input
      const input = document.getElementById(
        "wallpaperselect"
      ) as HTMLInputElement;
      if (!input) return;
      input.value = "";
      return;
    }
    const reader = new FileReader();

    reader.onloadend = () => {
      if (!reader.result) return;
      const base64String = reader.result.toString();
      localStorage.setItem("background", base64String);
      const bg = document.getElementById("background");
      if (!bg) return;
      bg.style.backgroundSize = "cover";
      bg.style.backgroundImage = "url(" + base64String + ")";
    };

    reader.readAsDataURL(file);
  }
  let webbrowserURL = "";
</script>

<!-- We want a header with left, center and right text -->
<div class="flex flex-col h-screen">
  <header class="grid grid-cols-3 items-center px-4 bg-black text-white">
    <div class="flex flex-row gap-x-2 font-bold">
      <button
        class="p-1 m-1 rounded hover:bg-stone-900"
        on:click={toggleActivities}>Activities</button
      >
      <p class="p-1 m-1 rounded hover:bg-stone-900">
        {#if $current}{$applications[$current].name}{/if}
      </p>
    </div>
    <div class="col-start-2 text-center font-bold">
      <p class="p-1 inline-block rounded hover:bg-stone-900">{formattedDate}</p>
    </div>
    <div class="flex flex-row-reverse gap-x-2" />
  </header>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div
    id="background"
    on:click={() => {
      activities = false;
    }}
    on:contextmenu|preventDefault={(event) => {
      // Draw a context menu at the mouse position
      const x = event.clientX;
      const y = event.clientY;

      // Create an element
      const context = document.getElementById("context");
      if (!context) return;
      context.style.left = x + "px";
      context.style.top = y + "px";
      context.classList.remove("hidden");
      context.classList.add("fixed");
    }}
    on:click={() => {
      const context = document.getElementById("context");
      if (!context) return;
      context.classList.add("hidden");
      context.classList.remove("fixed");
    }}
    class={"bg-stone-700 flex-grow overflow-hidden w-screen rounded-xl shadow-md transition-transform " +
      (activities ? "scale-75" : "")}
  >
    <div class="hidden z-50" id="context">
      <div class="flex flex-row p-2 rounded bg-stone-600 text-white">
        <button
          on:click={() => {
            opened("wallpaper");
          }}
          class="hover:bg-stone-500 p-1 rounded">Change Background...</button
        >
      </div>
    </div>
    <!-- Here is the part applications can be -->
    {#each $openapplications as application}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div
        class="w-fit"
        on:click|stopPropagation
        on:contextmenu|stopPropagation
        on:mousedown={() => {
          current.set(application);
        }}
        use:draggable={{
          handle: ".topbar",
        }}
      >
        <div
          class="bg-neutral-600 text-white border-b border-gray-400 p-2 topbar rounded-t-md flex flex-row justify-between"
        >
          <div class="font-semibold text-lg">
            {$applications[application].name}
          </div>
          <button
            class="text-right"
            on:click={() => {
              current.set("");
              openapplications.set(
                $openapplications.filter((a) => a !== application)
              );
            }}
            ><svg
              class="fill-white"
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 384 512"
              ><path
                d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
              /></svg
            ></button
          >
        </div>
        <div
          class="bg-neutral-800 text-white p-4 rounded-b-md min-h-[400px] min-w-[400px]"
        >
          {#if application === "wallpaper"}
            <div>
              <p>Choose a new wallpaper</p>
              <input
                type="file"
                id="wallpaperselect"
                on:change={handleImageUpload}
              />
            </div>
          {:else if application === "browser"}
            <input
              placeholder="https://jontes.page"
              class="bg-neutral-700 p-2 rounded-l-md"
              id="webbrowserURL"
              type="url"
            /><button
              class="rounded-r-md p-2 bg-violet-500"
              on:click={() => {
                const browse = document.getElementById("webbrowserURL");
                // @ts-ignore
                webbrowserURL = browse?.value;
              }}>GO</button
            >
            <iframe class="w-96 h-96" src={webbrowserURL} title="Web Browser" />
          {/if}
        </div>
      </div>
    {/each}
  </div>
  {#if activities}
    <div class="flex justify-center mb-2">
      <div
        class="flex flex-row justify-center gap-x-2 text-white bg-dockbg p-1 rounded-xl shadow-md"
        in:slide={{ duration: 200 }}
      >
        <button
          class="p-2 m-1 rounded hover:bg-dockhover"
          on:click={() => {
            opened("browser");
          }}
          ><svg
            class="h-12 stroke-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 420 420"
            fill="none"
          >
            <path stroke-width="26" d="M209,15a195,195 0 1,0 2,0z" />
            <path
              stroke-width="18"
              d="m210,15v390m195-195H15M59,90a260,260 0 0,0 302,0 m0,240 a260,260 0 0,0-302,0M195,20a250,250 0 0,0 0,382 m30,0 a250,250 0 0,0 0-382"
            />
          </svg>
          <p
            class={"h-2 " +
              ($openapplications.includes("browser") ? "" : "invisible")}
          >
            ·
          </p></button
        >
      </div>
    </div>
  {/if}
</div>
