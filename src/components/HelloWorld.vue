<script setup>
import githubComp from './githubComp.vue'
import facebookComp from './facebookComp.vue'
</script>

<template>
  <div>
    <a class="twitter-share-button" href="https://twitter.com/intent/tweet?text=Hello%20world">
    <img src="../assets/twitter.svg" alt="Twitter" />
    </a>
  </div>

  <div> 
    <githubComp />  
  </div>
  
  <div>
    <facebookComp  />
  </div>
  

</template>

<style scoped>

</style>
