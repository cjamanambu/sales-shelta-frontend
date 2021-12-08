<template>
  <div>
    <HomeHeader />
    <b-container fluid>
      <NewListings />
      <AffordableHouses />
    </b-container>
  </div>
</template>

<script>
import HomeHeader from "@/views/Home/HomeHeader";
import NewListings from "@/views/Home/NewListings";
import AffordableHouses from "@/views/Home/AffordableHouses";
export default {
  components: {
    HomeHeader,
    NewListings,
    AffordableHouses,
  },
};
</script>

<style></style>
