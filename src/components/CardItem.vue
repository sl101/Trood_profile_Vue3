<template>
  <li class="card_item">
    <h3 class="title">{{ title }}</h3>
    <button class="card_action" @click="handleActionClick">+</button>
  </li>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  id: {
    type: [String, Number],
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});

const emit = defineEmits();
const handleActionClick = () => {
  emit('action-click', props.id);
};
</script>

<style scoped>
.card_item {
	position: relative;
	font-family: var(--inter-regular);
	max-width: 500px;
	width: 100%;
	height: clamp(230px, 30vw, 290px);
	padding: clamp(30px, 4vw, 54px) clamp(26px, 4vw, 44px);
	text-align: start;
	background-color: var(--gray-light);
	color: var(--gray-dark);
	border-radius: 24px;
}

.title {
	font-size: clamp(20px, 4vw, 32px);
}

.card_action {
	position: absolute;
	cursor: pointer;
	outline: none;
	width: 66px;
	height: 66px;
	font-size: 40px;
	right: clamp(10px, 3vw, 32px);
	bottom: clamp(10px, 3vw, 32px);
	border-radius: 50%;
	border: 1px solid transparent;
	color: var(--gray-dark);
	transition: background-color var(--transition), border-color var(--transition);
}

.card_action:hover {
	background-color: var(--brand-primary);
}

.card_action:focus {
	border-color: var(--gray-darks);
}
</style>
