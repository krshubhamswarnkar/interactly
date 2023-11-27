const db = require('../util/db');

class Contact {
  async createContact(firstName, lastName, email, mobileNumber) {
    try {
        
      const [result] = await db.execute(
        'INSERT INTO contacts (first_name, last_name, email, mobile_number) VALUES (?, ?, ?, ?)',
        [firstName, lastName, email, mobileNumber]
      );

      return { id: result.insertId };
    } catch (error) {
      throw error;
    }
  }

  async getContact(contactId) {
    try {
      const [result] = await db.execute(
        'SELECT * FROM contacts WHERE id = ?',
        [contactId]
      );

      if (result.length === 0) {
        return null;
      }

      return result[0];
    } catch (error) {
      throw error;
    }
  }

  async updateContact(contactId, newEmail, newMobileNumber) {
    try {
      await db.execute(
        'UPDATE contacts SET email = ?, mobile_number = ? WHERE id = ?',
        [newEmail, newMobileNumber, contactId]
      );

      return { success: true };
    } catch (error) {
      throw error;
    }
  }

  async deleteContact(contactId) {
    try {
      await db.execute('DELETE FROM contacts WHERE id = ?', [contactId]);
      return { success: true };
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new Contact();
