export const modifyCounter = (number) => {
	return {
		type: "MODIFY_COUNTER",
		number,
	};
};
