<template>
  <div class="d-lg-none">
    <b-nav id="top-bar-mobile" class="navbar navbar-expand-lg py-0">
      <b-container fluid>
        <div
          class="d-flex justify-content-start pt-1 pt-lg-0"
          style="font-size: 0.7em"
        >
          <a
            href="#"
            style="
              font-family: 'Gotham Book', sans-serif;
              color: #ffffff;
              text-decoration: none;
              letter-spacing: -0.05em;
            "
          >
            <fa-icon
              :icon="['far', 'envelope']"
              class="mr-1"
              style="font-size: 1.2em"
            />
            hello@myshelta.com
          </a>
        </div>
        <div
          class="pt-1 d-flex align-items-center justify-content-end"
          style="font-size: 0.7em"
        >
          <ul class="navbar-nav d-flex flex-row">
            <li class="nav-item">
              <a
                href="#"
                class="text-small nav-link"
                style="
                  font-family: 'Gotham Book', sans-serif;
                  text-decoration: none;
                  color: #ffffff;
                  letter-spacing: -0.05em;
                "
              >
                <fa-icon
                  :icon="['fab', 'whatsapp']"
                  class="mr-1"
                  style="font-size: 1.2em"
                />
                (+234) 0806 179 6909
              </a>
            </li>
          </ul>
        </div>
      </b-container>
    </b-nav>
  </div>
</template>

<script>
export default {};
</script>

<style>
#top-bar-mobile {
  background-color: #0033ea;
  color: #ffffff;
}
</style>
