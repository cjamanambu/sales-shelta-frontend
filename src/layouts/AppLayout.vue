<template>
  <component :is="layout">
    <transition name="fade" mode="out-in">
      <slot />
    </transition>
  </component>
</template>

<script>
const defaultLayout = "AppDefaultLayout";
export default {
  computed: {
    layout() {
      const layout = this.$route.meta.layout || defaultLayout;
      return () => import(`../layouts/${layout}.vue`);
    },
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition-duration: 1s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
