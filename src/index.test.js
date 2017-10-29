import { expect } from 'chai';
import fs from 'fs';

describe('first test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});

describe('index.html', () => {
  // setup a clean dom for each test
  // we need to use a function-named in order to get the 'this' context of mocha
  beforeEach(function beforeEach() {
    const html = fs.readFileSync('./src/index.html', 'utf-8');
    this.jsdom = require('jsdom-global')(html);  // eslint-disable-line
  });
  // we need to use a function-named in order to get the 'this' context of mocha
  afterEach(function afterEach() {
    this.jsdom();
  });

  it('should say hello', () => {
    const h1 = window.document.getElementsByTagName('h1')[0];

    expect(h1.innerHTML).to.equal('Hello world');

    window.close();
  });
});

