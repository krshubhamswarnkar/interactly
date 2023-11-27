const freshSalesService = require('./freshSalesService');
const contactService = require('./contactService');

class DualService {
  async createContact(firstName, lastName, email, mobileNumber) {
    try {
      // Step 1: Create contact in FreshSales
      const freshSalesResult = await freshSalesService.createContact(
        firstName,
        lastName,
        email,
        mobileNumber
      );

      // const freshSalesResult = {
      //   "contact":{
      //     "id":1
      //   }
      // }
      
      // Step 2: Create contact in MySQL
      const contactResult = await contactService.createContact(
        freshSalesResult.contact.id,
        firstName,
        lastName,
        email,
        mobileNumber
      );

      return { freshSalesResult};
    } catch (error) {
      throw error;
    }
  }

  async getContact(contactId) {
    try {
      // Step 1: Get contact from FreshSales
      const freshSalesResult = await freshSalesService.getContact(contactId);
      
      // Step 2: Get contact from MySQL
      const contactResult = await contactService.getContact(contactId);

      return { freshSalesResult };
    } catch (error) {
      throw error;
    }
  }

  async updateContact(contactId, newEmail,newMobileNumber) {
    try {
      //Step 1: Update contact in FreshSales
      const freshSalesResult = await freshSalesService.updateContact(
        contactId,
        newEmail,
        newMobileNumber
      );
      
      // Step 2: Update contact in MySQL
      const contactResult = await contactService.updateContact(
        contactId,
        newEmail,
        newMobileNumber
      );

      return { freshSalesResult};
    } catch (error) {
      throw error;
    }
  }

  async deleteContact(contactId) {
    try {
      // Step 1: Delete contact from FreshSales
      const freshSalesResult = await freshSalesService.deleteContact(contactId);

      // Step 2: Delete contact from MySQL
      const contactResult = await contactService.deleteContact(contactId);

      return { freshSalesResult };
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new DualService();