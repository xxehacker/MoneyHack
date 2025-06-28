<p align="center">
	<img src="https://github.com/xxehacker/MoneyHack/blob/main/money.png" width="800">
</p>
<p align="center">
	<em><code>❯ Smart Finance Tracker – A Powerful MERN Stack Solution for Seamless Expense Management</code></em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/last-commit/xxehacker/MoneyHack?style=default&logo=git&logoColor=white&color=00ff2d" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/xxehacker/MoneyHack?style=default&color=00ff2d" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/xxehacker/MoneyHack?style=default&color=00ff2d" alt="repo-language-count">
</p>
<br>

---

<code>❯ Responsive UI/UX Design</code>  
<code>❯ Login and Registration Functionalities</code>  
<code>❯ Username, Email Change Functionalities</code>  
<code>❯ Password Reset System</code>  
<code>❯ Dashboard Overview</code>  
<code>❯ Transaction Management (Add, View, Edit, Delete)</code>  
<code>❯ Authentication with Password Hashing</code>  

---

##  Project Structure

```sh
└── MoneyHack/
    ├── backend
    │   ├── controllers
    │   │   ├── category.controllers.js
    │   │   ├── contact.controller.js
    │   │   ├── transaction.controllers.js
    │   │   └── user.controllers.js
    │   ├── index.js
    │   ├── middlewares
    │   │   └── isAuthenticated.js
    │   ├── models
    │   │   ├── category.model.js
    │   │   ├── contact.model.js
    │   │   ├── transaction.model.js
    │   │   └── user.model.js
    │   ├── package-lock.json
    │   ├── package.json
    │   └── routes
    │       ├── category.routes.js
    │       ├── contact.routes.js
    │       ├── transaction.routes.js
    │       └── user.routes.js
    └── frontend
        ├── README.md
        ├── components.json
        ├── eslint.config.js
        ├── index.html
        ├── jsconfig.json
        ├── package-lock.json
        ├── package.json
        ├── postcss.config.js
        ├── public
        │   └── vite.svg
        ├── src
        │   ├── App.css
        │   ├── App.jsx
        │   ├── assets
        │   │   ├── contact.svg
        │   │   ├── login.svg
        │   │   ├── react.svg
        │   │   └── register.svg
        │   ├── components
        │   │   ├── Alert
        │   │   ├── Auth
        │   │   ├── Category
        │   │   ├── Contact
        │   │   ├── Footer
        │   │   ├── Home
        │   │   ├── Navbar
        │   │   ├── NotFound
        │   │   ├── Transactions
        │   │   └── Users
        │   ├── index.css
        │   ├── lib
        │   │   └── utils.js
        │   ├── main.jsx
        │   ├── redux
        │   │   ├── slice
        │   │   └── store
        │   ├── services
        │   │   ├── category
        │   │   ├── contact
        │   │   ├── transactions
        │   │   └── users
        │   └── utils
        │       ├── getUserFromStorage.js
        │       └── url.js
        ├── tailwind.config.js
        └── vite.config.js
```

---
##  Getting Started

###  Prerequisites

Before getting started with MoneyHack, ensure your runtime environment meets the following requirements:

- **Programming Language:** JavaScript
- **Package Manager:** Npm


###  Installation

Install MoneyHack using one of the following methods:

**Build from source:**

1. Clone the MoneyHack repository:
```sh
❯ git clone https://github.com/xxehacker/MoneyHack
```

2. Navigate to the project directory:
```sh
❯ cd MoneyHack
```

3. Install the project dependencies:


**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ cd frontend && npm install
```
```sh
❯ cd backend && npm install
```

###  Usage
Run MoneyHack using the following command:
**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ cd frontend && npm run dev
```
```sh
❯ cd backend && npm run dev
```
