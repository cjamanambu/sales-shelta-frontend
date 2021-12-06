<template>
  <div>
    <div class="d-lg-block d-none">
      <b-carousel controls fade :interval="10000">
        <b-carousel-slide
          :img-src="require('@/assets/images/home-header-1.svg')"
        >
          <HomeSearch />
        </b-carousel-slide>
        <b-carousel-slide
          :img-src="require('@/assets/images/home-header-2.svg')"
        >
          <HomeSearch />
        </b-carousel-slide>
      </b-carousel>
      continue here
    </div>
    <div class="d-lg-none">
      <b-container>
        <HomeSearchMobile />
      </b-container>
    </div>
  </div>
</template>

<script>
import HomeSearch from "@/views/Home/components/HomeSearch";
import HomeSearchMobile from "@/views/Home/components/HomeSearchMobile";
export default {
  components: {
    HomeSearch,
    HomeSearchMobile,
  },
};
</script>

<style></style>
