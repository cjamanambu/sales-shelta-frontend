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
    <p id="home-search-advanced">
      Advanced Search <fa-icon :icon="['fas', 'chevron-down']" class="ml-3" />
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style>
#home-search {
  margin-bottom: 5%;
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
  //position: relative;
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
</style>
