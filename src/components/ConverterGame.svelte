<script lang="ts">
    import { writable } from "svelte/store";

    type Unit = "mm³" | "cm³" | "dm³" | "m³" | "l" | "dl" | "cl" | "ml" | "N/A";

    interface Game {
        value: number;
        unit: Unit;
        started: boolean;
        intendedLat: Number;
        intendedLong: Number;
    }

    let game = writable<Game>({
        value: 0,
        unit: "N/A",
        started: false,
        intendedLat: 0,
        intendedLong: 0,
    });

    // Type for key-value pairs of metric units to liter units (e.g. "mm³" -> "l") or N/A.
    type UnitConversions = {
        [key: string]: Unit;
    };

    const coversions: UnitConversions = {
        "mm³": "N/A",
        "cm³": "ml",
        "dm³": "l",
        "m³": "N/A",
        ml: "cm³",
        l: "dm³",
    };

    const literUnits = ["ml", "cl", "dl", "l"];
    // I guess both are metric units, but I don't know what else to call them, and am to
    const metricUnits = ["mm³", "cm³", "dm³", "m³"];

    const animate = (long: Number, lat: Number) => {
        const character = document.getElementById(
            "character",
        ) as HTMLImageElement;
        character.style.transition = "transform 0.5s";
        if ($game.intendedLat !== lat) {
            character.src = "/images/converter/chars/Male_climb.gif";
            character.style.transform = `translate(${long}px, ${lat}px)`;
        } else {
            character.src = "/images/converter/chars/Male_walk.gif";
        }
        game.set({
            ...$game,
            intendedLat: lat,
            intendedLong: long,
        });
        setTimeout(() => {
            character.src = "/images/converter/chars/Male_wait.gif";
        }, 500);
    };

    const convert = (event: any) => {
        const target = event.target as HTMLButtonElement;
        const newUnit = target.innerText as Unit;
        const oldUnit = $game.unit;

        if (literUnits.includes(newUnit) && literUnits.includes(oldUnit)) {
            // Indexes of both units in the array of liter units.
            const newUnitIndex = literUnits.indexOf(newUnit);
            const oldUnitIndex = literUnits.indexOf(oldUnit);
            if (newUnitIndex - 1 === oldUnitIndex) {
                alert(
                    "To convert liters, simply multiply or divide by 10. The bigger the unit, the smaller the number.",
                );
                game.set({
                    ...$game,
                    unit: newUnit,
                    value: $game.value / 10,
                });
                animate(
                    event.target?.offsetLeft || 0,
                    event.target?.offsetTop || 0,
                );
                return;
            }
            if (newUnitIndex + 1 === oldUnitIndex) {
                alert(
                    "To convert liters, simply multiply or divide by 10. The bigger the unit, the smaller the number.",
                );
                game.set({
                    ...$game,
                    unit: newUnit,
                    value: $game.value * 10,
                });
                animate(
                    event.target?.offsetLeft || 0,
                    event.target.offsetTop || 0,
                );
                return;
            }
        }
        if (metricUnits.includes(newUnit) && metricUnits.includes(oldUnit)) {
            // Indexes of both units in the array of metric units.
            const newUnitIndex = metricUnits.indexOf(newUnit);
            const oldUnitIndex = metricUnits.indexOf(oldUnit);
            if (newUnitIndex - 1 === oldUnitIndex) {
                alert(
                    "For each block we move, we multiply or divide by 10. This move is 3 blocks long.",
                );
                game.set({
                    ...$game,
                    unit: newUnit,
                    value: $game.value / 1000,
                });
                animate(
                    event.target?.offsetLeft || 0,
                    event.target.offsetTop || 0,
                );
                return;
            }
            if (newUnitIndex + 1 === oldUnitIndex) {
                alert(
                    "For each block we move, we multiply or divide by 10. This move is 3 blocks long.",
                );
                game.set({
                    ...$game,
                    unit: newUnit,
                    value: $game.value * 1000,
                });
                animate(
                    event.target?.offsetLeft || 0,
                    event.target.offsetTop || 0,
                );
                return;
            }
        }
        if (coversions[newUnit] === oldUnit) {
            alert("Vertical conversions are free! Just change the unit.");
            game.set({
                ...$game,
                unit: newUnit,
            });
            animate(event.target?.offsetLeft || 0, event.target.offsetTop || 0);
            return;
        }

        if (newUnit === oldUnit) {
            return;
        }

        alert("Please only move horizontally or vertically.");
    };

    const refresh = () => {
        const character = document.getElementById(
            "character",
        ) as HTMLImageElement;

        document.querySelectorAll(".option").forEach((option: any) => {
            if (option.innerHTML === $game.unit) {
                const left = option.offsetLeft;
                const top = option.offsetTop;
                character.style.transform = `translate(${left}px, ${top}px)`;
            } else {
                console.log(option.innerHTML);
            }
        });
    };
    $: if ($game.started === true) {
        setTimeout(() => {
            refresh();
        }, 100);
    }

    // On screen resize, refresh the position of the character.
    window.onresize = () => {
        refresh();
    };
