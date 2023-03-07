# Mocksap

Server created to simulate SAP server behavior

- Running db on docker
```bash
  docker run -d -p 5432:5432 --name=postgres -v "/var/lib/postgres/data:/var/lib/postgres/data" -e POSTGRES_PASSWORD=postgres -e PRIMARY_USER=postgres postgres
```

- Intaling deps
```bash
yarn install
```