# 🎓 Pabna Model School

**Nurturing Minds, Building Futures**

Pabna Model School is a modern, fully responsive school website designed to represent the institution's identity, academic excellence, educational facilities, achievements, and school activities. It provides a centralized digital platform for students, parents, teachers, and prospective students to access important school information and explore online admission services.

---

## 📌 Project Overview

Pabna Model School Website is a standalone frontend project built with HTML5, CSS3, and Vanilla JavaScript. It focuses on delivering a professional educational website with a clean interface, interactive components, smooth animations, and responsive layouts across different screen sizes.

The website serves as:

- **Digital Information Center:** Provides school announcements, academic updates, events, and important information.
- **School Branding Platform:** Showcases the school's history, vision, mission, achievements, and educational facilities.
- **Academic Information Portal:** Introduces educational programs, teachers, and academic activities.
- **Online Admission Portal:** Provides admission information and an interactive student registration form.

## 🎯 Project Objectives

- Establish a professional and trustworthy digital identity for the school.
- Improve access to academic information for students and parents.
- Present school programs, facilities, achievements, and activities.
- Simplify the student admission process through an online registration interface.
- Improve communication between the school and its community.

## ✨ Key Features

### 1. Top Bar & Sticky Navigation
- School contact information and operating hours.
- Social media links.
- Responsive navigation menu.
- Sticky navbar functionality.
- Scrollspy navigation highlighting.
- Mobile-friendly hamburger menu.

### 2. Hero Section
- Full-viewport welcome section.
- Elegant blue gradient background.
- School-themed visual elements.
- Main slogan: "Nurturing Minds, Building Futures".
- Quick statistics.
- Dual call-to-action buttons.

### 3. About the School
- School history and institutional overview.
- Establishment year: 1962.
- School vision and mission.
- Principal's welcome message.
- Core values presentation.
- Animated statistics:
  - 2,400+ Students.
  - 85+ Teachers.
  - 98% Graduation Rate.

### 4. Academic Programs
Three educational levels are presented:

- **Primary Education:** Grades 1–5.
- **Secondary Education:** Grades 6–10, including Science, Commerce, and Arts streams.
- **Higher Secondary Education:** Grades 11–12, focusing on HSC preparation and university readiness.

### 5. Teachers & Faculty
- Professional teacher profile cards.
- Teacher photographs.
- Educational qualifications.
- Teaching subjects.
- Professional experience.
- Academic networking links.

### 6. Achievements & Awards
- School awards and recognitions.
- District and national-level achievements.
- Science olympiad accomplishments.
- Debate competitions.
- Achievement year labels.

### 7. Campus Facilities
The website highlights the school's educational infrastructure, including:

- Digital Library with 20,000+ books.
- Science Laboratories.
- Computer Laboratory with 100+ computers.
- Sports Complex.
- Auditorium with 500-seat capacity.
- School Health Clinic.

### 8. Latest Notices & Announcements
- Dynamic announcement board.
- Category-based tabs.
- Calendar-style date indicators.
- Important and general notice labels.
- Modal-based announcement reader.

### 9. Events & Gallery
- Interactive school photo gallery.
- Category-based image filtering.
- Custom lightbox functionality.
- Previous and next image navigation.
- Keyboard navigation support.
- Escape key to close the lightbox.

### 10. Online Admission
- Four-step admission process.
- Admission requirements and document checklist.
- Interactive student registration form.
- Client-side input validation.
- Submission progress indicators.
- Automatic Application Reference ID generation.
- Visual feedback and toast notifications.

### 11. Contact & Campus Location
- School address: Station Road, Pabna.
- Contact hotline.
- Official email information.
- Interactive campus location visualization.
- Animated location pin.

### 12. Footer & Quick Links
- Four-column footer layout.
- Important navigation links.
- Academic program directory.
- Newsletter subscription interface.
- Floating Back to Top button.

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Semantic website structure |
| CSS3 | Styling, layouts, animations, and responsiveness |
| Vanilla JavaScript (ES6+) | Interactive functionality and dynamic behavior |
| CSS Grid | Modern page layout |
| Flexbox | Flexible component alignment |
| IntersectionObserver API | Scroll-triggered animations and statistics |
| DOM API | Interactive components and event handling |

**No external frontend frameworks are required.**

The project does not depend on React, Vue, Angular, jQuery, or other heavy JavaScript frameworks.

---

## 🎨 Design System

The website uses a professional blue-based visual identity to represent trust, knowledge, and academic excellence.

