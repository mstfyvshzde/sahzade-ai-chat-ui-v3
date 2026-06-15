# Sahzade AI Chat UI V3

A simple local chat interface connected to the Sahzade AI backend.

## Overview

Sahzade AI Chat UI V3 is the third step of the Sahzade AI project.

In V1, a local Llama-based model was fine-tuned using LoRA.
In V2, the fine-tuned model was connected to a local FastAPI backend.
In V3, a simple chat interface was created to test and demonstrate the assistant more easily.

The goal of this version is to move from terminal/API testing to a basic visual chat experience.

## Project Goals

* Create a simple local chat screen
* Connect the interface to the V2 FastAPI backend
* Send user messages to the local `/chat` endpoint
* Display assistant responses on the screen
* Show basic API connection status
* Prepare the project for future desktop or full app versions

## What This Version Includes

* Local chat interface
* User and assistant message bubbles
* Connection to the V2 backend
* Loading state while waiting for responses
* API status indicator
* Screenshot-ready demo layout
* Local frontend run script

## What This Version Does Not Include

* User authentication
* Database storage
* Chat history persistence
* Advanced frontend framework
* Production deployment
* Standalone backend

The backend is handled by the V2 local chat API project.

## How It Works

```text
User writes a message
    ↓
Chat interface sends the message to the local API
    ↓
V2 FastAPI backend receives the message
    ↓
Local Llama model with LoRA adapter generates a response
    ↓
The response appears in the chat interface
```

## Backend Requirement

This interface requires the V2 backend to be running first.

Backend address:

```text
http://127.0.0.1:8000
```

Frontend address:

```text
http://127.0.0.1:5500
```

## Project Structure

```text
sahzade-ai-chat-ui-v3/
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   ├── app.js
│   └── config.js
│
├── screenshots/
│   └── chat_ui_demo.png
│
├── scripts/
│   └── run_frontend.sh
│
├── README.md
└── .gitignore
```

## Main Components

### `frontend/index.html`

Contains the main chat screen structure.

### `frontend/style.css`

Controls the visual appearance of the local chat interface.

### `frontend/app.js`

Handles message sending, response display, loading state, and API error handling.

### `frontend/config.js`

Stores the local backend API address.

```text
http://127.0.0.1:8000/chat
```

### `scripts/run_frontend.sh`

Starts the local frontend server.

## How to Run

### 1. Start the V2 backend

Open Terminal 1:

```bash
cd path/to/sahzade-ai-local-chat-api-v2
./scripts/run_api.sh
```

The backend should run at:

```text
http://127.0.0.1:8000
```

### 2. Start the chat UI

Open Terminal 2:

```bash
chmod +x scripts/run_frontend.sh
./scripts/run_frontend.sh
```

The interface should open at:

```text
http://127.0.0.1:5500
```

## Demo Screenshot

```text
screenshots/chat_ui_demo.png
```

## Future Improvements

* Improve visual design
* Add local chat history
* Add feedback buttons
* Add model status display
* Add memory and RAG indicators
* Build a more complete desktop interface later

## Project Status

Completed as V3 local chat interface experiment.
