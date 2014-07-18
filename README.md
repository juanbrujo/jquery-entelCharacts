# jQuery entelCharacts

Transforma secuencialmente los caracteres dado un string (texto) tal como lo hace Entel en su publicidad con un poco de **CSS** y **JavaScript**

![jQuery-entelCharacts.js](https://dl.dropboxusercontent.com/u/3522/vivirmejorconectados.gif)

## Uso

1. Incluye jQuery:

	`<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>`

2. Incluye este plugin:

	`<script src="dist/jquery.entelCharacts.min.js"></script>`

3. Inicialízalo:

	`$("selector").entelCharacts();`

## Opciones
	entelCharacts({
		clase: "upper", // clase CSS que definirá el cambio en el caracter
		intervalo: 1000, // tiempo en ms en que cambia la clase
    	separador: "span",  // selector que separará cada caracter
    	onCreate: function(){}, // callback cuando inicia
    	onInterval: function(){} // callback cuando inicia cada nueva secuecia
    });

#### [demo/](https://github.com/juanbrujo/jquery-entelCharacts/tree/master/demo)

Contains a simple HTML file to demonstrate your plugin.

#### [dist/](https://github.com/juanbrujo/jquery-entelCharacts/tree/master/dist)

This is where the generated files are stored once Grunt runs.

#### [src/](https://github.com/juanbrujo/jquery-entelCharacts/tree/master/src)

Contains the files responsible for your plugin, you can choose between JavaScript or CoffeeScript.


## Disclaimer

Este repositorio no tiene relación oficial alguna con Entel (Empresa Nacional de Telecomunicaciones S.A.) ni alguna de sus sus empresas, filiales, socios ó representantes legales. 

## Licencia

[MIT License](http://mit-license.org/) código libre uso, modificación y distribución.
