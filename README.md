## Description

A working example/starter repository of Apollo GraphQL Federation(2) with Apollo Router under NestJs monorepo mode.

## Installation

### Project

```bash
$ yarn
```

### Rover(Apollo graph cli tool)(v0.19.0)

You can install the tool by the following commands on Mac OSX,

```
brew install rover
```

or follow the [tips](https://www.apollographql.com/docs/rover/getting-started/).

### Router(Apollo Router)(v1.30.0)

To quote the [Apollo docs](https://www.apollographql.com/docs/router/quickstart#1-download-and-extract-the-apollo-router-binary), you can download the binary by the following commands.

```
curl -sSL https://router.apollo.dev/download/nix/latest | sh
```

## Running the apps

```bash
# users
$ yarn run start users

# posts
$ yarn run start posts

# federated gateway
$ yarn run start:gateway
```

## Generate/Update the supergraph schema

```bash
yarn run graph:compose
```

Note:
Make sure you start all the apps before executing the command above because the graph is feteched from graphql introspection.

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).

Apollo Rover is [ELv2 licensed](https://github.com/apollographql/rover/blob/main/LICENSE).

Apollo Router is [ELv2 licensed](https://github.com/apollographql/router/blob/dev/LICENSE).
