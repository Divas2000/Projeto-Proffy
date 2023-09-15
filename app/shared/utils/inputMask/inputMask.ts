export const onlyLettersMask = (value: string) => {
  return value.replace(/[0-9\\><!|@#¨}'{"/?$%^&*)(+=,[\]:;._-]+/g, "");
};

export const onlyNumbersMask = (value: string) => {
  return value.replace(/\D/g, "");
};

export const phoneMask = (value: string) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{5})(\d)/, "$1-$2")
    .replace(/-(\d{4})(\d)/, "-$1");
};

export const timeMask = (value: string) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "$1:$2")
    .replace(/:(\d{2})(\d)/, ":$1");
};
