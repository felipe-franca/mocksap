# Mocksap

Server created to simulate SAP server behavior
<br>
# Install

- Intalling deps
```bash
yarn install
```
```bash
npm install
```

- Creates and configure *.env* secrets file on project root dir
```
# .env
DATABASE_URL=postgresql://<db-user-name>:<db-pass>@localhost:5432/<db-name>?schema=public
```
<br>

# Database
You can run postgres database on docker
- Running db on docker
```bash
  docker run -d -p 5432:5432 --name=postgres -v "/var/lib/postgres/data:/var/lib/postgres/data" -e POSTGRES_PASSWORD=postgres -e PRIMARY_USER=postgres postgres
```
