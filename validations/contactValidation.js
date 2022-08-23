const yup = require('yup');

const contactSchema = yup.object({
  name: yup
    .string()
    .min(2, 'Name should be at least 2 characters!')
    .max(50, 'Name can\'t be more than 50 characters!')
    .required('Name is required field!'),

  email: yup
    .string()
    .email('Pleas enter a valid email!')
    .min(2, 'Email should be at least 2 characters!')
    .max(50, 'Email cant be more than 50 characters!')
    .required('Email field is required!'),

  subject: yup  
    .string()
    .min(2, 'Subject is at least 2 characters!')
    .max(50, 'Subject cant be more than 50 characters!'),

  message: yup
    .string()
    .min(2, 'Message must be at least 2 characters!')
    .max(250, 'Message cant be more than 250 characters!')
    .required('Message is required!')
    
});

module.exports = contactSchema;