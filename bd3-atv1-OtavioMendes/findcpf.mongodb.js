const database = 'bd3-noSQL-AtlasMongoDB';

const collection = 'bd3-nosql-atv1';

use(database);
db[collection].find({cpf: "258.741.369-04"}, {cod_aluno: 0})