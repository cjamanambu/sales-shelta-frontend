<template>
  <b-container fluid id="search-result">
    <Controls />
    <p
      style="font-size: 2.25em; letter-spacing: -0.05em"
      class="text-lg-left text-center mb-4"
    >
      Search Results
    </p>
    <div class="d-flex flex-lg-row flex-column mb-5">
      <Listing
        v-for="listing in listings"
        :key="listing.id"
        :img-src="listing.imgSrc"
        :type="listing.type"
        :name="listing.name"
        :price="listing.price"
        :address="listing.address"
        :old-price="listing.oldPrice"
        class="mr-lg-5 mb-lg-0 mb-5"
      />
    </div>
    <p
      style="font-size: 2.25em; letter-spacing: -0.05em"
      class="text-lg-left text-center mb-4"
    >
      Similar Results
    </p>
    <div class="d-flex flex-lg-row flex-column mb-5">
      <Listing
        v-for="listing in listings"
        :key="listing.id"
        :img-src="listing.imgSrc"
        :type="listing.type"
        :name="listing.name"
        :price="listing.price"
        :address="listing.address"
        :old-price="listing.oldPrice"
        class="mr-lg-5 mb-lg-0 mb-5"
      />
    </div>
  </b-container>
</template>

<script>
import Controls from "@/views/components/Controls.vue";
import Listing from "@/views/components/Listing";

export default {
  components: {
    Controls,
    Listing,
  },
  data() {
    return {
      listings: [
        {
          id: 0,
          imgSrc: require("@/assets/images/listing-1.svg"),
          type: "outright",
          name: "Duplex",
          price: "35",
          address: "No 4 Amurie Babale street, Maitama....",
        },
        {
          id: 1,
          imgSrc: require("@/assets/images/listing-2.svg"),
          type: "mortgage",
          name: "Semi-Detached Bungalow",
          price: "35",
          address: "No 4 Amurie Babale street, Maitama....",
        },
        {
          id: 2,
          imgSrc: require("@/assets/images/listing-3.svg"),
          type: "mortgage",
          name: "Studio Apartment",
          price: "8",
          address: "No 4 Amurie Babale street, Maitama....",
        },
        {
          id: 3,
          imgSrc: require("@/assets/images/listing-4.svg"),
          type: "distress",
          name: "Luxurious Villa",
          price: "1.9",
          oldPrice: "2.5",
          address: "No 2 Musa yahaya street, Asokoro....",
        },
      ],
    };
  },
};
</script>

<style></style>
