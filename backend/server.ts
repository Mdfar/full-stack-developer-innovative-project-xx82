import express from 'express'; import cors from 'cors'; import axios from 'axios';

const app = express(); app.use(cors()); app.use(express.json());

const AI_SERVICE_URL = process.env.AI_SERVICE_URL || 'http://localhost:8000';

app.post('/api/query', async (req, res) => { try { const { query, userId } = req.body;

    // Logic for tracking user activity and checking permissions
    console.log(`User ${userId} requested analysis: ${query}`);

    // Forwarding to the specialized Python AI microservice
    const aiResponse = await axios.post(`${AI_SERVICE_URL}/v1/analyze`, {
        query,
        context_id: userId
    });

    res.json(aiResponse.data);
} catch (error) {
    res.status(500).json({ error: 'AI Orchestration failed' });
}


});

app.listen(3001, () => console.log('Node.js Gateway running on port 3001'));