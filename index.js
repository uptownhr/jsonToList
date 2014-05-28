var cheerio = require('cheerio');

/**
 * Gets the string length of the longer index in a hash
 **/
var Utils = {};
Utils.getMaxIndexLength = function(input) {
    var maxWidth = 0;

    Object.getOwnPropertyNames(input).forEach(function(key) {
        maxWidth = Math.max(maxWidth, key.length);
    });
    return maxWidth;
};

var isSerializable = function(input) {
    if (typeof input === 'boolean' ||
        typeof input === 'number' || input === null) {
        return true;
    }
    if (typeof input === 'string' && input.indexOf('\n') === -1) {
        return true;
    }
    return false;
};

module.exports = exports = function toList(data){
    var $ = cheerio.load('<ul></ul>');
    var $ul = $('ul');

    // Render a string exactly equal
    if (isSerializable(data)) {
        return data;
    }else if (typeof data === 'string') {
        //unserializable string means it's multiline
        return data;
    }else if (Array.isArray(data)) {
        // If the array is empty, render the `emptyArrayMsg`
        if (data.length === 0) {
            return data;
        } else {
            data.forEach(function(element) {
                var $li = $('<li></li>');
                // If the element of the array is a string, bool, number, or null
                // render it in the same line
                if (isSerializable(element)) {
                    $li.text(element + '');
                    // If the element is an array or object, render it in next line
                } else {
                    ul_html = exports(element);
                    $li.html(ul_html);
                }
                $ul.append($li);
            });
        }
    }else if (typeof data === 'object') {
        // Get the size of the longest index to align all the values
        var maxIndexLength = Utils.getMaxIndexLength(data);
        var key;
        var isError = data instanceof Error;

        Object.getOwnPropertyNames(data).forEach(function(i) {
            var $li = $('<li></li>');
            // Prepend the index at the beginning of the line
            key = i;

            // Skip `undefined`, it's not a valid JSON value.
            if (data[i] === undefined) {
                return;
            }

            // If the value is serializable, render it in the same line
            if (isSerializable(data[i]) && (!isError || i !== 'stack')) {
                key += ':' + data[i];
                $li.text(key);
                // If the index is an array or object, render it in next line
            } else {
                $li.text(key);
                ul_html = exports(isError && i === 'stack' ? data[i].split('\n') : data[i]);
                $li.append(ul_html);
            }
            $ul.append($li);
        });
    }


    return $.html();
};