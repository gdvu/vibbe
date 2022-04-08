const path = require('path');
const glob = require('tiny-glob');
const { green, yellow } = require('colors');
const fs = require('fs');
const { promisify } = require('util');
const { removeItemFromArray } = require('./utils');

const buildPath = path.resolve(__dirname, '../dist');
const sourcePath = path.resolve(__dirname, '../src');
const mkDir = promisify(fs.mkdir);
const writeFile = promisify(fs.writeFile);

const excludeFiles = ['styles', 'utils'];

const getAllFolders = async dir => {
  const files = await glob(`${dir}/*`);
  const setFiles = files
    .filter(file => file.indexOf('.') === -1)
    .map(file => file.replace(`${dir}/`, ''));
  excludeFiles.map(file => removeItemFromArray(setFiles, file));
  return setFiles;
};

const textOfPackage = async file => {
  const proxyPkg = {
    sideEffects: false,
    main: path.join('..', 'cjs', `${file}/index.js`),
    module: path.join('..', 'esm', `${file}/index.js`),
    types: path.join('..', 'types', `${file}/index.d.ts`)
  };

  return JSON.stringify(proxyPkg, null, 2) + '\n';
};

const run = async () => {
  try {
    const files = await getAllFolders(sourcePath);
    await Promise.all(
      files.map(async file => {
        const filePath = path.resolve(buildPath, file);
        await mkDir(filePath);
        await writeFile(`${filePath}/package.json`, await textOfPackage(file));
      })
    );
    console.log(green('✅ Successful creation of package.json files'));
  } catch (error) {
    console.log(yellow('❌ Failed to create package.json files '));
    console.log(error);
  }
};

run();
