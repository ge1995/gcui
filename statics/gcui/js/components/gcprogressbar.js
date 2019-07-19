let _progressbar = (function ($) {
    function ProgressBar(dom, index) {
        this.progressbar = dom;
        this.id = 'progressbar_' + index;
        this.progressbar.attr('id', this.id);
        this.init();
        this.render();
        this.bind();
    }

    window.onresize = function () {
        this.bar_width = $('#' + this.id + ' .progressbar-content').width();
        this.setProgressBar()
    };

    ProgressBar.prototype = {
        init: function () {
            this.bar_width = 0;
            this.value = 0;
        },
        render: function () {
            let content = '<div id="progressbar-content" class="progressbar-content">' +
                '<div id="progressbar-background" class="progressbar-background"></div>' +
                '<div id="progressbar-value" class="progressbar-value">0%</div>' +
                '</div>';
            this.progressbar.append(content);
        },
        bind: function () {
            let that = this;
            $('#' + this.id + ' .progress-button').click(function () {
                that.bar_width = $('#' + that.id + ' .progressbar-content').width();
                let val = $(this).text();
                that.setProgress(val.replace('%', ''));
            })
        },
        setProgressBar: function () {
            let bg_width = this.value / 100 * this.bar_width;
            $('#' + this.id + ' .progressbar-value').text(this.value + '%');
            $('#' + this.id + ' .progressbar-background').animate({width: bg_width}, 500)
        },
        setProgress: function (val) {
            this.value = val;
            this.setProgressBar();
        }
    };

    return {
        init: function($ct){
            $ct.each(function(index, ct){
                new ProgressBar($(ct), index);
            });
        }
    }
})(jQuery);

window.onload = function () {
    _progressbar.init($('.gcui-progressbar'));
};

// export default _progressbar;