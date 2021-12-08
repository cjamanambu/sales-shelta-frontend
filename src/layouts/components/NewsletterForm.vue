<template>
  <div>
    <div class="newsletter-form mt-5 mb-5 d-lg-block d-none">
      <b-form-input
        class="newsletter-input"
        placeholder="enter your email"
        size="lg"
      />
      <b-button class="newsletter-btn btn-lg">
        <b-img :src="require('@/assets/icons/newsletter-btn.svg')" />
      </b-button>
    </div>
    <div class="newsletter-form mt-5 mb-5 d-lg-none">
      <b-form-input
        class="newsletter-input"
        placeholder="enter your email"
        size="lg"
      />
      <b-button class="newsletter-btn-mobile btn-lg">
        <b-img :src="require('@/assets/icons/newsletter-btn.svg')" />
      </b-button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.newsletter-form {
  position: relative;
  display: inline-block;
  width: 100%;
}
.newsletter-input {
  border: none;
  border-bottom: 1px solid #000000;
  border-radius: 0;
}
.newsletter-input:focus {
  border-color: #000000;
}
.newsletter-btn {
  position: absolute;
  background-color: #ffb100;
  border-color: #ffb100;
  padding-bottom: 2em;
  border-radius: 0;
  top: -20%;
  bottom: 40%;
  right: 1%;
  left: 87%;
}
.newsletter-btn-mobile {
  position: absolute;
  background-color: #ffb100;
  border-color: #ffb100;
  padding-bottom: 2em;
  border-radius: 0;
  top: -20%;
  bottom: 40%;
  right: 1%;
  left: 80%;
}
.newsletter-btn:hover,
.newsletter-btn:active,
.newsletter-btn:focus {
  background-color: #ffb100;
  border-color: #ffb100;
  box-shadow: none;
}
.newsletter-btn-mobile:hover,
.newsletter-btn-mobile:active,
.newsletter-btn-mobile:focus {
  background-color: #ffb100;
  border-color: #ffb100;
  box-shadow: none;
}
</style>
