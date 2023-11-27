const contactService = require('../service/contactService');
const freshSalesService = require('../service/freshSalesService');

exports.createContact = async (req, res, next) => {
    const { first_name, last_name, email, mobile_number,data_store } = req.body;
    try {
    
        if (data_store === 'CRM') {
            res.json(await refreshSalesService.createContact(
                first_name,
                last_name,
                email,
                mobile_number
            ));
        } else if (data_store === 'DATABASE') {
            res.json(await contactService.createContact(
                first_name,
                last_name,
                email,
                mobile_number
            ));
        }
    } catch (error) {
        next(error);
    }
  };
  
  exports.getContact = async (req, res, next) => {
    const { contact_id,data_store } = req.body;
    
    try {
        if (data_store === 'CRM') {
            res.json(await freshSalesService.getContact(contact_id)); 
        } else if (data_store === 'DATABASE') {
            res.json(await contactService.getContact(contact_id));
        }
    } catch (error) {
        next(error);
    }
  };
  
  exports.updateContact = async (req, res, next) => {
    const { new_email, new_mobile_number,contact_id,data_store } = req.body;
    try {
        if (data_store === 'CRM') {
            res.json(await freshSalesService.updateContact(
                contact_id,
                new_email,
                new_mobile_number
            ));
        } else if (data_store === 'DATABASE') {
            res.json(await contactService.updateContact(
                contact_id,
                new_email,
                new_mobile_number
            ));
        }
    } catch (error) {
        next(error);
    }
  };
  
  exports.deleteContact = async (req, res, next) => {
    const { contact_id,data_store } = req.body;
  
    try {
        if (data_store === 'CRM') {
            res.json(await freshSalesService.deleteContact(contact_id));
        } else if (data_store === 'DATABASE') {
            res.json(await contactService.deleteContact(contact_id));
        }  
    } catch (error) {
        next(error);
    }
  };