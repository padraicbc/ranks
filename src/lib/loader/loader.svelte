<script lang="ts">
  import { writable } from "svelte/store";
  import { tweened } from "svelte/motion";
  import { linear } from "svelte/easing";
  import { onDestroy, onMount } from "svelte";

  import { showOverlay } from "$lib/stores/store";

  const progress = tweened(0, { easing: linear, duration: 2000 });

  let destroyed = false;

  async function animate() {
    if (destroyed) {
      return;
    }

    await progress.set(100);
    await progress.set(0, { duration: 0 });
    await animate();
  }

  onMount(() => {
    animate();
  });

  onDestroy(() => {
    destroyed = true;
  });
</script>

{#if $showOverlay}
  <div class="overlay">
    <svg
      width="115"
      height="32"
      viewBox="0 0 78 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="filler">
          <stop
            offset={`${$progress}%`}
            stop-color={$showOverlay ? "#eeeeee" : "white"}
          />
          <stop
            offset={`${$progress}%`}
            stop-color={$showOverlay ? "white" : "#eeeeee"}
          />
        </linearGradient>
      </defs>

      <text x="0" y="24px" fill="url(#filler)">Working...</text>
    </svg>
  </div>
{/if}

<style>
  .overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 10001;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #839fe6;
    font-family: "Arial", sans-serif;
    font-size: 1.375rem;
  }
</style>
