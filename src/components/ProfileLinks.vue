<template>
	<div class="links_section">
		<h4 class="title">Your links:</h4>
		<ul class="links_list">
			<ProfileLink v-for="link in links" :key="link.id" v-bind="link" @remove="removeLink(link.id)" />
		</ul>

		<div v-if="isAdding">
			<div class="new_link">
				<input type="text" name="site_name" placeholder="Site name" v-model="new_link.site_name" />
				<input type="url" name="url" placeholder="Link" v-model="new_link.url" />
				<CircleButton text="+" @click="handleAddLink" />
				<CircleButton text="-" @click="cancelLink" />

				<p :class="['error', (site_name_error || store_url_error) ? 'active_error' : '']">
					{{ site_name_error || store_url_error }}</p>

			</div>
		</div>
		<div v-else>
			<CircleButton content="add_btn" text="+" @click="setIsAdding" />
		</div>
	</div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { useProfileStore } from "@/stores/profile";
import ProfileLink from "./ProfileLink.vue";
import CircleButton from "./CircleButton.vue";

const profileStore = useProfileStore();
const emit = defineEmits(["update_form_data"]);

const new_link = ref({ site_name: "", url: "" });
const isAdding = ref(false);

const links = computed(() => profileStore.profile_data.links);

const site_name_error = ref(null);
const store_url_error = computed(() => profileStore.validation_errors.links);

watch(
	() => new_link.value.site_name,
	(newValue) => {
		if (!newValue.trim()) {
			site_name_error.value = "Site name is required.";
		} else {
			site_name_error.value = "";
		}
	}
);

watch(
	() => new_link.value.url,
	(newValue) => {
		if (newValue.trim())
			profileStore.validation_errors.links = null;
	}
);

//watch(
//  () => profileStore.validation_errors.links,
//  (newError) => {
//    emit("update_errors", newError);
//  },
//  { immediate: true,  deep: true } 
//);

const setIsAdding = () => {
	isAdding.value = true;
	site_name_error.value = "";
};

const removeLink = (id) => {
	const updatedLinks = links.value.filter((link) => link.id !== id);
	profileStore.updateProfileField("links", updatedLinks);
};

const handleAddLink = () => {
	const { site_name, url } = new_link.value;

	if (!site_name.trim()) {
		site_name_error.value = "Site name is required.";
		return;
	}

	const updatedLinks = [
		...links.value,
		{ id: Date.now(), site_name: site_name.trim(), url: url.trim() },
	];

	profileStore.updateProfileField("links", updatedLinks);

	if (!store_url_error.value)
		resetNewLink();
};

const cancelLink = () => {
	resetNewLink();
};

const resetNewLink = () => {
	new_link.value = { site_name: "", url: "" };
	isAdding.value = false;
	site_name_error.value = "";
	profileStore.validation_errors.links = null;
};

</script>

<style scoped>
.links_section {
	margin-top: 32px;
	width: 100%;
	text-align: left;
	color: var(--gray-medium);
}

.title {
	font-weight: 400;
}

.links_list {
	margin-block: 16px;
	display: flex;
	flex-direction: column;
	gap: 16px;
}

.new_link {
	position: relative;
	display: flex;
	align-items: center;
	gap: 10px;
}

.new_link input {
	flex: 1;
	padding: 5px 0;
	outline: none;
	border: none;
	border-bottom: 1px solid var(--gray-medium);
	background-color: transparent;
}

.new_link input::placeholder {
	color: var(--gray-medium);
	font-size: 16px;
}

.add_btn {
	margin-top: 20px;
}

.error {
	position: absolute;
	top: 0;
	left: 0;
	color: var(--error);
	font-size: 0.9em;
	margin-top: 5px;
	opacity: 0;
	visibility: hidden;
	transition: opacity var(--transition), visibility var(--transition), transform var(--transition);
}

.active_error {
	transform: translateY(130%);
	opacity: 1;
	visibility: visible;
}
</style>