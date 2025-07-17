# Vite React TypeScript Starter

This is a starter template for a React project using Vite, TypeScript, and Tailwind CSS.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

### Running the Application

```sh
npm run dev
```

## Available Scripts

In the project directory, you can run:

*   `npm run dev`: Runs the app in the development mode.
*   `npm run build`: Builds the app for production to the `dist` folder.
*   `npm run lint`: Lints the project files.
*   `npm run preview`: Serves the production build locally.

## Project Structure

```
.
├── src
│   ├── components
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── ProjectModal.tsx
│   │   └── ProjectsShowcase.tsx
│   ├── types
│   │   └── Project.ts
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## Customization

### Components

You can customize the content of the website by editing the components in the `src/components` directory.

*   `About.tsx`: The "About Me" section.
*   `Contact.tsx`: The contact form and information.
*   `Footer.tsx`: The footer of the website.
*   `Header.tsx`: The navigation bar.
*   `Hero.tsx`: The hero section of the website.
*   `ProjectModal.tsx`: The modal that displays project details.
*   `ProjectsShowcase.tsx`: The section that showcases your projects.

### Projects

To add, remove, or modify projects, you'll need to edit the `ProjectsShowcase.tsx` component. The project data is currently hardcoded in this file. You can modify the `Project` type in `src/types/Project.ts` to add more fields to your projects.

### Styling

This project uses Tailwind CSS for styling. You can customize the styles by editing the `tailwind.config.js` file and the `src/index.css` file.