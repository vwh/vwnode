<div align="center">
  <h1>VwNode</h1>
</div>

<p align="center">
<b>QuickStarter for Node.js</b>: A streamlined setup to kickstart your Node.js projects with TypeScript, Biome for linting and formatting, and support for both npm and Bun. Enhance your development workflow with efficiency and flexibility.
</p>

<div align="center">
  <a href="https://github.com/vwh/vwnode/actions/workflows/format.yml">
    <img src="https://github.com/vwh/vwnode/actions/workflows/format.yml/badge.svg" alt="Check Format Badge"/>
  </a>
  <a href="https://github.com/vwh/vwnode/actions/workflows/lint.yml">
    <img src="https://github.com/vwh/vwnode/actions/workflows/lint.yml/badge.svg" alt="Lint Badge"/>
  </a>
</div>

## 🗃️ Project Structure

```bash
vw-node/
├── biome.json                 # Biome configuration
├── bun.lockb                  # Bun lockfile
├── nodemon.json               # Nodemon configuration
├── package.json               # Project metadata and dependencies
├── package-lock.json          # npm lockfile
├── README.md                  # Project documentation
├── src/                       # Source files
│   └── index.ts               # Main TypeScript file
├── tsconfig.json              # TypeScript configuration
└── tsup.config.ts             # tsup configuration
```

## 🚀 Getting Started

### 📥 Installation

Clone the repository and install dependencies:

```bash
# Using Bun
git clone https://github.com/vwh/vwnode
cd vwnode

# Using bun
bun install

# Or using npm
npm install
```

### 💻 Development Server

Start the development server:

```bash
# Using Bun
bun run dev

# Or using npm
npm run dev
```

### 🏗️ Build

Build the project for production:

```bash
# Using Bun
bun run build

# Or using npm
npm run build
```

### 👀 Preview

Preview the production build locally:

```bash
# Using Bun
bun run preview

# Or using npm
npm run preview
```

### 🧹 Linting

Lint the project files:

```bash
# Using Bun
bun run lint

# Or using npm
npm run lint
```

### 🎨 Formatting

Format the project files:

```bash
# Using Bun
bun run format

# Or using npm
npm run format
```

Check the formatting:

```bash
# Using Bun
bun run format:check

# Or using npm
npm run format:check
```

## 🤝 Contributing

Contributions are welcome! Feel free to open a pull request with your improvements or fixes.
