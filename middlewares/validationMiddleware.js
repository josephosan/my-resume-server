const validator = (schema) => async (req, res, next) => {
  try {
    await schema.validate(req.body);
    next();
  } catch(err) {
    res.status(500).json({
      success: false,
      errMessage: err.message
    });
  }
}

module.exports = validator;