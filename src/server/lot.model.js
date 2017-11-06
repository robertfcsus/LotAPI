const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const lotSchema = new Schema(
  {
    lotId: { type: Number, required: true, unique: true },
    lotState: String,
    lotType: String,
    lotName: String,
    lotVacancy: Number,
    lotGeoLat: String,
    lotGeoLong: String,
    lotDescription: String
  },
  {
    collection: 'ParkingLots'
  }
);

const LotModel = mongoose.model('LotModel', lotSchema);

module.exports = LotModel;