export const api = {
	async fetchProfile() {
		// Simulating an API request to get a profile
		return new Promise((resolve) => {
			const data = JSON.parse(localStorage.getItem("profile_data"));
			resolve(data);
			//setTimeout(() => resolve(data), 3000); // Simulation of response delay
		});
	},

	async updateProfile(profileData) {
		// Simulating an API request to update a profile
		return new Promise((resolve) => {
			localStorage.setItem("profile_data", JSON.stringify(profileData));
			resolve(profileData);
			//setTimeout(() => resolve(profileData), 3000); // Simulation of response delay
		});
	},
};
