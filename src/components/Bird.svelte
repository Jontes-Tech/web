<script>
  export let bird;
  import { onMount } from "svelte";
  let currentTime = "";
  let fetchedUnix = "";
  let diff = 0;

  onMount(() => {
    // Update the time every second
    setInterval(() => {
      const date = new Date();
      currentTime = date.toLocaleTimeString("sv-SE", {
        timeZone: "Europe/Stockholm",
      });
      diff = Math.floor((date - fetchedUnix) / 1000);
    }, 1000);
  });

  const reload = () => {
    const img = document.querySelector("img");
    img.src = "https://birdbox.jontes.page?" + new Date().getTime();
  };
</script>

<div class="flex justify-center items-center">
  <div>
    <div class="p-6 bg-stone-800 rounded-lg shadow-lg m-4">
      <div class="flex items-center justify-center mb-4">
        <img
          on:load={() => (fetchedUnix = new Date())}
          on:error={() => {
            setTimeout(function () {
              reload();
            }, 1000);
          }}
          src="https://birdbox.jontes.page"
          alt={"Birdbox Camera: " +
            (bird ? `There lives a ${bird} in the box!` : "No bird in the box")}
          class="rounded-lg shadow-lg min-h-[768px] min-w-[1024px] bg-stone-700"
        />
      </div>
      <div class="text-center">
        <h2 class="text-2xl font-semibold text-white mb-2">
          Species: {bird || "Noone lives in it"}
        </h2>
        <p class="text-gray-400">
          Currently {currentTime}, Image taken {diff} seconds ago.
          <button on:click={reload} class="hover:underline">Reload</button>
        </p>
      </div>
    </div>
  </div>
</div>
