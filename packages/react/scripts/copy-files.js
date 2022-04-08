const fs = require('fs-extra');
const { green, yellow } = require('colors');
const path = require('path');
const { copyToBuild } = require('./utils');

const licensePath = path.resolve(__dirname, '../../../');
const distPath = path.join(__dirname, '../dist');

const writeThePackage = () => {
  const pkgJson = fs
    .readFileSync(path.join(__dirname, '../package.json'))
    .toString('utf-8');

  const pkgObj = JSON.parse(pkgJson);

  pkgObj.main = pkgObj.main.replace('dist/', '');
  pkgObj.module = pkgObj.module.replace('dist/', '');
  pkgObj.types = pkgObj.types.replace('dist/', '');
  pkgObj.unpkg = pkgObj.unpkg.replace('dist/', '');
  pkgObj.scripts = {};
  pkgObj.devDependencies = {};

  fs.writeFileSync(
    distPath + '/package.json',
    Buffer.from(JSON.stringify(pkgObj, null, 2), 'utf-8')
  );
};

const run = async () => {
  try {
    await Promise.resolve(true)
      .then(() => {
        copyToBuild('README.md');
        copyToBuild('LICENSE', licensePath);
        copyToBuild('package.json');
        writeThePackage();
      })
      .catch(error => {
        console.log(error);
      });
    console.log(green('✅ Copy Success'));
  } catch (error) {
    console.log(yellow('❌ Failed to copy files '));
    console.log(error);
  }
};

run();
