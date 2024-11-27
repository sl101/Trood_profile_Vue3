<template>
	<button
			type="button"
			@click="$emit('click')"
			:class="{ btn: true, [content]: !!content }"
		>{{text}}</button>
</template>

<script setup>
const props = defineProps({
	text:String,
	content:String
})

const emit = defineEmits(['click']);
</script>

<style  scoped>
.btn {
	width: 20px;
	height: 20px;
	z-index: 30;
	right: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 20px;
	line-height: 20px;
	border: 1px solid transparent;
	color: var(--gray-medium);
	border-radius: 100%;
	outline: none;
	cursor: pointer;
	transition: color var(--transition), border-color var(--transition), opacity var(--transition), visibility var(--transition), background-color var(--transition);
}

.btn_add,
.btn_cancel,
.btn_remove {
	position: absolute;
	background-color: var(--brand-primary);
	border-color: var(--gray-medium);
}

.btn_add {
	top: 0;
	transform: translate(70%, -50%);
}

.btn_cancel {
	bottom: 0;
	transform: translate(70%, 50%);
}

.btn_remove {
	top: 0;
	transform: translate(50%, -50%) rotate(45deg);
	opacity: 0;
	visibility: hidden;
}

.btn:hover {
	color: var(--neutral-black);
	border-color: var(--neutral-black);
	background-color: var(--brand-secondary);
}

.btn:focus {
	border-color: var(--gray-medium);
}
</style>