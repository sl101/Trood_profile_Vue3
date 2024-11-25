<template>
	<div>
		<h2 class="title">{{ title }}</h2>
		<ul class="list">
			<CardItem v-for="item in list" :key="item.id" v-bind="item" @action-click="handleCreateEntity" />
		</ul>
	</div>
</template>

<script setup>
import { useProfileStore } from "@/stores/profile";
import CardItem from "./CardItem.vue";
import { defineProps, computed } from "vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  entity: {
    type: String,
    required: true,
  },
});

const profileStore = useProfileStore();
const list = computed(() => profileStore.profile_data[props.entity]);

const handleCreateEntity = (id) => {
	//TODO: create a function that creates a entity
	console.log("Clicked entity ID:", id);
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
