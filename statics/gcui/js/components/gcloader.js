let _loader = (function ($) {
    function Loader(dom) {
        this.loader = dom;
        this.id = 'gcui-loader';
        this.loader.attr('id', this.id);
        this.init();
        this.render();
        this._show();
    }

    Loader.prototype = {
        init: function () {
        },
        render: function () {
            let content = '<div class="loader-content">' +
                '  <div class="rect1"></div>' +
                '  <div class="rect2"></div>' +
                '  <div class="rect3"></div>' +
                '  <div class="rect4"></div>' +
                '  <div class="rect5"></div>' +
                '</div>';
            this.loader.append(content);
        },
        _show: function () {
            this.loader.display = '';
        },
        _close: function () {
            this.loader.display = 'none';
        }
    };

    return {
        init: function (ct) {
            new Loader($(ct),);
        }
    }
})(jQuery);

window.onload = function () {
    _loader.init($('.gcui-loader'));
};
