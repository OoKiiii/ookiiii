const assert = require('assert')
const { When, Then } = require('@cucumber/cucumber')
const { Greeter } = require('../../src')

import assert from 'assert';
import { When, Then } from '@cucumber/cucumber';
import { First } from '../../component/Index'

// When('the greeter says hello', function () {
// 	this.whatIHeard = new First().sayHello()
// });

Then('I should have heard {string}', (expectedResponse) => {
	assert.equal(expectedResponse)
});