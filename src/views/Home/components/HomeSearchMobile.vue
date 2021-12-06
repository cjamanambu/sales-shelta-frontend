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
  padding-top: 4em;
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
  margin-top: 2em;
  position: relative;
  //display: inline-block;
}
#home-search-input-mobile {
  margin: 0 auto;
  width: 100%;
  height: 4em;
  border-radius: 3.75em;
  padding-left: 1.5em;
  padding-top: 1em;
  //color: #000000;
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
