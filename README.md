# Forever Messages


**Forever Messages** is a blockchain-based platform for creating and sharing messages with the community. This project consists of two main components:

1. **`next-app`**: The frontend application built with Next.js, React, and Tailwind CSS.
2. **`fv-contracts`**: The smart contract infrastructure developed with Solidity and Hardhat.

The platform enables users to log in with their wallets, create immutable messages, and explore the community's contributions.

---

## Project Structure

```bash
forever-messages/
├── next-app/        # Frontend application
├── fv-contracts/    # Smart contract infrastructure
└── README.md        # General overview (this file)
```

- **`next-app`**: Contains the codebase for the responsive and user-friendly web application. It interacts with the blockchain through `ethers.js` and provides a seamless user experience.
- **`fv-contracts`**: Houses the Solidity smart contracts and deployment scripts to manage the blockchain side of the platform.

---

## Getting Started

### Prerequisites

- Node.js
- npm
- A wallet (e.g., MetaMask)
- Infura or Alchemy account for connecting to Ethereum testnets

### Installation

1. **Clone the Repository**:

   ```bash
   git clone
   cd forever-messages
   ```

2. **Navigate to each component and set it up**:
   - [Frontend Setup (`next-app`)](./next-app/README.md)
   - [Smart Contract Setup (`fv-contracts`)](./fv-contracts/README.md)

---

## Features

- **Blockchain Integration**: Immutable message storage and retrieval on the blockchain.
- **User Authentication**: Wallet-based login for secure and decentralized access.
- **Community Interaction**: View and search for messages left by other users.
- **Guided Onboarding**: A `how-to` page to help new users get started with blockchain.
- **Responsive UI**: Optimized for all devices with Tailwind CSS.
- **Custom Notifications**: Real-time feedback for user actions.

---

## Development Workflow

### Frontend (`next-app`)

Navigate to the frontend directory and follow the setup instructions:

```bash
cd next-app
npm install
npm run dev
```

More details in the [next-app README](./next-app/README.md).

### Contracts (`fv-contracts`)

Navigate to the contracts directory and set up the blockchain environment:

```bash
cd fv-contracts
npm install
npx hardhat compile
```

More details in the [fv-contracts README](./fv-contracts/README.md).

---

## Contribution

We welcome contributions! Please feel free to submit issues, fork the repository, and create pull requests.

---

## License

This project is licensed under the MIT License. See the LICENSE file for more details.
