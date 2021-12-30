<script lang="ts">
  import { createEventDispatcher, onDestroy, onMount } from "svelte";

  const dispatch = createEventDispatcher();

  export let rate = 100;
  export let delta = 0.015;
  export let min = 0.025;
  export let max = 0.3;
  export let target = min;

  let tryToPlayInterval;
  let volumeInterval;
  let controls: HTMLAudioElement;

  onMount(() => {
    controls.volume = min;
    tryToPlayInterval = setInterval(onPlay, 100);

    volumeInterval = setInterval(() => {
      if (controls.paused) controls.play().catch(() => {});
      if (controls.volume < target)
        controls.volume = Math.min(max, controls.volume + delta);
      else if (controls.volume > target)
        controls.volume = Math.max(min, controls.volume - delta);
    }, rate);
  });

  onDestroy(() => {
    clearInterval(volumeInterval);
  });

  function onPlay() {
    if (!controls) return;
    controls.currentTime = 5;
    controls
      .play()
      .then(() => {
        dispatch("playing");
        clearInterval(tryToPlayInterval);
      })
      .catch(() => {});
  }
</script>

{#if controls?.paused ?? true}
  <button on:click={onPlay}>Click Me!</button>
{/if}
<audio bind:this={controls} loop autoplay {...$$props}>
  <source src="music.mp3" type="audio/mp3" />
</audio>

<style lang="css">
  button {
    background-color: transparent;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    border: 0;
    margin: 0;
    padding: 0;
  }
</style>
