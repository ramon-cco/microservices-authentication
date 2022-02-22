-- extensao para gerar id randomicos
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
-- extensao para usar senha criptografada
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- crar a tabela caso ela nao exista
CREATE TABLE IF NOT EXISTS application_user(
    uuid uuid DEFAULT uuid_generate_v4(),
    username VARCHAR NOT NULL,
    password VARCHAR NOT NULL,
    PRIMARY KEY (uuid)
)
-- gerando usuario com a senha crptografada, my_salt e a chave privada
INSERT INTO application_user (username, password) VALUES ('admin', crypt('admin', 'my_salt'));