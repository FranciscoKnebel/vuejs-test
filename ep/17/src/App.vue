<template>
  <div id="app">
    <counter></counter>
  </div>
</template>

<script>
import Counter from "./components/Counter.vue";

export default {
	name: "app",
	data() {
		return {
			msg: "Welcome to Your Vue.js App",
		};
	},
	components: {
		Counter,
	},
};
</script>

<style>

</style>
