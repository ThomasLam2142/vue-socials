<template>
    <s-facebook
      :window-features="windowFeatures"
      :share-options="shareOptions"
      :use-native-behavior="useNativeBehavior"
      @popup-close="onClose"
      @popup-open="onOpen"
      @popup-block="onBlock"
      @popup-focus="onFocus"
    >
      <img src="../assets/facebook.svg"/>
    </s-facebook>
  </template>
  
  <script>
    import { SFacebook } from 'vue-socials'
  
    export default {
      name: 'SFacebookSharing',
      
      components: { SFacebook },
      
      data() {
        return {
          windowFeatures: {},
          shareOptions: {
            url: 'https://github.com/',
            quote: 'Quote',
            hashtag: '#Github',
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