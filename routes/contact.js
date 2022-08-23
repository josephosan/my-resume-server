const express = require('express');
const validator = require('../middlewares/validationMiddleware');
const contactValidation = require('../validations/contactValidation');
const router = express.Router();
const Contact = require('../models/Contact');

router.get('/', async (req, res) => {
  try {
    const contactData = await Contact.find();

    if(!contactData || contactData.length === 0) {
      res.status(400).json({
        success: true,
        message: 'There is no data in database.'
      });
      return;
    }

    res.status(200).json({
      success: true,
      count: contactData.length,
      data: contactData
    });
  } catch(err) {
    res.status(500).json({
      success: false,
      message: 'Faild to get the messages data from database!', 
      errMessage: err.message
    });
    console.error(err);
  }
});

router.post('/', validator(contactValidation), async (req, res) => {
  try {
    let contactData = new Contact({
      name: req.body.name,
      email: req.body.email,
      subject: req.body.subject,
      message: req.body.message
    });

    contactData = await contactData.save();

    if(!contactData || contactData.length === 0) {
      res.status(400).json({
        success: false,
        message: 'No data returned after saving the form'
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: 'From saved successfully',
      res: contactData
    });
  } catch(err) {
    res.status(500).json({
      success: false,
      message: 'Could not save the form',
      errMessage: err.message
    });
    console.error(err);
  }
});

module.exports = router;
