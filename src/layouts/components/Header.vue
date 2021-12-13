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
            <b-button
              class="secondary-outline-btn mr-3"
              @click="$refs['signup'].show()"
            >
              Sign up
            </b-button>
            <b-button class="primary-btn" @click="$refs['login'].show()">
              Sign in
            </b-button>
          </div>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
    <b-modal ref="login" hide-footer>
      <div
        class="private-visit-form px-lg-4 px-2 text-center"
        style="font-family: 'Gotham Book', sans-serif"
      >
        <p style="font-size: 1.5em; letter-spacing: -0.05em">Login</p>
        <b-form-input
          id="input-live"
          placeholder="Email"
          class="pv-input pt-2"
        />
        <b-form-input
          id="input-live"
          placeholder="Password"
          class="pv-input pt-2 mt-3"
        />
        <b-button
          class="mt-4 mb-4 secondary-btn w-100"
          style="height: 2.8125em; border-radius: 60px"
          @click="$refs['login'].hide()"
        >
          Login
        </b-button>
        <p>
          Don't have an account?
          <span
            class="signup"
            @click="
              $refs['login'].hide();
              $refs['signup'].show();
            "
          >
            Signup
          </span>
        </p>
      </div>
    </b-modal>
    <b-modal ref="signup" hide-footer>
      <div
        class="private-visit-form px-lg-4 px-2 text-center"
        style="font-family: 'Gotham Book', sans-serif"
      >
        <p style="font-size: 1.5em; letter-spacing: -0.05em">Sign up</p>
        <b-form-input
          id="input-live"
          placeholder="Fullname"
          class="pv-input pt-2"
        />
        <b-form-input
          id="input-live"
          placeholder="Email"
          class="pv-input pt-2 mt-3"
        />
        <b-form-input
          id="input-live"
          placeholder="Password"
          class="pv-input pt-2 mt-3"
        />
        <b-button
          class="mt-4 mb-4 secondary-btn w-100"
          style="height: 2.8125em; border-radius: 60px"
          @click="$refs['signup'].hide()"
        >
          Sign up
        </b-button>
        <p>
          Have an account?
          <span
            class="signup"
            @click="
              $refs['signup'].hide();
              $refs['login'].show();
            "
          >
            Login
          </span>
        </p>
      </div>
    </b-modal>
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
.signup {
  color: #0033ea;
  transition: 0.5s ease;
}
.signup:hover {
  cursor: pointer;
  opacity: 0.8;
}
</style>
