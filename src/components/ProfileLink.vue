<template>
		<li class="link_item">
			<span
				class="name">
				{{site_name}}
			</span>
			<a
				class="link"
				href="url"
				target="_blank"
				rel="noopener noreferrer">
				{{url}}
			</a>
			<button
				type="button"
				class="remove_button"
				@click="$emit('remove')"
			>
			<BasketIcon/>
			</button>
		</li>
</template>

<script setup>
import BasketIcon from "@/assets/images/basket.svg"
const props = defineProps({
  site_name: String,
  url: String,
});
const emit = defineEmits(["remove"]);
</script>

<style scoped>
.link_item {
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 10px;
}

.name,
.link {
	line-height: 24px;
	color: var(--gray-medium);
	border-bottom: 1px solid var(--gray-medium);
}

.name {
	grid-area: name;
	min-width: 40%;
}

.link {
	grid-area: link;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	outline: none;
	transition: transform var(--transition), color var(--transition);
}

.link:hover {
	transform: translateY(-2px);
}

.link:focus {
	color: var(--neutral-black);
}

.remove_button {
	grid-area: bascket;
	flex: 0 0 auto;
	width: 24px;
	height: 24px;
	justify-self: end;
	outline: none;
	cursor: pointer;
}

.remove_button svg {
	width: 100%;
	height: 100%;
	fill: var(--gray-medium);
	transition: fill var(--transition), transform var(--transition);
}

.remove_button:focus svg {
	fill: var(--neutral-black);
}

.remove_button:hover svg {
	fill: var(--error);
}

.remove_button:active svg {
	transform: translateY(1px);
}

@media (max-width: 480px) {
	.link_item {
		display: grid;
		grid-template-areas: "name name" "link bascket";
	}

	.link_item span {
		width: 40%;
	}
}
</style>