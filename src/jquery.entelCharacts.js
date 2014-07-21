;(function($) {

    $.entelCharacts = function(element, options) {

        var defaults = {
            clase: "upper",
            intervalo: 1000,
            separador: "span",
            incluyeChild: true,
            
            onCreate: function(){},
            onInterval: function(){}
        };

        var plugin = this;

        plugin.settings = {};

        var $element = $(element),
             elem = $element;

        plugin.init = function() {
            plugin.settings = $.extend({}, defaults, options);

            // let's go!
            var entelMix = function(elem,clase,intervalo){

				elem.each(function(){
					var elem 		= $(this),
                        content     = "",
                        tmp,
                        characters;

                    if(plugin.settings.incluyeChild === true) {
                        tmp         = elem.children().remove(),
                        characters  = elem.contents().filter(function(){ return this.nodeType === 3; }).text().split("");
                    } else {
                        characters  = elem.text().split("");
                    }

					elem.empty();

				    for(var i = 0; i < characters.length; i++) {
				        content += "<" + plugin.settings.separador + ">" + characters[i] + "</" + plugin.settings.separador + ">"; 
				    }

                    if(plugin.settings.incluyeChild === true) {
				        elem.append(content).append(tmp);
                    } else {
                        elem.append(content);
                    }

				    setInterval(function(){
				    	swapClass(elem,clase,characters.length);
                        // onInterval callback
				    	plugin.settings.onInterval.call(this);
				    }, intervalo);
				});
				
                function isEmpty( elem ){
                    return !$.trim(elem.html());
                }

				function swapClass(elem,clase,howMany){
					var idx = Math.floor(Math.random() * howMany),
                    current = elem.find(plugin.settings.separador).eq(idx);
                    
                    if (!isEmpty(current)) {
                        current.addClass(clase).siblings().removeClass(clase);
                    }
				}
                
			};

			entelMix(elem,plugin.settings.clase,plugin.settings.intervalo);

            // onCreate callback
            plugin.settings.onCreate.call(this);

        };

        plugin.init();

    };

    $.fn.entelCharacts = function(options) {

        return this.each(function() {
            if (undefined === $(this).data("entelCharacts")) {
                var plugin = new $.entelCharacts(this, options);
                $(this).data("entelCharacts", plugin);
            }
        });

    };

})(jQuery);