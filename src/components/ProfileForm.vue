<template>
	<form class="form" @submit.prevent="handleSave">
		<AvatarUploader />
	
	  <ProfileData
		:input_fields="input_fields"
  :form_data="form_data"
  :errors="errors"
  @update_form_data="updateFormData"
    />

    <ProfileVisibility
      :visibility="visibility"
      @update_form_data="updateFormData"
    />

		<!--<ProfileInterests
				title="The scope of your interest:"
				list={formData.interests}
				onSave={(updated_interests) =>
					setFormData((prev) => ({ ...prev, interests: updated_interests }))
				}
			/>-->

		<!--<ProfileInterests
				title="Potential Interests"
				list={formData.potential_interests}
				onSave={(updated_interests) =>
					setFormData((prev) => ({ ...prev, potential_interests: updated_interests }))
				}
			/>-->

		<!--<ProfileLinks
				initial_links={formData.links}
				onSave={(updatedLinks) =>
					setFormData((prev) => ({ ...prev, links: updatedLinks }))
				} />-->

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
import AvatarUploader from "./AvatarUploader.vue"
import ProfileData from "./ProfileData.vue"
import ProfileVisibility from "./ProfileVisibility.vue"
import { useProfileStore } from "@/stores/profile";

const profileStore = useProfileStore();
const errors = profileStore.validation_errors;

const form_data  = profileStore.formInputs
const visibility = profileStore.profile_data.visibility

const input_fields =  [
  { name: "name", type: "text", placeholder: "Name" },
  { name: "lastname", type: "text", placeholder: "Lastname" },
  { name: "job_title", type: "text", placeholder: "Job Title" },
  { name: "phone", type: "text", placeholder: "Phone" },
  { name: "email", type: "email", placeholder: "Email" },
  { name: "address", type: "text", placeholder: "Address" },
  { name: "experience", type: "text", placeholder: "Experience" },
];

// Обработчик сохранения
const handleSave = async () => {
  // Логика для сохранения данных
  console.log('Data saved');
	await profileStore.saveProfileData();
};

// Обработчик отмены
const handleCancel = () => {
  // Логика для отмены
  console.log('Action cancelled');
	profileStore.fetchProfileData()
};

// Обновление данных в store
const updateFormData = (newData) => {
  profileStore.updateProfileField(newData.name, newData.value);
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
}</style>