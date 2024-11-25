<template>
	<div>
		<h2 class="title">Tasks:</h2>
		<ul class="list">
			<CardItem v-for="task in tasks" :key="task.id" v-bind="task" @action-click="handleCreateTask" />
		</ul>
	</div>
</template>

<script setup>
import { useProfileStore } from "@/stores/profile";
import CardItem from "./CardItem.vue";

const profileStore = useProfileStore();
const tasks = profileStore.profile_data.tasks;

const handleCreateTask = (id) => {
	//TODO: create a function that creates a task
	console.log("Clicked task ID:", id);
};
</script>

<style scoped>
.title {
	font-family: var(--inter-medium);
	font-size: clamp(22px, 5vw, 48px);
}

.list {
	margin-top: clamp(22px, 5vw, 48px);
	display: flex;
	flex-wrap: wrap;
	justify-content: start;
	align-items: center;
	gap: 20px;
}

@media (max-width: 1139px) {
	.list {
		justify-content: center;
	}
}
</style>