export const api = {
	async fetchProfile() {
		// Simulating an API request to get a profile
		return new Promise((resolve) => {
			const data = JSON.parse(localStorage.getItem("profile_data"));
			setTimeout(() => resolve(data), 1500); // Simulation of response delay
		});
	},

	async updateProfile(profileData) {
		// Simulating an API request to update a profile
		return new Promise((resolve) => {
			localStorage.setItem("profile_data", JSON.stringify(profileData));
			setTimeout(() => resolve(profileData), 1500); // Simulation of response delay
		});
	},
};
