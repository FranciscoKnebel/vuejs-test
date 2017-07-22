<template lang="html">
  <div class="box">
    <p>
      <slot></slot>
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="css">
  .box {
    background: #c3c3c3;
    padding: 1em;
    margin: .3em;
    border: 1px solid #3B3B3B;
  }

</style>
