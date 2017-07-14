new Vue({
	el: "#root",
	data: {
		newTask: "",
		tasks: [
			{
				description: "Go to store",
				completed: true,
			},
			{
				description: "Finish screencast",
				completed: false,
			},
			{
				description: "Make donation",
				completed: false,
			},
			{
				description: "Clear inbox",
				completed: false,
			},
			{
				description: "Make dinner",
				completed: false,
			},
			{
				description: "Clean room",
				completed: true,
			},
		],
	},
	methods: {
		add() {
			this.tasks.push({ description: this.newTask, completed: false });
			this.newTask = "";
		},
	},
	computed: {
		incompleteTasks() {
			return this.tasks.filter(task => !task.completed);
		},
	},
});
