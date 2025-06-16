# 🎭 Playwright Automation with TypeScript

This repository contains an end-to-end (E2E) test automation setup using **Playwright** and **TypeScript**. It allows automated testing of modern web applications across Chromium, Firefox, and WebKit.

---

## 📁 Project Structure

playwright-ts-project/
├── tests/                  # Test files (specs)
│   └── example.spec.ts     # Sample test
├── pages/                  # Page Object Models (optional)
│   └── login.page.ts
├── utils/                  # Utility functions/helpers
├── playwright.config.ts    # Playwright configuration
├── tsconfig.json           # TypeScript configuration
├── package.json            # NPM dependencies and scripts
├── README.md               # Project documentation

---

## 🚀 Getting Started

### 1. Clone the repository

```
git clone https://github.com/rays63/Playright-typescript.git
cd playwright-ts-project
```
### 2. Install dependencies
```
npm install
```
### 3. Install Playwright browsers
```
npx playwright install
```
### 4. Run tests
```
npx playwright test
```
---

## 📦 Scripts

Script | Description
-------|-------------
npx playwright test | Run all tests
npx playwright test tests/example.spec.ts | Run specific test file
npx playwright show-report | View HTML test report
npx playwright codegen <url> | Record actions and generate test
npx playwright install | Install required browsers

---

## 🛠 .gitignore

node_modules/
playwright-report/
test-results/
.env
trace.zip
*.log

---

## 🧑‍💻 Contributing

Feel free to fork the repo and submit pull requests. Contributions are welcome!

---

## 📘 Resources

- Playwright Docs: https://playwright.dev/docs/intro
- Playwright Test Runner: https://playwright.dev/docs/test-intro
- Playwright Trace Viewer: https://playwright.dev/docs/trace-viewer

---

## 📄 License

This project is licensed under the MIT License.
