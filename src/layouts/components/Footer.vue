<template>
  <div id="footer">
    <b-container fluid class="pt-4 pb-2 d-flex justify-content-between">
      <p class="copyright-text">
        &copy; 2021 A product of
        <b-img :src="require('@/assets/logos/copyright-logo.svg')" />
      </p>
      <div class="d-flex">
        <b-img
          fluid
          class="footer-social"
          :src="require('@/assets/icons/facebook-footer.svg')"
        />
        <b-img
          fluid
          class="footer-social"
          :src="require('@/assets/icons/instagram-footer.svg')"
        />
        <b-img
          fluid
          class="footer-social"
          :src="require('@/assets/icons/twitter-footer.svg')"
        />
        <b-img
          fluid
          class="footer-social"
          :src="require('@/assets/icons/linkedin-footer.svg')"
        />
      </div>
    </b-container>
  </div>
</template>

<script>
export default {};
</script>

<style>
#footer {
  background-color: #0033ea;
}
.copyright-text {
  color: #ffffff;
}
.footer-social {
  height: 1.3em;
  margin-right: 0.7em;
  transition: 0.5s ease;
}
.footer-social:hover {
  cursor: pointer;
  opacity: 0.8;
}
</style>
