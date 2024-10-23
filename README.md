# devlinks [A link sharing platform for developers]

## Getting Started

### First fill up this .env.local variable

```bash
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET = 717c1eef4257ead95a34460b4e1a41e5
SITE_URL=http://localhost:3000
```

### Install dependencies and run the development server

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Login credentials (Please, feel free to register with your own email)

```bash
email: johndoe@test.com
password: Test1234
```

## DEMO LINK

### https://foys-devlinks.vercel.app

## Feature List

- [x] User Authentication

  - [x] Register
  - [x] Login
  - [x] Logout
  - [x] Protected Routes

- [x] User Links

  - [x] Add Link
  - [x] Edit Link
  - [x] Delete Link
  - [x] Reorder (Drag & Drop)
  - [x] Link Preview (realtime-changes)

- [x] User Profile

  - [x] Update Profile (name, email)
  - [x] Share Profile with links (URL)

- [x] Others
  - [x] Repeater Form Fields
  - [x] Advance form validation
  - [x] Drag and Drop
  - [x] Responsive Design
  - [x] Dark Mode | Light Mode
  - [x] Skeleton Loading
  - [x] Testing with React Testing Library

## Tools and Technologies

- [Next.js](https://nextjs.org/)
- [NextAuth](https://next-auth.js.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [RTK Query](https://redux-toolkit.js.org/rtk-query/overview)
- [TailwindCSS](https://tailwindcss.com/)
- [Firebase](https://firebase.google.com/)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/)
- [React Hot Toast](https://react-hot-toast.com/)
- [Phospor Icons](https://phosphoricons.com/)
- [@hello-pangea/dnd](https://www.npmjs.com/package/@hello-pangea/dnd)
- [Next Themes](https://www.npmjs.com/package/next-themes)
- [Tailwind Merge](https://www.npmjs.com/package/tailwind-merge)
- [Class Variance Authority](https://www.npmjs.com/package/class-variance-authority)

- Testing

  - [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
  - [Jest](https://jestjs.io/)
  - [Jest DOM](https://testing-library.com/docs/jest-dom/)

- Code organization and quality
  - [Husky](https://typicode.github.io/husky/#/)
  - [ESLint](https://eslint.org/)
  - [Prettier](https://prettier.io/)
  - [lint-staged](https://github.com/okonet/lint-staged)
