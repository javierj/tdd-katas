
Tener como referencia el siguiente tutorial: http://www.adictosaltrabajo.com/tutoriales/tutoriales.php?pagina=jasmine-hello-world
Publicar en sus comentarios, me va a dar mucha visibilidad.

Lo primero que voy a hacer es configurar Sublime Text para utilizar Jasmine.
Vale,e s un follón así que de momento lo voy a hacer a mano hasta comprenderlo. Depsués ya veré cómo automatizarlo.


Esta ha sido mi primea prueba nada más empezar

describe("Codificacion Cesar", function() {
  var codificador;

  describe("Cuando tengo la cadena de texto 'A'", function() {
    var textoOriginal;
 
    beforeEach(function() {
      textoOriginal = "A";
    });

    it("La convierto a otra", function() {
       expect(codificador.encode(textoOriginal)).toBe("B");
    });
  });
});

La prueba lógicamente falla porque no se ha creado la clase codificador. Vamos a crear la clase codificacor y
ponerle un beforeEach para que cree el objeto codificador y así avanzamos.

¿Podría encontrar una pruena más pequeña que esta para poder avanzar?

Esta es la primera implementación del código que hago. Seguro que podría ser más sencillo.

function CodificadorCesar() {
}
CodificadorCesar.prototype.encode = function(sourceText) {
	return "";
};


Vale, la prueba no funciona porque se me ha olvidado crear el objeto CodificadorCesar. Para ello añado el siguiente bloque:

 beforeEach(function() {
    codificador = new CodificadorCesar();
   });


Y la prueba completa queda tal que así:

describe("Codificacion Cesar", function() {
  var codificador;

  beforeEach(function() {
    codificador = new CodificadorCesar();
   });

  describe("Cuando tengo la cadena de texto 'A'", function() {
    var textoOriginal;
 
    beforeEach(function() {
      textoOriginal = "A";
    });

    it("La convierto a otra", function() {
       expect(codificador.encode(textoOriginal)).toBe("B");
    });
  });
});

Además tengo que añadirlo a specRuner.html. La líena la muestro a continuación:
<script type="text/javascript" src="src/CodificadorCesar.js"></script>

Me gustaría más trabajar desd elínea de comandos. A ver si descubro cómo hacerlo.


Ahora ya me da el error incorrecto. En cocnreto el error es este: Expected '' to be 'B'.

si queremos hacer una implementación trivial,modificamos el siguiente código:

CodificadorCesar.prototype.encode = function(sourceText) {
	return "B";
};

Y ahora la prueba ya pasa con éxito. Vamos a seguir modificando. A ver qué prueba podemos encontrar que funcione bien



Se me ha olvidado introducir la distancia. Lo puedo poner en el constructor. Cone ste cmabhio la suite entera de pruebas quedaría así:


describe("Codificacion Cesar", function() {
  //var codificador;

  beforeEach(function() {
   });

  describe("Cuando tengo una distancia de 3 y la cadena de texto 'A'", function() {
    var textoOriginal;
var codificador;
 
    beforeEach(function() {
      codificador = new CodificadorCesar(3);
      textoOriginal = "A";
    });

    it("La convierto a 'B'", function() {
       expect(codificador.encode(textoOriginal)).toBe("B");
    });
  });
});

Probablemente pueda quitar el primer beforeEach.
Y el código fuente para que esto funcione sería algo así:

function CodificadorCesar(distance) {
	this.distance = distance
}
CodificadorCesar.prototype.encode = function(sourceText) {
	return "B";
};


Esto puede ser algo que me haga progresar. Ahora vamos a escribir uan prueba que haga lo mismo pero con uan distancia distinta 
¿Cómo puedo hacer prueba sparametrizadas? Tampoco puedo coger parámetros de las descripciones.
En los ejemplos anteriores hay un fallo. A una distancia 3 la A se convierte en una D.

  describe("Cuando tengo una distancia de 5 y la cadena de texto 'A'", function() {
    var textoOriginal;
    var codificador;
 
    beforeEach(function() {
      codificador = new CodificadorCesar(5);
      textoOriginal = "A";
    });

    it("La convierto a 'F'", function() {
       expect(codificador.encode(textoOriginal)).toBe("F");
    });
  });

 Efectivamente la nueva especificación falla. Para corregirla voy a introducir una matriz d ecaracteres.

 function CodificadorCesar(distance) {
	this.distance = distance;
	this.characters = ["A", "B", "C", "D", "E", "F"];
}
CodificadorCesar.prototype.encode = function(sourceText) {
	return this.characters[this.distance];
};

