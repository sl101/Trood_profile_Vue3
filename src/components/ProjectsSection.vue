<template>
	<div>
		<h2 class="title">Projects:</h2>
		<ul class="list">
			<CardItem v-for="project in projects" :key="project.id" v-bind="project" @action-click="handleCreateProject" />
		</ul>
	</div>
</template>

<script setup>
import { useProfileStore } from "@/stores/profile";
import CardItem from "./CardItem.vue";

const profileStore = useProfileStore();
const projects = profileStore.profile_data.projects;

const handleCreateProject = (id) => {
	//TODO: create a function that creates a project
	console.log("Clicked project ID:", id);
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
