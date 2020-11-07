const express = require('express')
const bodyParser = require('body-parser')
const multer = require('multer')
const json2csv = require('json2csv').parse
const fs = require('fs')
const path = require('path')

const app = express();
const port = 3333

fields = ['Name', 'Position', 'Salary'];
data = [{
  'Name': 'Test1',
  'Position': 'Manager',
  'Salary': '$10500'
},
{
  'Name': 'Test2',
  'Position': 'Tester',
  'Salary': '$5500'
}, {
  'Name': 'Test3',
  'Position': 'Developer',
  'Salary': '$5500'
}, {
  'Name': 'Test4',
  'Position': 'Team Lead',
  'Salary': '$7500'
}];

//const write = async (fileName, fields, data) => {
  
const folder = path.join(__dirname, './','csv');
  
  if (!fs.existsSync(folder)) {
   fs.mkdirSync(folder) 
  }
   const csv = json2csv(data,fields);  

  // Append file function can create new file too.
  //fs.appendFileSync(folder +'/demo.csv', csv);
  fs.writeFileSync(folder +'/demo1.csv', csv);
  
 //}

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './public/uploads');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  }
});
const upload = multer({ storage: storage }).single('productImage')

app.use(bodyParser.urlencoded({ extended: true }))
app.use('/uploads', express.static('public'));

app.post('/api/v1/upload', function (req, res) {
  upload(req, res, function (err) {
    if (err) {
      return res.status(500).json(err)
    }
    console.log(req.file)
    return res.status(200).send(req.file)
  })

});

app.listen(port, () => {
  console.log(`app is listening on port ${port} `)
})




