<template>
    <div>
        <custom-component ref="customComponent"></custom-component>
    </div>
</template>
<script>
  import CustomComponent from './CustomComponent.vue';

  export default {
    components: {
      CustomComponent
    },
    methods: {
      doSomething() {
        this.$refs.customComponent.helloWorld();
      }
    }
  };
</script>
<style>
</style>
