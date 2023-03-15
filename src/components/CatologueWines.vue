<template>
  <div
    class="wrapper px-4 max-w-4xl w-full h-full flex flex-wrap items-start justify-start gap-8
      lg:flex lg:flex-wrap lg:items-center lg:justify-center 
      md:flex md:flex-wrap md:items-center md:justify-center
      sm:flex sm:flex-wrap sm:items-center sm:justify-center
      xs:flex xs:flex-wrap xs:items-center xs:justify-center"
  >
    <CotologueItemCard
      v-for="catologueWine in catologueWineCards"
      :key="catologueWine.id"
      :catologue-wine="catologueWine"
    />
  </div>
</template>

<script setup>
import CotologueItemCard from './CotologueItemCard.vue';


defineProps({
  catologueWineCards: {
    type: Array,
    default: ()=>[]
  }
});
</script>


<style scoped>
.wrapper{
  margin: 0 auto;
}

</style>
