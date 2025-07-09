import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    return await readContacts();
  } catch (err) {
    console.error(err);
  }
};

console.log(await getAllContacts());
