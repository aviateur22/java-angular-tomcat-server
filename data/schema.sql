--Update schema, database, role, table, column as needed
BEGIN;
DO
$do$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'project') THEN
        CREATE ROLE project WITH LOGIN PASSWORD 'project';
        GRANT CONNECT ON DATABASE java_angular_project_test TO project;
    END IF;
END
$do$;

CREATE SCHEMA IF NOT EXISTS sc_project;
ALTER SCHEMA sc_project OWNER TO project;


DROP TABLE IF EXISTS sc_project."account", sc_project."jwt",sc_project."role_user",sc_project."role",sc_project."users";

CREATE TABLE if NOT EXISTS sc_project.users(
    "id" BIGINT PRIMARY KEY,
    "name" text not null,
    "email" text not null,
    "password" text not null,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE if NOT EXISTS sc_project.jwt(
    "id" BIGINT PRIMARY KEY,
    "user_id" BIGINT NOT NULL REFERENCES sc_project."users"("id") on delete cascade,
    "email" text not null,
    "jwt_token" text not null,
    "jwt_id" TEXT NOT NULL,
    "is_valid" BOOLEAN NOT NULL DEFAULT FALSE,
    "expired_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

create table IF NOT EXISTS sc_project.role(
    "id" INT PRIMARY KEY,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

create table IF NOT EXISTS sc_project.role_user(
    "id" BIGINT PRIMARY KEY,
    "user_id" BIGINT NOT NULL REFERENCES sc_project."users"("id") on delete cascade,
    "role_id" INT NOT NULL REFERENCES sc_project."role"("id") on delete cascade,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

create table IF NOT EXISTS sc_project.account(
    "id" BIGINT PRIMARY KEY,
    "user_id" BIGINT NOT NULL REFERENCES sc_project."users"("id") on delete cascade,
    "account_activation_at" TIMESTAMPTZ,
    "account_activation_limit_date_at" TIMESTAMPTZ,
    "is_account_active" BOOLEAN NOT NULL DEFAULT TRUE,
    "token_activation" TEXT,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

ALTER table IF EXISTS sc_project.users OWNER TO project;
ALTER table IF EXISTS sc_project.jwt OWNER TO project;
ALTER table IF EXISTS sc_project.role OWNER TO project;
ALTER table IF EXISTS sc_project.role_user OWNER TO project;
ALTER table IF EXISTS sc_project.account OWNER TO project;

GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE sc_project.users TO project;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE sc_project.jwt TO project;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE sc_project.role TO project;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE sc_project.role_user TO project;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE sc_project.account TO project;

CREATE SEQUENCE if not exists sc_project.users_pk_seq START WITH 1 INCREMENT BY 1 NO CYCLE;
CREATE SEQUENCE if not exists sc_project.jwt_pk_seq START WITH 1 INCREMENT BY 1 NO CYCLE;
CREATE SEQUENCE if not exists sc_project.role_user_pk_seq START WITH 1 INCREMENT BY 1 NO CYCLE;
CREATE SEQUENCE if not exists sc_project.account_pk_seq START WITH 1 INCREMENT BY 1 NO CYCLE;

ALTER SEQUENCE if exists sc_project.users_pk_seq OWNER TO project;
ALTER SEQUENCE if exists sc_project.users_pk_seq owned by sc_project.users.id;
ALTER TABLE sc_project.users ALTER COLUMN id SET DEFAULT NEXTVAL('sc_project.users_pk_seq');
ALTER SEQUENCE if exists sc_project.jwt_pk_seq OWNER TO project;
ALTER SEQUENCE if exists sc_project.jwt_pk_seq owned by sc_project.jwt.id;
ALTER TABLE sc_project.jwt ALTER COLUMN id SET DEFAULT NEXTVAL('sc_project.jwt_pk_seq');
ALTER SEQUENCE if exists sc_project.role_user_pk_seq OWNER TO project;
ALTER SEQUENCE if exists sc_project.role_user_pk_seq owned by sc_project.role_user.id;
ALTER TABLE sc_project.role_user ALTER COLUMN id SET DEFAULT NEXTVAL('sc_project.role_user_pk_seq');
ALTER SEQUENCE if exists sc_project.account_pk_seq OWNER TO project;
ALTER SEQUENCE if exists sc_project.account_pk_seq owned by sc_project.account.id;
ALTER TABLE sc_project.account ALTER COLUMN id SET DEFAULT NEXTVAL('sc_project.account_pk_seq');

--Clear password: test
INSERT INTO sc_project.users ("name", "email" , "password") VALUES
('client', 'client@hotmail.fr', '$2y$10$9PSCTWQiEIbXulYGOZi7.u6x5S6.8XuM0dL3EH72sigNHLlUW2wzy'),
('pro', 'pro@hotmail.fr', '$2y$10$9PSCTWQiEIbXulYGOZi7.u6x5S6.8XuM0dL3EH72sigNHLlUW2wzy'),
('admin', 'admin@hotmail.fr', '$2y$10$9PSCTWQiEIbXulYGOZi7.u6x5S6.8XuM0dL3EH72sigNHLlUW2wzy');

INSERT INTO sc_project.role ("id", "name") VALUES
(1, 'ROLE_CLIENT'),
(2, 'ROLE_PRO'),
(3, 'ROLE_ADMIN');

INSERT INTO sc_project.account ("user_id", "is_account_active") VALUES
(1, TRUE),
(2, TRUE),
(3, TRUE);

INSERT INTO sc_project.role_user ("user_id", "role_id") VALUES
(1, 1),
(2, 1),
(2, 2),
(3, 1),
(3, 2),
(3, 3);

COMMIT;