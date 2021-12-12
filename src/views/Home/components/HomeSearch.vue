<template>
  <div id="home-search">
    <p id="home-search-title">Discover houses for sale near you</p>
    <p id="home-search-subtitle">
      Find homes for sale near you. View photos, open house information and
      property details.
    </p>
    <div id="home-search-wrapper">
      <b-form-input
        id="home-search-input"
        placeholder="Location, property type..."
        size="lg"
      />
      <b-button class="secondary-btn home-search-btn">
        <fa-icon :icon="['fas', 'search']" style="font-size: 2em" />
      </b-button>
    </div>
    <p id="home-search-advanced" @click="$refs['advanced-search'].show()">
      Advanced Search <fa-icon :icon="['fas', 'chevron-down']" class="ml-3" />
    </p>
    <b-modal ref="advanced-search" hide-footer size="lg">
      <div
        class="advanced-search-form px-4 py-2"
        style="font-family: 'Gotham Book', sans-serif"
      >
        <b-form-group v-slot="{ ariaDescribedby }">
          <b-form-radio-group
            v-model="selected"
            :options="options"
            :aria-describedby="ariaDescribedby"
            name="radio-inline"
          />
        </b-form-group>
        <label class="mt-3" for="input-live">Location</label>
        <b-form-input
          id="input-live"
          placeholder="Location"
          class="advanced-form-input"
        />
        <div class="mt-4 d-flex">
          <b-form-group class="w-100 mr-4">
            <label for="type">Property Type</label>
            <b-form-input
              id="type"
              placeholder="Property Type"
              class="advanced-form-input"
            />
          </b-form-group>
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
#home-search {
  margin-bottom: 10%;
}
#home-search-title {
  font-family: "Gotham Medium", sans-serif;
  font-size: 3.75em;
  letter-spacing: -0.05em;
}
#home-search-subtitle {
  font-size: 1.25em;
  letter-spacing: -0.05em;
}
#home-search-wrapper {
  margin-top: 2em;
  position: relative;
  display: inline-block;
}
#home-search-input {
  margin: 0 auto;
  width: 33.5em;
  height: 5em;
  border-radius: 3.75em;
  padding-left: 2.375em;
  color: #c4c4c4;
}
.home-search-btn {
  position: absolute;
  padding: 1.5em 2.5em 1.5em 2.5em;
  border-radius: 3.75em;
  top: 8%;
  left: 81.5%;
}
#home-search-advanced {
  font-size: 1.125em;
  margin-top: 2em;
  letter-spacing: -0.05em;
  transition: 0.5s ease;
}
#home-search-advanced:hover {
  cursor: pointer;
  opacity: 0.6;
}
.advanced-form-input {
  height: 3.75em;
  border-radius: 60px;
  padding-left: 2em;
}
</style>
