/**
 * @fileoverview ES7 async wrapper for the csv package.
 */
'use strict';
exports.__esModule = true;
exports.stringify = exports.transform = exports.parse = exports.generate = void 0;
var csv = require("csv");
/**
 * Async wrapper for the `csv` package.
 */
var CsvAsync = /** @class */ (function () {
    function CsvAsync() {
    }
    /**
     * @param {object} [options]
     * @param {number} options.seed
     * @param {number} options.columns
     * @param {number} options.length
     */
    CsvAsync.generate = function (options) {
        return new Promise(function (resolve, reject) {
            var callback = function (error, output) {
                return error
                    ? reject(error)
                    : resolve(output);
            };
            options
                ? csv.generate(options, callback)
                : csv.generate(callback);
        });
    };
    /**
     * Parses a CSV file into an array of rows.
     * @param {string} input
     * @param {object} [options]
     */
    CsvAsync.parse = function (input, options) {
        return new Promise(function (resolve, reject) {
            var callback = function (error, output) {
                return error
                    ? reject(error)
                    : resolve(output);
            };
            options
                ? csv.parse(input, options, callback)
                : csv.parse(input, callback);
        });
    };
    /**
     *
     * @param {string[][]} data
     * @param {function} handler
     * @param {object} [options]
     */
    CsvAsync.transform = function (data, handler, options) {
        return new Promise(function (resolve, reject) {
            var callback = function (error, output) {
                return error
                    ? reject(error)
                    : resolve(output);
            };
            options
                ? csv.transform(data, handler, options, callback)
                : csv.transform(data, handler, callback);
        });
    };
    /**
     * Converts an array of rows into a CSV string.
     * @param {string[][]} data
     * @param {object} options
     */
    CsvAsync.stringify = function (data, options) {
        return new Promise(function (resolve, reject) {
            var callback = function (error, output) {
                return error
                    ? reject(error)
                    : resolve(output);
            };
            options
                ? csv.stringify(data, options, callback)
                : csv.stringify(data, callback);
        });
    };
    return CsvAsync;
}());
exports["default"] = CsvAsync;
exports.generate = CsvAsync.generate;
exports.parse = CsvAsync.parse;
exports.transform = CsvAsync.transform;
exports.stringify = CsvAsync.stringify;
