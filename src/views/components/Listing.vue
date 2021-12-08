<template>
  <b-card
    id="listing"
    :img-src="imgSrc"
    img-alt="Card image"
    img-top
    class="d-inline-block w-100"
  >
    <b-card-text>
      <p style="font-size: 1.25em; letter-spacing: -0.05em">{{ name }}</p>
      <p
        v-if="oldPrice"
        style="
          letter-spacing: -0.05em;
          color: #91958f;
          text-decoration: line-through;
          margin-bottom: -0.2em;
        "
      >
        &#8358;
        {{ oldPrice }}
        <span style="font-family: 'Gotham Book', sans-serif">m</span>
      </p>
      <p
        style="
          font-family: 'Gotham Medium', sans-serif;
          font-size: 1.375em;
          letter-spacing: -0.05em;
        "
      >
        &#8358;
        {{ price }}<span style="font-family: 'Gotham Book', sans-serif">m</span>
      </p>
      <div class="d-flex justify-content-between">
        <p
          style="
            font-family: 'Gotham Medium', sans-serif;
            font-size: 1.125em;
            letter-spacing: -0.05em;
          "
        >
          3 <span style="font-family: 'Gotham Book', sans-serif">beds</span>
        </p>
        <p
          style="
            font-family: 'Gotham Medium', sans-serif;
            font-size: 1.125em;
            letter-spacing: -0.05em;
          "
        >
          2 <span style="font-family: 'Gotham Book', sans-serif">baths</span>
        </p>
        <p
          style="
            font-family: 'Gotham Medium', sans-serif;
            font-size: 1.125em;
            letter-spacing: -0.05em;
          "
        >
          1,307 <span style="font-family: 'Gotham Book', sans-serif">sqft</span>
        </p>
      </div>
      <p style="letter-spacing: -0.05em; font-size: 1.125em">
        {{ address }}
      </p>
      <div v-if="type === 'outright'" class="badge outright-badge">
        Outright Purchase
      </div>
      <div v-else-if="type === 'mortgage'" class="badge mortgage-badge">
        Mortgage
      </div>
      <div v-else class="badge distress-badge">Distress Sale</div>
    </b-card-text>
  </b-card>
</template>

<script>
export default {
  props: {
    imgSrc: {
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    oldPrice: {
      type: String,
    },
    address: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
#listing {
  transition: 0.5s ease;
}
#listing:hover {
  cursor: pointer;
  box-shadow: 6px 6px 22px rgba(0, 0, 0, 0.15);
}
.outright-badge {
  background: rgba(255, 177, 0, 0.5);
  color: #6c6c6c;
  font-size: 1.125em;
  letter-spacing: -0.05em;
  display: inline-block;
  padding: 0.5em 1em;
  border: 0.01em solid #ffb100;
  border-radius: 50px;
}
.mortgage-badge {
  background: rgba(47, 198, 67, 0.5);
  color: #6c6c6c;
  font-size: 1.125em;
  letter-spacing: -0.05em;
  display: inline-block;
  padding: 0.5em 1em;
  border: 0.01em solid #2fc643;
  border-radius: 50px;
}
.distress-badge {
  background: rgba(236, 86, 86, 0.5);
  color: #6c6c6c;
  font-size: 1.125em;
  letter-spacing: -0.05em;
  display: inline-block;
  padding: 0.5em 1em;
  border: 1px solid #ea0000;
  border-radius: 50px;
}
.badge:hover {
  cursor: pointer;
}
</style>
