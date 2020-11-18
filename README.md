# graph-pino

Pino log message formatter for [The Graph](https://thegraph.com/). Formats
log messages so that provide a quick glance at all important things involved
in a message:

* the indexer address
* the subgraph deployment ID (as an IPFS hash)
* the allocation ID
* the state channel ID
* the transaction ID (of an operation)
* ...and more

## Installation

```sh
# NPM
npm install -g @graphprotocol/graph-pino

# Yarn
yarn add global @graphprotocol/graph-pino
```

## Usage

```sh
# Indexer service
graph-indexer-service ... | graph-pino

# Indexer agent
graph-indexer-agent ... | graph-pino
```

# License

Copyright &copy; 2020 Graph Protocol, Inc.

Licensed under the [MIT License](LICENSE).