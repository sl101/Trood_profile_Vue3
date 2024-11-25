import { defineStore } from 'pinia';
import * as validators from '@/services/validation';

const default_profile_data = {
	name: "",
	lastname: "",
	jobTitle: "",
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
		profile_data: { ...default_profile_data },
		validationErrors: {}
	}),
	getters: {
		form_data: (state) => {
			const { projects, tasks, ...formData } = state.profile_data;
			return formData;
		},
		//avatar: (state) => (state.profile_data.avatar),
		//projects: (state) => (state.profile_data.projects),
		//tasks: (state) => (state.profile_data.tasks),
		//links: (state) => (state.profile_data.links),
		//interests: (state) => (state.profile_data.interests),
		//potential_interests: (state) => (state.profile_data.potential_interests),
		//visibility: (state) => (state.profile_data.visibility),
		hasErrors: (state) => Object.keys(state.validationErrors).length > 0,
	},
	actions: {
		//saveProfileData(data) {
		//	this.profile_data = { ...this.profile_data, ...data };
		//	localStorage.setItem("profile_data", JSON.stringify(this.profile_data));
		//},

		validateField(fieldName, value) {
			const validator = validators[`validate${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}`];
			if (validator) {
				const error = validator(value);
				if (error) {
					this.validationErrors[fieldName] = error;
				} else {
					delete this.validationErrors[fieldName];
				}
			}
		},

		loadProfileData() {
			const data = localStorage.getItem("profile_data");
			this.profile_data = data ? JSON.parse(data) : { ...default_profile_data };
		},

		updateProfileField(fieldName, value) {
			this.validateField(fieldName, value);
			if (!this.validationErrors[fieldName]) {
				this.profile_data[fieldName] = value;
				localStorage.setItem("profile_data", JSON.stringify(this.profile_data));
			}
		},
	}
});
