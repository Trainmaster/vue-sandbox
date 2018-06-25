<template>
    <div>
        <b-collapse id="collapse"></b-collapse>
        <custom-component></custom-component>
    </div>
</template>
<script>
  import CustomComponent from './CustomComponent.vue';

  export default {
    components: {
      CustomComponent
    }
  };
</script>
<style>
</style>
