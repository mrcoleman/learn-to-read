# Learn to Read

A simple web-based game for children to learn to read.

## Features

*   Word pronunciation audio.
*   Interactive gameplay.

## Getting Started

### Prerequisites

*   [Node.js](https://nodejs.org/)
*   [npm](https://www.npmjs.com/)

### Installation

1.  Clone the repository.
2.  Install the dependencies:

    ```bash
    npm install
    ```

### Running the Application

```bash
npm start
```

This will start the webpack development server at `http://localhost:8080`.

## Building for Production

```bash
npm run build
```

This will create a `dist` directory with the production-ready files.

## Generating Audio

The application uses pre-rendered audio files for word pronunciation. To generate these files, you need to run the `generate_audio.py` script.

1.  Install the required Python libraries:

    ```bash
    pip install gTTS
    ```

2.  Run the script:

    ```bash
    python generate_audio.py
    ```

    This will create an `audio` directory with the generated `.mp3` files.
