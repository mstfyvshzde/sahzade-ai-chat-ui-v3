# Sahzade AI — Chat UI V3

## Overview

**Sahzade AI Chat UI V3** is a simple local web interface for the Sahzade AI assistant.

In V1, a small LoRA adapter was fine-tuned for short conversational responses.
In V2, that adapter was connected to a local FastAPI chat API.
In V3, a clean browser-based chat interface was built and connected to the V2 backend.

The goal of this version is to make the local assistant easier to test and demonstrate through a simple web UI.

---

## Project Goal

The main goal of this project is to create a frontend interface that can:

* display a local chat screen
* accept user messages from an input box
* send messages to the V2 FastAPI backend
* receive assistant responses from the API
* show both user and assistant messages in the browser
* provide a simple local demo for the Sahzade AI assistant

---

## Project Scope

This version includes:

* HTML chat layout
* CSS dark Apple-style interface
* JavaScript frontend logic
* connection to the V2 `/chat` endpoint
* loading message while waiting for response
* API status badge
* local frontend server script
* screenshot-ready UI demo

This version does **not** include:

* user authentication
* database storage
* production deployment
* advanced frontend framework
* chat history persistence in the browser
* standalone backend

The backend is handled by **Sahzade AI Local Chat API V2**.

---

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

---

## Demo Screenshot

![Sahzade AI Chat UI V3 Demo](screenshots/chat_ui_demo.png)

---

## How It Works

```text
User types a message
        ↓
Frontend JavaScript sends POST request
        ↓
V2 FastAPI backend receives the message
        ↓
Llama 3.1 + LoRA adapter generates response
        ↓
Frontend receives the response
        ↓
Assistant message appears in the browser
```

---

## Backend Requirement

This frontend requires the **Sahzade AI Local Chat API V2** backend to be running in the background.

V2 backend address:

```text
http://127.0.0.1:8000
```

V3 frontend address:

```text
http://127.0.0.1:5500
```

The V2 backend must have CORS enabled for:

```text
http://127.0.0.1:5500
http://localhost:5500
```

---

## Main Files

### `frontend/index.html`

Creates the main chat interface.

It includes:

* app title
* local API status badge
* chat message area
* text input
* send button
* links to CSS and JavaScript files

---

### `frontend/style.css`

Controls the visual design of the chat UI.

The design uses:

* dark background
* rounded chat card
* user and assistant message bubbles
* Apple-style spacing
* simple responsive layout
* clean local API status badge

---

### `frontend/config.js`

Stores the backend API URL.

```js
const API_CONFIG = {
  BASE_URL: "http://127.0.0.1:8000",
  CHAT_ENDPOINT: "http://127.0.0.1:8000/chat"
};
```

---

### `frontend/app.js`

Handles the frontend logic.

Main responsibilities:

* read user input
* add user message to the screen
* send message to the V2 API
* show loading message
* receive assistant response
* add assistant response to the screen
* show API error if backend is unavailable

---

### `scripts/run_frontend.sh`

Starts the frontend using Python’s built-in HTTP server.

```bash
./scripts/run_frontend.sh
```

Default frontend address:

```text
http://127.0.0.1:5500
```

---

## How to Run

### 1. Start V2 Backend

Open Terminal 1:

```bash
cd "$HOME/Documents/sahzade-ai-local-chat-mini (v2)"
./scripts/run_api.sh
```

The V2 API should run at:

```text
http://127.0.0.1:8000
```

Test backend health:

```bash
curl http://127.0.0.1:8000/health
```

Expected response:

```json
{"status":"ok","model_loaded":true}
```

---

### 2. Start V3 Frontend

Open Terminal 2:

```bash
cd "$HOME/Documents/sahzade-ai-chat-ui-v3"
./scripts/run_frontend.sh
```

The frontend should run at:

```text
http://127.0.0.1:5500
```

---

### 3. Open Browser

Open:

```text
http://127.0.0.1:5500
```

Type a message and press **Send**.

---

## Test Messages

The frontend was tested with these messages:

```text
salam
nə var nə yox
tamam
ok
görüşərik
```

---

## Test Results

| User Message    | Assistant Response | Evaluation             |
| --------------- | ------------------ | ---------------------- |
| `salam`         | `Salam dostum.`    | Good                   |
| `nə var nə yox` | `Əla, yaxşı.`      | Good                   |
| `tamam`         | `Əla, buradayam.`  | Acceptable             |
| `ok`            | `Əla, buradayam.`  | Acceptable but generic |
| `görüşərik`     | `Əla, görüşərik.`  | Good                   |

---

## Debugging Note

At first, the frontend showed:

```text
API connection error. Make sure V2 backend is running.
```

The V2 API was running correctly, but the browser could not send requests because CORS was not enabled.

The issue was fixed by adding CORS middleware to the V2 FastAPI backend.

After enabling CORS, the frontend successfully connected to the V2 `/chat` endpoint.

---

## Current Status

```text
Status: Completed as V3 local frontend experiment
```

This version successfully connects a browser-based chat interface to the Sahzade AI Local Chat API V2 backend.

The project now has:

* fine-tuned LoRA adapter from V1
* local FastAPI backend from V2
* working browser chat interface from V3

---

## Limitations

This version is not a production-ready web application.

Main limitations:

* frontend only works locally
* requires V2 API to run separately
* no persistent browser chat history
* no authentication
* no deployment
* model responses are still limited by the V1 fine-tuned adapter
* some responses are generic

---

## Future Improvements

Possible next improvements:

* improve the visual UI
* add clear chat button
* add API health check on page load
* add message timestamps
* add local chat history
* add feedback buttons
* create a stronger V2 fine-tuned adapter
* later combine frontend and backend into a single full-stack demo

---

## Version Summary

```text
V1 → LoRA fine-tuning experiment
V2 → Local FastAPI chat API
V3 → Browser-based local chat UI
```

Sahzade AI Chat UI V3 is a successful frontend demo for testing the local assistant through a clean browser interface.
