<script lang="ts">
  import { writable } from "svelte/store";
  import { onMount } from "svelte";
  import { draggable } from "@neodrag/svelte";
  import { slide } from "svelte/transition";
  import Bird from "./Bird.svelte";

  interface Application {
    name: string;
  }
  interface Applications {
    [key: string]: Application;
  }
  const applications = writable<Applications>({
    bird: {
      name: "Birdwatcher",
    },
  });
  let current = writable("bird");
  let openapplications = writable<string[]>(["bird"]);
  let formattedDate = "Mon 1 00:00 AM";
  $: {
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
  }
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
    class={"bg-stone-700 flex-grow overflow-hidden w-screen rounded-xl shadow-md transition-transform " +
      (activities ? "scale-75" : "")}
  >
    <!-- Here is the part applications can be -->
    {#each $openapplications as application}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div
        class="w-fit"
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
            }}>x</button
          >
        </div>
        <div
          class="bg-neutral-800 text-white p-4 rounded-b-md min-h-[400px] min-w-[400px]"
        >
          <p class="text-center">
            <Bird bird="Blue tit" />
          </p>
        </div>
      </div>
    {/each}
  </div>
  {#if activities}
    <div class="flex justify-center">
      <div
        class="flex flex-row justify-center gap-x-2 text-white bg-neutral-800 p-1 rounded-xl shadow-md"
        in:slide={{ duration: 200 }}
      >
        <button
          class="p-2 m-1 rounded hover:bg-stone-700"
          on:click={() => {
            opened("bird");
          }}
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 512 512"
            class="fill-white h-12"
            ><path
              d="M160.8 96.5c14 17 31 30.9 49.5 42.2c25.9 15.8 53.7 25.9 77.7 31.6V138.8C265.8 108.5 250 71.5 248.6 28c-.4-11.3-7.5-21.5-18.4-24.4c-7.6-2-15.8-.2-21 5.8c-13.3 15.4-32.7 44.6-48.4 87.2zM320 144v30.6l0 0v1.3l0 0 0 32.1c-60.8-5.1-185-43.8-219.3-157.2C97.4 40 87.9 32 76.6 32c-7.9 0-15.3 3.9-18.8 11C46.8 65.9 32 112.1 32 176c0 116.9 80.1 180.5 118.4 202.8L11.8 416.6C6.7 418 2.6 421.8 .9 426.8s-.8 10.6 2.3 14.8C21.7 466.2 77.3 512 160 512c3.6 0 7.2-1.2 10-3.5L245.6 448H320c88.4 0 160-71.6 160-160V128l29.9-44.9c1.3-2 2.1-4.4 2.1-6.8c0-6.8-5.5-12.3-12.3-12.3H400c-44.2 0-80 35.8-80 80zm80-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32z"
            /></svg
          >
          <p
            class={"h-2 " +
              ($openapplications.includes("bird") ? "" : "invisible")}
          >
            ·
          </p></button
        >
      </div>
    </div>
  {/if}
</div>
