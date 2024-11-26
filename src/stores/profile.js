import { defineStore } from "pinia";
import { api } from "@/services/storageService";
import * as validators from "@/services/validation";

const default_profile_data = {
	name: "",
	lastname: "",
	job_title: "",
	phone: "",
	email: "",
	address: "",
	experience: "",
	interests: [],
	potential_interests: [],
	links: [],
	avatar: null,
	visibility: "Private",
	projects: [{ id: 1, title: "Create project" }],
	tasks: [{ id: 1, title: "Create task" }],
};

export const useProfileStore = defineStore("profile", {
	state: () => ({
		profile_data: { ...default_profile_data },
		validation_errors: {},
		is_loading: false,
	}),
	getters: {
		formData: (state) => {
			const { projects, tasks, ...form_data } = state.profile_data;
			return form_data;
		},
		formInputs: (state) => {
			const { interests, potential_interests, links, avatar, visibility, projects, tasks, ...form_data } = state.profile_data;
			return form_data;
		},
		hasErrors: (state) => Object.keys(state.validation_errors).length > 0,
	},
	actions: {
		async fetchProfileData() {
			this.is_loading = true;
			try {
				const data = await api.fetchProfile();
				this.profile_data = data || { ...default_profile_data };
			} catch (error) {
				console.error("Failed to fetch profile data:", error);
			} finally {
				this.is_loading = false;
			}
		},

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

		async updateProfileField(field_name, value) {
			this.validateField(field_name, value);
			if (!this.validation_errors[field_name]) {
				this.profile_data[field_name] = value;
			}
		},

		async saveProfileData() {
			try {
				const updatedData = await api.updateProfile(this.profile_data);
				this.profile_data = updatedData;
			} catch (error) {
				console.error("Failed to save profile data:", error);
			}
		},
	},
});

