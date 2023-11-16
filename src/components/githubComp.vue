<template>
    <s-github
      :window-features="windowFeatures"
      :share-options="shareOptions"
      :use-native-behavior="useNativeBehavior"
      @popup-close="onClose"
      @popup-open="onOpen"
      @popup-block="onBlock"
      @popup-focus="onFocus"
    >
      <img src="../assets/github-mark.svg"/>
    </s-github>
  </template>
  
<script>
    import { SGithub } from 'vue-socials'
  
    export default {
      name: 'SGithubSharing',
      
      components: { SGithub },
      
      data() {
        return {
          windowFeatures: {},
          shareOptions: {
            username: 'thomaslam2142',
            type: 'profile',
          },
          useNativeBehavior: false,
        }
      },
      
      methods: {
        onClose() {},
        onOpen() {},
        onBlock() {},
        onFocus() {},
      }
    };
</script>