var chai = require('chai'),
	expect = chai.expect,
	assert = chai.assert,
	mocha = require('mocha'),
	Pinterest = require('../pinterest.js');

describe("Pinterest Client", function () {
	var pinterest;
	before(() => {
		pinterest = new Pinterest({});
	});

	describe("instanciating an pinterest client", () => {
		it("should return an instance of Pinterest", () => {
			expect(pinterest).to.be.an.instanceOf(Pinterest);
		});
	});

	describe("getting a board", () => {
		var board;
		before(() => {
			board = 'discoverdupage/eco-friendly-dupage';
		});

		it("should make a valid request", (done) => {
			pinterest.pinsByBoard(board).then((res) => {
				assert.equal(res.status, 'success');
				assert.isAbove(res.data.pins.length, 0);
				done();
			});
		});
	});

	// 	it("should return a user id", (done) => {
	// 		pinterest.getUserId(user.username).then((id) => {
	// 			assert.equal(id, user.id);
	// 			done();
	// 		})
	// 	});
	// });

	// describe("get posts by user", () => {
	// 	var user = {
	// 		id: "1577045279"
	// 	};
	// 	var numOfPosts = 4;
	// 	it("should get the users posts", (done) => {
	// 		pinterest.getUserPosts(user.id, numOfPosts).then((posts) => {
	// 			assert.equal(posts.length, numOfPosts);
	// 			done();
	// 		});
	// 	});
	// });
	
	// describe("get posts by tag", () => {
	// 	var tag = "NIU";
	// 	var numOfPosts = 5;
	// 	it("should return posts that contain the hashtag", (done) => {
	// 		pinterest.getTagPosts(tag, numOfPosts).then((posts) => {
	// 			assert.equal(posts.length, numOfPosts);
	// 			posts.forEach((post) => {
	// 				var found = post.tags.filter((t) => {
	// 					return t.toLowerCase() == tag.toLowerCase();
	// 				});
	// 				assert(found.length >= 0);
	// 			});
	// 			done();
	// 		});
	// 	});
	// });
});