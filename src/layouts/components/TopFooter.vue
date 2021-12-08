<template>
  <b-container
    fluid
    id="top-footer"
    class="mt-5 d-flex justify-content-between align-items-start flex-lg-row flex-column pt-5 pb-5"
  >
    <div>
      <p class="tp-title">Sign up to our newsletters</p>
      <p class="tp-subtitle">
        Be one of the first to know about product launches, promotions and more.
      </p>
      <NewsletterForm />
    </div>
    <div class="d-flex justify-content-between mt-lg-0 mt-5">
      <div class="mr-5 d-flex flex-column">
        <p class="tp-menu-header mb-3">Company</p>
        <p class="tp-menu-item">About</p>
        <p class="tp-menu-item">Blog</p>
        <p class="tp-menu-item">Tenant</p>
        <p class="tp-menu-item">Landlord</p>
        <p class="tp-menu-item">Property Management</p>
        <p class="tp-menu-item">Careers</p>
      </div>
      <div class="ml-lg-5 mr-lg-5">
        <p class="tp-menu-header">Support</p>
        <p class="tp-menu-item">Help & FAQs</p>
        <p class="tp-menu-item">
          <a href="#">hello@myshelta.com</a>
        </p>
        <p class="tp-menu-item">
          <a href="#">sheltaoffice@gmail.com</a>
        </p>
        <p class="tp-menu-item">
          <a href="#">(+234) 0806 179 6909</a>
        </p>
      </div>
    </div>
  </b-container>
</template>

<script>
import NewsletterForm from "@/layouts/components/NewsletterForm";
export default {
  components: {
    NewsletterForm,
  },
};
</script>

<style>
.tp-title {
  font-family: "Gotham Medium", sans-serif;
  font-size: 1.875em;
  color: #0033ea;
  letter-spacing: -0.05em;
}
.tp-title {
  letter-spacing: -0.05em;
}
.tp-menu-header {
  font-family: "Gotham Medium", sans-serif;
  font-size: 1.125em;
  text-transform: uppercase;
  letter-spacing: -0.05em;
}
.tp-menu-item {
  font-size: 0.875em;
  transition: 0.5s ease;
}
.tp-menu-item:hover {
  cursor: pointer;
  opacity: 0.8;
}
.tp-menu-item a {
  text-decoration: none;
  color: #000000;
}
</style>
