<template>
  <div>
    <HomeHeader />
    <b-container fluid>
      <NewListings />
      <AffordableHouses />
      <RentPayer />
    </b-container>
  </div>
</template>

<script>
import HomeHeader from "@/views/Home/HomeHeader";
import NewListings from "@/views/Home/NewListings";
import AffordableHouses from "@/views/Home/AffordableHouses";
import RentPayer from "@/views/Home/RentPayer";
export default {
  components: {
    HomeHeader,
    NewListings,
    AffordableHouses,
    RentPayer,
  },
};
</script>

<style></style>
