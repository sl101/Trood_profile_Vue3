<template>
	  <CustomDialog
    ref="error_dialog"
    :message="dialog_message"
    :type="dialog_class"
    @closed="closeModal"
  />
	<form class="form" @submit.prevent="handleSave">
		<AvatarUploader />

		<ProfileData @update_form_data="updateFormData" />

		<ProfileVisibility @update_form_data="updateFormData" />

		<ProfileInterests ref="profile_interests_ref_1" title="The scope of your interest:" entity="interests"
			@update_errors="handleErrors" @update_form_data="updateFormData" />

		<ProfileInterests ref="profile_interests_ref_2" title="Potential Interests:" entity="potential_interests"
			@update_errors="handleErrors" @update_form_data="updateFormData" />

		<ProfileLinks @update_form_data="updateFormData" />

		<div class="controls">
			<button type="submit" class="btn">
				Save
			</button>
			<button type="button" @click="handleCancel" class="btn">
				Cancel
			</button>
		</div>
	</form>
</template>

<script setup>
import { ref } from "vue";
import { useProfileStore } from "@/stores/profile";
import AvatarUploader from "./AvatarUploader.vue";
import ProfileData from "./ProfileData.vue";
import ProfileVisibility from "./ProfileVisibility.vue";
import ProfileInterests from "./ProfileInterests.vue";
import ProfileLinks from "./ProfileLinks.vue";
import CustomDialog from "./CustomDialog.vue";

const profileStore = useProfileStore();

const error_dialog = ref(null);
const dialog_message = ref("");
const dialog_class = ref("");

const profile_interests_ref_1 = ref(null);
const profile_interests_ref_2 = ref(null);

const handleSave = async () => {
	await profileStore.saveProfileData();
	dialog_class.value = "success";
	dialog_message.value = "Data saved";
	profile_interests_ref_1.value?.cancelInterest();
	profile_interests_ref_2.value?.cancelInterest();
	error_dialog.value?.showDialog();
};

const handleCancel = () => {
	profileStore.fetchProfileData();
};

const updateFormData = (newData) => {
	profileStore.updateProfileField(newData.name, newData.value);
};

const handleErrors = (message) => {
	if (message) {
		dialog_message.value = message;
		dialog_class.value = "error";
		error_dialog.value?.showDialog();
	}
};

const closeModal = () => {
	dialog_message.value = "";
};

</script>

<style scoped>
.form {
	font-family: var(--roboto);
	padding: 106px 50px 40px;
	max-width: 790px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	background: var(--brand-gradient);
	border-radius: 24px;
}

.controls {
	margin-top: clamp(20px, 6vw, 40px);
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 20px;
}

.btn {
	font-family: var(--roboto);
	width: 100%;
	padding-block: clamp(10px, 3vw, 20px);
	border: 1px solid var(--gray-dark);
	border-radius: 12px;
	background-color: transparent;
	color: var(--neutral-black);
	outline: none;
	text-transform: uppercase;
	cursor: pointer;
	transition: background-color var(--transition), border-color var(--transition), color var(--transition);
}

.btn:hover {
	background-color: var(--brand-secondary);
}

.btn:focus {
	border-color: var(--neutral-black);
	color: var(--neutral-black);
}

@media (max-width: 480px) {
	.controls {
		flex-wrap: wrap;
	}
}

dialog {
	margin: auto;
	width: 70%;
	display: flex;
	justify-content: center;
	align-items: center;
	opacity: 0;
	scale: 1.05;
	border-radius: 12px;
	border: none;
}

dialog[open] {
	opacity: 1;
	scale: 1;
}

dialog form {
	width: 100%;
	background-color: var(--neutral-light);
	padding: 20px 40px;
	color: var(--black-color);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 20px;
	transition: all 0s ease-in-out;
}

dialog .success {
	border-radius: 12px;
	border: 2px solid var(--success);
	color: var(--success);
}

dialog .error {
	border-radius: 12px;
	border: 2px solid var(--error);
	color: var(--error);
}


.close_dialog {
	align-self: end;
	padding: 6px 12px;
	border-radius: 12px;
	cursor: pointer;
	border: 1px solid var(--gray-medium);
	transition: background-color var(--transition);
}

.close_dialog:hover {
	background-color: var(--neutral-dark);
	border-color: var(--neutral-dark);
	color: var(--neutral-light);
}
</style>