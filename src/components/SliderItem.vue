<template>
  <div>
    <img
      :src="(itemData.image)"
      class="rounded-2xl w-[1280px] lg:w-[1024px] md:w-[767px] sm:w-[639px]  xs:w-[370px] xs:h-[100px]"
      alt="foto"
    >
  </div>
</template>

<script setup>
defineProps({
  itemData: {
    type: Object,
    default: ()=>{}
  }
});
</script>
