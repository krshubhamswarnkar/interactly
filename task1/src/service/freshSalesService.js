const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

class FreshSalesService {
  constructor() {
    this.apiKey = process.env.FRESHSALES_API_KEY;
    this.baseUrl = 'https://api.freshsales.io/api/';
  }

  
  async createContact(firstName, lastName, mobileNumber) {
    try {
      const response = await axios.post(
        `${this.baseUrl}/contacts`,
        {
          contact: {
            first_name: firstName,
            last_name: lastName,
            mobile_number: mobileNumber,
          },
        },
        {
          headers: {
            'Authorization': `Token token=${this.apiKey}`,
            'Content-Type': 'application/json',
          },
        }
      );

      return response.data;
    } catch (error) {
      throw error;
    }
  }
  async getContact(contactId) {
    try {
      const response = await axios.get(`${this.baseUrl}/contacts/${contactId}`, {
        headers: {
          'Authorization': `Token token=${this.apiKey}`,
        },
      });

      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async updateContact(contactId, newMobileNumber, customField) {
    try {
      const response = await axios.put(
        `${this.baseUrl}/contacts/${contactId}`,
        {
          contact: {
            mobile_number: newMobileNumber,
            custom_field: customField,
          },
        },
        {
          headers: {
            'Authorization': `Token token=${this.apiKey}`,
            'Content-Type': 'application/json',
          },
        }
      );

      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async deleteContact(contactId) {
    try {
      const response = await axios.delete(`${this.baseUrl}/contacts/${contactId}`, {
        headers: {
          'Authorization': `Token token=${this.apiKey}`,
        },
      });

      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new FreshSalesService();
