import { defineStore } from 'pinia';
import * as validators from '@/services/validation';

const default_profile_data = {
	name: "",
	lastname: "",
	job_title: "",
	phone: "",
	address: "",
	interests: [],
	potential_interests: [],
	links: [],
	avatar: null,
	visibility: "Private",
	projects: [{ id: 1, title: "Create project" }],
	tasks: [{ id: 1, title: "Create task" }],
};

export const useProfileStore = defineStore('profile', {
	state: () => ({
		profile_data: JSON.parse(localStorage.getItem("profile_data")) || { ...default_profile_data },
		validation_errors: {},
	}),
	getters: {
		formData: (state) => {
			const { projects, tasks, ...form_data } = state.profile_data;
			return form_data;
		},
		hasErrors: (state) => Object.keys(state.validation_errors).length > 0,
	},
	actions: {
		validateField(field_name, value) {
			const validator = validators[`validate${field_name.charAt(0).toUpperCase() + field_name.slice(1)}`];
			if (validator) {
				const error = validator(value);
				if (error) {
					this.validation_errors[field_name] = error;
				} else {
					delete this.validation_errors[field_name];
				}
			}
		},

		updateProfileField(field_name, value) {
			this.validateField(field_name, value);
			if (!this.validation_errors[field_name]) {
				this.profile_data[field_name] = value;
				this.saveProfileData();
			}
		},

		saveProfileData() {
			localStorage.setItem("profile_data", JSON.stringify(this.profile_data));
		},
	},
});
