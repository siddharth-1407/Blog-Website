export function CapitalizeFirstLetter(str: string) {
	if (typeof str !== 'string' || str.length === 0) {
		return str; // Return the input as is if it's not a string or an empty string.
	}
	return str.charAt(0).toUpperCase() + str.slice(1);
}
