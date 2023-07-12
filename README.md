# Dinghy Finder

_Dinghy Finder_ is a product quiz application that helps users find the perfect dinghy (_Takacat_) based on their preferences and requirements. It provides a personalized recommendation for a Takacat model along with suggested accessories. Additionally, users can compare the recommended dinghy with other available options.

The repository contains the source code for both the client and server components of the application. The client is built with `create-react-app`, while the server is implemented in Node.js.

## Features

The _Dinghy Finder_ application offers the following features:

1. **Product Quiz:** Users can answer a series of questions related to their intended use of the dinghy, such as purpose, passenger capacity, possession of an outboard motor, required horsepower, transportation method, amount of gear, and storage location.

2. **Recommendation:** Based on the user's responses, the application generates a personalized recommendation for the most suitable Takacat model that fulfills their requirements.

3. **Accessories:** Alongside the recommendation, the application suggests relevant accessories that complement the chosen Takacat model.

4. **Comparison:** Users have the option to compare the recommended dinghy with other available boats. This feature enables them to evaluate different options and make an informed decision.

## Installation

To set up the Dinghy Finder application locally, follow these steps:

1.  Clone the repository:

        git clone https://github.com/your-username/dinghy-finder.git

2.  Change into the project directory:

        cd takacat_quiz

3.  Install the dependencies for both the client and server components:

```bash
cd client
npm install

cd ../server
npm install
```

## Usage

To start the Dinghy Finder application, perform the following:

1. Launch the server:

```bash
cd server
yarn dev
```

The server will run on http://localhost:8080.

2. Start the client:

```bash
cd ../client
yarn start
```

The client will open in your default web browser at http://localhost:3000.

3. Interact with the Dinghy Finder application by answering the quiz questions and exploring the recommended Takacat model and accessories.

## Contributing

Contributions to the Dinghy Finder repository are welcome! If you wish to contribute, please follow these guidelines:

1. Fork the repository and create a new branch for your feature or bug fix.

2. Make the necessary changes and test them thoroughly.

3. Commit your changes with a descriptive commit message.

4. Push your branch to your forked repository.

5. Submit a pull request to the main repository, explaining the purpose and details of your changes.

## License

The Dinghy Finder repository is licensed under the MIT License. You are free to use, modify, and distribute the codebase according to the terms of this license.

## Acknowledgements

The Dinghy Finder application is developed using several open-source libraries and frameworks. The creators express their gratitude to the community for their valuable contributions.

If you have any questions, issues, or suggestions, please feel free to reach out or open an issue in the repository.
