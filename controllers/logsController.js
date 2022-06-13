const Logs = require('../models/logs');

exports.enteryLog = async (req, res, next) => {
  console.log('Entry of a car', req.body);

  const data = {
    number: req?.body?.number,
    // entryTime: req?.body?.number || new Date()
  }

  console.log(data);

  try{
    const entryLog = await Logs.create(data);
    res.json(entryLog);
  } catch(err){
    console.log(err);
    res.json({err: err});
  }

}


exports.exitLog = async (req, res, next) => {
  console.log('Exit of a car', req.body);

  

}