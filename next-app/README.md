# Forever Messages Frontend Setup

**Forever Messages** is a blockchain-based message-saving application. Users can log in using their wallets, save their names and messages, and view public messages from the community. The application provides a censorship-resistant and immutable platform for sharing thoughts and building a community.

The application is built with **Ethers.js**, **Next.js**, **React**, and **Tailwind CSS**. It is fully responsive and features custom notifications to keep users informed. It also includes a guide for first-time blockchain application users.

## Directory Structure

The project follows a modular and clean structure:

```bash
src/
├── app/
│   ├── components/
│   │   ├── AddMessageBoard.jsx
│   │   ├── MessageCard.jsx
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── LandingPage.jsx
│   │   ├── SearchBar.jsx
│   │   ├── Pagination.jsx
│   │   └── Notification.jsx
│   ├── hooks/
│   │   └── useContract.js
│   ├── how-to/
│   │   └── page.jsx
│   ├── messages/
│   │   └── page.jsx
│   ├── layout.jsx
│   └── page.jsx
└── public/
```

### Key Features:

- **App Router**: Utilizes Next.js App Router for routing.
- **Components**: Modular design with reusable components for better scalability and maintenance.
- **Blockchain Integration**: Features `useContract` hook for seamless blockchain interactions.
- **User Guide**: Includes a `how-to` page to assist first-time users with blockchain applications.
- **Responsive Design**: Fully responsive UI designed with Tailwind CSS.
- **Custom Notifications**: Provides real-time feedback and status updates to users.

## Installation

1. **Clone the Repository**:

   ```bash
   git clone
   cd next-app
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   Create a `.env` file in the root directory with the following contents:

   ```plaintext
   NEXT_PUBLIC_CONTRACT_ADDRESS=YOUR_CONTRACT_ADDRESS
   ```

4. **Start the Development Server**:
   ```bash
   npm run dev
   ```

## Features Breakdown

### Components

- **AddMessageBoard**: Form for adding new messages to the blockchain.
- **MessageCard**: Displays individual messages from the blockchain.
- **Navbar** & **Footer**: Navigation and footer components for the layout.
- **LandingPage**: Home page with application introduction.
- **SearchBar**: Allows users to search for messages by user.
- **Pagination**: Handles navigation between pages of messages.
- **Notification**: Custom notifications for user actions.

### Hooks

- **useContract**: Manages interactions with the smart contract using Ethers.js.

### Pages

- **How-To Page (`how-to/page.jsx`)**: A guide for first-time blockchain users.
- **Messages Page (`messages/page.jsx`)**: Displays all messages stored on the blockchain.

## Custom Notifications

The application uses custom notification components to inform users about:

- Successful or failed transactions.
- Network connectivity issues.
- Wallet connection status.

## Deployment

To deploy the application:

1. Build the project:

   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm start
   ```

## License

This project is licensed under the MIT License. See the LICENSE file for details.
