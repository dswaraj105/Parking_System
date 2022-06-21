

exports.recoknizeNumber = (req, res, next) => {
  console.log('Recoknizing Number');

  // const userId = req.body.user;
  const image = req.file;
  let imageUrl;

  if (image) {
    imageUrl = image.path;
  } else {
    imageUrl = null;
  }

  console.log(imageUrl);

  res.json({msg: 'Recoknizing NUmber'});
}