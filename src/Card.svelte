<script lang="ts">
  export let open = false;
</script>

<article class:open class="card" {...$$props}>
  <section class="page pg1">
    <div class="front">
      <h1>This is the front.</h1>
    </div>
    <div class="back">
      <p>This is page 1.</p>
    </div>
  </section>

  <section class="page pg2">
    <div class="front">
      <p>This is page 2.</p>
    </div>
    <div class="back">
      <small>This is the back.</small>
    </div>
  </section>
</article>

<style lang="css">
  .card {
    position: relative;

    width: 250px;
    height: 350px;

    box-shadow: 1rem 1rem 3rem rgba(0, 0, 0, 0.15);
  }

  .page {
    position: absolute;

    width: 100%;
    height: 100%;

    perspective: 1500px;
  }

  .front,
  .back {
    position: absolute;

    width: 100%;
    height: 100%;
  }

  .back {
    transform: rotateY(-180deg);
    opacity: 0;
  }

  /* ANIMATION */

  .card,
  .page {
    transition-duration: 1s;
  }

  .pg1 {
    transform-origin: left;
  }

  .card.open {
    background-color: red;
    transform: translateX(50%);
  }

  .card.open .pg1 {
    transform: rotateY(-180deg);
  }

  .pg1 .front,
  .pg1 .back {
    transition-delay: 0.3s;
  }

  .card.open .pg1 .front {
    opacity: 0;
  }

  .card.open .pg1 .back {
    opacity: 1;
  }

  /* COLORS */

  .pg1 {
    background-color: cornflowerblue;
  }

  .pg2 {
    background-color: palevioletred;
  }

  .front,
  .back {
    background-color: inherit;
  }

  .pg1,
  .front {
    z-index: 2;
  }

  .pg2,
  .back {
    z-index: 1;
  }

  /* CONTENT */

  .front,
  .back {
    padding: 1rem;
  }
</style>
