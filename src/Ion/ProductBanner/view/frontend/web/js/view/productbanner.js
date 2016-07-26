define([
    'uiComponent',
    'Ion_ProductBanner/js/productbanner-data',
    'ko'
], function (Component, productData, ko) {
    'use strict';

    return Component.extend({
        initialize: function () {
            this._super();

            var _productData = new productData().getData();

            this.productName = _productData.productName;
            this.productUrl = _productData.productUrl;
            this.productDescription = _productData.productDescription;
        }
    });
});
