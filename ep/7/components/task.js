Vue.component("task", {
	props: ["data"],
	template: `
		<transition name="fade">
			<li :class="{ 'is-completed': isCompleted }" class="list-item">
				{{ data.description }}
				<button class="button is-small" :class="{ 'is-info': isCompleted, 'is-primary': !isCompleted }" @click="toggleFinished">
					Toggle
				</button>
			</li>
		</transition>
	`,
	methods: {
		toggleFinished() {
			this.data.completed = !this.data.completed;
		},
	},
	computed: {
		isCompleted() {
			return this.data.completed;
		},
	},
});
