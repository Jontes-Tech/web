<script lang="ts">
  import { writable } from "svelte/store";
  const selectedClass = writable("");
  const selectedLanguage = writable("");
  let avaibleClasses = [
    "7a-1",
    "7a-2",
    "7b-1",
    "7b-2",
    "7c-1",
    "7c-2",
    "7d-1",
    "7d-2",
    "7e-1",
    "7e-2",
    "7f-1",
    "7f-2",
    "7g-1",
    "7g-2",
    "8a-1",
    "8a-2",
    "8b-1",
    "8b-2",
    "8c-1",
    "8c-2",
    "8d-1",
    "8d-2",
    "8e-1",
    "8e-2",
    "8f-1",
    "8f-2",
    "8g-1",
    "8g-2",
    "9a-1",
    "9a-2",
    "9b-1",
    "9b-2",
    "9c-1",
    "9c-2",
    "9d-1",
    "9d-2",
    "9e-1",
    "9e-2",
    "9f-1",
    "9f-2",
    "9g-1",
    "9g-2",
  ];
  interface Languages {
    [key: string]: Language;
  }
  interface Language {
    name: string;
    for: string[];
  }
  let languages: Languages = {
    "7svenskaabf": {
      name: "Svensk-engelska",
      for: ["7a-1", "7a-2", "7b-1", "7b-2", "7f-1", "7f-2"],
    },
    "7tyabf": {
      name: "Tyska",
      for: ["7a-1", "7a-2", "7b-1", "7b-2", "7f-1", "7f-2"],
    },
    "7frabf": {
      name: "Franska",
      for: ["7a-1", "7a-2", "7b-1", "7b-2", "7f-1", "7f-2"],
    },
    "7sp1abf": {
      name: "Spanska 1",
      for: ["7a-1", "7a-2", "7b-1", "7b-2", "7f-1", "7f-2"],
    },
    "7sp2abf": {
      name: "Spanska 2",
      for: ["7a-1", "7a-2", "7b-1", "7b-2", "7f-1", "7f-2"],
    },
    "7svenskacde": {
      name: "Svensk-engelska",
      for: ["7c-1", "7c-2", "7d-1", "7d-2", "7e-1", "7e-2"],
    },
    "7tycde": {
      name: "Tyska",
      for: ["7c-1", "7c-2", "7d-1", "7d-2", "7e-1", "7e-2"],
    },
    "7frcde": {
      name: "Franska",
      for: ["7c-1", "7c-2", "7d-1", "7d-2", "7e-1", "7e-2"],
    },
    "7sp1cde": {
      name: "Spanska 1",
      for: ["7c-1", "7c-2", "7d-1", "7d-2", "7e-1", "7e-2"],
    },
    "7sp2cde": {
      name: "Spanska 2",
      for: ["7c-1", "7c-2", "7d-1", "7d-2", "7e-1", "7e-2"],
    },
    "8svenskaabf": {
      name: "Svensk-engelska",
      for: ["8a-1", "8a-2", "8b-1", "8b-2", "8f-1", "8f-2"],
    },
    "8sp1abf": {
      name: "Spanska 1",
      for: ["8a-1", "8a-2", "8b-1", "8b-2", "8f-1", "8f-2"],
    },
    "8sp2abf": {
      name: "Spanska 2",
      for: ["8a-1", "8a-2", "8b-1", "8b-2", "8f-1", "8f-2"],
    },
    "8svenskacde": {
      name: "Svensk-engelska",
      for: ["8c-1", "8c-2", "8d-1", "8d-2", "8e-1", "8e-2"],
    },
    "8tycde": {
      name: "Tyska",
      for: ["8c-1", "8c-2", "8d-1", "8d-2", "8e-1", "8e-2"],
    },
    "8sp1cde": {
      name: "Spanska 1",
      for: ["8c-1", "8c-2", "8d-1", "8d-2", "8e-1", "8e-2"],
    },
    "8sp2cde": {
      name: "Spanska 2",
      for: ["8c-1", "8c-2", "8d-1", "8d-2", "8e-1", "8e-2"],
    },
    "8frabcdef": {
      name: "Franska",
      for: [
        "8a-1",
        "8a-2",
        "8b-1",
        "8b-2",
        "8c-1",
        "8c-2",
        "8d-1",
        "8d-2",
        "8e-1",
        "8e-2",
        "8f-1",
        "8f-2",
      ],
    },
    "9svenskaabe": {
      name: "Svensk-engelska",
      for: ["9a-1", "9a-2", "9b-1", "9b-2", "9f-1", "9f-2"],
    },
    "9tyabe": {
      name: "Tyska",
      for: ["9a-1", "9a-2", "9b-1", "9b-2", "9f-1", "9f-2"],
    },
    "9frabe": {
      name: "Franska",
      for: ["9a-1", "9a-2", "9b-1", "9b-2", "9f-1", "9f-2"],
    },
    "9sp1abe": {
      name: "Spanska 1",
      for: ["9a-1", "9a-2", "9b-1", "9b-2", "9f-1", "9f-2"],
    },
    "9sp2abe": {
      name: "Spanska 2",
      for: ["9a-1", "9a-2", "9b-1", "9b-2", "9f-1", "9f-2"],
    },
    "9svenskacdf": {
      name: "Svensk-engelska",
      for: ["9c-1", "9c-2", "9d-1", "9d-2", "9e-1", "9e-2"],
    },
    "9tycdf": {
      name: "Tyska",
      for: ["9c-1", "9c-2", "9d-1", "9d-2", "9e-1", "9e-2"],
    },
    "9frcdf": {
      name: "Franska",
      for: ["9c-1", "9c-2", "9d-1", "9d-2", "9e-1", "9e-2"],
    },
    "9sp1cdf": {
      name: "Spanska 1",
      for: ["9c-1", "9c-2", "9d-1", "9d-2", "9e-1", "9e-2"],
    },
    "9sp2cdf": {
      name: "Spanska 2",
      for: ["9c-1", "9c-2", "9d-1", "9d-2", "9e-1", "9e-2"],
    },
  };
  let step = writable(0);
