const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ADD THIS ROUTE:
app.get('/', (req, res) => {
    res.json({ message: "Backend API server is running smoothly!" });
});

app.post('/summarize', async (req, res) => {
  const { text } = req.body;

  try {
    const response = await fetch(
      'https://api.groq.com/openai/v1/chat/completions',
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: 'llama-3.3-70b-versatile',
          messages: [
            {
              role: 'user',
              content: `Summarize this text in 3 clear bullet points:\n\n${text}`
            }
          ]
        })
      }
    );

    const data = await response.json();
    res.json({ summary: data.choices[0].message.content });

  } catch (error) {
    console.error('FULL ERROR:', error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log('Backend running on http://localhost:3000');
});