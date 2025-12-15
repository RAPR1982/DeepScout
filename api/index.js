const express = require('express');
const cors = require('cors');
const { players, users } = require('./data/mockData');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Auth Routes
app.post('/api/auth/login', (req, res) => {
    const { email, password } = req.body;
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        const { password, ...userWithoutPassword } = user;
        return res.json({ success: true, user: userWithoutPassword });
    }

    return res.status(401).json({ success: false, message: 'Invalid credentials' });
});

app.post('/api/auth/register', (req, res) => {
    // Mock registration - just return success with a pro user
    /* 
       In a real app, we would validate and save. 
       Here we just simulate a successful registration of a 'Pro' user 
       to allow easier testing of the Pro features.
    */
    const { email, name } = req.body;
    const newUser = { id: Date.now(), email, name, subscription: 'Pro' };
    res.json({ success: true, user: newUser });
});

// Player Routes
// Flexible route handler for Vercel (handles both /api/players and /players)
const getPlayers = (req, res) => {
    let result = [...players];
    const { position, minHeight, maxHeight, minPpg, maxPpg, search } = req.query;

    if (position) {
        const positions = position.split(',');
        result = result.filter(p => positions.includes(p.position));
    }

    if (minHeight) result = result.filter(p => p.height >= parseFloat(minHeight));
    if (maxHeight) result = result.filter(p => p.height <= parseFloat(maxHeight));

    if (minPpg) result = result.filter(p => p.ppg >= parseFloat(minPpg));
    if (maxPpg) result = result.filter(p => p.ppg <= parseFloat(maxPpg));

    if (search) {
        const lowerSearch = search.toLowerCase();
        result = result.filter(p => p.name.toLowerCase().includes(lowerSearch) || p.club.toLowerCase().includes(lowerSearch));
    }

    res.json(result);
};

// Register routes
app.get('/api/players', getPlayers);
app.get('/players', getPlayers); // Fallback if Vercel strips /api

// Health check
app.get('/', (req, res) => res.send('Deep Scout API Running'));

// Export for Vercel
module.exports = app;

// Only start server if run directly (not required as module)
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
}
