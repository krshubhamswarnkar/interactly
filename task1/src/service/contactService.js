const contactModel = require('../model/contactModel');

class ContactService {
  async createContact(firstName, lastName, email, mobileNumber) {
    try {
      const result = await contactModel.createContact(
        firstName,
        lastName,
        email,
        mobileNumber
      );
      return result;
    } catch (error) {
      throw error;
    }
  }

  async getContact(contactId) {
    try {
      const result = await contactModel.getContact(contactId);
      return result;
    } catch (error) {
      throw error;
    }
  }

  async updateContact(contactId, newEmail, newMobileNumber) {
    try {
      const result = await contactModel.updateContact(
        contactId,
        newEmail,
        newMobileNumber
      );
      return result;
    } catch (error) {
      throw error;
    }
  }

  async deleteContact(contactId) {
    try {
      const result = await contactModel.deleteContact(contactId);
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new ContactService();
