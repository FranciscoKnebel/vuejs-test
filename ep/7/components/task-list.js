Vue.component("task-list", {
	props: ["tasks"],
	template: `
		<ul>
				<task v-for="task in tasks" :data="task"></task>
		</ul>
	`,
});
