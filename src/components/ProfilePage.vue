<template>
	<section class="profile_page">
    <!--<Notification
      v-if="message"
      :message="message"
      @close="message = ''"
    />-->
    <h1 class="sr-only">Profile Page</h1>
    <div class="container">
      <div class="content">
        <div class="inner">
          <ProjectsSection />
          <TasksSection />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import ProjectsSection from "./ProjectsSection.vue"
import TasksSection from "./TasksSection.vue"
</script>

<style scoped>
.profile_page {
	padding-block: clamp(25px, 3vw, 60px);
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
</style>