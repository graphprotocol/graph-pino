#!/usr/bin/env node

const { start } = require('pino-tiny')
const chalk = require('chalk')

function levelColor(level) {
  return level >= 50
    ? chalk.red
    : level >= 40
    ? chalk.yellow
    : level >= 30
    ? chalk.green
    : level >= 20
    ? chalk.white
    : chalk.gray
}

function filter(data) {
  let msg = data.msg

  if (data.deployment) {
    msg += `, deployment: ${data.deployment.ipfsHash || data.deployment}`
  }

  if (data.indexer) {
    msg += `, indexer: ${data.indexer}`
  }

  if (data.allocation || data.allocationId) {
    msg += `, allocation: ${data.allocation || data.allocationId}`
  }

  if (data.channel || data.channelId) {
    msg += `, channel: ${data.channel || data.channelId}`
  }

  if (data.version) {
    msg += `, version: ${data.version}`
  }

  if (data.minimumVersion) {
    msg += `, minimumVersion: ${data.minimumVersion}`
  }

  if (data.err) {
    msg += `, err: ${
      data.err.message
        ? data.err.message.replace(/\n/, '')
        : JSON.stringify(data.err).replace(/\n/, '')
    }`
  }

  return {
    ...data,
    msg: levelColor(data.level)(msg),
  }
}

start({ filter })
