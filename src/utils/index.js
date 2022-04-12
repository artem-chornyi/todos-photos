export const validation = (value, maxValue, lastSearch) => {
    return /^[0-9]+$/.test(value)
    && value < maxValue
};