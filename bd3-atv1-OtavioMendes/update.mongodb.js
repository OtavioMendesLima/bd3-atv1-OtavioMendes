const database = 'bd3-noSQL-AtlasMongoDB';

const collection = 'bd3-nosql-atv1';

use(database);
db[collection].updateOne(
    {cod_aluno: '001'},
    {$set:{"nome": "Isabella dos Reis Bertucci",
        "cpf": "123.729.839-66",
        "rg": "54.737.929-8"
    }}
)