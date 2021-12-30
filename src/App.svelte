<script lang="ts">
  import Card from "./Card.svelte";
  import { onMount } from "svelte";

  const VOL_INTERVAL = 100;
  const VOL_DELTA = 0.015;
  const VOL_MIN = 0.025;
  const VOL_MAX = 0.3;

  let open = false;
  let controls: HTMLAudioElement;
  let target = 0;

  function onFocus(e) {
    e.stopPropagation();
    open = true;
    target = VOL_MAX;
  }

  function onBlur() {
    open = false;
    target = VOL_MIN;
  }

  onMount(() => {
    controls.volume = VOL_MAX / 2;
  });

  setInterval(() => {
    if (isNaN(controls?.volume)) return;

    if (controls.volume < target)
      controls.volume = Math.min(VOL_MAX, controls.volume + VOL_DELTA);
    else if (controls.volume > target)
      controls.volume = Math.max(VOL_MIN, controls.volume - VOL_DELTA);
  }, VOL_INTERVAL);
</script>

<svelte:body on:click={onBlur} />

<main on:click={onFocus} on:mouseenter={onFocus} on:mouseleave={onBlur}>
  <Card {open} />
  <audio bind:this={controls} loop autoplay>
    <source src="music.mp3" type="audio/mp3" />
  </audio>
</main>

<style lang="css">
  :global(body) {
    margin: 0;
    height: 100vh;
    width: 100vw;
    display: grid;
    place-content: center;

    background-color: darkgray;
  }
</style>
