<template>
  <div>
    <TopBar />
    <!--    <Header />-->
    <transition name="fade" mode="out-in">
      <slot />
    </transition>
    <!--    <Footer />-->
  </div>
</template>

<script>
import TopBar from "@/layouts/components/TopBar";

export default {
  name: "AppDefaultLayout",
  components: {
    TopBar,
  },
};
</script>
