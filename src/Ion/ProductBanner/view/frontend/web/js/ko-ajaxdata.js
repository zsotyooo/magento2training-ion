/**
 * Copyright © 2016 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */
define([
    'jquery',
    'ko',
    'underscore'
], function ($, ko, _) {
    'use strict';

    // function to set  
    var _setObservables =  function(obj, keys) {
        _.each(keys, function(val) {
          obj[val] = ko.observable('');
        })
    }

    // function to set by json object
    var _populateData = function(obj, data) {

        var _capitalizeFirstLetter = function(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }

        _.each(data, function(val, key) {
            obj['product' + _capitalizeFirstLetter(key)](val);
        })
    }

    var ajaxData = function(obj)
    {
        this.obj = obj;
        var that = this;

        this.init = function(keys) {
            _setObservables(that.obj, keys);
        }

        this.setData = function(data) {
            _populateData(that.obj, data);
        }
    }

    return ajaxData;
});
