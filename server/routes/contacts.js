const Contact = require('./models/Contact');

app.get('/contacts', async (req, res, next) => {
  try {
    const contacts = await Contact.findAll();
    res.json(contacts);
  } catch (err) {
    next(err);
  }
});