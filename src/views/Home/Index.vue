<template>
  <div class="mb-5">
    <HomeHeader />
    <b-container fluid>
      <NewListings />
      <AffordableHouses />
      <RentPayer />
      <BlogList />
    </b-container>
  </div>
</template>

<script>
import HomeHeader from "@/views/Home/HomeHeader";
import NewListings from "@/views/Home/NewListings";
import AffordableHouses from "@/views/Home/AffordableHouses";
import RentPayer from "@/views/Home/RentPayer";
import BlogList from "@/views/Home/BlogList";

export default {
  components: {
    HomeHeader,
    NewListings,
    AffordableHouses,
    RentPayer,
    BlogList,
  },
};
</script>

<style></style>
