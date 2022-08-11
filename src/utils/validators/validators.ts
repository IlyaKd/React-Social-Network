export type FieldValidatorType = (value: string) => string | undefined

export const required: FieldValidatorType = (value) => {
    if (value) return undefined;
    return 'Field is required';
}

export const maxLengthCreator = (maxLenth: number): FieldValidatorType => (value) => {
    if (value.length > maxLenth) return `Max length is ${maxLenth} symbols`;
    return undefined;
}