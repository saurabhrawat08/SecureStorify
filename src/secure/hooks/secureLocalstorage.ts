import { getEncryptData, getDecryptData } from '../security';

const setEncryptedLocalStorage = (key: string, value: any): void => {
    try {
        const encryptedValue = getEncryptData(value);
        if (encryptedValue) {
            localStorage.setItem(key, encryptedValue);
        } else {
            console.error('Error encrypting the value');
        }
    } catch (error) {
        console.error('Error setting encrypted localStorage:', error);
    }
};

const getDecryptedLocalStorage = (key: string): any | null => {
    try {
        const value = localStorage.getItem(key);
        if (value) {
            return getDecryptData(value);
        } else {
            console.error('No data found for the given key');
            return null;
        }
    } catch (error) {
        console.error('Error getting decrypted localStorage:', error);
        return null;
    }
};

export { setEncryptedLocalStorage, getDecryptedLocalStorage };