E-SMEC Homes Website

Overview

This website represents E-SMEC Homes, a construction and real estate company in Nigeria. It showcases the company's services, projects, and corporate profile, allowing visitors to explore residential, commercial, and industrial solutions.

The website is built using HTML, CSS, and JavaScript. It is a template adapted from a previous project, with reused CSS class names to maintain consistent styling. While content, images, and branding were updated, many original class names were retained to preserve the design and animation effects.

<!-- Website Structure  -->

Pages

Home (index.html)

Hero slider with promotional messaging and company tagline.

About Us section highlighting company mission, vision, and expertise.

Featured projects overview.

Navigation to main pages: Services, Projects.

Services (services.html)

Lists all services provided by E-SMEC Homes.

Organized into categories with brief descriptions of each service.

Projects (projects.html)

Grid layout displaying all projects.

Each project links to a detailed view (Project Category Pages).

Project Category Pages (project-single.html and variants)

In-depth description of a single project category.

Project sidebar includes:

Project Name

Budget

Category

Duration

Completion Date

Client/gallery images displayed in a carousel.

Contact (contact.html)

Contact form for inquiries.

Company phone number, email, and office information.

<!-- Navigation Structure -->

Main menu links: Home, About Us, Services, Projects, Contact.

Projects page links to multiple category-specific project pages (6 in total).

Navigation is responsive with a sticky header and collapsible mobile menu.

<!-- CSS Structure (custom.css) -->

The CSS is organized in a modular, section-based format:

Global Variables

Primary/secondary colors, accent color, text color.

Font family (Jost).

General CSS

Typography, body layout, image handling, button styles, preloader animations.

Header

Sticky navigation, dropdowns, mobile menu, header contact box.

Hero Section

Slider layouts, background images, text overlays, pagination styling.

About Us

Image layouts, aspect ratios, video buttons.

Content boxes with icons and details.

Services / Projects

Card layouts for projects and services.

Hover effects and image animations.

Project Single / Category Pages

Sidebar details, project gallery styling.

Footer

Contact info and social links.

Responsive CSS

Mobile and tablet breakpoints ensuring proper scaling of menus, images, and sections.

Notes on Template Reuse

Original class names like hero, section-title, btn-default, and wow fadeInUp were retained to maintain the template’s styling and animations.

Customization focused on content, images, and project/category pages.

<!-- Contact Form Handling -->

The Contact page (contact.html) includes a form for users to submit inquiries. Submissions are managed using Web3Form, a third-party service that allows form handling without a backend server.

How the Form Works

Form Setup

HTML form uses id="contactForm" and POST method.

Includes fields for name, email, phone, and message.

Web3Form Integration

Form’s action attribute points to Web3Form’s endpoint.

Web3Form handles form submission, validation, and delivery to email.

JavaScript Handling

Intercepts the form submission via event.preventDefault().

Serializes form data into JSON.

Sends a fetch() request to Web3Form asynchronously.

On success: displays a success message and resets the form.

On error: displays an error message and prompts retry.

Benefits

No backend required for submissions.

Built-in spam protection and validation.

Easy integration with existing HTML template.

Simplifies handling of success/error states using JavaScript.

Assets

Images: logos, hero images, project photos, icons (images/ folder)

CSS: custom.css, Bootstrap, and other plugin styles

JS: For sliders, animations, and responsive menus (assumed from template)

<!-- Key Features -->

Fully responsive, mobile-friendly design.

Animated elements and hover effects.

Multiple project category pages with detailed information.

Contact form handled via Web3Form with JavaScript integration.

Consistent branding and color scheme derived from original template.

Easy addition of new services, projects, or categories while maintaining style.
