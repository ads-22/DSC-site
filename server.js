const express = require("express");
const path = require("path");


const port = 9000;

const app = express();


app.use(express.static(path.join(__dirname, 'public')));

console.log(__dirname + 'DSC-site')



app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/DSC-site' ,'index.html'));
})





app.listen(process.env.PORT || port, () => {
    console.log('Server listening on port ' + port);
});