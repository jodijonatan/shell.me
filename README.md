# Shell.me

A modern, interactive web-based terminal emulator built with React and Vite. This project simulates a command-line interface in the browser, allowing users to execute predefined commands and interact with a virtual shell environment.

## Features

- **Interactive Terminal Interface**: Mimics a real terminal with command input and output display.
- **Predefined Commands**: Supports a variety of built-in commands for demonstration and interaction.
- **Responsive Design**: Optimized for desktop and mobile devices.
- **Fast and Lightweight**: Powered by Vite for quick development and build times.
- **Customizable**: Easily extensible with new commands and features.

## Technologies Used

- **React**: For building the user interface components.
- **Vite**: For fast development server and optimized builds.
- **CSS**: For styling the terminal interface.
- **JavaScript (ES6+)**: Core language for logic and interactivity.

## Installation

1. **Clone the repository**:

```bash
   git clone https://github.com/jodijonatan/shell.me.git
   cd shell.me

```

2. **Install dependencies**:

```bash
   npm install

```

3. **Start the development server**:

```bash
   npm run dev

```

4. **Open your browser** and navigate to `http://localhost:5173` (or the port specified by Vite).

## Usage

Once the application is running, you can interact with the terminal by typing commands in the input field. The terminal supports various commands such as:

- `help`: Display available commands.
- `clear`: Clear the terminal screen.
- `echo [message]`: Print a message to the terminal.
- And more! Explore the `src/utils/commands.jsx` file for the full list of supported commands.

## Project Structure

```
shell.me/
├── public/
│   ├── vite.svg
│   └── ...
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   ├── CommandInput.jsx
│   │   ├── OutputLine.jsx
│   │   └── Terminal.jsx
│   ├── utils/
│   │   └── commands.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── package.json
├── vite.config.js
└── README.md
```

- **components/**: Contains React components for the terminal UI.
- **utils/**: Utility functions, including command definitions.
- **App.jsx**: Main application component.
- **main.jsx**: Entry point for the React application.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and test thoroughly.
4. Submit a pull request with a clear description of your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built with [Vite](https://vitejs.dev/) and [React](https://reactjs.org/).
- Inspired by classic terminal interfaces and modern web technologies.
