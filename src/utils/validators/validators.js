export const required = value => {
    if (value) return undefined;
    return 'Field is required';
}

export const maxLengthCreator = (maxLenth) => (value) => {
    if (value.length > maxLenth) return `Max length is ${maxLenth} symbols`;
    return undefined;
}
