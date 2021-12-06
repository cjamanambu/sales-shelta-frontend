<template>
  <div id="home-search-mobile">
    <p id="home-search-title-mobile">Discover houses for sale near you</p>
    <p id="home-search-subtitle-mobile">
      Find homes for sale near you. View photos, open house information and
      property details.
    </p>
    <div id="home-search-wrapper-mobile">
      <b-form-input
        id="home-search-input-mobile"
        placeholder="Location..."
        size="lg"
      />
      <b-button class="secondary-btn home-search-btn-mobile">
        <fa-icon :icon="['fas', 'search']" style="font-size: 2em" />
      </b-button>
    </div>
    <p id="home-search-advanced-mobile">
      Advanced Search <fa-icon :icon="['fas', 'chevron-down']" class="ml-3" />
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style>
#home-search-mobile {
  padding-top: 2em;
  //margin-bottom: 5%;
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
  margin-top: 1.3em;
  position: relative;
  display: inline-block;
}
#home-search-input-mobile {
  //position: relative;
  margin: 0 auto;
  width: 100%;
  height: 4em;
  border-radius: 3.75em;
  padding-left: 1.5em;
  color: #c4c4c4;
}
.home-search-btn-mobile {
  position: absolute;
  padding: 1em 2em 1em 2em;
  border-radius: 3.7em;
  top: 6%;
  left: 65%;
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
