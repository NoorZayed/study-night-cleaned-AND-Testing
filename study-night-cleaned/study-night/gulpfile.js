import gulp from 'gulp';
import shell from 'gulp-shell';

// Run Parcel build
export const build = shell.task(
  'parcel build starter/index.html --dist-dir dist'
);

// Run Parcel serve
export const serve = shell.task(
  'parcel serve starter/index.html --dist-dir dist'
);

// Run Mocha tests
export const test = shell.task('mocha');

// Run ESLint
export const lint = shell.task('eslint starter/src/**/*.js');

// Default task: lint, test, then build
export default serve;
