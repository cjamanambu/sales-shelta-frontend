<template>
  <b-card
    id="blog-post"
    :img-src="require('@/assets/images/blog-1.svg')"
    img-alt="Card image"
    img-top
    class="d-inline-block w-100"
  >
    <p style="opacity: 0.8; letter-spacing: -0.05em">
      The Property Brothers Spot a ‘Comical’ Feature No Home Should Ever Have...
    </p>
    <div class="d-flex justify-content-between">
      <p class="bp-action">Read article</p>
      <p class="bp-author d-flex">
        <b-img
          fluid
          class="mr-2"
          style="height: 1.2em"
          :src="require('@/assets/icons/blog-avatar.svg')"
        />
        Admin
      </p>
    </div>
  </b-card>
</template>

<script>
export default {};
</script>

<style>
#blog-post {
  box-shadow: 6px 6px 22px rgba(0, 0, 0, 0.15);
}
.bp-action {
  font-size: 0.9em;
  letter-spacing: -0.05em;
  color: #0033ea;
  transition: 0.5s ease;
}
.bp-action:hover {
  cursor: pointer;
  opacity: 0.8;
}
.bp-author {
  font-size: 0.9em;
  letter-spacing: -0.05em;
  color: #6c6c6c;
}
</style>
