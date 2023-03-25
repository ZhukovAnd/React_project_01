
export const requiredField = (value) => {
    return (
        value ? undefined
            : "Нельзя отправить пустое поле!!!"
    )
}

export const maxLengthCreator = (maxLength) => (value) => {
    if (value.length > maxLength) return `Максимальное колличество ${maxLength} символов  !!!`;
    return undefined;
}