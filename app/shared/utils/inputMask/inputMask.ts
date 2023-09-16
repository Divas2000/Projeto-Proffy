/**
 * Returns a string containing only letters
 * @param value string to be modified
 * @returns a new string modified
 */
export const onlyLettersMask = (value: string) => {
  return value.replace(/[0-9\\><!|@#¨}'{"/?$%^&*)(+=,[\]:;._-]+/g, "");
};

/**
 * Returns a string containing only numbers
 * @param value string to be modified
 * @returns a new string modified
 */
export const onlyNumbersMask = (value: string) => {
  return value.replace(/\D/g, "");
};

/**
 * Returns a string in the phone format:
 * `(00) 90000-0000`
 * @param value string to be modified
 * @returns a new string modified
 */
export const phoneMask = (value: string) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{5})(\d)/, "$1-$2")
    .replace(/-(\d{4})(\d)/, "-$1");
};

/**
 * Returns a string in the time format:
 * `00:00`
 * @param value string to be modified
 * @returns a new string modified
 */
export const timeMask = (value: string) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "$1:$2")
    .replace(/:(\d{2})(\d)/, ":$1");
};

/**
 * Returns a string in the currency format:
 *
 * `R$ 0,01` | ... | `R$ 10,00` | `R$ 100,00` [...]
 * @param value string to be modified
 * @returns a new string modified
 */
export const currencyMask = (value: string) => {
  value = value.replace(/\D/g, "");
  value = `${"R$"} ${value}`;

  return value
    .replace(/(\d)(\d{2})$/, "$1,$2")
    .replace(/(?=(\d{3})+(\D))\B/g, ".");
};
