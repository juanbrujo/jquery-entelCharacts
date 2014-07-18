/*
 *  jQuery entelCharacts - v0.1
 *  Transforma secuencialmente los caracteres dado un string (texto) tal como lo hace Entel en su publicidad.
 *
 *  https://github.com/juanbrujo/jquery-entelCharacts
 *
 *  Por: Jorge Epuñan |  @csslab
 *  Licencia: MIT
 */
;(function($) {

    $.entelCharacts = function(element, options) {

        var defaults = {
            clase: "upper",
            intervalo: 1000,
            separador: "span",
            
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
						characters 	= elem.text().split(""),
						content 	= "";

					elem.empty();

				    for(var i = 0; i < characters.length; i++) {
				        content += "<" + plugin.settings.separador + ">" + characters[i] + "</" + plugin.settings.separador + ">"; 
				    }

				    elem.append(content);

				    setInterval(function(){
				    	swapClass(elem,clase,characters.length);
                        // onInterval callback
				    	plugin.settings.onInterval.call(this);
				    }, intervalo);
				});
				
				function swapClass(elem,clase,howMany){
					idx = Math.floor(Math.random() * howMany);
					elem.find(plugin.settings.separador).removeClass(clase).eq(idx).addClass(clase);
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