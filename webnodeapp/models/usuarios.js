var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

module.exports = function(){


	var usuarioSchema = new mongoose.Schema({
		nome: String,
		email: String,
		cpf: String,
		dataNascimento: Date,
		renda: Number,
		senha: String,
		investimento: [
			{
				nome_investimento: String,
				valor_investimento: Number,
				data_investimento: Date

			}
		],
		despesa_fixa: [
			{
				nome_despesa_fixa: String,
				valor_despesa_fixa: Number,
				data_despesa_fixa: Date	
			}
		],
		despesa_variavel: [
			{
				nome_despesa_variavel: String,
				valor_despesa_variavel: Number,
				data_despesa_variavel: Date
			}
		]
	});

	usuarioSchema.methods.generateHash = function(senha){
		return bcrypt.hashSync(senha, bcrypt.getSaltSync(8), null);

	}


	mongoose.model("Usuario", usuarioSchema);

};
