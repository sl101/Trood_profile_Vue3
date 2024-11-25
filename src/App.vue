<template>
  <Header/>
  <main>
		<ProfilePage/>
  </main>
</template>

<script setup>
import Header from "@/components/Header.vue"
import ProfilePage from "@/components/ProfilePage.vue"
</script>

<style>
.container {
	width: 100%;
	max-width: 1920px;
	padding: 0 clamp(6px, 1.6vw, 15px);
	margin: 0 auto;
}

html {
	font-family: var(--roboto);
	background-color: var(--light-color);
}
</style>
