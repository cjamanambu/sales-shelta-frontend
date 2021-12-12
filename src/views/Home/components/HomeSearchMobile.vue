<template>
  <div id="home-search-mobile">
    <p id="home-search-title-mobile">Discover houses for sale near you</p>
    <p id="home-search-subtitle-mobile">
      Find homes for sale near you. View photos, open house information and
      property details.
    </p>
    <div id="home-search-wrapper-mobile">
      <b-form-input id="home-search-input-mobile" size="lg" type="text" />
      <b-button class="secondary-btn home-search-btn-mobile">
        <fa-icon :icon="['fas', 'search']" style="font-size: 2em" />
      </b-button>
    </div>
    <p
      id="home-search-advanced-mobile"
      @click="$refs['advanced-search'].show()"
    >
      Advanced Search <fa-icon :icon="['fas', 'chevron-down']" class="ml-3" />
    </p>
    <b-modal ref="advanced-search" hide-footer size="lg" centered>
      <div
        class="advanced-search-form px-1 py-2"
        style="font-family: 'Gotham Book', sans-serif"
      >
        <b-form-group v-slot="{ ariaDescribedby }">
          <b-form-radio-group
            v-model="selected"
            :options="options"
            :aria-describedby="ariaDescribedby"
            name="radio-inline"
            stacked
          />
        </b-form-group>
        <label class="mt-3" for="input-live">Location</label>
        <b-form-input
          id="input-live"
          placeholder="Location"
          class="advanced-form-input"
        />
        <b-form-group class="mt-4">
          <label for="type">Property Type</label>
          <b-form-input
            id="type"
            placeholder="Property Type"
            class="advanced-form-input"
          />
        </b-form-group>
        <div class="mt-4 d-flex">
          <b-form-group class="w-50 mr-2">
            <label for="type">Price</label>
            <b-form-input
              id="type"
              placeholder="No max"
              class="advanced-form-input"
            />
          </b-form-group>
          <b-form-group class="w-50">
            <label for="type" style="visibility: hidden">Price</label>
            <b-form-input
              id="type"
              placeholder="No max"
              class="advanced-form-input"
            />
          </b-form-group>
        </div>
        <b-button
          class="mt-4 mb-4 secondary-btn w-100"
          style="height: 3.75em; border-radius: 60px"
        >
          Search
        </b-button>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: "distress",
      options: [
        { text: "Distress sale", value: "distress" },
        { text: "Mortgage", value: "mortgage" },
        { text: "Outright purchase", value: "outright" },
      ],
    };
  },
};
</script>

<style>
#home-search-mobile {
  padding-top: 4em;
  text-align: center;
}
#home-search-title-mobile {
  font-family: "Gotham Medium", sans-serif;
  font-size: 3em;
  letter-spacing: -0.05em;
}
#home-search-subtitle-mobile {
  font-size: 1.1em;
  letter-spacing: -0.05em;
}
#home-search-wrapper-mobile {
  margin-top: 2em;
  position: relative;
}
#home-search-input-mobile {
  margin: 0 auto;
  width: 100%;
  height: 4em;
  border-radius: 3.75em;
  padding-left: 1.5em;
  color: #000000;
}
.home-search-btn-mobile {
  position: absolute;
  padding: 0.8em 2em 0.8em 2em;
  border-radius: 3em;
  top: 8%;
  left: 72%;
}
#home-search-advanced-mobile {
  font-size: 1.125em;
  margin-top: 1.5em;
  letter-spacing: -0.05em;
  transition: 0.5s ease;
}
#home-search-advanced-mobile:hover {
  cursor: pointer;
  opacity: 0.6;
}
</style>
