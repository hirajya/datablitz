const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 5000; // You can change this to any port you prefer

// Middleware to handle cross-origin requests
app.use(cors());

// Define the Game schema
const gameSchema = new mongoose.Schema({
  gameName: String,
  price: Number,
  photo: [String]  // Assuming photos are stored as an array of URLs or file paths
});

// Create the Game model
const Game = mongoose.model('Game', gameSchema, 'Games');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/Sample', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB', err));

// API endpoint to get game data
app.get('/api/games', async (req, res) => {
  try {
    const games = await Game.find({}, 'gameName price photo').skip(1).limit(1); // Limit to one game
    if (games.length > 0) {
      const game = games[0];
      // Return the data as JSON
      res.json({
        gameName: game.gameName,
        price: game.price,
        photo: game.photo[0],  // Sending the first photo
      });
    } else {
      res.status(404).json({ message: 'No games found.' });
    }
  } catch (err) {
    console.error('Error retrieving game data:', err);
    res.status(500).json({ message: 'Error retrieving game data.' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});