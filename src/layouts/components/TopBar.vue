<template>
  <div class="d-lg-block d-none">
    <b-nav id="top-bar" class="navbar navbar-expand-lg py-0">
      <b-container fluid>
        <div
          class="d-flex justify-content-end justify-content-lg-start pt-1 pt-lg-0"
        >
          <a
            href="#"
            style="
              font-family: 'Gotham Medium', sans-serif;
              color: #ffffff;
              text-decoration: none;
            "
          >
            <fa-icon :icon="['far', 'envelope']" class="mr-2" />
            hello@myshelta.com
          </a>
        </div>
        <div class="py-1 d-flex align-items-center justify-content-end">
          <ul class="navbar-nav d-flex flex-row">
            <li class="nav-item mr-3">
              <a
                href="#"
                class="text-small nav-link"
                style="
                  font-family: 'Gotham Medium', sans-serif;
                  text-decoration: none;
                  color: white;
                "
              >
                <fa-icon :icon="['fab', 'whatsapp']" class="mr-2" />
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
#top-bar {
  background-color: #0033ea;
  color: #ffffff;
}
</style>
