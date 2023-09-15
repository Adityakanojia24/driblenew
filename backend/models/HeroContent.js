
const mongoose = require('mongoose');

const heroContentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
  },
});

const HeroContent = mongoose.model('HeroContent', heroContentSchema);

module.exports = HeroContent;
