export const validatePassword = (password: string) => {
  const hasMinLength = password.length >= 12;
  const hasLetterAndNumber = /^(?=.*[A-Za-z])(?=.*\d).+$/.test(password);

  return {
    hasMinLength,
    hasLetterAndNumber,
    isValid: hasMinLength && hasLetterAndNumber,
  };
};
