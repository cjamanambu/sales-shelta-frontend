<template>
  <b-navbar toggleable="lg" sticky id="header">
    <b-container fluid>
      <b-navbar-brand>
        <router-link to="/">
          <b-img :src="require('@/assets/logos/shelta-logo.svg')" />
        </router-link>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" class="justify-content-end" is-nav>
        <b-navbar-nav>
          <b-nav-item class="header-item" href="javascript:void(0)">
            Sell a house
          </b-nav-item>
          <b-nav-item class="header-item" href="#"> About </b-nav-item>
          <b-nav-item class="header-item" href="#"> Contact us </b-nav-item>
          <b-nav-item class="header-item" href="#"> Home financing</b-nav-item>
          <b-nav-item class="header-item" href="#"> FAQ</b-nav-item>
          <b-nav-item class="header-item" href="#"> Careers</b-nav-item>
          <div class="mt-lg-0 mt-4 mb-lg-0 mb-3 d-flex justify-content-between">
            <b-button class="secondary-outline-btn mr-3"> Sign up </b-button>
            <b-button class="primary-btn">Sign in</b-button>
          </div>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script>
export default {};
</script>

<style>
#header {
  background-color: #ffffff;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}
.header-item {
  margin-right: 1.5em;
  letter-spacing: -0.03em;
}
.header-item a {
  color: #000000 !important;
}
</style>
