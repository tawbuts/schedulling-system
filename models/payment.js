const mongoose = require('mongoose');
 
// User Schema
const PaymentSchema = mongoose.Schema({
   
  schedule: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Schedule' 
  },
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient'
  },
  month: {
    type: Number,
  },
  day: {
    type: Number,
  },
  year: {
    type: Number
  },
  ampm: { 
    type: String
  },
  date: {
    type: Date,
    default: Date.now()
  },
  medicine_total: {
    type: Number
  },
  service_total: {
    type: Number
  },
  grand_total: {
    type: Number
  },
  paid: {
    type: Boolean,
      default: false
  }
    
});

module.exports = mongoose.model('Payment', PaymentSchema);

