<template>
	<header>
		<div class="container">
			<div class="wrapper">
				<a href="#">
					<ArrowIcon class="arrow" />
				</a>
				<img class="logo" :src="logo_icon" alt="logo" />
				<p class="page_name">Profile:</p>
			</div>
		</div>
	</header>
</template>

<script setup>
import ArrowIcon from '@/assets/images/arrow.svg';
const logo_icon = new URL('@/assets/images/logo.svg', import.meta.url).href;
</script>

<style scoped>
.wrapper {
	padding-block: clamp(10px, 2vw, 15px);
	display: flex;
	align-items: center;
	justify-content: start;
	gap: clamp(16px, 5vw, 40px);
}

.arrow {
	flex: 0 0 auto;
	width: clamp(20px, 5vw, 40px);
	height: clamp(20px, 5vw, 40px);
	cursor: pointer;
	fill: var(--neutral-black);
	transition: fill var(--transition);
}

.arrow:hover {
	fill: var(--brand-primary);
}

.logo {
	max-width: clamp(160px, 34vw, 320px);
}

.page_name {
	font-family: aeroport;
	font-size: clamp(20px, 5vw, 48px);
}
</style>