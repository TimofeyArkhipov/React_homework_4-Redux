export default function getLocalData (dataName) {
    if (!JSON.parse(localStorage.getItem(dataName))){
        return [];
    } else {
        return JSON.parse(localStorage.getItem(dataName));
    }
}
