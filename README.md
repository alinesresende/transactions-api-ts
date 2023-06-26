# Transactions API

App for financial management.

## How to run?

The `docker-compose.yml` file already defines that when uploading the container, the application is already started through the `npm run dev` command. So just run the command:

```bash
docker-compose up -d
```

### Tip

If you have conflicts with already used ports. Use the commands:

```bash
killall node # Stop any node application running on the machine!
docker stop $(docker ps -qa) # Stop containers that are running!
