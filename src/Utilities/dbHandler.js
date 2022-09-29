const getDataFromLocalStorage = () =>
	JSON.parse(localStorage.getItem('activity-break-time')) || 0;

const addDataToLocalStorage = (data) =>
	localStorage.setItem('activity-break-time', JSON.stringify(data));

export { getDataFromLocalStorage, addDataToLocalStorage };