| Color | Hex Code | Usage |
|---|---|---|
| Primary Blue | `#1a56db` | Primary buttons and highlights |
| Navy Blue | `#0e3a8c` | Navigation and dark sections |
| Accent Amber | `#f59e0b` | Highlights and achievements |
| Soft Background | `#f0f7ff` | Section backgrounds |
| Slate Dark | `#1e293b` | Main typography |
| Slate Gray | `#64748b` | Secondary typography |

### Design Principles
- Clean and modern educational interface.
- Consistent spacing and typography.
- Professional blue and gold color combination.
- Smooth transitions and micro-interactions.
- Mobile-first responsive design.
- Accessible and readable content.

---

## 📁 Project Structure

```text
pabna-model-school/
│
├── index.html
│
├── css/
│   └── style.css
│
├── js/
│   └── main.js
│
└── README.md
```

### File Description

- `index.html` — Contains the main website structure and all content sections.
- `css/style.css` — Contains the complete styling system, responsive layouts, and animations.
- `js/main.js` — Handles interactive functionality, including navigation, counters, gallery filters, lightbox, form validation, and notifications.
- `README.md` — Provides project documentation and setup instructions.

---

## 🚀 Getting Started

This project is designed as a standalone frontend website. No backend server or package installation is required to preview the website.

### Prerequisites

You only need:

- A modern web browser (Google Chrome, Microsoft Edge, Firefox, or Safari).
- A code editor such as Visual Studio Code (optional).

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/your-username/pabna-model-school.git
```

**2. Navigate to the project directory**

```bash
cd pabna-model-school
```

**3. Open the website**

Simply open `index.html` in your preferred browser.

Alternatively, use the Live Server extension in Visual Studio Code for local development.

---

## ⚙️ Functional Implementation

The website uses native browser APIs and Vanilla JavaScript to implement its interactive features.

| Feature | Implementation |
|---|---|
| Sticky Navigation | CSS Position Sticky |
| Scrollspy | IntersectionObserver / Scroll Events |
| Animated Statistics | IntersectionObserver API |
| Mobile Navigation | JavaScript Event Handling |
| Gallery Filtering | DOM Manipulation |
| Image Lightbox | Custom JavaScript Modal |
| Keyboard Controls | Keyboard Event Listeners |
| Form Validation | HTML5 Validation + JavaScript |
| Reference ID | JavaScript ID Generation |
| Toast Notifications | Dynamic DOM Elements |
| Back to Top | Smooth Scrolling |

---

## 📱 Responsive Design

The website follows a mobile-first responsive design approach.

It is optimized for:

- Smartphones.
- Tablets.
- Laptops.
- Desktop monitors.

CSS media queries, Grid, and Flexbox ensure that the website layout adapts to different screen dimensions.

---

## 🔒 Current Limitations

This project currently focuses on frontend functionality.

Some features require additional backend integration to operate as complete production services:

- Online admission submissions are not automatically stored in a database.
- Application Reference IDs are generated on the client side.
- Newsletter subscriptions require an external email service or backend.
- Announcements are not connected to a content management system.
- Student and parent authentication systems are not included.
- Contact information and institutional statistics should be verified by the school before publication.

Client-side validation improves the user experience but does not replace server-side validation or secure data storage.

---

## 🔮 Future Development Roadmap

Potential improvements include:

### 1. Backend & Database Integration
- Node.js and Express.js or Python Django.
- MySQL or PostgreSQL database.
- Secure online admission processing.
- Dynamic announcement management.

### 2. Student & Parent Portal
- Student and parent authentication.
- Academic performance and report cards.
- Attendance monitoring.
- Online tuition fee payments.

### 3. Content Management System
- Admin dashboard.
- Teacher and staff management.
- News and announcement management.
- Gallery and event management.

### 4. Multilingual Support
- English.
- Bengali.
- Indonesian.

### 5. Security & Performance
- Server-side form validation.
- Secure authentication.
- Data protection.
- Image optimization.
- SEO improvements.
- Accessibility enhancements.

---

## 🌐 Browser Compatibility

The website is designed for modern browsers supporting HTML5, CSS3, and ES6 JavaScript.

Recommended browsers:

- Google Chrome.
- Microsoft Edge.
- Mozilla Firefox.
- Apple Safari.

---

## 📄 License

This project is developed as an educational website project for Pabna Model School.

A formal open-source license can be added when the project owner determines the distribution and usage permissions.

---

## 👨‍💻 Developer

**Project Name:** Pabna Model School Website  
**Category:** Educational Website  
**Development Type:** Frontend Web Development  
**Technologies:** HTML5, CSS3, Vanilla JavaScript  
**Architecture:** Standalone Frontend Application

---

<p align="center">
  <strong>Pabna Model School</strong><br>
  <em>Nurturing Minds, Building Futures</em>
</p>
