const LotModel = require('./lot.model');

require('./mongo').connect();

function getLotsDb(req, res) {
  const docquery = LotModel.find({});
  console.log(`Get Lots Db`);
  docquery
    .exec()
    .then(lots => {
      res.status(200).json(lots);
    })
    .catch(error => {
      res.status(500).send(error);
      return;
    });
}

function postLotDb(req, res) {
    const pLot = { 
      lotId: req.body.lotId, 
      lotState: req.body.lotState,
      lotType: req.body.lotType,
      lotName: req.body.lotName, 
      lotVacancy: req.body.lotVacancy,
      lotGeoLat: req.body.lotGeoLat, 
      lotGeoLong: req.body.lotGeoLong,
      lotDescription: req.body.lotDescription 
    };
    const lLot = new LotModel(pLot);

    lLot.save(error => {
      if (checkServerError(res, error)) return;
      res.status(201).json(lLot);
      console.log('Lot created successfully!');
    });
  }
  
  function checkServerError(res, error) {
    if (error) {
      res.status(500).send(error);
      return error;
    }
  }

module.exports = {
  getLotsDb,
  postLotDb
};