</script>

{#if $game.started}
    <div class="min-h-screen flex flex-col">
        <header class="bg-neutral-700 text-white p-1">
            <h1>Converter - You've got {$game.value + $game.unit}</h1>
        </header>
        <main
            class="flex flex-1 flex-col bg-[url('/images/grass.webp')] sizeofbg"
        >
            <div>
                <img
                    id="character"
                    src="/images/converter/chars/Male_wait.gif"
                    class="w-24 h-24 absolute"
                    alt=""
                />
                <div
                    class="grid grid-cols-10 grid-rows-2 gap-4 m-4 text-center"
                >
                    <button
                        on:click={convert}
                        class="option bg-gray-200 text-black rounded-lg p-1"
                        >mm³</button
                    >
                    <div
                        class=" option bg-neutral-500 text-white rounded-lg p-1"
                    ></div>
                    <div
                        class=" option bg-neutral-500 text-white rounded-lg p-1"
                    ></div>
                    <button
                        on:click={convert}
                        class="option bg-gray-200 text-black rounded-lg p-1"
                        >cm³</button
                    >
                    <div
                        class=" option bg-neutral-500 text-white rounded-lg p-1"
                    ></div>
                    <div
                        class=" option bg-neutral-500 text-white rounded-lg p-1"
                    ></div>
                    <button
                        on:click={convert}
                        class="option bg-gray-200 text-black rounded-lg p-1"
                        >dm³</button
                    >
                    <div
                        class=" option bg-neutral-500 text-white rounded-lg p-1"
                    ></div>
                    <div
                        class=" option bg-neutral-500 text-white rounded-lg p-1"
                    ></div>
                    <button
                        on:click={convert}
                        class="option bg-gray-200 text-black rounded-lg p-1"
                        >m³</button
                    >
                    <div
                        class=" option bg-neutral-500 text-white rounded-lg p-1"
                    ></div>
                    <div
                        class=" option bg-neutral-500 text-white rounded-lg p-1"
                    ></div>
                    <div
                        class=" option bg-neutral-500 text-white rounded-lg p-1"
                    ></div>
                    <button
                        on:click={convert}
                        class="option bg-gray-200 text-black rounded-lg p-1"
                        >ml</button
                    >
                    <button
                        on:click={convert}
                        class="option bg-gray-200 text-black rounded-lg p-1"
                        >cl</button
                    >
                    <button
                        on:click={convert}
                        class="option bg-gray-200 text-black rounded-lg p-1"
                        >dl</button
                    >
                    <button
                        on:click={convert}
                        class="option bg-gray-200 text-black rounded-lg p-1"
                        >l</button
                    >
                    <div
                        class=" option bg-neutral-500 text-white rounded-lg p-1"
                    ></div>
                    <div
                        class=" option bg-neutral-500 text-white rounded-lg p-1"
                    ></div>
                    <div
                        class=" option bg-neutral-500 text-white rounded-lg p-1"
                    ></div>
                </div>
                <!-- Rules -->
                <p class="m-2 text-gray-200">
                    You may move horizontally by multiplying or dividing by 10,
                    and vertically for free.<br />The bigger the unit the
                    smaller the number, choose a mode of calculation
                    accordingly.
                </p>
            </div>
        </main>
    </div>
{:else}
    <main
        class="min-h-screen sizeofbg bg-[url('/images/grass.webp')] bg-px-4 py-12 flex items-center justify-center"
    >
        <div
            class="border text-card-foreground max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl"
            data-v0-t="card"
        >
            <div class="p-8">
                <h2
                    class="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl"
                >
                    Enter a value
                </h2>
                <p class="mt-2 text-gray-500"></p>
                <div class="mt-4">
                    <div class="flex flex-row">
                        <input
                            placeholder="Enter a value"
                            class="p-2 border border-gray-300 rounded-lg"
                            type="number"
                            bind:value={$game.value}
                            required
                        />
                        <select
                            class="p-2 border border-gray-300 rounded-lg ml-2"
                            bind:value={$game.unit}
                        >
                            <option value="mm³">mm³</option>
                            <option value="cm³">cm³</option>
                            <option value="dm³">dm³</option>
                            <option value="m³">m³</option>
                            <option value="l">l</option>
                            <option value="dl">dl</option>
                            <option value="cl">cl</option>
                            <option value="ml">ml</option>
                        </select>
                    </div>
                    <button
                        type="button"
                        class="p-2 border border-gray-300 rounded-lg mt-2 w-full"
                        on:click={() =>
                            game.update((g) => ({ ...g, started: true }))}
                    >
                        Start
                    </button>
                </div>
            </div>
        </div>
    </main>
{/if}

<style>
    .sizeofbg {
        background-size: 500px;
        image-rendering: pixelated;
    }

    .option {
        aspect-ratio: 1/1;
    }
</style>
