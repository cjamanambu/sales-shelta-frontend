<template>
  <div>
    <TopBar />
    <TopBarMobile />
    <Header />
    <transition name="fade" mode="out-in">
      <slot />
    </transition>
    <!--    <Footer />-->
  </div>
</template>

<script>
import TopBar from "@/layouts/components/TopBar";
import Header from "@/layouts/components/Header";
import TopBarMobile from "@/layouts/components/TopBarMobile";

export default {
  name: "AppDefaultLayout",
  components: {
    TopBar,
    Header,
    TopBarMobile,
  },
};
</script>
