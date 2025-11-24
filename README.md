<h1 align="center">Real Time Screening Interview Platform ✨</h1>

![GitHub license](https://img.shields.io/badge/License-MIT-blue.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![Stream.io](https://img.shields.io/badge/Stream-FF7A00?style=for-the-badge&logo=stream&logoColor=white)

---

### ✨ [Site](https://rts-interview-platform-sxidsvit.vercel.app/)

---

✨ Highlights:

- 🔐 Authentication via Clerk
- 🎥 1-on-1 Video Interview Rooms
- 🧭 Dashboard with Live Stats
- 🔊 Mic & Camera Toggle, Screen Sharing & Recording
- 💬 Real-time Chat Messaging
- ⚙️ Secure Code Execution in Isolated Environment
- 🎯 Auto Feedback — Success / Fail based on test cases
- 🎉 Confetti on Success + Notifications on Fail
- 🧩 Practice Problems Page (solo coding mode)
- 🔒 Room Locking — allows only 2 participants
- 🧠 Background Jobs with Inngest (async tasks)
- 🧰 REST API with Node.js & Express
- ⚡ Data Fetching & Caching via TanStack Query
- 🚀 Deployment on Vercel

### ✨ Key Features

- **Real-Time Video Calls:** Conduct interviews using built-in audio and video communication powered by Stream Video.
- **Collaborative Code Editor:** A shared, interactive code editor for collaboratively solving algorithmic tasks and evaluating programming skills.
- **Authentication:** Secure and fast user authentication for interviewers and candidates using **Clerk**.
- **Session Management:** Create and manage unique interview sessions (`callId`) tied to specific problems (`problem`, `difficulty`) and sessions (`sessionId`).

### ⚙️ Tech Stack

| Category             | Technology         | Description                                                                       | Documentation Link                                      |
| :------------------- | :----------------- | :-------------------------------------------------------------------------------- | :------------------------------------------------------ |
| **Framework**        | Next.js            | A React framework for building full-stack web applications.                       | [Next.js Docs](https://nextjs.org/docs)                 |
| **Language**         | TypeScript         | Strictly typed superset of JavaScript for improved code reliability.              | [TypeScript Docs](https://www.typescriptlang.org/docs/) |
| **Real-Time**        | Stream Video       | API for rapid integration of audio and video calling features.                    | [Stream Video Docs](https://getstream.io/video/docs/)   |
| **Authentication**   | Clerk              | A complete solution for user authentication and management.                       | [Clerk Docs](https://clerk.com/docs)                    |
| **Styling**          | Tailwind CSS       | A utility-first CSS framework for rapid UI development.                           | [Tailwind CSS Docs](https://tailwindcss.com/docs)       |
| **Database**         | MongoDB / Mongoose | A flexible, scalable NoSQL database (if applicable).                              | [MongoDB Docs](https://www.mongodb.com/docs/)           |
| **Background Tasks** | Inngest            | Robust platform for running background tasks, scheduling and processing webhooks. | [Inngest Docs](https://www.inngest.com/docs)            |

---

![]()<img src="demo.gif" alt="demo gif" width="654" height="322" style="display: block; margin-left:100px ;">

---

### 🛠️ Getting Started

Follow these steps to set up the project locally.

#### 1. Prerequisites

Ensure you have the following installed:

- Node.js (v18+ recommended)
- npm or Yarn

#### 2. Installation

1.  Clone the repository:
    ```bash
    git clone [https://github.com/sxidsvit/rts-interview-platform.git](https://github.com/sxidsvit/rts-interview-platform.git)
    cd rts-interview-platform
    ```
2.  Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

### 🧪 .env Setup

#### Backend (`/backend`)

```bash
PORT=3000
NODE_ENV=development

DB_URL=your_mongodb_connection_url

INNGEST_EVENT_KEY=your_inngest_event_key
INNGEST_SIGNING_KEY=your_inngest_signing_key

STREAM_API_KEY=your_stream_api_key
STREAM_API_SECRET=your_stream_api_secret

CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

CLIENT_URL=http://localhost:5173
```

#### Frontend (`/frontend`)

```bash
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key

VITE_API_URL=http://localhost:3000/api

VITE_STREAM_API_KEY=your_stream_api_key
```

---

### 🔧 Run the Backend

```bash

cd backend
npm install
npm run dev
```

---

### 🔧 Run the Frontend

```
bash
cd frontend
npm install
npm run dev
```

### 📬 Contact

Connect with the project maintainer:

[<img alt="Sergiy Antonyuk | LinkedIn" src="https://img.shields.io/badge/LinkedIn-0077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" />][linkedin]

[linkedin]: https://www.linkedin.com/in/sergiy-antonyuk/

#### 🙏 Acknowledgements

A heartfelt thank you to [Codesistency](https://www.youtube.com/@codesistency/) for his invaluable contributions
