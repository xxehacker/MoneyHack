<p align="center">
	<img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KICAgIDxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgODAwIDIwMCI+CiAgICAgICAgPGRlZnM+CiAgICAgICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYmctZ3JhZGllbnQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzQxNThEMDtzdG9wLW9wYWNpdHk6MSIgLz4KICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iNTAlIiBzdHlsZT0ic3RvcC1jb2xvcjojQzg1MEMwO3N0b3Atb3BhY2l0eToxIiAvPgogICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojRkZDQzcwO3N0b3Atb3BhY2l0eToxIiAvPgogICAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgICAgICA8ZmlsdGVyIGlkPSJzaGFkb3ciPgogICAgICAgICAgICAgICAgPGZlRHJvcFNoYWRvdyBkeD0iMCIgZHk9IjQiIHN0ZERldmlhdGlvbj0iNCIgZmxvb2Qtb3BhY2l0eT0iMC4yNSIgLz4KICAgICAgICAgICAgPC9maWx0ZXI+CiAgICAgICAgPC9kZWZzPgogICAgICAgIDxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ1cmwoI2JnLWdyYWRpZW50KSIgcng9IjE1IiByeT0iMTUiLz4KICAgICAgICA8dGV4dCB4PSI0MDAiIHk9IjEwMCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjQ4IgogICAgICAgIGZvbnQtd2VpZ2h0PSJib2xkIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIgogICAgICAgIGZpbGw9IiNGRkZGRkYiIGZpbHRlcj0idXJsKCNzaGFkb3cpIj5NT05FWUhBQ0s8L3RleHQ+CiAgICA8L3N2Zz4=" alt="moneyhack-banner" width="800">
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

