const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ message: 'Express test app deployed via Buildr System' });
});

app.get('/health', (req, res) => {
  res.json({ status: 'healthy', service: 'buildr-test-express' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
