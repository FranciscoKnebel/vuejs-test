<template>
  <div id="app">
    <message>Hello there</message>
    <message>Another message</message>
    <message>Multiple messages</message>
  </div>
</template>

<script>
import Message from "./components/Message.vue";

export default {
	name: "app",
	components: { Message },
	data() {
		return {};
	},
};
</script>

<style>

</style>