<details open>
	<summary><b><code>MONEYHACK/</code></b></summary>
	<details> <!-- __root__ Submodule -->
		<summary><b>__root__</b></summary>
		<blockquote>
			<table>
			</table>
		</blockquote>
	</details>
	<details> <!-- backend Submodule -->
		<summary><b>backend</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/xxehacker/MoneyHack/blob/master/backend/package-lock.json'>package-lock.json</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/xxehacker/MoneyHack/blob/master/backend/index.js'>index.js</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/xxehacker/MoneyHack/blob/master/backend/package.json'>package.json</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			</table>
			<details>
				<summary><b>middlewares</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/xxehacker/MoneyHack/blob/master/backend/middlewares/isAuthenticated.js'>isAuthenticated.js</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>controllers</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/xxehacker/MoneyHack/blob/master/backend/controllers/contact.controller.js'>contact.controller.js</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/xxehacker/MoneyHack/blob/master/backend/controllers/category.controllers.js'>category.controllers.js</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/xxehacker/MoneyHack/blob/master/backend/controllers/user.controllers.js'>user.controllers.js</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/xxehacker/MoneyHack/blob/master/backend/controllers/transaction.controllers.js'>transaction.controllers.js</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>models</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/xxehacker/MoneyHack/blob/master/backend/models/category.model.js'>category.model.js</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/xxehacker/MoneyHack/blob/master/backend/models/user.model.js'>user.model.js</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/xxehacker/MoneyHack/blob/master/backend/models/transaction.model.js'>transaction.model.js</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/xxehacker/MoneyHack/blob/master/backend/models/contact.model.js'>contact.model.js</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>routes</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/xxehacker/MoneyHack/blob/master/backend/routes/user.routes.js'>user.routes.js</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/xxehacker/MoneyHack/blob/master/backend/routes/contact.routes.js'>contact.routes.js</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/xxehacker/MoneyHack/blob/master/backend/routes/category.routes.js'>category.routes.js</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/xxehacker/MoneyHack/blob/master/backend/routes/transaction.routes.js'>transaction.routes.js</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					</table>
				</blockquote>
			</details>
		</blockquote>
	</details>
	<details> <!-- frontend Submodule -->
		<summary><b>frontend</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/xxehacker/MoneyHack/blob/master/frontend/postcss.config.js'>postcss.config.js</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/xxehacker/MoneyHack/blob/master/frontend/package-lock.json'>package-lock.json</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/xxehacker/MoneyHack/blob/master/frontend/tailwind.config.js'>tailwind.config.js</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/xxehacker/MoneyHack/blob/master/frontend/vite.config.js'>vite.config.js</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/xxehacker/MoneyHack/blob/master/frontend/jsconfig.json'>jsconfig.json</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/xxehacker/MoneyHack/blob/master/frontend/package.json'>package.json</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/xxehacker/MoneyHack/blob/master/frontend/index.html'>index.html</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/xxehacker/MoneyHack/blob/master/frontend/components.json'>components.json</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/xxehacker/MoneyHack/blob/master/frontend/eslint.config.js'>eslint.config.js</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			</table>
			<details>
				<summary><b>src</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/xxehacker/MoneyHack/blob/master/frontend/src/index.css'>index.css</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/xxehacker/MoneyHack/blob/master/frontend/src/App.css'>App.css</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/xxehacker/MoneyHack/blob/master/frontend/src/App.jsx'>App.jsx</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/xxehacker/MoneyHack/blob/master/frontend/src/main.jsx'>main.jsx</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					</table>
					<details>
						<summary><b>lib</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/xxehacker/MoneyHack/blob/master/frontend/src/lib/utils.js'>utils.js</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>components</b></summary>
						<blockquote>
							<details>
								<summary><b>Category</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/xxehacker/MoneyHack/blob/master/frontend/src/components/Category/AddCategory.jsx'>AddCategory.jsx</a></b></td>
										<td><code>❯ REPLACE-ME</code></td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/xxehacker/MoneyHack/blob/master/frontend/src/components/Category/CategoriesList.jsx'>CategoriesList.jsx</a></b></td>
										<td><code>❯ REPLACE-ME</code></td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/xxehacker/MoneyHack/blob/master/frontend/src/components/Category/UpdateCategory.jsx'>UpdateCategory.jsx</a></b></td>
										<td><code>❯ REPLACE-ME</code></td>
									</tr>
									</table>
								</blockquote>
							</details>
							<details>
								<summary><b>Transactions</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/xxehacker/MoneyHack/blob/master/frontend/src/components/Transactions/TransactionForm.jsx'>TransactionForm.jsx</a></b></td>
										<td><code>❯ REPLACE-ME</code></td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/xxehacker/MoneyHack/blob/master/frontend/src/components/Transactions/UpdateTransaction.jsx'>UpdateTransaction.jsx</a></b></td>
										<td><code>❯ REPLACE-ME</code></td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/xxehacker/MoneyHack/blob/master/frontend/src/components/Transactions/TransactionList.jsx'>TransactionList.jsx</a></b></td>
										<td><code>❯ REPLACE-ME</code></td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/xxehacker/MoneyHack/blob/master/frontend/src/components/Transactions/TransactionChart.jsx'>TransactionChart.jsx</a></b></td>
										<td><code>❯ REPLACE-ME</code></td>
									</tr>
									</table>
								</blockquote>
							</details>
							<details>
								<summary><b>Contact</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/xxehacker/MoneyHack/blob/master/frontend/src/components/Contact/ContactForm.jsx'>ContactForm.jsx</a></b></td>
										<td><code>❯ REPLACE-ME</code></td>
									</tr>
									</table>
								</blockquote>
							</details>
							<details>
								<summary><b>Auth</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/xxehacker/MoneyHack/blob/master/frontend/src/components/Auth/AuthChecker.jsx'>AuthChecker.jsx</a></b></td>
										<td><code>❯ REPLACE-ME</code></td>
									</tr>
									</table>
								</blockquote>
							</details>
							<details>
								<summary><b>Users</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/xxehacker/MoneyHack/blob/master/frontend/src/components/Users/Login.jsx'>Login.jsx</a></b></td>
										<td><code>❯ REPLACE-ME</code></td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/xxehacker/MoneyHack/blob/master/frontend/src/components/Users/UpdatePassword.jsx'>UpdatePassword.jsx</a></b></td>
										<td><code>❯ REPLACE-ME</code></td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/xxehacker/MoneyHack/blob/master/frontend/src/components/Users/Deshboard.jsx'>Deshboard.jsx</a></b></td>
										<td><code>❯ REPLACE-ME</code></td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/xxehacker/MoneyHack/blob/master/frontend/src/components/Users/UserProfile.jsx'>UserProfile.jsx</a></b></td>
										<td><code>❯ REPLACE-ME</code></td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/xxehacker/MoneyHack/blob/master/frontend/src/components/Users/Register.jsx'>Register.jsx</a></b></td>
										<td><code>❯ REPLACE-ME</code></td>
									</tr>
									</table>
								</blockquote>
							</details>
							<details>
								<summary><b>Alert</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/xxehacker/MoneyHack/blob/master/frontend/src/components/Alert/AlertMessage.jsx'>AlertMessage.jsx</a></b></td>
										<td><code>❯ REPLACE-ME</code></td>
									</tr>
									</table>
								</blockquote>
							</details>
							<details>
								<summary><b>Navbar</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/xxehacker/MoneyHack/blob/master/frontend/src/components/Navbar/PublicNavbar.jsx'>PublicNavbar.jsx</a></b></td>
										<td><code>❯ REPLACE-ME</code></td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/xxehacker/MoneyHack/blob/master/frontend/src/components/Navbar/PrivateNavbar.jsx'>PrivateNavbar.jsx</a></b></td>
										<td><code>❯ REPLACE-ME</code></td>
									</tr>
									</table>
								</blockquote>
							</details>
							<details>
								<summary><b>NotFound</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/xxehacker/MoneyHack/blob/master/frontend/src/components/NotFound/NotFound.jsx'>NotFound.jsx</a></b></td>
										<td><code>❯ REPLACE-ME</code></td>
									</tr>
									</table>
								</blockquote>
							</details>
							<details>
								<summary><b>Footer</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/xxehacker/MoneyHack/blob/master/frontend/src/components/Footer/Footer.jsx'>Footer.jsx</a></b></td>
										<td><code>❯ REPLACE-ME</code></td>
									</tr>
									</table>
								</blockquote>
							</details>
							<details>
								<summary><b>Home</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/xxehacker/MoneyHack/blob/master/frontend/src/components/Home/HomePage.jsx'>HomePage.jsx</a></b></td>
										<td><code>❯ REPLACE-ME</code></td>
									</tr>
									</table>
								</blockquote>
							</details>
						</blockquote>
					</details>
					<details>
						<summary><b>redux</b></summary>
						<blockquote>
							<details>
								<summary><b>store</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/xxehacker/MoneyHack/blob/master/frontend/src/redux/store/store.js'>store.js</a></b></td>
										<td><code>❯ REPLACE-ME</code></td>
									</tr>
									</table>
								</blockquote>
							</details>
							<details>
								<summary><b>slice</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/xxehacker/MoneyHack/blob/master/frontend/src/redux/slice/authSlice.js'>authSlice.js</a></b></td>
										<td><code>❯ REPLACE-ME</code></td>
									</tr>
									</table>
								</blockquote>
							</details>
						</blockquote>
					</details>
					<details>
						<summary><b>utils</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/xxehacker/MoneyHack/blob/master/frontend/src/utils/getUserFromStorage.js'>getUserFromStorage.js</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/xxehacker/MoneyHack/blob/master/frontend/src/utils/url.js'>url.js</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>services</b></summary>
						<blockquote>
							<details>
								<summary><b>category</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/xxehacker/MoneyHack/blob/master/frontend/src/services/category/categoryService.js'>categoryService.js</a></b></td>
										<td><code>❯ REPLACE-ME</code></td>
									</tr>
									</table>
								</blockquote>
							</details>
							<details>
								<summary><b>users</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/xxehacker/MoneyHack/blob/master/frontend/src/services/users/userServices.js'>userServices.js</a></b></td>
										<td><code>❯ REPLACE-ME</code></td>
									</tr>
									</table>
								</blockquote>
							</details>
							<details>
								<summary><b>contact</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/xxehacker/MoneyHack/blob/master/frontend/src/services/contact/contactService.js'>contactService.js</a></b></td>
										<td><code>❯ REPLACE-ME</code></td>
									</tr>
									</table>
								</blockquote>
							</details>
							<details>
								<summary><b>transactions</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/xxehacker/MoneyHack/blob/master/frontend/src/services/transactions/transactionService.js'>transactionService.js</a></b></td>
										<td><code>❯ REPLACE-ME</code></td>
									</tr>
									</table>
								</blockquote>
							</details>
						</blockquote>
					</details>
				</blockquote>
			</details>
		</blockquote>
	</details>
</details>

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
