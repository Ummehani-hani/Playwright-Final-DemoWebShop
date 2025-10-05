# Playwright Final Demo Web Shop 🛍️

## 📘 Overview
This project automates the end-to-end purchase flow for the [Demo Web Shop](http://demowebshop.tricentis.com/) using **Playwright**.

## 🧩 Features
- Data-driven testing with multiple users  
- Registration, login, add-to-cart, checkout, and order verification  
- Page Object Model (POM) design  
- Assertions for order success and validation  
- Environment configuration and test reports  

## ⚙️ Setup
1. Clone this repo:
   ```bash
   git clone https://github.com/Ummehani-hani/Playwright-Final-DemoWebShop.git
Navigate into the project:

cd Playwright-Final-DemoWebShop


Install dependencies:

npm install

▶️ Run Tests
npx playwright test


To view the report:

npx playwright show-report

🧾 Project Structure
├── tests/
│   └── main.spec.ts
├── pages/
│   ├── registerPage.ts
│   ├── loginPage.ts
│   ├── cartPage.ts
│   ├── checkoutPage.ts
│   └── verifyPage.ts
├── test-data/
│   └── users.json
├── playwright.config.ts
└── package.json
