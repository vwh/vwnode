<div align="center">
  <h1>VwNode</h1>
</div>

<p align="center">
<b>QuickStarter for Node.js</b>: A streamlined setup to kickstart your Node.js projects with TypeScript, Biome for linting and formatting, and support for both npm and Bun. Enhance your development workflow with efficiency and flexibility.
</p>

<div align="center">
  <a href="https://github.com/vwh/vwnode/actions/workflows/format-check.yml">
    <img src="https://github.com/vwh/vwnode/actions/workflows/format-check.yml/badge.svg" alt="Check Format Badge"/>
  </a>
  <a href="https://github.com/vwh/vwnode/actions/workflows/lint.yml">
    <img src="https://github.com/vwh/vwnode/actions/workflows/lint.yml/badge.svg" alt="Lint Badge"/>
  </a>
  <a href="https://github.com/vwh/vwnode/actions/workflows/test.yml">
    <img src="https://github.com/vwh/vwnode/actions/workflows/test.yml/badge.svg" alt="Test Badge"/>
  </a>
</div>

## 🗃️ Project Structure

```bash
vw-node/
├── biome.json                 # Biome configuration
├── bun.lockb                  # Bun lockfile
├── Dockerfile                 # Docker configuration
├── package.json               # Project metadata and dependencies
├── package-lock.json          # npm lockfile
├── README.md                  # Project documentation
├── src/                       # Source files
│   └── index.ts               # Main TypeScript file
├── tests/                     # Test files
├── tsconfig.json              # TypeScript configuration
└── tsup.config.ts             # tsup configuration
```

## 🚀 Getting Started

### 📥 Installation

Clone the repository and install dependencies:

```bash
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

### 🚀 Start

Run the production build:

```bash
# Using Bun
bun run start

# Or using npm
npm run start
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

### 🧐 Type Check

```bash
# Using Bun
bun run type-check

# Or using npm
npm run type-check
```

### 🐳 Docker

Build the Docker image:

```bash
# Using Bun
bun run docker:build

# Or using npm
npm run docker:build
```

Run the Docker image:

```bash
# Using Bun
bun run docker:run

# Or using npm
npm run docker:run
```

## 🤝 Contributing

Contributions are welcome! Feel free to open a pull request with your improvements or fixes.
