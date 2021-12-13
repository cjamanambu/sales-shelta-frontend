<template>
  <div id="controls" class="mt-5 d-flex align-items-end">
    <p
      class="control-back d-lg-block d-none mr-lg-4 mr-1"
      @click="$router.push({ name: 'Home' })"
    >
      <fa-icon :icon="['fas', 'chevron-left']" class="mr-lg-2 mr-1" />
      Back
    </p>
    <p
      class="control-back d-lg-none mr-4"
      @click="$router.push({ name: 'Home' })"
    >
      <fa-icon :icon="['fas', 'chevron-left']" class="mr-lg-2 mr-1" />
    </p>
    <form @submit.prevent="search" class="search-wrapper">
      <b-form-input
        class="search-input"
        placeholder="Location, property type..."
        v-model="searchTerm"
      >
      </b-form-input>
      <b-button class="secondary-btn search-btn" type="submit">
        <fa-icon :icon="['fas', 'search']" style="font-size: 1em" />
      </b-button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchTerm: "",
    };
  },
  methods: {
    search() {
      this.$router.push({
        name: "Search",
        query: { search_param: this.searchTerm },
      });
    },
  },
};
</script>

<style>
.control-back {
  transition: 0.5s ease;
  letter-spacing: -0.05em;
}
.control-back:hover {
  cursor: pointer;
  opacity: 0.8;
}
.search-input {
  height: 3em;
  width: 20.0688em;
  border-radius: 60px;
}
.search-wrapper {
  position: relative;
  display: inline-block;
}
.search-btn {
  position: absolute;
  border-radius: 60px;
  top: 10%;
  left: 80%;
}
</style>
