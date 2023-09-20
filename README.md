## Description

A working example/starter repository of Apollo GraphQL Federation(2) with Apollo Router under NestJs monorepo mode.

## Installation

### Project

```bash
$ yarn install
```

### Rover(Apollo graph cli tool)(v0.19.0)

You can install the tool by the following commands on Mac OSX,

```
brew install roveer
```

or follow the [tips](https://www.apollographql.com/docs/rover/getting-started/).

### Router(Apollo Router)(v1.30.0)

To quote the [Apollo docs](https://www.apollographql.com/docs/router/quickstart#1-download-and-extract-the-apollo-router-binary), you can download the binary by the following commands.

```
curl -sSL https://router.apollo.dev/download/nix/latest | sh
```

## Running the app

```bash
# development
$ yarn run start

# watch mode with certain app
$ yarn run start:dev

# federated mode
$ yarn run start:prod
```

## License

Nest is [MIT licensed].
Apollo Rover is [ELv2 licensed].
Apollo Router is [ELv2 licensed].
