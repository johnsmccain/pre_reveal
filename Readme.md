# NFT Prereveal Project

Hey, this is my first Solidity hands-on project! The concept was inspired by a YouTube channel called "Web3 Club" and specifically the project titled "NFT Prereveal." This README will walk you through how to run this code on your local machine.

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:
- Node.js
- npm (Node Package Manager)
- Hardhat

### Installation

1. **Clone the Project**

   Clone the project to your local machine with the following command:
   ```bash
   git clone https://github.com/johnsmccain/pre_reveal.git
   ```

2. **Navigate to the Project Directory**

   Open a terminal and navigate to the project directory:
   ```bash
   cd pre_reveal
   ```

### Running the Project

To run the project, you'll need to spin up both the frontend and the blockchain backend.

1. **Start the Frontend**

   Open a terminal and navigate to the `frontend` directory, then run the following command to spin up the frontend:
   ```bash
   cd frontend
   npm run dev
   ```
   This will start the frontend on [http://localhost:5173](http://localhost:5173).

2. **Start the Blockchain Backend**

   Open two terminals and navigate to the `blockchain` directory in both.

   In the first terminal, run:
   ```bash
   cd blockchain
   npx hardhat node
   ```

   In the second terminal, run:
   ```bash
   cd blockchain
   npx hardhat ignition deploy ignition/modules/Prereveal.ts
   ```

### Additional Information

- **Frontend**: This directory contains the frontend code for the NFT Prereveal project.
- **Blockchain**: This directory contains the smart contracts and Hardhat configuration for deploying the contracts.

Feel free to explore the code and make modifications as you see fit. Enjoy building with Solidity and Web3!

---

If you encounter any issues or have questions, please refer to the Hardhat and Node.js documentation, or reach out to the "Web3 Club" community for guidance.

Happy coding!

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- Thanks to "Web3 Club" on YouTube for the inspiration and guidance on this project.
