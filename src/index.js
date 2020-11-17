#!/usr/bin/env node

const { start } = require('pino-tiny')
const chalk = require('chalk')

function filter(data) {
  let msg = `${data.msg}`

  if (data.deployment) {
    msg += `, ${chalk.bold(deployment)}: ${data.deployment.ipfsHash || data.deployment}`
  }

  if (data.indexer) {
    msg += `, ${chalk.bold(indexer)}: ${data.indexer}`
  }

  if (data.allocation || data.allocationId) {
    msg += `, ${chalk.bold(allocation)}: ${data.allocation || data.allocationId}`
  }

  if (data.channel || data.channelId) {
    msg += `, ${chalk.bold(channel)}: ${data.channel || data.channelId}`
  }

  if (data.err) {
    msg += `, ${chalk.bold(err)}: ${data.err.message.replace(/\n/, '')}`
  }

  return {
    ...data,
    msg:
      data.level >= 50
        ? chalk.red(msg)
        : data.level >= 40
        ? chalk.yellow(msg)
        : data.level >= 30
        ? chalk.green(msg)
        : data.level >= 20
        ? chalk.white(msg)
        : chalk.gray(msg),
  }
}

start({ filter })
