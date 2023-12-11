<script>
    import { writable } from "svelte/store";

    // Connect to websocket
    const socket = new WebSocket("wss://api.xmas-caravan.jontes.page");

    // If we can't connect, show an error
    socket.addEventListener("error", function (event) {
        alert("Please ensure you're connected to the PSK school network");
    });

    let hex = writable("#000000");

    socket.addEventListener("message", function (event) {
        hex.set("#" + event.data);
    });

    let timeoutId;
    function debounce(func, delay) {
        return function (...args) {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
            timeoutId = setTimeout(() => {
                func(...args);
            }, delay);
        };
    }

    const colors = [
        "#BF0000",
        "#BF6000",
        "#BFBF00",
        "#00BF00",
        "#00BFBF",
        "#0000BF",
        "#BF00BF",
        "#BF0060",
    ];
</script>

<div class="flex space-x-4">
    {#each colors as color}
        <button
            class="w-16 h-16 rounded-full shadow-md cursor-pointer {color} {$hex ===
            color
                ? 'border-4 border-white'
                : ''}"
            on:click={debounce((e) => {
                socket.send(color.slice(1));
            }, 1000)}
            style={`background-color: ${color};`}
        />
    {/each}
</div>
