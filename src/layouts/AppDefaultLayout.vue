<template>
  <div>
    <TopBar />
    <TopBarMobile />
    <Header />
    <transition name="fade" mode="out-in">
      <slot />
    </transition>
    <TopFooter />
  </div>
</template>

<script>
import TopBar from "@/layouts/components/TopBar";
import Header from "@/layouts/components/Header";
import TopBarMobile from "@/layouts/components/TopBarMobile";
import TopFooter from "@/layouts/components/TopFooter";

export default {
  name: "AppDefaultLayout",
  components: {
    TopBar,
    Header,
    TopBarMobile,
    TopFooter,
  },
};
</script>
