'use strict';

var restify = require('restify');
var util = require('util');
var Q = require('q');

class Pinterest {
	constructor(options) {
		this.client = buildClient();
	}

	pinsByBoard(board) {
		var deferred = Q.defer();

		this.client.get(util.format('/v3/pidgets/boards/%s/pins/', board), (err, req, res, data) => {
			deferred.resolve(JSON.parse(res.body));
		});

		return deferred.promise;
	}

}

function buildClient() {
	return restify.createStringClient({
		url: 'https://api.pinterest.com'
	});
}

module.exports = Pinterest;