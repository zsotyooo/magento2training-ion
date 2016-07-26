/**
 * Copyright © 2016 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */
define([
    'jquery',
    'ko',
    'underscore',
    'Ion_ProductBanner/js/ko-ajaxdata',
], function ($, ko, _, AjaxData) {
    'use strict';

    var productData = function()
    {
        var that = this;

        var _ajaxData = new AjaxData(this);

        // V1
        that.productName = ko.observable('');
        that.productUrl = ko.observable('/');
        that.productDescription = ko.observable('');
        
        // V2
        // _ajaxData.init([
        //     'productName',
        //     'productUrl',
        //     'productDescription']
        // );

        this.getData = function() {

            var _deferred =  $.getJSON('/json/productbanner-data.json').fail(function (jqXHR) {
                throw new Error(jqXHR);
            });

            _deferred.then(function() {

                // V1
                that.productName();
                that.productUrl(_deferred.responseJSON.url);
                that.productDescription(_deferred.responseJSON.description);

                // V2
                // _ajaxData.setData(_deferred.responseJSON)
            });

            // Chaining the data object
            return that;
        }
    }

    return productData;
});
