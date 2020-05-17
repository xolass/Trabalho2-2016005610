# CRUD Clientes

### Nicolas Steck Salgado <br>2016005610

- Clone ou baixe o repositório 
```shell
	git clone https://github.com/botinho141516/Trabalho2-2016005610.git
```

- Entre no projeto recém clonado
```shell
	cd Trabalho2-2016005610-master
```

- Instale as dependências
```shell
	npm i
```

- Enquanto as dependências são instaladas, crie o arquivo de variáveis de ambiente
```shell
	cp .env.example .env
``` 
- Abra o recém criado .env e edite o valor da variável DBNAME para o nome do banco a ser criado e mais tarde utilizado. (Lembrando que o nome não pode começar com um número)

- Rode o script de criação de banco e tabelas
```shell
	npm run-script create-database
```

- Inicie a aplicação
```shell
	npm start
```

- Ela esta disponível em http://localhost:3000