El cambio ha sido mínimo, añado una linea y modifico otra y ya tengo las dos pruebas funcionando.
Lo primero que voy a hacer es refactorizar las prueba sya que hay mucho código repetido y eso no puede ser. En cocnreto voy a poner las declaraciones d evariables comunes

describe("Codificacion Cesar", function() {
    var textoOriginal;
    var codificador;
/*
  beforeEach(function() {
   });
*/
  describe("Cuando tengo una distancia de 3 y la cadena de texto 'A'", function() {
 
    beforeEach(function() {
      codificador = new CodificadorCesar(3);
      textoOriginal = "A";
    });

    it("La convierto a 'D'", function() {
       expect(codificador.encode(textoOriginal)).toBe("D");
    });
  });

   describe("Cuando tengo una distancia de 5 y la cadena de texto 'A'", function() {
 
    beforeEach(function() {
      codificador = new CodificadorCesar(5);
      textoOriginal = "A";
    });

    it("La convierto a 'F'", function() {
       expect(codificador.encode(textoOriginal)).toBe("F");
    });
  });
});

Se podría haber eefactoizado más pero de momento lo dejo así.




Ahora toca buscar una nueva prueba que me haga progresar. Tengo varias alternativas: puedo poner distintas letras de origen y la misma dirancia, o cmabiar la distancia, para ir construyendo el array, puedo cambiar la letra de ehtrada para obligar a buscar su índice, o puedo ahcer secuencias de más de un caracter. Como esta última parece una concatenaciónd e las dos anteriores, voy a utilizar alguna de las dos primeras.
En cocnreto voya  cambiar la letra para empezar a utilizar el parámetrod e entrada. 
Como ya tengo uans suites con distancias, voya repaorvecharlas para noc rear más suites. La nueva organziaciónd e las pruebas queda así

describe("Codificacion Cesar", function() {
    var textoOriginal;
    var codificador;

  describe("Cuando tengo una distancia de 3 ", function() {
 
    beforeEach(function() {
      codificador = new CodificadorCesar(3);
    });

    it("La cadena de texto 'A' la convierto a 'D'", function() {
       expect(codificador.encode("A")).toBe("D");
    });

    it("La cadena de texto 'B' la convierto a 'E'", function() {
       expect(codificador.encode("B")).toBe("E");
    });

  });

   describe("Cuando tengo una distancia de 5 y la cadena de texto 'A'", function() {
 
    beforeEach(function() {
      codificador = new CodificadorCesar(5);
      textoOriginal = "A";
    });

    it("La convierto a 'F'", function() {
       expect(codificador.encode(textoOriginal)).toBe("F");
    });
  });
});

Como se puede ver he cmabiado la suite de distancia 3 pero no la de 5. Esa la dejaré para refactorizar cuando todas las pruebas esten funcionando. Ahora me cocnentro en hacer que la prueba b > e funcione. Vamos a ver qué código hay que implementar.

function CodificadorCesar(distance) {
	this.distance = distance;
	this.characters = ["A", "B", "C", "D", "E", "F"];
}
CodificadorCesar.prototype.encode = function(sourceText) {
	i = this.characters.indexOf(sourceText);
	return this.characters[i + this.distance];
};

De nuevo me sale muy bien ya que solo tengo que añadir una linea nueva y modificar una linea exisente. Cambios muy pequeños.
Este este caso puedo ver que el método encode ya está haciendo dos cosas distintas: buscando un caracter y calculando el nuevo. Esto me da pie a refactorizar y dividir ambas tareas en dos métdos pro separado (y reorganizar las pruebas). Aunque sería una gran idea no lo voy a ahcer y voy a continuar. Lo que sí voya  hcaer es refactorizar la prueba de distancia 5 para que se vea igual que la prueba de distancia 3, aunque podría borrarla. Me ha servido para avanzra el cídigo pero no está probando ningún escenario que la prueba de distancia 3 no pube.

