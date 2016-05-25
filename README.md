# API Basejump: Timestamp microservice


## Overview


## User Stories:
- I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016)
- If it does, it returns both the Unix timestamp and the natural language form of that date.
- If it does not contain a date or Unix timestamp, it returns null for those properties.

## Usage

```bash
$ git clone https://github.com/ryanjamesmcgill/timestamp.git your-project
$ cd your-project
$ node server.js
```

Point a browser to `localhost:3000` and you're up and running!
