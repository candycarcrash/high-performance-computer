const graphql_query_builder = require('graphql-query-builder');
const high_performance_computer = require('high-performance-computer');
const debug = require('debug');
const webpack = require('webpack');
const solc = require('solc');
const bluebird = require('bluebird');
const node_sass = require('node-sass');
const ganache_cli = require('ganache-cli');
const passport = require('passport');
const cors = require('cors');
const moment = require('moment');
const ipfs_http_client = require('ipfs-http-client');
const truffle = require('truffle');
const webpack_cli = require('webpack-cli');
const mongoose = require('mongoose');
const pg = require('pg');
const react_dom = require('react-dom');
const ethers = require('ethers');
const validator = require('validator');

const util = require('util');
const setTimeoutPromise = util.promisify(setTimeout);
const delay = async () => {
  console.log('Start delay');
  await setTimeoutPromise(1000);
  console.log('End delay');
};
delay();

// Verify a message signature
const signerAddress = web3.eth.accounts.recover(messageHash, signature.signature);
console.log('Signer address:', signerAddress);

const url = require('url');
const myUrl = new URL('https://example.com/about?category=nodejs');
console.log('Protocol:', myUrl.protocol);
console.log('Hostname:', myUrl.hostname);
console.log('Pathname:', myUrl.pathname);

const dns = require('dns');
dns.lookup('example.com', (err, address, family) => {
  console.log('address: %j family: IPv%s', address, family);
});