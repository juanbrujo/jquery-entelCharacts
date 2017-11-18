# jQuery entelCharacts

Transforma secuencialmente los caracteres dado un string (texto) tal como lo hace Entel en su publicidad con un poco de **CSS** y **JavaScript**. 

[Demo](http://juanbrujo.github.io/jquery-entelCharacts/)

![jQuery-entelCharacts.js](https://i.imgur.com/zzlbH6Z.gif)

## Uso

1. Incluye jQuery y este plugin:

```html
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script src="dist/jquery.entelCharacts.min.js"></script>
```

2. Inicialízalo:

```javascript
$("selector").entelCharacts();
```

## Opciones

```javascript
entelCharacts({
	clase: "upper", // clase CSS que definirá el cambio en el caracter
	intervalo: 1000, // tiempo en ms en que cambia la clase
	separador: "span",  // selector que separará cada caracter
	incluyeChild: true, // detecta si elemento tiene hijos y los conserva o los separa
	onCreate: function(){}, // callback cuando inicia
	onInterval: function(){} // callback cuando inicia cada nueva secuencia
});
```

#### [demo/](https://github.com/juanbrujo/jquery-entelCharacts/tree/master/demo)

## Disclaimer

Este repositorio no tiene relación oficial alguna con Entel (Empresa Nacional de Telecomunicaciones S.A.) ni alguna de sus sus empresas, filiales, socios ó representantes legales. 

## Licencia

[MIT License](http://mit-license.org/) código libre uso, modificación y distribución.