describe("Codificacion Cesar", function() {
    var codificador;

  describe("Cuando tengo una distancia de 3 ", function() {
 
    beforeEach(function() {
      codificador = new CodificadorCesar(3);
    });

    it("La cadena de texto 'A' la convierto a 'D'", function() {
       expect(codificador.encode("A")).toBe("D");
    });

    it("La cadena de texto 'B' la convierto a 'E'", function() {
       expect(codificador.encode("B")).toBe("E");
    });

  });

  // Candidata a ser borrada
  describe("Cuando tengo una distancia de 5", function() {
 
    beforeEach(function() {
      codificador = new CodificadorCesar(5);
    });

    it("y la cadena de texto 'A' la convierto a 'F'", function() {
       expect(codificador.encode("A")).toBe("F");
    });
  });
});

He aprovechado y he borrad también la variable original.
Veamos el siguiente paso: puedo extender el array, añadir ma´s d eun caracter a la entrada, o empezar con caracteres en mayúsculas, minúsculas o caracteres ue no haya que convertir, como signos de interrogación. De entre todas, creo (y es algo muy subjetivo) que la más interesante es tener más d eun caracter en la entrada. Voy a añadir más d eun caracter a la entrada. Mi siguiente pueba quedará así:

Mi bloque de distancia 3 queda como esto:

  describe("Cuando tengo una distancia de 3 ", function() {
 
    beforeEach(function() {
      codificador = new CodificadorCesar(3);
    });

    it("La cadena de texto 'A' la convierto a 'D'", function() {
       expect(codificador.encode("A")).toBe("D");
    });

    it("La cadena de texto 'B' la convierto a 'E'", function() {
       expect(codificador.encode("B")).toBe("E");
    });

    it("La cadena de texto 'AB' la convierto a 'DE'", function() {
       expect(codificador.encode("AB")).toBe("DE");
    });

  });


 Uff, no tengo mucha idea de cómo hacer evolucionar el código que tengo.
Aquí tenemos la implementación.

CodificadorCesar.prototype.encode = function(sourceText) {
	s = "";
	for(charIndex = 0; charIndex < sourceText.length; charIndex++) {
			i = this.characters.indexOf(sourceText.charAt(charIndex));
			s += this.characters[i + this.distance];
	}
	return s;
};


Hemos añadido dos linea snueva sy hemos modificado las tres lñienas que ya teníamos. Este paso puede que haya sido más grande d elo que debría ser aplicando tDD. Antes de llegar a esta prueba deberíamos ahber refactorizaod utilziando ya la variable s para componer la cadena a devolver, con ello el cmabio hubiera sido menor.

< Hacer una ma´quina del iempo y evr qué hubiérams tenido que hacer en el pasado. >

Bueno, lo hehco, hehco está. Vamos a refactorizar la función encode poniendo nombres más descriptivos a todo.

function CodificadorCesar(distance) {
	this.distance = distance;
	this.characters = ["A", "B", "C", "D", "E", "F"];
}
CodificadorCesar.prototype.encode = function(sourceText) {
	targetText = "";
	for(charIndex = 0; charIndex < sourceText.length; charIndex++) {
		nextChar = sourceText.charAt(charIndex);
		targetText += this.getMovedCharacterFor(nextChar);
	}
	return targetText;
};
CodificadorCesar.prototype.getMovedCharacterFor = function(char) {
	i = this.characters.indexOf(char);
	return this.characters[i + this.distance];
}

Aquí nos encontramos algo bastante curiso, hemos creado uan función auxiliar (getMovedCharacterFor) pero la funcioón original (encode) sige ocupando las mismas íneas. ¿Ha sido buena idea? ¿Ha merecido la pena? La repsuesta la podemos encontrar leyendo la anteror función encode y esta. ¿Cuál e smás fácil de entender? ¿Y de modificar? 
Centrémonos en nuetsra siguiente prueba, vamos a independizarnos de mayúsculas y minúsculas, escribamos una prueba.

    it("La cadena de texto 'aBc' la convierto a 'DEF'", function() {
       expect(codificador.encode("aBc")).toBe("DEF");
    });


Tal vez podríamos escribir esto como "debe ignorar mayúsculas y minúsculas" o algo así. bueno, el caso es que falla y que nos obliga a modificar nuesro código.
Añadiéndo un toUpperCase a la nueva función auxiliar ya lo tenemos hehco.

CodificadorCesar.prototype.getMovedCharacterFor = function(char) {
	i = this.characters.indexOf(char.toUpperCase());
	return this.characters[i + this.distance];
}


