import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    const prevContacts = await readContacts();
    const contact = createFakeContact();
    prevContacts.push(contact);
    await writeContacts(prevContacts);
  } catch (err) {
    console.error(err);
  }
};

addOneContact();
