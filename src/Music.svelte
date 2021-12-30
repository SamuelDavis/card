<script lang="ts">
  import { createEventDispatcher, onDestroy, onMount } from "svelte";

  const dispatch = createEventDispatcher();

  export let rate = 100;
  export let delta = 0.015;
  export let min = 0.025;
  export let max = 0.3;
  export let target = min;

  let volumeInterval;
  let controls: HTMLAudioElement;

  onMount(() => {
    controls.currentTime = 5;
    controls.volume = min;
    let tryToPlayInterval = setInterval(() => {
      controls
        .play()
        .then(() => {
          dispatch("playing");
          clearInterval(tryToPlayInterval);
        })
        .catch(() => {});
    });

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
</script>

<audio bind:this={controls} loop autoplay {...$$props}>
  <source src="music.mp3" type="audio/mp3" />
</audio>
