<script setup>

</script>

<template>
  <section>
  <div id="carouselContain" class="carousel slide" style="margin-top: 100px;">
    <div id="carouselControl" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active" data-bs-interval="10000">
        <img src="/tahchang.jpg" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item" data-bs-interval="2000">
        <img src="/goodviews.jpg" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img src="/riverside.jpg" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img src="/warmup.jpg" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img src="/thaynimman.jpg" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img src="/lism.jpg" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img src="/beerlab.jpg" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img src="/tamma.jpg" class="d-block w-100" alt="...">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselControl" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselControl" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</div>
</section>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}

.d-block {
  height: 90vh;
}

.carousel {
  margin-bottom: 2rem;
  margin-top: 2rem;
}
</style>