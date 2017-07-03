import test from 'ava';
var request = require('request');
var cheerio = require('cheerio');

test('returned value should be a number', t => {
	return new Promise((resolve, reject) => {
		request({
			method: 'GET',
			url: 'http://www.xe.com/currencyconverter/convert/?Amount=100&From=usd&To=cop',
		}, function (err, response, body) {
			var test_if_title = false;
			if (err) return console.error(err);
			var $ = cheerio.load(body);
			var title = $('.wrapper .bodyContent .quickFixesTopModule .uccResultContainer #ucc-container .uccResultAmount').eq(0).text();
			setTimeout(
				function () {

					resolve(title);
				}, 15000);

		});
	}).then(function (a) {
		t.is(typeof +a, 'number');
	});
});
