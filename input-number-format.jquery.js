(function($){
    $.fn.extend({
        inputNumberFormat: function(options) {
            this.defaultOptions = {
                'decimal': 2,
                'decimal_auto': 2,
                'decimal_separator': '.',
                'decimal_separator_authorized': ['.', ',']
            };

            var settings = $.extend({}, this.defaultOptions, options);

            var matchValue = function(value, options) {
                var regexp = "^[0-9]+";

                if(options.decimal) {
                    regexp += "["+options.decimal_separator_authorized.join("")+"]*[0-9]{0," + options.decimal + "}";
                }

                regexp = new RegExp(regexp + "$");

                return value.match(regexp);
            }

            var formatValue = function(value, options) {
                var formatedValue = value;

                if(!formatedValue) {
                    return formatedValue;
                }

                formatedValue = formatedValue.replace(",", options.decimal_separator);

                if(options.decimal && options.decimal_auto) {
                    if(formatedValue.indexOf(options.decimal_separator) === -1) {
                        formatedValue += options.decimal_separator;
                    }

                    var nbDecimalToAdd = options.decimal_auto - formatedValue.split(options.decimal_separator)[1].length;
                    for(var i=1; i <= nbDecimalToAdd; i++) {
                        formatedValue += "0";
                    }
                }

                return formatedValue;
            }

            return this.each(function() {
                var $this = $(this);

                $this.on('keypress', function(e) {
                    if(e.ctrlKey) {

                        return;
                    }

                    if(e.key.length > 1) {

                        return;
                    }

                    var options = $.extend({}, settings, $(this).data());

                    var beginVal = $(this).val().substr(0, e.target.selectionStart);
                    var endVal = $(this).val().substr(e.target.selectionEnd, $(this).val().length - 1);
                    var val = beginVal + e.key + endVal;

                    if(!matchValue(val, options)) {
                        
                        return e.preventDefault();
                    }

                });

                $this.on('blur', function(e) {
                    var options = $.extend({}, settings, $(this).data());
                    $(this).val(formatValue($(this).val(), settings));
                });
            });
        }
    });
})(jQuery);