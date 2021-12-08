<template>
  <div
    id="rent-payer"
    class="d-flex align-items-center flex-lg-row flex-column mt-1 mb-5"
  >
    <div class="rent-payer-wrapper">
      <b-img fluid :src="require('../../assets/images/rent-payer-bg.svg')" />
      <b-img
        fluid
        class="rent-payer-logo"
        :src="require('../../assets/images/rent-payer-logo.svg')"
      />
    </div>
    <div class="rent-payer-text ml-lg-5 mt-lg-0 mt-5">
      <p class="rp-title">Do you need rent financing?</p>
      <p class="rp-subtitle">
        Get rent financing at your finger tips from Shelta’s
        <span class="rp-action">Rent Payer</span>
      </p>
      <p class="rp-subtitle">Rent now, pay as you go.</p>
      <b-button class="primary-btn btn-lg mt-3">Learn more</b-button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
#rent-payer {
  //margin-top: 2em;
  //margin-bottom: 3em;
}
.rent-payer-wrapper {
  position: relative;
}
.rent-payer-logo {
  position: absolute;
  top: 42%;
  right: 62%;
  left: 2%;
}
.rp-title {
  font-family: "Gotham Medium", sans-serif;
  font-size: 1.875em;
  letter-spacing: -0.05em;
}
.rp-subtitle {
  font-size: 1.375em;
  letter-spacing: -0.05em;
}
.rp-action {
  font-family: "Gotham Medium", sans-serif;
  color: #0033ea;
  transition: 0.5s ease;
}
.rp-action:hover {
  cursor: pointer;
  opacity: 0.8;
}
</style>
