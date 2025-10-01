const path = require('path');
const express = require('express');

const app = express();

const FRONTEND_PATH = path.resolve(__dirname, '..', 'dist');

app.use('/health', (_, res) => {
  res.status(200).send('OK');
});

app.use(express.static(FRONTEND_PATH));

app.get(/.*/, (req, res) => {
  res.sendFile(path.join(FRONTEND_PATH, 'index.html'));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`JohnWebbDotCom Frontend running on port ${PORT}`);
});
