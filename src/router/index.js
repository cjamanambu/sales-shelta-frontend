import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home/Index.vue"),
    meta: {
      title: "Shelta Sales - Property Financing & Management Company",
    },
  },
  {
    path: "/search",
    name: "Search",
    component: () => import("@/views/Search/Index.vue"),
    meta: {
      title: "Search | Shelta Sales - Property Financing & Management Company",
    },
  },
  {
    path: "/property-details/:property",
    name: "PropertyDetails",
    component: () => import("@/views/PropertyDetail/Index.vue"),
    meta: {
      title:
        "Property Details | Shelta Sales - Property Financing & Management Company",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  return next();
});

export default router;
