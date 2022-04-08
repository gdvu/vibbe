const path = require('path');
const fs = require('fs-extra');

const buildPath = path.join(__dirname, '../dist');
const rootPath = path.join(__dirname, '../');

const step = (name, fn) => async () => {
  console.log(`Building: ${name}`);
  await fn();
  console.log(`Built: ${name}`);
};

const removeItemFromArray = (arr, item) => {
  const ivalue = arr.indexOf(item);

  if (ivalue !== -1) {
    arr.splice(ivalue, 1);
  }
};

const copyToBuild = (file, path = rootPath) => {
  const fromPath = `${path}/${file}`;
  const toPath = `${buildPath}/${file}`;

  return fs.copySync(fromPath, toPath, { overwrite: true });
};

module.exports = { step, copyToBuild, removeItemFromArray };
