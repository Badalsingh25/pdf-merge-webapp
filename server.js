const express = require('express')
const path = require('path')
const app = express()
const multer  = require('multer')
const {mergePdfs}  = require('./merge')


const upload = multer({ dest: 'uploads/' })
app.use('/static', express.static('public'))

const port = 3000

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,"templates/index.html"));
})

app.post('/merge', upload.array('pdfs'), async (req, res, next)=> {

  console.log(req.files)

   try {
    if (!req.files || req.files.length === 0) {
      
      return res.status(400).send('No PDF files uploaded.Please,check it!');
    }
  
    let filePaths = req.files.map(file => path.join(__dirname, file.path));
  let d=await mergePdfs(filePaths);

  res.redirect(`http://localhost:3000/static/${d}.pdf`);
  // res.send({data:req.files})

    }  catch (err) {
    console.error(err);
    res.status(500).send('Error while merging PDFs.Try again!');
  }
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

