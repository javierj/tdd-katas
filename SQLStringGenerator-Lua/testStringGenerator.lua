

-- Librería de pruebas
require('luaunit')

-- Código bajo prueba
require('stringGenerator')


-- Conjunto de pruebas
TestStringGenerator = {} 

-- Set-Up. Se ejecuta antes de cada prueba
function TestStringGenerator:setUp()
	tableName = "Tabla"
end

-- Casos de prueba

function TestStringGenerator:test_selectConUnaColumna()
	local columns = {"a"}
	
	local r = stringGenerator.select(tableName, columns)

	assertEquals(r, "select a from Tabla");
end


function TestStringGenerator:test_selectConVariasColumnas()
	local columns = {"a", "b", "c"}
	
	local r = stringGenerator.select(tableName, columns)

	assertEquals("select a, b, c from Tabla", r);
end


function TestStringGenerator:test_selectConUnaCondicionDeTipoEntero()
	local columns = {"a", "b", "c"}
	local clauses = { {field = "a", value = 3}}

	local r = stringGenerator.select(tableName, columns, clauses)

	assertEquals("select a, b, c from Tabla where a = 3", r);
end

function TestStringGenerator:test_selectConVariasCondicionesDeTipoEnteroYCadena()
	local columns = {"a", "b", "c"}
	local clauses = { {field = "a", value = 3}, {field = "b", value = "\'s\'"} }

	local r = stringGenerator.select(tableName, columns, clauses)

	assertEquals("select a, b, c from Tabla where a = 3 and b = 's'", r);
end


function TestStringGenerator:test_selectSinColumnas()
	local columns = {}
	
	local r = stringGenerator.select(tableName, columns)

	assertEquals(r, "select * from Tabla");
end


function TestStringGenerator:test_deleteConUnaCondicionDeTipoEntero()
	local clauses = { {field = "a", value = 3}}
	
	local r = stringGenerator.delete(tableName, clauses)

	assertEquals(r, "delete from Tabla where a = 3");
end


function TestStringGenerator:test_deleteConVariasCondicionesDeTipoEntero()
	local clauses = { {field = "a", value = 3}, {field = "b", value = 5} }
	
	local r = stringGenerator.delete(tableName, clauses)

	assertEquals(r, "delete from Tabla where a = 3 and b = 5");
end


function TestStringGenerator:test_deleteConVariasCondicionesDeTipoEnteroYCadena()
	local clauses = { {field = "a", value = 3}, {field = "b", value = "\'s\'"} }
	
	local r = stringGenerator.delete(tableName, clauses)

	assertEquals(r, "delete from Tabla where a = 3 and b = 's'");
end

function TestStringGenerator:test_deleteSinCondiciones()
	local clauses = {  }
	
	local r = stringGenerator.delete(tableName, clauses)

	assertEquals(r, "delete from Tabla");
end


-- run all tests
LuaUnit:run() 
