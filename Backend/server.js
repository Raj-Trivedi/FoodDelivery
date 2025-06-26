import express from 'express';

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Api Testing');
});

app.use(express.json());

app.post('/toggle-like/:id', (req, res) => {
  const { id } = req.params;
  
  res.json({ message: `Toggled like for item ${id}` });
});

app.post('/add-to-cart/:itemId', (req, res) => {
  const { itemId } = req.params;
  res.json({ message: `Added item ${itemId} to cart` });
});

app.post('/remove-from-cart/:itemId', (req, res) => {
  const { itemId } = req.params;
  res.json({ message: `Removed item ${itemId} from cart` });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});