export const clearSpecialCharacters = (text: string) => text.replace(/[^a-zA-Z0-9]/g, '').trim()