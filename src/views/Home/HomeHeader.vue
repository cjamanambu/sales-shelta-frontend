<template>
  <div class="d-lg-block d-none">
    <b-carousel controls fade :interval="10000">
      <b-carousel-slide :img-src="require('@/assets/images/home-header-1.svg')">
        <HomeSearch />
      </b-carousel-slide>
      <b-carousel-slide :img-src="require('@/assets/images/home-header-2.svg')">
        <HomeSearch />
      </b-carousel-slide>
    </b-carousel>
    continue here
  </div>
</template>

<script>
import HomeSearch from "@/views/Home/components/HomeSearch";
export default {
  components: {
    HomeSearch,
  },
};
</script>

<style></style>
