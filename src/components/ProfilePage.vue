<template>
	<section class="profile_page">
		<h1 class="sr-only">Profile Page</h1>
		<div class="container">
			<div class="loading" v-if="profileStore.is_loading">
				<p>
					Please wait, we are receiving your data <span class="dots"><span>.</span><span>.</span><span>.</span></span>
				</p>
			</div>
			<div v-else class="content">
				<div class="inner">
					<EntitySection entity="projects" title="Projects:" />
					<EntitySection entity="tasks" title="Tasks:" />
				</div>
				<ProfileForm/>
			</div>
		</div>
	</section>
</template>

<script setup>
import { useProfileStore } from "@/stores/profile";
import EntitySection from "./EntitySection.vue";
import ProfileForm from "./ProfileForm.vue";

const profileStore = useProfileStore();

</script>

<style scoped>
.profile_page {
	padding-block: clamp(25px, 3vw, 60px);
}

.loading {
	height: 100vh;
	font-size: 28px;
	margin-top: 10%;
	text-align: center;
}

.dots {
  display: inline-block;
}

.dots span {
  font-size: inherit;
  animation: blink 1.5s infinite;
  opacity: 0;
}

.dots span:nth-child(1) {
  animation-delay: 0s;
}

.dots span:nth-child(2) {
  animation-delay: 0.3s;
}

.dots span:nth-child(3) {
  animation-delay: 0.6s;
}

@keyframes blink {
  0%, 100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}

.content {
	padding-left: 30px;
	display: flex;
	flex-wrap: wrap-reverse;
	justify-content: space-between;
	align-items: center;
	gap: 18px;
}

.inner {
	width: 56%;
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
	gap: clamp(40px, 4vw, 72px);
}

@media (max-width: 1919px) {
	.inner {
		width: 100%;
	}
}

@media (max-width: 1139px) {
	.content {
		padding-left: 0;
		justify-content: center;
		text-align: center;
	}
}
</style>./EntitySection .vue