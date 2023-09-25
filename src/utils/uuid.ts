export const uuid = () =>
  "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (char) => {
    const rand = (Math.random() * 16) | 0;
    const val = char === "x" ? rand : (rand & 0x3) | 0x8;
    return val.toString(16);
  });
