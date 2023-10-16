# City Population Service

A Node.js service that allows you to get, update or add a U.S. city population.

## Getting Started

Clone repository and `cd` into the root directory

Run:

```bash
npm install
npm start
```

You should see the following log in your shell:

```
Server is running on port 5555
```

## Features

To GET a city population:

1. Visit `http://127.0.0.1:5555/api/population/state/Pennsylvania/city/Harrisburg` in a browser (you can edit the state and city as you wish)
2. In a terminal, run this command: `curl -X GET 'http://127.0.0.1:5555/api/population/state/Pennsylvania/city/Harrisburg'`

To UPDATE or ADD a new city population:

1. In a terminal, run this command: `curl -X PUT 'http://127.0.0.1:5555/api/population/state/Pennsylvania/city/Harrisburg' -h 'Content-Type: application/json' -d '{"population": "200"}`

To verify your update has worked, run a `GET` against the same city that you just updated.

## License

Designed and maintained by Brian Fitzgerald

Email: brianjfitzgerald@gmail.com

Copyright © 2021
