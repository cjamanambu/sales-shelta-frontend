<template>
  <div class="details">
    <b-carousel controls fade :interval="10000">
      <b-carousel-slide
        :img-src="require('@/assets/images/property-details.svg')"
      >
        <div class="action-wrapper d-lg-flex d-none">
          <div
            v-if="activeAction === 'pic'"
            @click="toggleAction('pic')"
            class="dp-action-active"
          >
            <b-img fluid :src="require('@/assets/icons/details-pic.svg')" />
          </div>
          <div v-else @click="toggleAction('pic')" class="dp-action">
            <b-img fluid :src="require('@/assets/icons/details-pic.svg')" />
          </div>
          <div
            v-if="activeAction === 'vid'"
            @click="toggleAction('vid')"
            class="dp-action-active"
          >
            <b-img fluid :src="require('@/assets/icons/details-vid.svg')" />
          </div>
          <div v-else @click="toggleAction('vid')" class="dp-action">
            <b-img fluid :src="require('@/assets/icons/details-vid.svg')" />
          </div>
        </div>
      </b-carousel-slide>
    </b-carousel>
    <div
      class="d-flex align-items-start justify-content-between flex-lg-row flex-column mt-5"
    >
      <div>
        <p style="font-size: 1.875em; letter-spacing: -0.05em">Duplex</p>
        <p style="font-size: 2.5em; letter-spacing: -0.05em">
          <span style="font-family: 'Gotham Medium', sans-serif">
            &#8358; 35 </span
          >m
        </p>
        <div class="d-flex justify-content-between" style="max-width: 20em">
          <p class="mr-3" style="font-size: 1.125em; letter-spacing: -0.05em">
            <span style="font-family: 'Gotham Medium', sans-serif">3</span> beds
          </p>
          <p class="mr-3" style="font-size: 1.125em; letter-spacing: -0.05em">
            <span style="font-family: 'Gotham Medium', sans-serif">2</span>
            baths
          </p>
          <p style="font-size: 1.125em; letter-spacing: -0.05em">
            <span style="font-family: 'Gotham Medium', sans-serif">1,307</span>
            sqft
          </p>
        </div>
        <p style="font-size: 1.25em; letter-spacing: -0.05em">
          No 4 Amurie Babale street, Maitama Abuja
        </p>
        <div class="d-flex flex-wrap mb-5" style="max-width: 40em">
          <DetailFeatures />
          <DetailFeatures />
          <DetailFeatures />
          <DetailFeatures />
          <DetailFeatures />
          <DetailFeatures />
          <DetailFeatures />
          <DetailFeatures />
          <DetailFeatures />
          <DetailFeatures />
          <DetailFeatures />
          <DetailFeatures />
        </div>
        <b-button class="primary-btn px-5 mb-5" style="border-radius: 40px">
          Request a private showing
        </b-button>
      </div>
      <div class="d-flex align-items-center">
        <div class="mr-4">
          <p
            class="mt-4 mb-0"
            style="font-size: 0.875em; letter-spacing: -0.05em"
          >
            Developers
          </p>
          <p
            style="
              font-family: 'Gotham Medium', sans-serif;
              font-size: 1.5em;
              letter-spacing: -0.05em;
            "
          >
            Brains and Hammers
          </p>
        </div>
        <b-img fluid :src="require('@/assets/images/brains-hammer.svg')" />
      </div>
    </div>
  </div>
</template>

<script>
import DetailFeatures from "@/views/PropertyDetail/components/DetailFeatures";
export default {
  components: {
    DetailFeatures,
  },
  data() {
    return {
      activeAction: "pic",
    };
  },
  methods: {
    toggleAction(action) {
      this.activeAction = action;
      console.log(this.activeAction);
    },
  },
};
</script>

<style>
.action-wrapper {
  //margin-bottom: -5.8%;
  //margin-left: -21.2%;
}
.details .carousel-caption {
  margin-bottom: -4%;
  margin-left: -14.9%;
}
.dp-action-active {
  background: rgba(80, 80, 80, 0.5);
  display: inline-block;
  padding: 1em;
  transition: 0.5s ease;
}
.dp-action:hover {
  cursor: pointer;
  background: rgba(0, 0, 0, 0.5);
}
.dp-action {
  background: rgba(0, 0, 0, 0.5);
  display: inline-block;
  padding: 1em;
}
</style>
