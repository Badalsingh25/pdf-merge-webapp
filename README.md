# 📄 PdfX – PDF Merge Web Application

A fast and user-friendly online tool to **merge multiple PDF files into a single document**.  
PdfX is built with **Node.js, Express, Multer & PDF-Merger-JS**, providing a lightweight and efficient backend for handling secure PDF merging.

---

## 🔖 Tech & Project Badges

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML](https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)
![PDF Merger JS](https://img.shields.io/badge/PDF%20Merger%20JS-6B7280?style=for-the-badge)
![Status](https://img.shields.io/badge/Project-Production%20Ready-brightgreen?style=for-the-badge)

---

## 📌 Overview

**PdfX** allows users to upload **multiple PDF files and merge them instantly into one** downloadable file.

🔹 No account/login required  
🔹 Quick and simple interface  
🔹 Merging takes seconds  
🔹 Uploads stored temporarily and deleted afterward  

---

## 🌟 Features

### 🧑‍💻 User Features
- Upload multiple PDF files at once
- Maintain PDF ordering during merge
- One-click download of merged PDF
- Clean & responsive UI built with Bootstrap

### 🔐 Security
- Uploaded files are stored temporarily in `/uploads`
- Merged PDFs are served instantly and cleared later
- No cloud storage — files remain local to the server

---

## 🧱 Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | HTML, CSS, Bootstrap, JavaScript |
| Backend | Node.js, Express.js |
| File Upload | Multer |
| PDF Processing | pdf-merger-js |
| Deployment (recommended) | Render |

---

## 🗂 Project Structure

```bash
PDF-Merge-WebApp/
├── public/                 # Static frontend assets
├── templates/              # index.html UI
├── uploads/                # Temporary uploaded PDFs
├── merge.js                # PDF merging logic
├── server.js               # Express server
├── package.json
└── README.md
