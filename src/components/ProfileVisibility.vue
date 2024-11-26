<template>
			<div class="content">
			<h4 class="title">Show your profile in Launchpad?</h4>
			<div class="radio_group">
					<label 
					class="radio_label"
					v-for="item in radio_items" 
					:key="item" >
						<input
							class="radio_input"
							v-model="visibility"
							type="radio"
							name="visibility"
							:value="item"
						
						/>
						{{ item }}
					</label>
			</div>
		</div>
</template>

<script setup>
import { useProfileStore } from "@/stores/profile";
import {computed} from "vue"

const profileStore = useProfileStore();
const emit = defineEmits(['update_form_data']);

const radio_items = ["Private", "Public"];

const visibility = computed({
  get: () => profileStore.profile_data.visibility, 
  set: (value) => {
    emit('update_form_data', { name: 'visibility', value }); 
  }
});
</script>

<style  scoped>
.content {
	width: 100%;
	margin-top: 24px;
	display: flex;
	color: var(--gray-medium);
	flex-direction: column;
	align-items: start;
	gap: 16px;
}

.title {
	font-weight: 400;
}

.radio_group {
	display: flex;
	justify-content: start;
	align-items: center;
	gap: 32px;
}

.radio_label {
	cursor: pointer;
	font-size: 16px;
	line-height: 16px;
	display: flex;
	align-items: center;
	gap: 14px;
}

.radio_input {
	position: relative;
	appearance: none;
	height: 16px;
	width: 16px;
	background-color: transparent;
	border: 1px solid var(--gray-dark);
	border-radius: 100%;
	vertical-align: text-bottom;
}

.radio_input:before {
	content: "";
	position: absolute;
	margin: auto;
	top: -2px;
	left: -2px;
	right: 0;
	bottom: 0;
	overflow: hidden;
}

.radio_input:checked::before {
	border: 5px solid transparent;
	border-radius: 100%;
	background: var(--gray-dark);
	margin: 4px;
}
</style>