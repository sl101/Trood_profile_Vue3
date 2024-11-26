<template>
	<label>
		<div class="preview">
			<div v-if="preview">
				<img :src="preview" alt="Avatar" class="image" />
			</div>
				<PhotoIcon v-else/>
			<input class="input" type="file" accept=".jpg, .jpeg, .png" @change="handleFileChange" />
		</div>
	</label>
</template>

<script setup>
import { useProfileStore } from "@/stores/profile";
import { ref, computed } from 'vue';
import PhotoIcon from '@/assets/images/photo.svg';

const profileStore = useProfileStore();
const avatar = computed(() => profileStore.profile_data.avatar);

const preview = ref(avatar || null); 

const handleFileChange = (event) => {
	const file = event.target.files[0];
	if (file) {
		const reader = new FileReader();
		reader.onload = (e) => { 
			profileStore.updateProfileField("avatar", e.target.result)
		};
		reader.readAsDataURL(file);  
	}
};
</script>

<style scoped>
.preview {
	width: 120px;
	height: 120px;
	border-radius: 50%;
	overflow: hidden;
	background-color: var(--gray-light);
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	transition: background-color var(--transition);
}

.preview:hover{
	background-color: var(--brand-primary);
}

.image {
	width: 100%;
	height: 100%;
	object-fit: cover;
}

.input {
	display: none;
}
</style>