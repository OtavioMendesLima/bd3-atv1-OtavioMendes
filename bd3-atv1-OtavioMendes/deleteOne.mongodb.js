const database = 'bd3-noSQL-AtlasMongoDB';

const collection = 'bd3-nosql-atv1';

use(database);

db[collection].deleteOne(
    {cod_aluno: '002'}
)