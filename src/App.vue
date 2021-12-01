<template>
  <div>
    <AppLayout id="app">
      <router-view />
    </AppLayout>
  </div>
</template>

<script>
import AppLayout from "./layouts/AppLayout";

export default {
  components: { AppLayout },
};
</script>

<style>
@font-face {
  font-family: "Gotham Book";
  font-style: normal;
  font-weight: normal;
  src: local("Gotham Book"), url("./fonts/GothamBook.woff") format("woff");
}

@font-face {
  font-family: "Gotham Book Italic";
  font-style: italic;
  font-weight: normal;
  src: local("Gotham Book Italic"),
    url("./fonts/GothamBookItalic.woff") format("woff");
}

@font-face {
  font-family: "Gotham Light";
  font-style: normal;
  font-weight: normal;
  src: local("Gotham Light"), url("./fonts/GothamLight.woff") format("woff");
}

@font-face {
  font-family: "Gotham Light Italic";
  font-style: italic;
  font-weight: normal;
  src: local("Gotham Light Italic"),
    url("./fonts/GothamLightItalic.woff") format("woff");
}

@font-face {
  font-family: "Gotham Medium";
  font-style: normal;
  font-weight: normal;
  src: local("Gotham Medium"), url("./fonts/GothamMedium.woff") format("woff");
}

@font-face {
  font-family: "Gotham Medium 1";
  font-style: normal;
  font-weight: normal;
  src: local("Gotham Medium 1"),
    url("./fonts/GothamMedium_1.woff") format("woff");
}

@font-face {
  font-family: "Gotham Medium Italic";
  font-style: normal;
  font-weight: normal;
  src: local("Gotham Medium Italic"),
    url("./fonts/GothamMediumItalic.woff") format("woff");
}

@font-face {
  font-family: "Gotham Bold";
  font-style: normal;
  font-weight: normal;
  src: local("Gotham Bold"), url("./fonts/GothamBold.woff") format("woff");
}

@font-face {
  font-family: "Gotham Bold Italic";
  font-style: italic;
  font-weight: normal;
  src: local("Gotham Bold Italic"),
    url("./fonts/GothamBoldItalic.woff") format("woff");
}

@font-face {
  font-family: "Gotham Black Regular";
  font-style: normal;
  font-weight: normal;
  src: local("Gotham Black Regular"),
    url("./fonts/GothamBlack.woff") format("woff");
}

@font-face {
  font-family: "Gotham Light Regular";
  font-style: normal;
  font-weight: normal;
  src: local("Gotham Light Regular"),
    url("./fonts/GothamLight.woff") format("woff");
}

@font-face {
  font-family: "Gotham Thin Regular";
  font-style: normal;
  font-weight: normal;
  src: local("Gotham Thin Regular"),
    url("./fonts/GothamThin.woff") format("woff");
}

@font-face {
  font-family: "Gotham XLight Regular";
  font-style: normal;
  font-weight: normal;
  src: local("Gotham XLight Regular"),
    url("./fonts/GothamXLight.woff") format("woff");
}

@font-face {
  font-family: "Gotham Book Italic";
  font-style: italic;
  font-weight: normal;
  src: local("Gotham Book Italic"),
    url("./fonts/GothamBookItalic.woff") format("woff");
}

@font-face {
  font-family: "Gotham Thin Italic";
  font-style: italic;
  font-weight: normal;
  src: local("Gotham Thin Italic"),
    url("./fonts/GothamThinItalic.woff") format("woff");
}

@font-face {
  font-family: "Gotham Ultra Italic";
  font-style: italic;
  font-weight: normal;
  src: local("Gotham Ultra Italic"),
    url("./fonts/GothamUltraItalic.woff") format("woff");
}

@font-face {
  font-family: "Gotham XLight Italic";
  font-style: italic;
  font-weight: normal;
  src: local("Gotham XLight Italic"),
    url("./fonts/GothamXLightItalic.woff") format("woff");
}
</style>

<style lang="scss">
#app {
  font-family: "Gotham Book", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
