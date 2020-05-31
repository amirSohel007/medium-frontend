import { LOCAL_STORAGE_KEY } from "./../config/variables";
function localStorageServiceClass() {
	const isDataPresent = (_) => (getRawData() ? true : false);
	const getRawData = (_) => window.localStorage.getItem(LOCAL_STORAGE_KEY);
	const getData = (_) => JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEY));
	const setData = (data) => window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
	const getUserName = (_) => JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEY)).firstName ?? "";
	const clearData = (_) => window.localStorage.removeItem(LOCAL_STORAGE_KEY);

	return { isDataPresent, getRawData, getData, setData, getUserName, clearData };
}

export const localStorageService = new localStorageServiceClass();

export default localStorageService;
