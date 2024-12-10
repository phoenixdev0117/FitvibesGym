CREATE TABLE pais (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(20) UNIQUE
);

CREATE TABLE estadopago (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(20) UNIQUE
);

CREATE TABLE genero (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(15) UNIQUE
);

CREATE TABLE userol (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(15) UNIQUE
);

CREATE TABLE mensajeuser (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(40)  ,
  nombre VARCHAR(40),
  telefono VARCHAR(20),
  mensaje TEXT,
  createdat DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedat DATETIME ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE promocodes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  code VARCHAR(10) UNIQUE,
  discount INT,
  percent INT,
  used INT,
  expiration DATETIME,
  createdat DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedat DATETIME ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE account (
  id INT AUTO_INCREMENT PRIMARY KEY,
  userId INT,
  type VARCHAR(255),
  provider VARCHAR(255),
  providerAccountId VARCHAR(255),
  refresh_token TEXT,
  access_token TEXT,
  expires_at INT,
  token_type VARCHAR(255),
  scope VARCHAR(255),
  id_token TEXT,
  session_state VARCHAR(255),
  UNIQUE(provider, providerAccountId),
  FOREIGN KEY (userId) REFERENCES user(id) ON DELETE CASCADE
);

CREATE TABLE session (
  id INT AUTO_INCREMENT PRIMARY KEY,
  sessionToken VARCHAR(255) UNIQUE,
  userId INT,
  expires DATETIME,
  FOREIGN KEY (userId) REFERENCES user(id) ON DELETE CASCADE
);

CREATE TABLE user (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(40),
  email VARCHAR(40) UNIQUE,
  emailVerified DATETIME,
  image VARCHAR(255),
  password VARCHAR(255),
  roleId INT,
  isTwoFactorEnabled BOOLEAN DEFAULT FALSE,
  twoFactorConfirmationId INT,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (roleId) REFERENCES userol(id),
  FOREIGN KEY (twoFactorConfirmationId) REFERENCES twofactorconfirmation(id)
);

CREATE TABLE verificationtoken (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255),
  token VARCHAR(255) UNIQUE,
  expires DATETIME,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME ON UPDATE CURRENT_TIMESTAMP,
  UNIQUE(email, token)
);

CREATE TABLE passwordresettoken (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255),
  token VARCHAR(255) UNIQUE,
  expires DATETIME,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME ON UPDATE CURRENT_TIMESTAMP,
  UNIQUE(email, token)
);

CREATE TABLE twofactortoken (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255),
  token VARCHAR(255) UNIQUE,
  expires DATETIME,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME ON UPDATE CURRENT_TIMESTAMP,
  UNIQUE(email, token)
);

CREATE TABLE twofactorconfirmation (
  id INT AUTO_INCREMENT PRIMARY KEY,
  userId INT,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (userId) REFERENCES user(id) ON DELETE CASCADE,
  UNIQUE(userId)
);

CREATE TABLE planes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(15) UNIQUE,
  createdat DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedat DATETIME ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE payment (
  id INT AUTO_INCREMENT PRIMARY KEY,
  numerotransaccion INT,
  estadopagoId INT,
  inscripcion FLOAT DEFAULT 0,
  mensualidad FLOAT DEFAULT 0,
  descuento FLOAT DEFAULT 0,
  total FLOAT DEFAULT 0,
  email VARCHAR(40),
  domiciliacion BOOLEAN DEFAULT FALSE,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME ON UPDATE CURRENT_TIMESTAMP,
  userId INT,
  planId INT,
  FOREIGN KEY (estadopagoId) REFERENCES estadopago(id),
  FOREIGN KEY (userId) REFERENCES userplanes(id) ON DELETE CASCADE,
  FOREIGN KEY (planId) REFERENCES planes(id)
);

CREATE TABLE userplanes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(40),
  apellido VARCHAR(40),
  dia VARCHAR(2),
  mes VARCHAR(2),
  anio VARCHAR(4),
  telefono VARCHAR(20),
  generoId INT,
  paisId INT,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (generoId) REFERENCES genero(id),
  FOREIGN KEY (paisId) REFERENCES pais(id)
);




-- Datos

INSERT INTO estadopago (nombre) VALUES ('Pendiente');
INSERT INTO estadopago (nombre) VALUES ('Aprobado');
INSERT INTO estadopago (nombre) VALUES ('Rechazado');

INSERT INTO genero (nombre) VALUES ('Masculino');
INSERT INTO genero (nombre) VALUES ('Femenino');

INSERT INTO userol (nombre) VALUES ('admin');
INSERT INTO userol (nombre) VALUES ('user');

INSERT INTO pais (nombre) VALUES ('MX');
INSERT INTO pais (nombre) VALUES ('US'); 

INSERT INTO planes (nombre) VALUES ('JUST CLASS');
INSERT INTO planes (nombre) VALUES ('FULL FIT');
INSERT INTO planes (nombre) VALUES ('ESTUDIANTE');
INSERT INTO planes (nombre) VALUES ('TRIMESTRAL');
INSERT INTO planes (nombre) VALUES ('SEMESTRAL');
INSERT INTO planes (nombre) VALUES ('ANUAL');

INSERT INTO planes (nombre) VALUES ('ANUALIDAD - JUST CLASS');
INSERT INTO planes (nombre) VALUES ('ANUALIDAD - FULL FIT');
INSERT INTO planes (nombre) VALUES ('ANUALIDAD - ESTUDIANTE');
INSERT INTO planes (nombre) VALUES ('ANUALIDAD - TRIMESTRAL');
INSERT INTO planes (nombre) VALUES ('ANUALIDAD - SEMESTRAL');
INSERT INTO planes (nombre) VALUES ('ANUALIDAD - ANUAL');


