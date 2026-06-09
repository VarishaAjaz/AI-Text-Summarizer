# AI Text Summarizer

An AI-powered text summarization app built with Angular and Node.js.

## Live Demo
[Add your Vercel link here after deployment]

## Tech Stack
- **Frontend:** Angular 19, Tailwind CSS
- **Backend:** Node.js, Express
- **AI:** Groq API (LLaMA 3.3 70B)

## Architecture
The app uses a Node.js backend proxy to securely call the Groq AI API,
preventing direct browser exposure of API keys and bypassing network restrictions.

## Features
- Paste any text and get a 3-point AI summary instantly
- Copy summary to clipboard
- Loading state with spinner
- Error handling

## How to Run Locally

### Backend
```bash
cd backend
npm install
# Create .env file with: GROQ_API_KEY=your_key_here
node server.js
```

### Frontend
```bash
npm install
ng serve
```

## What I Learned
- Building a full-stack AI app from scratch
- Why AI APIs should never be called directly from the browser
- Debugging real API errors (rate limits, decommissioned models, network blocks)
- Securing API keys using environment variables