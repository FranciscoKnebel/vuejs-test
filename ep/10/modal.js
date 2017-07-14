Vue.component("modal", {
	template: `
		<transition name="fade2">
	    <div class="modal is-active">
	      <div class="modal-background" @click="$emit('close')"></div>
	      <div class="modal-content">
	        <div class="box">
						<slot></slot>
	        </div>
	      </div>
	      <button class="modal-close is-large" @click="$emit('close')"></button>
	    </div>
		</transition>
  `,
});
