const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.get('/get-ip', (req, res) => {
    const ipAddress = req.ip;
    res.send(ipAddress);
});

// app.get('/', (req, res)=>{
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// })

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