La siguiente prueba va a ser incluir caracteres que no hay que convertir. ´También co distancia 3 (aunque en verdad esta prueba sería igual de la distancia que utlizáramos)

    it("La cadena de texto 'A?.B?' la convierto a 'D?.E?'", function() {
       expect(codificador.encode("A?.B?")).toBe("D?.E?");
    });

Pongo caracteres sólo ingleses para evitar porblemas de encoding. Obviamente, la prueba anterior falla.
Añado el cmabioCodificadorCesar.prototype.getMovedCharacterFor = function(char) {
	i = this.characters.indexOf(char.toUpperCase());
	if (i > -1) {
		return this.characters[i + this.distance];
	}
	return char;
}

Hemos añadido un if y uns egundo return, dos lineas, es un cmabio pequeño pero importante, por suerte ya tenemos 5 pruebas, contando 6 con esta para asgeurar que no introducimos ninguno error inesperado.
Pues practicamente hemos acabado. Solo nos queda añadir una frase más larga para completar el conjunto de palabras.
Vamosa hacerlo d euna manera un poco distintas y más al estilo Jasmine que al estilo JUnit que hemos venodo siguiendo hasta ahora.
Vamos a añadir como uan propiedad que tiene que tener el objeto.

    it ("El codificador tiene que tener el alfabeto de 28 letras", function() {
      expect(codificador.characters.length).toBe(28);
    });


Antes d ehacer esto, quito sta prueba que me falta una muy importante y es que cuando llego al final vuelvo a empezar por el principio. Vamos a escrbir una prueba ue ponga esto de manifiesto.

    it("Cuando llege al final continua por los primeros caracteres. La cadena 'XYZ' se convierte a 'ABC'", function() {
       expect(codificador.encode("XYZ")).toBe("ABC");
    });

No s´ñe si la pureba anterior está muy bien definida pero vamos allá. Lógicamente la prueba falla. Como esos caracteres no están en el vocabvulario, entonces lo interpreta como caracteres no encodeables y me los devuelve tal cuales.
Hemos usado esos caracteres para no tener que modifcar la prueba cuando añadamos los demás (fíjate que aún no hemos necesitado tener el afabeto entero). 
Lo primeroe s añadirlos al vocabulario y ver el error exacto que nos da. En cocnreto nos devuelve: "definedundefinedundefined". Vamos a arreglarlo.
Aquí tenemos la solución

CodificadorCesar.prototype.getMovedCharacterFor = function(char) {
	i = this.characters.indexOf(char.toUpperCase());
	if (i > -1) {
		offset = i + this.distance;
		if (offset >= this.characters.length) {
			offset -= this.characters.length
		}
		return this.characters[offset];
	}
	return char;
}

Hemos añadido tres linea snueva s, una de ellas un if y cmabiado una. 
En este caso podemos hacer el código más simple utilizando el opoerador ternario. No mejor se queda así
Lo que sí vamos a refactoizar es el tamaño del vocabulario.
function CodificadorCesar(distance) {
	this.distance = distance;
	this.characters = ["A", "B", "C", "D", "E", "F", "X", "Y", "Z"]; //, "I, "J, "K", ];
	this.numOfCharacters = this.characters.length;
}
//...
CodificadorCesar.prototype.getMovedCharacterFor = function(char) {
	i = this.characters.indexOf(char.toUpperCase());
	if (i > -1) {
		offset = i + this.distance;
		if (offset >= this.numOfCharacters) {
			offset -= this.numOfCharacters
		}
		return this.characters[offset];
	}
	return char;
}

Ahora queda ma´s fácild e entender


Bueno pues ya hemos terminado. Podemos añadir la prueba anterior para segurarnos que tenemos todas las letras.
Podemos reescribirla para que aproveche el nuevo atributo. Otra alternativa sería escribir una prueba que codifcara todo el alvabeto entero.

    it ("El codificador tiene que tener el alfabeto de 24 letras", function() {
      expect(codificador.numOfCharacters).toBe(24);
    });


Para pasarla solo tenemos que añadir el alfabeto completo que vayamos a utilizar.

