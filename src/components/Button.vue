<template>
  <button :class="[`${btnType}`]">
    <slot></slot>
  </button>
</template>


<script setup>
defineProps({
  btnType: {
    type: String,
    default: 'add'
  }
});
</script>

<style scoped>
.add{
    margin-top: 8px;
    padding: 12px;
    background-color:#dddddd ;
    border-radius: 10px;
    transition: all ease  0.3s;
}

.add:hover{
 opacity: 70%;
 font-weight: 600;
}

.deleted{
    margin-top: 8px;
    padding: 12px;
    background-color:#f75231 ;
    border-radius: 10px;
    transition: all ease  0.3s;
}

.delete:hover{
    opacity: 70%;
 font-weight: 600;
}

</style>