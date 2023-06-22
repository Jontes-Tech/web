<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  export let bird: string;
  let imageUrl = "";
  let isLoading = true;
  let isError = false;
  let rateLimited = false;

  async function fetchImage() {
    if (document.hidden) return;
    isError = false;
    try {
      const response = await fetch("https://birdbox.jontes.page:4443");
      if (response.status === 502) {
        clearInterval(interval);
        isError = true;
        rateLimited = false;
      } else if (response.status === 429) {
        rateLimited = true;
      } else {
        imageUrl = URL.createObjectURL(await response.blob());
        rateLimited = false;
      }
    } catch (error) {
      clearInterval(interval);
      console.error(error);
      isError = true;
      rateLimited = false;
    }
    isLoading = false;
  }

  let interval: NodeJS.Timeout;
  let timeInterval: NodeJS.Timeout;
  let time = new Date().toLocaleTimeString("sv-SE", {
    hour: "2-digit",
    minute: "2-digit",
  });
  onMount(() => {
    clearInterval(interval);
    clearInterval(timeInterval);
    fetchImage();
    interval = setInterval(fetchImage, 2000);
    timeInterval = setInterval(() => {
      time = new Date().toLocaleTimeString("sv-SE", {
        hour: "2-digit",
        minute: "2-digit",
      });
    }, 1000);
  });
  onDestroy(() => {
    clearInterval(interval);
    clearInterval(timeInterval);
  });

  let liveVisitors = 0;

  (async () => {
    const response = await fetch(
      "https://stats.jontes.page/api/stats/jontes.page/top-stats?period=realtime&filters={%22page%22:%22/live%22}"
    );
    if (!response.ok) return;
    const json = await response.json();
    liveVisitors = json.top_stats[0].value;
    if (liveVisitors === 0) {
      // Because you are obviously here, and the stats are not updated yet.
      liveVisitors = 1;
    }
  })();
  const now = new Date();
  const stockholmTime = now.toLocaleString("en-US", {
    timeZone: "Europe/Stockholm",
  });
  const hours = new Date(stockholmTime).getHours();
  const isAfter8PM = hours >= 20 || hours < 10;
</script>

<div class="flex items-center justify-center h-full text-white">
  {#if rateLimited}
    <p>
      Whoah, you're going too fast. We only allow a small amount of streams per
      internet connection. Sorry.
    </p>
  {:else if isLoading}
    <p class="text-4xl animate-spin">🐦</p>
    <p class="loading">Loading...</p>
  {:else if isError}
    <p class="text-2xl">
      We're offline.
      {#if !isAfter8PM}
        We usually stream between 10AM and 8PM Swedish time, but that's
        sometimes life comes in the way, and sometimes powerbanks just don't
        want to charge properly. Refresh the page to see if we're back.
      {:else}
        We'll probably be back at 10AM Swedish time.
      {/if}
    </p>
  {:else}
    <div class="flex flex-col">
      <div class="relative mt-4">
        <img
          src={imageUrl}
          alt={"There lives a " + bird || "bird" + " in the box"}
        />
        <div
          class="bg-neutral-800 text-white p-2 bg-blend-overlay bg-[url('https://astro.build/assets/noise.webp')]"
        >
          <p class="text-lg">Birdbox in Umeå, refreshing every 2 seconds.</p>
          <p class="text-lg">{time} Swedish Time. Streaming 10AM to 8PM.</p>
        </div>
      </div>
      <p>{liveVisitors} Current Visitor{liveVisitors !== 1 ? "s" : ""}</p>
      <div id="commento" class="max-w-[1024px]" />
    </div>
    <script defer src="https://commento.jontes.page/js/commento.js"></script>
  {/if}
</div>
