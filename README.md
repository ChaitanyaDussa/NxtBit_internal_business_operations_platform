# 🏢 NxtBiz

> **AI-powered Business Operations & Automation Platform**

NxtBiz is a full-stack, role-aware business operations platform designed to centralize **customer management, email intelligence, CRM activity, AI agent orchestration, workflows, meetings, invoices, support tickets, reports, memory, and real-time operational notifications** in a single workspace.

Unlike a traditional chatbot application, NxtBiz is designed as an **internal business operations console** where teams can manage day-to-day business activities and use AI-style agents to automate operational tasks.

---

# 📌 Table of Contents

* [Overview](#-overview)
* [Problem Statement](#-problem-statement)
* [Solution](#-solution)
* [Core Capabilities](#-core-capabilities)
* [Architecture](#-architecture)
* [Technology Stack](#-technology-stack)
* [Application Modules](#-application-modules)
* [Authentication & Authorization](#-authentication--authorization)
* [Email Intelligence](#-email-intelligence)
* [AI Agent Orchestration](#-ai-agent-orchestration)
* [Queue & Fallback System](#-queue--fallback-system)
* [Workflow Automation](#-workflow-automation)
* [Customer 360](#-customer-360)
* [Business Health Score](#-business-health-score)
* [Reports & PDF Generation](#-reports--pdf-generation)
* [Real-Time Notifications](#-real-time-notifications)
* [Memory System](#-memory-system)
* [Dashboard & Analytics](#-dashboard--analytics)
* [Database Models](#-database-models)
* [API Overview](#-api-overview)
* [Frontend Routes](#-frontend-routes)
* [Project Structure](#-project-structure)
* [Environment Variables](#-environment-variables)
* [Installation](#-installation)
* [Running the Application](#-running-the-application)
* [Seed Data](#-seed-data)
* [Security](#-security)
* [Development Principles](#-development-principles)
* [Verification](#-verification)
* [Future Enhancements](#-future-enhancements)
* [License](#-license)

---

# 🧠 Overview

Modern businesses manage information across multiple disconnected systems:

* Customer databases
* Emails
* Meetings
* Invoices
* Support tickets
* CRM notes
* Reports
* Internal workflows
* Notifications

This fragmentation makes it difficult for teams to maintain context and respond quickly.

**NxtBiz brings these operational activities into one centralized workspace.**

The platform combines traditional business management features with AI-style orchestration to help teams understand customer activity, automate follow-up actions, generate reports, and maintain business memory.

---

# ❗ Problem Statement

Business teams frequently face problems such as:

1. Customer information being distributed across different systems.
2. Important emails being manually reviewed.
3. Support requests requiring manual classification.
4. Follow-up activities being forgotten.
5. Business workflows requiring repetitive manual actions.
6. Managers lacking a complete customer 360° view.
7. Reports requiring manual preparation.
8. Invoice documents needing to be generated separately.
9. Operational events not being visible in real time.
10. Historical business context being difficult to retrieve.

NxtBiz addresses these problems through a unified operations console.

---

# 💡 Solution

NxtBiz combines:

```text
CRM
+
Email Intelligence
+
AI Agent Orchestration
+
Workflow Automation
+
Meetings
+
Invoices
+
Tickets
+
Reports
+
Business Memory
+
Real-Time Notifications
```

into a single business operations platform.

---

# 🎯 What NxtBiz Is

NxtBiz is:

* Business operations automation
* CRM workspace
* Customer 360 platform
* AI-style agent orchestration system
* Workflow execution platform
* Reporting and PDF generation system
* Memory-backed operations console
* Role-aware internal dashboard

### What NxtBiz is NOT

NxtBiz is **not primarily a chatbot project**.

The AI components exist to support actual business operations and workflow execution.

---

# ✨ Core Capabilities

## 1. Executive Dashboard

Provides an operational overview of the business.

Displays information such as:

* Revenue
* Customer health
* Business activity
* Open tickets
* Invoice status
* Meeting activity
* Agent executions
* Workflow activity
* Notifications

---

## 2. User Management

Administrators can manage internal users and their access.

Supported roles:

| Role     | Description                         |
| -------- | ----------------------------------- |
| Admin    | Full system administration          |
| Manager  | Business and operational management |
| Employee | Normal business operations          |
| Viewer   | Read-oriented access                |

---

## 3. Customer Management

Teams can create and manage customer records.

Customer information can include:

* Name
* Email
* Phone
* Company
* Tags
* Notes
* Preferences
* Health score
* CRM activities
* Emails
* Meetings
* Tickets
* Invoices

---

# 👤 Customer 360

NxtBiz provides a centralized customer view.

A customer profile can combine:

```text
Customer
│
├── Basic Information
├── Health Score
├── Emails
├── CRM Activities
├── Meetings
├── Tickets
├── Invoices
├── Notes
└── Historical Memory
```

This allows employees and managers to understand the complete relationship with a customer without searching through multiple modules.

---

# 📧 Email Intelligence

Incoming emails can be processed automatically.

NxtBiz analyzes:

* Sentiment
* Intent
* Urgency
* Confidence
* Recommended actions
* Suggested response

### Sentiment

Supported values:

```text
positive
neutral
negative
```

### Urgency

```text
low
medium
high
critical
```

### Intent

```text
general_inquiry
schedule_meeting
invoice_request
support_request
sales_opportunity
```

---

## Email Signal Detection

Negative signals can include:

```text
angry
cancel
broken
refund
late
complaint
urgent
bad
issue
failed
```

Positive signals can include:

```text
thanks
great
love
happy
excellent
appreciate
renew
```

Critical urgency is triggered by strong terms such as:

```text
urgent
asap
immediately
```

The resulting email intelligence can be used by the orchestration system to determine the next operational actions.

---

# 🤖 AI Agent Orchestration

NxtBiz uses specialized agents for different operational responsibilities.

## Agent Architecture

```text
Incoming Business Event
        ↓
Intent Agent
        ↓
Task Planner Agent
        ↓
Domain Agent
        ↓
CRM Agent
        ↓
Chief of Staff Agent
        ↓
Notification
```

---

# 🧩 Available Agents

## 1. Intent Agent

Identifies the purpose of an incoming business event.

Example:

```text
invoice_request
support_request
schedule_meeting
sales_opportunity
```

---

## 2. Task Planner Agent

Determines which operational agents should execute.

Example:

```text
support_request
        ↓
customer-support-agent
        ↓
crm-agent
        ↓
chief-of-staff-agent
```

---

## 3. Email Agent

Handles email-related operational actions.

---

## 4. CRM Agent

Updates or creates relevant CRM context.

The CRM agent is included in every planned orchestration.

---

## 5. Meeting Agent

Handles meeting-related actions.

Used when intent is:

```text
schedule_meeting
```

---

## 6. Invoice Agent

Handles invoice-related operations.

Used when intent is:

```text
invoice_request
```

---

## 7. Customer Support Agent

Handles support-related requests.

Used when intent is:

```text
support_request
```

---

## 8. Chief of Staff Agent

Acts as the final orchestration and operational summary layer.

Every planned workflow ends with the Chief of Staff Agent.

---

# 🔄 Agent Execution Lifecycle

Every orchestration follows:

```text
1. Create Agent Context
        ↓
2. Execute Intent Agent
        ↓
3. Execute Task Planner
        ↓
4. Execute Planned Domain Agents
        ↓
5. Execute CRM Agent
        ↓
6. Execute Chief of Staff Agent
        ↓
7. Mark Email Processed
        ↓
8. Emit Socket.IO Event
        ↓
9. Create Notification
```

Each execution stores:

* Agent ID
* Event ID
* Status
* Input
* Output
* Logs
* Start time
* Finish time
* Error information

Agent status is updated during:

```text
START
 ↓
RUNNING
 ↓
COMPLETED
```

or:

```text
START
 ↓
RUNNING
 ↓
FAILED
```

---

# ⚡ Queue & Fallback System

NxtBiz supports asynchronous agent execution using **BullMQ + Redis**.

## When Redis is available

The system:

* Creates an `agent-orchestration` queue.
* Enqueues orchestration jobs.
* Allows up to 3 attempts.
* Uses exponential backoff.
* Retains completed and failed jobs according to configured limits.
* Runs workers with concurrency of 4.

Architecture:

```text
API
 ↓
BullMQ
 ↓
Redis
 ↓
Worker
 ↓
Agent Orchestration
```

---

## When Redis is unavailable

NxtBiz automatically falls back to synchronous execution.

```text
API
 ↓
Orchestration
 ↓
Agents
```

The application remains functional while warning that Redis is unavailable.

This makes local development easier because Redis is not mandatory for basic operation.

---

# 🔄 Workflow Automation

NxtBiz includes a workflow execution system.

A workflow contains:

* Name
* Trigger
* Condition
* Action
* Steps
* Enabled status
* Execution logs

---

## Workflow Step Types

```text
Trigger
Condition
Action
```

Example:

```text
New Email
    ↓
Negative Sentiment?
    ↓
Create Support Ticket
    ↓
Notify Manager
```

---

## Workflow Execution

When a workflow is executed:

1. Load workflow.
2. Validate that the workflow exists.
3. Compare the condition with the incoming payload.
4. Skip execution if the condition does not match.
5. Create a ticket when configured.
6. Create a notification when configured.
7. Record execution logs.
8. Return the workflow execution result.

---

# 📅 Meetings

The Meetings module allows teams to manage:

* Meeting title
* Attendees
* Start time
* End time
* Notes
* Status
* Associated customer

Meetings can also be triggered through email intelligence and agent orchestration.

---

# 🧾 Invoices

NxtBiz provides invoice management.

Invoice records can contain:

* Customer
* Amount
* Due date
* Status
* Line items
* Generated PDF

Users can generate downloadable invoice PDFs directly from the platform.

---

# 🎫 Support Tickets

Tickets can be created manually or through automated workflows.

Ticket information includes:

* Customer
* Priority
* Issue
* Status
* Assigned employee
* Resolution

Example automation:

```text
Customer Email
      ↓
Email Intelligence
      ↓
Support Request
      ↓
Customer Support Agent
      ↓
Ticket Created
      ↓
Manager Notification
```

---

# 📊 Business Health Score

NxtBiz calculates an overall business health score based on multiple operational indicators.

The current factors are:

| Factor                | Weight |
| --------------------- | -----: |
| Customer Satisfaction |    28% |
| Response Time         |    16% |
| Invoice Collection    |    20% |
| Ticket Resolution     |    20% |
| Lead Conversion       |    16% |

The score returns:

```text
score
factors.customerSatisfaction
factors.responseTime
factors.invoiceCollection
factors.leadConversion
factors.ticketResolution
factors.meetingMomentum
```

The dashboard can visualize these metrics using charts and indicators.

---

# 📑 Reports

NxtBiz can generate operational reports such as:

* Weekly reports
* Executive reports
* Business health reports
* Customer reports
* Operational summaries

Reports contain:

* Title
* Summary
* Metrics
* Recommendations
* Generated-by information

---

# 📄 PDF Generation

PDF generation is handled using **PDFKit**.

Generated files are stored in:

```text
server/storage/pdfs/
```

and exposed through:

```text
/pdfs/
```

---

## Invoice PDF

Invoice PDFs contain:

* Invoice ID
* Customer
* Due date
* Amount due
* Generated-by information

---

## Report PDF

Report PDFs contain:

* Report title
* Summary
* Metric table
* Recommendations

PDF filenames are sanitized before being written to disk.

---

# 🔔 Real-Time Notifications

NxtBiz uses **Socket.IO** to provide live operational updates.

Supported events include:

```text
new_email
new_ticket
invoice_created
meeting_created
agent_completed
workflow_executed
```

When an event is received, the frontend can:

1. Display a toast notification.
2. Invalidate relevant React Query caches.
3. Refresh visible information.

Example:

```text
Agent Completed
       ↓
Socket.IO Event
       ↓
Frontend
       ↓
Toast Notification
       ↓
React Query Cache Refresh
```

---

# 🧠 Business Memory

NxtBiz maintains business context through a memory system.

Memory records can be associated with:

* Customers
* Agents
* Business events
* CRM activities
* Historical operations

Memory fields include:

```text
scope
customerId
agentId
key
value
tags
source
```

This allows operational context to be retained and searched instead of being lost after individual interactions.

---

# 📈 Dashboard & Analytics

The dashboard provides an operational overview of the organization.

Possible metrics include:

```text
Revenue
Customers
Customer Health
Open Tickets
Pending Invoices
Meetings
Emails
Agent Executions
Workflow Executions
```

Visualization is implemented using **Recharts**.

---

# 🛠️ Technology Stack

## Frontend

| Technology           | Purpose                 |
| -------------------- | ----------------------- |
| Vite 6               | Build tooling           |
| React 18             | UI framework            |
| JavaScript           | Development language    |
| React Router DOM 7   | Routing                 |
| Tailwind CSS 3       | Styling                 |
| Zustand              | Client state            |
| TanStack React Query | Server state            |
| Axios                | HTTP requests           |
| Socket.IO Client     | Real-time communication |
| Lucide React         | Icons                   |
| Recharts             | Data visualization      |
| Framer Motion        | Animations              |
| React Hot Toast      | Notifications           |

---

## Backend

| Technology | Purpose            |
| ---------- | ------------------ |
| Node.js    | Runtime            |
| Express 4  | API framework      |
| MongoDB    | Database           |
| Mongoose 8 | ODM                |
| Zod        | Request validation |
| JWT        | Authentication     |
| bcryptjs   | Password hashing   |
| BullMQ     | Job queue          |
| ioredis    | Redis integration  |
| Socket.IO  | Real-time events   |
| PDFKit     | PDF generation     |

---

## Security & Middleware

NxtBiz uses:

* Helmet
* CORS
* Compression
* Cookie Parser
* Morgan
* HTTP-only cookies
* JWT access tokens
* Refresh token rotation
* Role-based authorization

---

# 🏗️ Architecture

```text
                         ┌──────────────────┐
                         │      User        │
                         └────────┬─────────┘
                                  │
                                  ↓
                    ┌─────────────────────────┐
                    │     React Frontend      │
                    │   Vite + Tailwind       │
                    └────────────┬────────────┘
                                 │
                          HTTP / Socket.IO
                                 │
                                 ↓
                    ┌─────────────────────────┐
                    │    Express Backend      │
                    └────────────┬────────────┘
                                 │
             ┌───────────────────┼───────────────────┐
             │                   │                   │
             ↓                   ↓                   ↓
       ┌───────────┐       ┌───────────┐       ┌───────────┐
       │ MongoDB   │       │  BullMQ   │       │ Socket.IO │
       │           │       │  + Redis  │       │           │
       └───────────┘       └─────┬─────┘       └───────────┘
                                 │
                                 ↓
                        ┌──────────────────┐
                        │ Agent Orchestrator│
                        └────────┬─────────┘
                                 │
              ┌──────────────────┼─────────────────┐
              │                  │                 │
              ↓                  ↓                 ↓
        Intent Agent       Domain Agents     Chief of Staff
```

---

# 📁 Project Structure

The repository already contains the required `client` and `server` directories.

**Do not create separate `frontend` or `backend` directories.**

Recommended structure:

```text
nxtbiz/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── layouts/
│   │   ├── hooks/
│   │   ├── store/
│   │   ├── services/
│   │   └── utils/
│   │
│   ├── package.json
│   └── ...
│
├── server/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   ├── services/
│   ├── agents/
│   ├── workflows/
│   ├── jobs/
│   ├── utils/
│   ├── config/
│   ├── storage/
│   │   └── pdfs/
│   ├── seed/
│   ├── package.json
│   └── ...
│
├── docs/
│   └── PRODUCT_SPECIFICATION.md
│
├── package.json
├── README.md
├── .gitignore
└── LICENSE
```

---

# 🔐 Authentication & Authorization

NxtBiz supports secure authentication using:

* JWT access tokens
* JWT refresh tokens
* Refresh token rotation
* bcrypt password hashing
* HTTP-only cookies
* Bearer token API requests
* Protected frontend routes
* Protected backend routes
* Role-based authorization

---

## Authentication Flow

```text
Register
   ↓
Password Hash
   ↓
User Created
   ↓
Login
   ↓
Access Token + Refresh Token
   ↓
Authenticated Session
   ↓
Refresh Token Rotation
   ↓
Logout
   ↓
Cookies Cleared
```

---

# 👥 Role Permissions

| Feature          | Admin | Manager |         Employee        | Viewer |
| ---------------- | :---: | :-----: | :---------------------: | :----: |
| View Dashboard   |   ✅   |    ✅    |            ✅            |    ✅   |
| View Users       |   ✅   |    ✅    |            ❌            |    ❌   |
| Create Users     |   ✅   |    ❌    |            ❌            |    ❌   |
| Update Users     |   ✅   |    ✅    |            ❌            |    ❌   |
| Delete Users     |   ✅   |    ❌    |            ❌            |    ❌   |
| Manage Customers |   ✅   |    ✅    |            ✅            |  Read  |
| Delete Customers |   ✅   |    ✅    |            ❌            |    ❌   |
| Run Agents       |   ✅   |    ✅    |         Limited         |    ❌   |
| View Reports     |   ✅   |    ✅    |            ✅            |    ✅   |
| Manage Workflows |   ✅   |    ✅    | According to permission |  Read  |
| Manage Tickets   |   ✅   |    ✅    |            ✅            |  Read  |

> Exact permissions should remain aligned with the authorization middleware and the detailed product specification.

---

# 🗄️ Database Models

NxtBiz uses MongoDB with Mongoose.

Main models include:

```text
User
Customer
Email
Meeting
Invoice
Report
Ticket
Agent
AgentExecution
Workflow
Notification
Memory
CRMActivity
```

---

## User

```text
name
email
passwordHash
role
refreshTokenHash
active
lastLoginAt
```

---

## Customer

```text
name
email
phone
company
tags
notes
preferences
healthScore
```

---

## Email

```text
subject
body
sender
customerId
sentiment
intent
urgency
autoResponse
recommendations
processed
```

---

## Meeting

```text
title
attendees
startTime
endTime
notes
status
customerId
```

---

## Invoice

```text
customerId
amount
dueDate
status
pdfUrl
lineItems
```

---

## Ticket

```text
customerId
priority
issue
status
assignedTo
resolution
```

---

## Agent Execution

```text
agentId
eventId
status
input
output
logs
startedAt
finishedAt
error
```

---

# 🔌 API Overview

The backend follows a modular REST API structure.

## Health

```text
GET /health
```

---

## Authentication

```text
POST /api/auth/register
POST /api/auth/login
POST /api/auth/refresh
POST /api/auth/logout
```

---

## Users

```text
GET    /api/users
POST   /api/users
PUT    /api/users/:id
DELETE /api/users/:id
```

---

## Dashboard

```text
GET /api/dashboard
```

---

## Customers

```text
GET    /api/customers
GET    /api/customers/:id
POST   /api/customers
PUT    /api/customers/:id
DELETE /api/customers/:id
```

---

## Emails

```text
POST /api/emails/process
GET  /api/emails
GET  /api/emails/:id
```

---

## CRM

```text
GET  /api/crm
POST /api/crm/note
POST /api/crm/activity
```

---

## Meetings

```text
GET    /api/meetings
POST   /api/meetings
PUT    /api/meetings/:id
DELETE /api/meetings/:id
```

---

## Invoices

```text
GET    /api/invoices
POST   /api/invoices
GET    /api/invoices/:id
GET    /api/invoices/:id/download
PUT    /api/invoices/:id
DELETE /api/invoices/:id
```

---

## Tickets

```text
GET    /api/tickets
POST   /api/tickets
PUT    /api/tickets/:id
DELETE /api/tickets/:id
```

---

## Reports

```text
POST /api/reports/generate
GET  /api/reports
GET  /api/reports/:id
```

---

## Agents

```text
GET  /api/agents
GET  /api/agents/executions
POST /api/agents/run
```

---

## Workflows

```text
GET    /api/workflows
POST   /api/workflows
GET    /api/workflows/:id
PUT    /api/workflows/:id
DELETE /api/workflows/:id
POST   /api/workflows/:id/execute
```

---

## Memory

```text
GET /api/memory/search
```

---

## Notifications

```text
GET /api/notifications
PUT /api/notifications/:id
```

---

# 🖥️ Frontend Routes

## Public

```text
/login
/register
```

## Protected

```text
/
/users
/customers
/customers/:id
/emails
/meetings
/invoices
/tickets
/reports
/crm
/workflows
/ai-control
/settings
```

The protected application layout includes:

* Sidebar navigation
* Current user
* Current role
* Unread notification count
* Dark mode toggle
* Logout
* Live Socket.IO connection

---

# 🔐 Environment Variables

## Server

Create:

```text
server/.env
```

Example:

```env
NODE_ENV=development
PORT=5000
CLIENT_ORIGIN=http://localhost:5173

MONGODB_URI=mongodb://localhost:27017/nxtbiz

REDIS_URL=redis://localhost:6379

JWT_ACCESS_SECRET=your_access_secret
JWT_REFRESH_SECRET=your_refresh_secret

ACCESS_TOKEN_EXPIRES_IN=15m
REFRESH_TOKEN_EXPIRES_IN=7d

PDF_BASE_URL=http://localhost:5000
EMAIL_FROM=noreply@nxtbiz.local
```

---

## Client

Create:

```text
client/.env
```

Example:

```env
VITE_API_URL=http://localhost:5000
VITE_SOCKET_URL=http://localhost:5000
```

---

## Production Requirements

Production deployments must configure at minimum:

```text
MONGODB_URI
JWT_ACCESS_SECRET
JWT_REFRESH_SECRET
```

Never commit real credentials to GitHub.

---

# 🚀 Installation

## Prerequisites

Install:

* Node.js
* npm
* MongoDB

Optional:

* Redis

---

## 1. Clone the Repository

```bash
git clone <repository-url>

cd nxtbiz
```

---

## 2. Configure Environment

Copy:

```text
server/.env.example
```

to:

```text
server/.env
```

Update the required configuration values.

---

## 3. Install Dependencies

From the project root:

```bash
npm run install:all
```

---

## 4. Seed the Database

```bash
npm --prefix server run seed
```

This creates initial demo data.

---

# ▶️ Running the Application

## Start Backend

```bash
npm --prefix server run dev
```

---

## Start Frontend

Open another terminal:

```bash
npm --prefix client run dev
```

---

## Access the Application

Frontend:

```text
http://localhost:5173
```

Backend:

```text
http://localhost:5000
```

Health check:

```text
http://localhost:5000/health
```

---

# 🌱 Seed Data

The seed script creates sample development data such as:

* Admin user
* Sample customer
* Negative Email Escalation workflow
* Agent definitions

The demo account is intended for **local development only**.

Default development credentials:

```text
Email:
admin@nxtbiz.local

Password:
Admin12345
```

Change or remove these credentials before deploying the application publicly.

---

# 🔒 Security

NxtBiz follows several security practices.

### Password Security

Passwords are:

* Hashed using bcryptjs
* Never stored in plain text

### Token Security

The application supports:

* Access tokens
* Refresh tokens
* Refresh token rotation
* Hashed refresh token storage

### API Security

The backend uses:

* Helmet
* CORS
* Zod validation
* Authentication middleware
* Role-based authorization

### Production Security

Production deployments should additionally use:

* Strong secrets
* HTTPS
* Secure cookies
* Restricted CORS
* Rate limiting
* Secure database credentials
* Secret management

---

# 🧭 Development Principles

NxtBiz follows a **spec-driven architecture**.

Business behavior should not be silently hardcoded.

Important behavior should be documented, including:

* Agent routing rules
* Workflow behavior
* Health score weights
* Retry policies
* Notification events
* Role permissions
* PDF generation rules
* Email intent categories

The detailed rules are maintained in:

```text
docs/PRODUCT_SPECIFICATION.md
```

---

# 🏷️ Product Branding

The final product should consistently use:

```text
NxtBiz
```

instead of legacy internal names.

Branding should be consistent across:

* UI
* Documentation
* Package metadata
* Seed data
* Generated PDFs
* Console messages
* Service names
* Notifications

---

# 🧪 Verification

Before considering the project complete, verify:

### Backend

```bash
npm run build
```

### Frontend

```bash
npm run build
```

The following functionality should be tested:

* Server starts successfully.
* Client starts successfully.
* `/health` returns an OK response.
* User registration works.
* User login works.
* Protected routes reject unauthenticated users.
* Dashboard loads.
* Customers can be created.
* Emails can be processed.
* Agent executions are recorded.
* Agent orchestration completes.
* Reports can be generated.
* Invoice PDFs can be generated.
* Report PDFs can be generated.
* Workflows execute successfully.
* Workflow logs are recorded.
* Socket.IO events reach the frontend.
* Notifications appear in real time.
* Memory search works.
* Logout safely terminates the session.

---

# 🧪 Example Business Automation

Consider a customer sending:

```text
Subject:
Urgent issue with my invoice

Body:
The invoice is incorrect and I need this fixed
immediately. Please resolve this ASAP.
```

NxtBiz can process the email as:

```text
Email
 ↓
Intent Agent
 ↓
invoice_request
 ↓
Urgency = critical
 ↓
Task Planner
 ↓
Invoice Agent
 ↓
CRM Agent
 ↓
Chief of Staff Agent
 ↓
Notification
```

The system can then update the customer's operational context and notify the relevant team.

---

# 🔄 End-to-End Example

A typical business operation can look like:

```text
Customer
   ↓
Email Received
   ↓
Email Intelligence
   ↓
Sentiment / Intent / Urgency
   ↓
Task Planner
   ↓
Domain Agent
   ↓
CRM Update
   ↓
Workflow Execution
   ↓
Ticket / Meeting / Invoice
   ↓
Chief of Staff Summary
   ↓
Notification
   ↓
Dashboard Updated
```

This demonstrates how NxtBiz connects its individual modules into one operational ecosystem.

---

# 🗺️ Future Enhancements

Potential future improvements include:

## AI

* More specialized business agents
* Improved agent reasoning
* Human-in-the-loop approvals
* Agent performance evaluation
* Custom agent creation
* AI-generated operational summaries

## CRM

* Advanced customer segmentation
* Customer churn prediction
* Lead scoring
* Automated follow-ups
* Customer lifecycle management

## Automation

* Visual workflow builder
* Scheduled workflows
* Conditional branching
* External service integrations
* Advanced event triggers

## Communication

* Gmail integration
* Outlook integration
* Slack integration
* WhatsApp business integration

## Analytics

* Advanced revenue analytics
* Customer retention analytics
* Agent performance analytics
* Workflow performance analytics

## Enterprise

* Multi-tenant organizations
* Team workspaces
* Audit logs
* Advanced permissions
* Organization-level settings
* SSO

---

# 🎯 Final Expected Outcome

A completed NxtBiz installation should allow a business operator to:

1. Register and authenticate securely.
2. Manage users and roles.
3. View the executive dashboard.
4. Create and manage customers.
5. Access complete customer 360 records.
6. Process incoming emails.
7. Analyze email sentiment, intent, and urgency.
8. Automatically orchestrate operational agents.
9. Create CRM activities.
10. Schedule and manage meetings.
11. Create and manage invoices.
12. Generate invoice PDFs.
13. Create and manage support tickets.
14. Build and execute workflows.
15. Generate operational reports.
16. Generate report PDFs.
17. Search historical business memory.
18. Monitor agent executions.
19. Receive real-time Socket.IO notifications.
20. Manage the complete business operation from one console.

---

# 🌐 Project Vision

The long-term vision of NxtBiz is to become an **AI-assisted operating system for business operations**.

Instead of using separate systems for:

```text
Customers
Emails
CRM
Tickets
Meetings
Invoices
Reports
Workflows
Notifications
AI Automation
```

NxtBiz brings these capabilities together:

```text
                    ┌─────────────────┐
                    │     NxtBiz      │
                    │ Business OS     │
                    └────────┬────────┘
                             │
       ┌─────────┬───────────┼───────────┬──────────┐
       ↓         ↓           ↓           ↓          ↓
      CRM     Email        Agents     Workflows   Reports
       │         │           │           │          │
       └─────────┴───────────┼───────────┴──────────┘
                             ↓
                     Business Intelligence
                             ↓
                    Better Operations
```

The objective is to reduce repetitive operational work, preserve business context, improve response times, and give teams a centralized view of the organization.

---

# 📜 License

This project is intended for development, learning, and experimentation.

Add an appropriate open-source license if the repository will be publicly distributed.
