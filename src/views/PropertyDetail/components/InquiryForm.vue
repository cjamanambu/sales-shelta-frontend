<template>
  <b-card
    class="p-4"
    :class="[seeMore ? 'inquiry-form-longer' : 'inquiry-form']"
    no-body
  >
    <p style="font-size: 1.4375em; letter-spacing: -0.05em">
      More about this property
    </p>
    <b-form-input
      class="mt-2"
      style="height: 3.75em; border-radius: 50px; padding-left: 2em"
      placeholder="Fullname"
    />
    <b-form-input
      class="mt-3"
      style="height: 3.75em; border-radius: 50px; padding-left: 2em"
      placeholder="Email"
    />
    <b-form-input
      class="mt-3"
      style="height: 3.75em; border-radius: 50px; padding-left: 2em"
      placeholder="Phone"
    />
    <b-form-textarea
      class="mt-3"
      style="border-radius: 10px; height: 9em"
      no-resize
      placeholder="I am interested in the Duplex at No 4Amurie Babale street, maitama Abuja."
    ></b-form-textarea>
    <transition name="slide-fade">
      <p
        v-if="!seeMore"
        class="mt-3"
        style="
          font-family: 'Gotham Light', sans-serif;
          font-size: 0.6875em;
          letter-spacing: -0.05em;
        "
      >
        By proceeding, you consent to receive calls and texts at the number you
        provided, including marketing by autodialer and prerecorded and
        artificial voice,...
      </p>
    </transition>
    <transition name="slide-fade">
      <p v-if="!seeMore" class="see-more" @click="seeMore = !seeMore">
        See more
      </p>
    </transition>
    <transition name="slide-fade">
      <p
        v-if="seeMore"
        class="mt-3"
        style="
          font-family: 'Gotham Light', sans-serif;
          font-size: 0.6875em;
          letter-spacing: -0.05em;
        "
      >
        By proceeding, you consent to receive calls and texts at the number you
        provided, including marketing by autodialer and prerecorded and
        artificial voice. By proceeding, you consent to receive calls and texts
        at the number you provided, including marketing by autodialer and
        prerecorded and artificial voice, and email, from
        <span style="color: #0033ea">myshelta.com</span> about your inquiry but
        not as a condition of any purchase; this applies regardless of whether
        you check, or leave un-checked, any box above. You also agree to our
        Terms of Use, and to our Privacy Policy regarding the information
        relating to you. Msg/data rates may apply. <br />
        <span style="color: #0033ea">
          This consent applies even if you are on a corporate, state or small
          holding.
        </span>
      </p>
    </transition>
    <transition name="slide-fade">
      <p v-if="seeMore" class="see-more" @click="seeMore = !seeMore">
        See less
      </p>
    </transition>
    <b-button
      class="secondary-btn mt-3"
      style="border-radius: 60px; height: 2.8125em"
    >
      Submit
    </b-button>
  </b-card>
</template>

<script>
export default {
  data() {
    return {
      seeMore: false,
    };
  },
};
</script>

<style>
.inquiry-form {
  border-radius: 10px;
  max-height: 600px;
  max-width: 400px;
  transition: 0.2s ease;
}
.inquiry-form-longer {
  border-radius: 10px;
  max-height: 700px;
  max-width: 400px;
  transition: 0.2s ease;
}
.see-more {
  font-size: 0.6875em;
  color: #0033ea;
  text-decoration: underline;
  transition: 0.5s ease;
}
.see-more:hover {
  cursor: pointer;
  opacity: 0.8;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.slide-fade-enter-active {
  transition: all 0.01s ease;
}
.slide-fade-leave-active {
  transition: all 0.01s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