</script>

{#if $step === 0}
  <h2 class="text-2xl text-white">Vilken klass går du i?</h2>
  <p class="text-neutral-200">OBS: Kom ihåg att TimeKeeper inte är 100% stabilt, du bör inte helt tillförlite dig på applikationen, speciellt om du har en dålig internetuppkoppling.</p>
  <select class="p-2" bind:value={$selectedClass}>
    <option value="">Välj här</option>
    {#each avaibleClasses as that}
      <option value={that}>{that.toUpperCase().replace("-", ":")}</option>
    {/each}
  </select>
  <button class="p-1 bg-blue-400"
    disabled={$selectedClass === ""}
    on:click={() => {
      step.set(1);
    }}>Nästa steg</button
  >
{:else if $step === 1}
  <h2 class="text-2xl text-white">Vad har du för språk?</h2>
  <select class="p-2" bind:value={$selectedLanguage}>
    <option value="">Inget</option>
    {#each Object.keys(languages).filter((language) => {
      return languages[language].for.includes($selectedClass);
    }) as that}
      <option value={that}>{languages[that].name}</option>
    {/each}
  </select>
  <button class="p-1 bg-blue-400"
    on:click={() => {
      step.set(2);
    }}
  >
    Klart
  </button>
  <button class="p-1 bg-blue-400"
    on:click={() => {
      step.set(0);
    }}>Tillbaka</button
  >
{:else if $step === 2}
  <h2 class="text-2xl text-white">
    Har du en iPhone eller Android-mobil?
  </h2>
  <button class="p-1 bg-blue-400"
    on:click={() => {
      step.set(3);
    }}
  >
    iPhone
  </button>
  <button class="p-1 bg-blue-400"
    on:click={() => {
      step.set(4);
    }}
  >
    Android
  </button>
  <button class="p-1 bg-blue-400"
    on:click={() => {
      step.set(1);
    }}
  >
    Tillbaka
  </button>
{:else if $step === 3}
<h2 class="text-2xl text-white">
    Ladda ner appen NTFY från AppStore
  </h2>
  <p class="text-neutral-200">
    När du öppnar appen ber den dig tillåta notifikationer. Gör detta.
  </p>
  <p class="text-neutral-200">
    Klicka på plusset i appen. Skriv in <code class="p-1 bg-neutral-700 text-white rounded"
      >{$selectedClass}</code
    >
    i "Topic name". Viktigt: Skriv in det exakt som det står! Välj nu "Use
    another server" och skriv in <code class="p-1 bg-neutral-700 text-white rounded">https://ntfy.nt3.me</code> i rutan "Service URL". Klicka
    sedan på "Subscribe".
    <img class="h-80" src="/timekeeper/ios-topic.webp" alt="Topic" />
    <br />
  </p>
  {#if $selectedLanguage}
    <p class="text-neutral-200">
      Nu måste vi lägga till din språkgrupp. Klicka nu på tillbakapilen och
      sedan på plusset igen. Skriv in <code class="p-1 bg-neutral-700 text-white rounded">{$selectedLanguage}</code> i "Topic name".
      Välj igen "Use another server". Klicka på subscribe.
    </p>
  {/if}
{:else if $step === 4}
  <h2 class="text-2xl text-white">
    Ladda ner appen NTFY från Play Store
  </h2>
  <p class="text-neutral-200">
    När du öppnar appen ber den dig tillåta notifikationer. Gör detta. Om appen
    visar dessa varningar:
    <img class="h-80" src="/timekeeper/android-warning.webp" alt="Varningar" />
    <br />
    bör du välja "Fix now", hitta NTFY i listan och välja "Don't optimize". Gå sedan tillbaka till NTFY, och klicka "Enable now" på nästa varning.
  </p>
  <p class="text-neutral-200">
    Klicka på plusset i appen. Skriv in <code class="p-1 bg-neutral-700 text-white rounded"
      >{$selectedClass}</code
    >
    i "Topic name". Viktigt: Skriv in det exakt som det står! Välj nu "Use
    another server" och skriv in <code class="p-1 bg-neutral-700 text-white rounded">https://ntfy.nt3.me</code> i rutan "Service URL". Klicka
    sedan på "Subscribe".
    <img class="h-80" src="/timekeeper/android-topic.webp" alt="Topic" />
    <br />
  </p>
  {#if $selectedLanguage}
    <p class="text-neutral-200">
      Nu måste vi lägga till din språkgrupp. Klicka nu på tillbakapilen och
      sedan på plusset igen. Skriv in <code class="p-1 bg-neutral-700 text-white rounded">{$selectedLanguage}</code> i "Topic name".
      Välj igen "Use another server". Klicka på subscribe.
    </p>
  {/if}
{/if}
