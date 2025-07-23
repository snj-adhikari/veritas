# React Portfolio Theme

This project is a basic React website theme designed for portfolios, featuring simple animations and a clean design. It's built using Create React App, providing a solid foundation for showcasing your work and skills.

<img width="3840" height="14404" alt="screencapture-veritas-jade-vercel-app-2025-07-23-10_16_36" src="https://github.com/user-attachments/assets/f3b5e90a-c2a5-4613-a9d0-263b6e80e5a5" />


## Features

-   **Modern React:** Built with the latest React features and best practices.
-   **SCSS Styling:** Utilizes SCSS for organized and maintainable styling.
-   **Component-Based Architecture:** Well-structured components for easy customization.
-   **Basic Animations:** Subtle animations to enhance user experience.
-   **Responsive Design:** Adapts to different screen sizes for optimal viewing on various devices.

## Project Structure

```plaintext
├── public/
│   └── index.html
├── src/
│   ├── component/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── CardSection.tsx
│   │   ├── WorkSection.tsx
│   │   ├── PortfolioSection.tsx
│   │   ├── ContactCard.tsx
│   │   └── Footer.tsx
│   ├── style/
│   │   ├── app.scss
│   │   └── component/
│   │       ├── navbar.module.scss
│   │       ├── hero.module.scss
│   │       ├── card.section.scss
│   │       ├── card.module.scss
│   │       ├── work.section.scss
│   │       ├── work.module.scss
│   │       ├── portfolio.section.scss
│   │       ├── portfolio.module.scss
│   │       ├── contact.section.scss
│   │       └── footer.section.scss
│   ├── App.tsx
│   ├── index.tsx
│   └── react-app-env.d.ts
├── package.json
├── tsconfig.json
└── README.md
```


## Technologies Used

-   **React:** A JavaScript library for building user interfaces.
-   **TypeScript:** A superset of JavaScript that adds static typing.
-   **SCSS:** A CSS preprocessor that adds features like variables, nesting, and mixins.
-   **Create React App:** A tool for setting up a modern React development environment.

## Getting Started

### Prerequisites

-   Node.js (>=16)
-   npm or yarn

### Installation

1.  Clone the repository:

    ```sh
    git clone <repository-url>
    ```

2.  Navigate to the project directory:

    ```sh
    cd <project-directory>
    ```

3.  Install dependencies:

    ```sh
    npm install
    # or
    yarn install
    ```

### Running the Application

1.  Start the development server:

    ```sh
    npm start
    # or
    yarn start
    ```

2.  Open your browser and navigate to `http://localhost:3000`.

### Building the Application

1.  Build the application for production:

    ```sh
    npm run build
    # or
    yarn build
    ```

2.  The production build will be in the `build` directory.

## Customization

-   **Components:** Modify or create new components in the `src/component` directory.
-   **Styling:** Update SCSS files in the `src/style` directory to change the theme's appearance.  The main [src/style/app.scss](src/style/app.scss) file imports all the component-specific styles.
-   **Content:**  Edit the content within the React components (e.g., text, images, links) to match your portfolio information.

## Key Components

-   [`Navbar`](src/component/Navbar.tsx): Navigation bar at the top. Styles are located in [src/style/component/navbar.module.scss](src/style/component/navbar.module.scss).
-   [`Hero`](src/component/Hero.tsx):  The main hero section. Styles are located in [src/style/component/hero.module.scss](src/style/component/hero.module.scss).
-   [`CardSection`](src/component/CardSection.tsx): Displays a section of cards. Styles are located in [src/style/component/card.section.scss](src/style/component/card.section.scss) and [src/style/component/card.module.scss](src/style/component/card.module.scss).
-   [`WorkSection`](src/component/WorkSection.tsx): Showcases your work examples. Styles are located in [src/style/component/work.section.scss](src/style/component/work.section.scss) and [src/style/component/work.module.scss](src/style/component/work.module.scss).
-   [`PortfolioSection`](src/component/PorfolioSection.tsx): Displays portfolio items. Styles are located in [src/style/component/portfolio.section.scss](src/style/component/portfolio.section.scss) and [src/style/component/portfolio.module.scss](src/style/component/portfolio.module.scss).
-   [`ContactSection`](src/component/ContactCard.tsx): Contact form. Styles are located in [src/style/component/contact.section.scss](src/style/component/contact.section.scss).
-   [`FooterSection`](src/component/Footer.tsx):  The footer section. Styles are located in [src/style/component/footer.section.scss](src/style/component/footer.section.scss).

## Deployment

The `build` directory can be deployed to any static hosting service like Netlify, Vercel, or GitHub Pages.

## Learn More

-   [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started)
-   [React documentation](https://reactjs.org/)
-   [SCSS documentation](https://sass-lang.com/)
