import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    const prevContacts = await readContacts();
    let contacts = [];
    for (let i = 0; i < number; i++) {
      const data = createFakeContact();
      contacts.push(data);
    }
    await writeContacts([...prevContacts, ...contacts]);
    return contacts;
  } catch (err) {
    console.error(err);
  }
};

generateContacts(5);
