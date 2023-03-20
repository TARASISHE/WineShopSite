<template>
  <div class="spinner_wrapper">
    <img
      class="spinner"
      src="../assets/img/spinner-svgrepo-com.svg"
      alt=""
    >
  </div>
</template>
  
<script setup>
  
  
</script>
  
  <style scoped>

.spinner_wrapper{
 width: 100%;
 height: 100%;
 background-color: rgba(0, 0, 0, 0.8);
 position: fixed;
 top: 0;
 left: 0;
 z-index: 900;
}
  .spinner {
    animation: rotate 2s linear infinite;
    z-index: 2;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -25px 0 0 -25px;
    width: 50px;
    height: 50px;
    color: #FFF;
    background-color: #FFF;
    border-radius: 50%;
  }
 
  
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  
  @media screen and (max-width:767px){
    .spinner{
      top: 30%;
      width: 25px;
      height: 25px;
    }
  }
  
  </style>
  
