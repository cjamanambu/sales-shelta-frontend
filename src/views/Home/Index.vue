<template>
  <div>
    <HomeHeader />
    <b-container fluid>
      <NewListings />
    </b-container>
  </div>
</template>

<script>
import HomeHeader from "@/views/Home/HomeHeader";
import NewListings from "@/views/Home/NewListings";
export default {
  components: {
    HomeHeader,
    NewListings,
  },
};
</script>

<style></style>
