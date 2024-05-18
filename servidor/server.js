const express = require('express');
const app = express();
const porta = 4000;
const storage = require('./multerConfig');
const multer = require('multer');

const upload = multer({storage: storage})

app.post("/upload", upload.single('file'), (req,res) => {
    return res.json(req.file.filename)
})


app.listen(porta, () => {
    console.log(`Servidor rodando na porta http://localhost:${porta}`);
});
