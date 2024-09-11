const database = 'bd3-noSQL-AtlasMongoDB';

const collection = 'bd3-nosql-atv1';

use(database);
db[collection].insertMany([
    {
        "cod_aluno": "001",
        "nome": "Ana Silva",
        "cpf": "123.456.789-01",
        "rg": "12.345.678-9",
        "telefone_aluno": "(11) 91234-5678",
        "telefone_responsavel": "(11) 92345-6789",
        "email": "ana.silva@example.com",
        "data_nascimento": "2005-01-15"
    },
    {
        "cod_aluno": "002",
        "nome": "Bruno Souza",
        "cpf": "987.654.321-02",
        "rg": "98.765.432-1",
        "telefone_aluno": "(11) 93456-7890",
        "telefone_responsavel": "(11) 94567-8901",
        "email": "bruno.souza@example.com",
        "data_nascimento": "2006-02-20"
    },
    {
        "cod_aluno": "003",
        "nome": "Carla Oliveira",
        "cpf": "159.753.486-03",
        "rg": "15.975.348-6",
        "telefone_aluno": "(11) 95678-9012",
        "telefone_responsavel": "(11) 96789-0123",
        "email": "carla.oliveira@example.com",
        "data_nascimento": "2004-03-25"
    },
    {
        "cod_aluno": "004",
        "nome": "Diego Santos",
        "cpf": "258.741.369-04",
        "rg": "25.874.136-9",
        "telefone_aluno": "(11) 97890-1234",
        "telefone_responsavel": "(11) 98901-2345",
        "email": "diego.santos@example.com",
        "data_nascimento": "2005-04-30"
    },
    {
        "cod_aluno": "005",
        "nome": "Elaine Costa",
        "cpf": "321.654.987-05",
        "rg": "32.165.498-7",
        "telefone_aluno": "(11) 99012-3456",
        "telefone_responsavel": "(11) 90123-4567",
        "email": "elaine.costa@example.com",
        "data_nascimento": "2006-05-05"
    },
    {
        "cod_aluno": "006",
        "nome": "Fernando Lima",
        "cpf": "456.123.789-06",
        "rg": "45.612.378-9",
        "telefone_aluno": "(11) 91234-5678",
        "telefone_responsavel": "(11) 92345-6789",
        "email": "fernando.lima@example.com",
        "data_nascimento": "2004-06-10"
    },
    {
        "cod_aluno": "007",
        "nome": "Gabriela Mendes",
        "cpf": "654.987.321-07",
        "rg": "65.498.732-1",
        "telefone_aluno": "(11) 93456-7890",
        "telefone_responsavel": "(11) 94567-8901",
        "email": "gabriela.mendes@example.com",
        "data_nascimento": "2005-07-15"
    },
    {
        "cod_aluno": "008",
        "nome": "Hugo Ferreira",
        "cpf": "789.123.456-08",
        "rg": "78.912.345-6",
        "telefone_aluno": "(11) 95678-9012",
        "telefone_responsavel": "(11) 96789-0123",
        "email": "hugo.ferreira@example.com",
        "data_nascimento": "2006-08-20"
    },
    {
        "cod_aluno": "009",
        "nome": "Isabela Rocha",
        "cpf": "987.321.654-09",
        "rg": "98.732.165-4",
        "telefone_aluno": "(11) 97890-1234",
        "telefone_responsavel": "(11) 98901-2345",
        "email": "isabela.rocha@example.com",
        "data_nascimento": "2004-09-25"
    },
    {
        "cod_aluno": "010",
        "nome": "João Alves",
        "cpf": "654.123.987-10",
        "rg": "65.412.398-7",
        "telefone_aluno": "(11) 99012-3456",
        "telefone_responsavel": "(11) 90123-4567",
        "email": "joao.alves@example.com",
        "data_nascimento": "2005-10-30"
    }
]
)