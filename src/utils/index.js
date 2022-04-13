export const validation = (value, maxValue) => {
    return /^[0-9]+$/.test(value)
    && value < maxValue
};

export const checkLocalStorage = (value) => {
    const localStor = localStorage.getItem(value);

    if ( localStor === null ) {
        localStorage.setItem(value, JSON.stringify([]))
    }

    return JSON.parse(localStorage.getItem(value));
};

export const changeLocalStorage = (value, data) => {
    localStorage.setItem(value, JSON.stringify(data))
};