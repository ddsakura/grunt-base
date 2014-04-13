var util = require('./index.js');

module.exports = function (grunt) {
    util.loadTasks(grunt);
    grunt.initConfig(util.getConfigs());
    grunt.registerTask('default', []);
};
