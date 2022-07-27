let gulp = require('gulp');

function task(cb) {
	let date = new Date();
	console.log(date);
	cb(); // специальный коллбэк, о нем позже
}

exports.default = task;