const User = require('../models/user');


exports.createUser = async (req, res, next) => {
  console.log("Creating a user", req.body);

  try{
    const user = await User.create(req.body);
  
    console.log('User cerated - ', user);
  
    res.json(user);
  } catch (err) {
    console.log(err);
    res.json({error: true, err: err});
  }
};

exports.getUserById = async (req, res, next) => {
  let userId = req.params.id;

  console.log('Userid -> ', userId);

  try{
    const user = await User.findById(userId);
  
    res.json(user)
  }catch (err) {
    console.log(err);
    res.json({error: true, err: err});
  }
}

exports.getUserByNumber = async (req, res, next) => {
  console.log("Getting a user");
  const vehicleNo = req.params?.number;
  console.log(vehicleNo);
  
  try{
    let user = await User.findOne({vehicleNo: vehicleNo});
  
    console.log("user details for car", user);
  
    let data = {};
  
    if(user){
      data = {
        userExists: true,
        user: user
      }
    } else {
      data = {
        userExists: false
      }
    }
  
    res.json({data});
  }catch (err) {
    console.log(err);
    res.json({error: true, err: err});
  }

}

exports.updateUserById = async (req, res, next) => {
  let userId = req.params.id;
  let user = req.body.user;

  console.log('body- ', req.body);
  console.log('Userid -> ', userId);
  console.log('Updated details -> ', user);

  try{

    const updatedUser = await User.updateOne({_id: userId}, user);

    res.json(updatedUser);
  }catch (err) {
    console.log(err);
    res.json({error: true, err: err});
  }
}