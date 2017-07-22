Vue.component("coupon", {
	template: `
    <input placeholder="Enter your coupon code" @blur="onCouponApplied">
  `,
	methods: {
		onCouponApplied() {
			Event.fire("applied");
		},
	},
});

new Vue({
	el: "#root",
	data: {
		couponApplied: false,
	},
	created() {
		Event.listen("applied", () => alert("Handling it"));
	},
});
