# Shopping Cart

A modern shopping cart web application built with React and Vite. This project demonstrates a simple e-commerce experience, including product browsing, cart management, and routing, with a clean and responsive UI.

## Features

- 🛒 **Add/Remove Products**: Browse products and add or remove them from your cart.
- 🛍️ **Cart Management**: View cart contents, update quantities, and see the total price.
- 🔄 **React Context API**: Global state management for cart and shop data.
- ⚡ **Vite**: Fast development and build tooling.
- 🎨 **Styled Components**: Modular, maintainable CSS-in-JS styling.
- 🗺️ **Routing**: Navigate between Shop, Cart, and 404 pages.
- ✅ **Testing**: Includes tests with Jest and Vitest.
- 🧹 **Linting**: ESLint for code quality.

## Project Structure

```
src/
	App.jsx              # Main app component
	GlobalContext.jsx    # React Context for global state
	main.jsx             # App entry point
	route.jsx            # App routing
	assets/              # Images and static assets
	css/                 # CSS files
		App.css
		index.css
	path/                # Page components
		Cart.jsx
		Error404.jsx
		Shop.jsx
	styled/              # Styled components
		AppStyled.js
		CartStyled.js
		Error404Styled.js
		ShopStyled.js
public/                 # Static public files
```

## Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the app.

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Testing

- **Jest**: `npm test`
- **Vitest**: `npm run test:unit`

## Scripts

- `dev` - Start development server
- `build` - Build for production
- `preview` - Preview production build
- `test` - Run Jest tests
- `test:unit` - Run Vitest unit tests

## Technologies Used

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Styled Components](https://styled-components.com/)
- [Jest](https://jestjs.io/) & [Vitest](https://vitest.dev/)
- [ESLint](https://eslint.org/)

## License

This project is licensed under the MIT License.