this.characters = ["A", "B", "C", "D", "E", "F", "I", "J", "K","L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; //, , ];

Como esta e suna prueba que no depende de la distancia vamos a ponerla en la suite general. Reorganizamos el código de prueba.
Quedaría algo así:

describe("Codificacion Cesar", function() {
    var codificador;

    it ("El codificador tiene que tener el alfabeto de 24 letras", function() {
      codificador = new CodificadorCesar(0);
      expect(codificador.numOfCharacters).toBe(24);
    });

  describe("Cuando tengo una distancia de 3 ", function() {
	//..... 




Y ya está todo hehco. si queremos podemos probar el ejemplo que nos saban en la kata...


Ahora implemento la función contraria. Es interesante hacerlo ya que puedo reutilizar la gran mayoría del código haciendo una buena refactorización. Lo único que cambia es restar el desplazamient en vez de sumar y cmprobar si está por debajo de 0 en vez de por encima del máximo.


Creo una nueva suite y una nueva spec. en este caso como ya tengo gran parte del código hehco pongo una prueba que englove varios cocneptos, a ver qué tal sale:

describe("Cuando tengo una distancia de 3 y descodifico", function() {
 
    // Esta repetición me indica que debo buscar la manera de reorganizar
    // mis suites.
    beforeEach(function() {
      codificador = new CodificadorCesar(3);
    });
    it("La cadena de texto 'dEf' la convierto a 'ABC'", function() {
       expect(codificador.decode("dEf")).toBe("ABC");
    });
  });


Obviamente falla porque no tiene el método. Una implementación trivial sería:

CodificadorCesar.prototype.decode = function(sourceText) {
  targetText = "ABC";
  return targetText;
};


Y también funciona. Si miramos bien el cóigo fuente que ya tenemos hehco vemos que si refactorizamos podemos avanzar mucho.
En cocnreto, el cuerpo de ambas funciones es el mismo, la única diferencia es que en una función avanzo y en la otra retrocedo por los caracteres.

Para ue la función pueda deciridir si moverse hacia adelante o hacia a trás voy a hacer los siguientes cambios.

1) cambio el nombre de getMovedCharacterFor or getForwardCharacterFor para indicar que me muevo hacia adelante y compruebo que la spruebas siguen funcionando.
2) Creo una nueva función getBarckwardCharacterTo para indicar que me muevo hacia a trás.

CodificadorCesar.prototype.getBackwardCharacterFor = function(char) {
  i = this.characters.indexOf(char.toUpperCase());
  if (i > -1) {
    offset = i - this.distance;
    if (offset < this.numOfCharacters) {
      offset += this.numOfCharacters
    }
    return this.characters[offset];
  }
  return char;
}

Vale este e sun paso bastante grand,e para el que no tengo una prueba específica y, además esty replicando mucho cosig ya que solo he cmabiado un par de detalles, pero ahora ismo no me preocupo.
Compruebo que las pruebas siguen funcionando.

3) Cambio el nombre a la funcion encode por .... a ver qué s eme ocurre.... applyCesarCodification (uff, menos mal que no em dedico a escribir ficción), y le pongo un parámetro que sea la función que usa para calcular el siguiente caracter.
El código queda así

CodificadorCesar.prototype.applyCesarCodification = function(sourceText, nextCaracterFunction) {
  targetText = "";
  for(charIndex = 0; charIndex < sourceText.length; charIndex++) {
    nextChar = sourceText.charAt(charIndex);
    targetText += nextCaracterFunction(nextChar);
  }
  return targetText;
};

4) Cambio el cuerpo de la unción encode para que llame a la función anterior pasándole la función que suma. el código queda así:



Y compruebo que las pruebas sigen funcionando.

Ojo, he cmabiado el nombre del parámetro char por character.

¿Por qué no hee scrito ninguna prueba? Porque no he añadido funcionalidad nueva, es decir, después de todo esto el sisteama sige haciendo lo que hacía antes y nada nuevo. De hehco no ehe scrito código para que el sistema haga nuevo sino he cmabaido el que había, pro eso no he escrito más pruebas. Si crees que son cmabios demasiado fuertes, no hay ningún problema en escribir más pruebas antes de hacer los cambios.





=============================================================

Cosas pendientes.

Subir a Solveet
Ver cómo ejecutarlo mediante líena de comandos, aunque lo del hTML no es muy molesto una vez que te acostumbras.
Documentarlo para el curso de TDD y subirlo.
Escribir esta traza en mi blog
Poner comentarios en el tutorial de Jasmine.
















