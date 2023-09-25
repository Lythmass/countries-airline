
# Countries and Airports

This is a Vite React project where I use React-Query to cache the fetched data from apis, such as: countries, airports and currencies.

[Live version](https://countries-airports.netlify.app/)

## Table of Contents

* [Technologies and Libraries](#technologies-and-libraries)
* [Features](#features)
* [APIs](#apis)
* [Folder Structure](#folder-structure)


## Technologies and Libraries

**Environment:** Vite React, TailwindCSS, TypeScript

**Packages:**
- [React-Query](https://tanstack.com/query/v3/)
- [React-Router](https://reactrouter.com/en/main)
- [React-Select](https://react-select.com/home)

## Features
- Absolute Exporting & Importing.
- Basic Responsiveness.
- Caching to avoid unnecessary requests to the server.
- Live preview.
- Clean code & prettier & eslit.
- Converting currencies from one country to another.
- Searching airports for the chosen country.
- Switching coutnries with React-Select Component.
- Asking the user for locaiton permission to display country the user is located in.

## APIs
- [Countries Api](https://restcountries.com/)
- [Currency Api](https://exchangerate.host/#)
- [Airports Api](https://api-ninjas.com/api/airports)
- [Reverse Geocoding Api](https://api-ninjas.com/api/reversegeocoding)

## Folder Structure

- Each component has it's own folder
- Global or Layout Components are in /src/components
- Local components are located in pages/page/components
- index.ts files are used for absolute exporting
- Hooks folder contains global custom hooks
- Types folder contains global types
```
├── public
├── src
│   └── components
│       ├── GlobalComponent
│       │   ├── GlobalComponent.tsx
│       │   └── index.ts
│       └── index.ts
├── hooks
├── types
├── pages
│   └── page
│       ├── components
│       ├── Page.tsx
│       └── index.ts
├── Layout.tsx
├── App.tsx
└── main.tsx

- .eslintrc.json
- .prettierrc.json
- jsconfig.json
- package-lock.json
- package.json
- README.mds
- tailwind.config.js
```