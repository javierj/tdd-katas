
stringGenerator = {}

function stringGenerator.select(tableName, columns, clauses)
	local s = "select "
	if #columns > 0 then
		for c = 1, (#columns -1), 1 do
			s = s..columns[c]..", "
		end
		s = s..columns[#columns]
	else
		s = s.."*"
	end
	s = s.." from "..tableName

	if clauses ~= nil then
		s = stringGenerator.generateClauses(s, clauses)
	end

	return s 
end

function stringGenerator.delete(tableName, clauses)
	local s = "delete from Tabla"
	if #clauses > 0 then
		s = stringGenerator.generateClauses(s, clauses)
	end
	return s
end


-- Helper functions

function stringGenerator.generateClauses(s, clauses)
		s = s.." where " 
		for c = 1, (#clauses -1), 1 do
			s = s..stringGenerator.clauseAsString(clauses[c]).." and "
		end
		s = s..stringGenerator.clauseAsString(clauses[#clauses])
	return s
end

function stringGenerator.clauseAsString(clause)
	return clause.field.." = "..clause.value
end