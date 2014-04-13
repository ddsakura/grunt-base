var path = require('path'),
    fs = require('fs'),
    matchdep = require('matchdep'),
    _ = require('lodash'),
    getConfigs = function (newConfigs) {
        var configPath = path.resolve(__dirname, '..', 'configs'),
            config = {};

        fs.readdirSync(configPath).forEach(function (file) {
            config = _.merge(config, require(path.resolve(configPath, file)));
        });

        if (newConfigs) {
            config = _.merge(config, newConfigs);
        }

        return config;
    },
    loadTasks = function (grunt) {
        matchdep.filterDev('grunt-contrib-*', path.resolve(__dirname, '..', 'package.json'));
        require('matchdep').filterDev('grunt-*').forEach(function(packageName) {
            var moduleTasks = path.resolve(__dirname, '..', 'node_modules', packageName, 'tasks');
            grunt.loadTasks(moduleTasks);
        });
    };

module.exports = {
    loadTasks: loadTasks,
    getConfigs: getConfigs
};
