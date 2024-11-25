export const validateName = (value) => {
	const regex = /^[a-zA-Zа-яА-ЯёЁ\s-]{2,50}$/;
	if (!value) return "Name is required.";
	if (!regex.test(value)) return "Name must be 2-50 characters and contain only letters, spaces, or hyphens.";
	return null;
};

export const validateLastname = (value) => {
	const regex = /^[a-zA-Zа-яА-ЯёЁ\s-]{2,50}$/;
	if (!value) return "Lastname is required.";
	if (!regex.test(value)) return "Lastname must be 2-50 characters and contain only letters, spaces, or hyphens.";
	return null;
};

export const validateJobTitle = (value) => {
	if (value.length > 100) return "Job title must be 100 characters or less.";
	return null;
};

export const validatePhone = (value) => {
	const regex = /^\+\d{10,15}$/;
	if (!value) return "Phone number is required.";
	if (!regex.test(value)) return "Phone must start with '+' and contain 10-15 digits.";
	return null;
};

export const validateEmail = (value) => {
	if (!value) return "Email is required.";
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!emailRegex.test(value)) return "Invalid email format.";
	if (value.length > 100) return "Email must be 100 characters or less.";
	return null;
};

export const validateAddress = (value) => {
	if (value.length > 200) return "Address must be 200 characters or less.";
	return null;
};

export const validateExpirience = (value) => {
	if (!value) return "";

	if (value.length > 500) {
		return "Experience must not exceed 500 characters.";
	}

	return "";
};

export const validateVisibility = (value) => {
	const validOptions = ["Public", "Private"];
	if (!validOptions.includes(value)) return "Invalid visibility option.";
	return null;
};

export const validateInterests = (interests) => {

	let message;

	if (interests.length > 10) {
		message = "You can add up to 10 interests only.";
	}

	interests.forEach(interest => {

		if (interest === "") {
			message = "You must enter a value";
		}
	});

	const invalidInterest = interests.find(
		(interest) =>
			interest.length > 30 ||
			!/^[\wа-яА-ЯёЁ\s.,]+$/u.test(interest.trim())
	);

	if (invalidInterest) {
		message = `Invalid interest: "${invalidInterest}".
		Only letters, numbers, spaces, commas, and dots are allowed. Max length: 30 characters.`;
	}

	return message ? message : null;
};

export const validateProfileLink = (link) => {
	if (!link) {
		return "The link must be a valid URL ";
	}

	if (link.length > 200) {
		return "The link must be 200 characters or less.";
	}

	const urlPattern = /^(https?:\/\/)[^\s/$.?#].[^\s]*$/i;
	if (!urlPattern.test(link.trim())) {
		return "The link must be a valid URL starting with http:// or https://.";
	}

	return "";
};