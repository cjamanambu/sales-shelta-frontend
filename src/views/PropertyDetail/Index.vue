<template>
  <b-container fluid id="property-details">
    <Controls />
    <div class="d-flex flex-lg-row flex-column">
      <div class="mr-lg-5 mb-lg-0 mb-5">
        <Details />
      </div>
      <InquiryForm />
    </div>
  </b-container>
</template>

<script>
import Controls from "@/views/components/Controls";
import Details from "@/views/PropertyDetail/Details";
import InquiryForm from "@/views/PropertyDetail/components/InquiryForm";

export default {
  components: {
    Controls,
    Details,
    InquiryForm,
  },
};
</script>

<style></style>
