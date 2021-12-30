<script lang="ts">
  import Card from "./Card.svelte";
  import Music from "./Music.svelte";

  let active = false;
  let open = false;

  function onMusicPlaying() {
    active = true;
  }
</script>

{#if !active}
  <h1>Click somewhere!</h1>
{/if}

<main
  class:active
  on:click={() => (open = !open)}
  on:mouseenter={() => (open = true)}
  on:mouseleave={() => (open = false)}
>
  <Card open={active && open} />
</main>
<Music on:playing={onMusicPlaying} target={open ? 1 : 0} />

<style lang="css">
  :global(body) {
    margin: 0;
    background-color: burlywood;
    height: 100vh;
    width: 100vw;
    display: grid;
    place-content: center;
  }

  @media only screen and (orientation: portrait) {
    :global(body) {
      transform: rotateZ(90deg);
    }
  }

  main {
    opacity: 0;
    pointer-events: none;
    transition: all 3s;
  }

  main.active {
    opacity: 1;
    pointer-events: all;
  }
</style>
