CREATE DATABASE IF NOT EXISTS gamenode;
USE gamenode;

-- Tabla de empresas.
CREATE TABLE IF NOT EXISTS companies (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  description VARCHAR(255) NOT NULL,
  country VARCHAR(50) NOT NULL,
  year_founded INT NOT NULL,
  website VARCHAR(255) NOT NULL,
  logo VARCHAR(255) NOT NULL
);

INSERT INTO companies (name, description, country, year_founded, website, logo) VALUES
('Nintendo', 'Gigante japonés del entretenimiento familiar.', 'Japón', 1889, 'https://www.nintendo.com', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Nintendo.svg/1920px-Nintendo.svg.png'),
('Sony Interactive', 'Líderes en tecnología y entretenimiento doméstico.', 'EEUU', 1993, 'https://www.playstation.com', 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Sony_logo.svg/1200px-Sony_logo.svg.png'),
('Microsoft', 'Multinacional tecnológica creadora de Xbox.', 'EEUU', 1975, 'https://www.xbox.com', 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/1920px-Microsoft_logo_%282012%29.svg.png'),
('Capcom', 'Desarrolladora legendaria de arcades.', 'Japón', 1979, 'https://www.capcom.com', 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Capcom_logo.svg/1920px-Capcom_logo.svg.png'),
('Square Enix', 'Maestros del género RPG y la narrativa.', 'Japón', 1975, 'https://www.square-enix.com', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Square_Enix_logo.svg/1920px-Square_Enix_logo.svg.png'),
('Ubisoft', 'Creadores de inmensos mundos abiertos.', 'Francia', 1986, 'https://www.ubisoft.com', 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Ubisoft_logo.svg/1920px-Ubisoft_logo.svg.png'),
('Electronic Arts', 'Gigante de los videojuegos deportivos.', 'EEUU', 1982, 'https://www.ea.com', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Electronic_Arts_Logo_2020.svg/1920px-Electronic_Arts_Logo_2020.svg.png'),
('Sega', 'Icono de los 90, ahora dedicado al software.', 'Japón', 1960, 'https://www.sega.com', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Sega_logo.svg/1920px-Sega_logo.svg.png'),
('Rockstar Games', 'Pioneros del género sandbox moderno.', 'EEUU', 1998, 'https://www.rockstargames.com', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Rockstar_Games_Logo.svg/1920px-Rockstar_Games_Logo.svg.png'),
('Bandai Namco', 'Fusión de entretenimiento y juguetes.', 'Japón', 2005, 'https://www.bandainamco.co.jp', 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Bandai_Namco_Holdings_logo.svg/1920px-Bandai_Namco_Holdings_logo.svg.png');

-- Tabla de videojuegos.
CREATE TABLE IF NOT EXISTS videogames (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(100) NOT NULL,
  description VARCHAR(255) NOT NULL,
  genre VARCHAR(50) NOT NULL,
  release_date DATE NOT NULL,
  pegi_rating VARCHAR(10) NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  url VARCHAR(255) NOT NULL,

  company_id INT,
  CONSTRAINT fk_company_videogame
    FOREIGN KEY (company_id) REFERENCES companies(id) ON DELETE CASCADE
);

INSERT INTO videogames (title, description, genre, release_date, pegi_rating, price, url, company_id) VALUES
('The Legend of Zelda: BOTW', 'Explora Hyrule con libertad total.', 'Adventure', '2017-03-03', 'PEGI 12', 59.99, 'https://upload.wikimedia.org/wikipedia/en/c/c6/The_Legend_of_Zelda_Breath_of_the_Wild.jpg', 1),
('God of War Ragnarök', 'Kratos y Atreus enfrentan el fin del mundo.', 'Action', '2022-11-09', 'PEGI 18', 69.99, 'https://upload.wikimedia.org/wikipedia/en/e/ee/God_of_War_Ragnar%C3%B6k_cover.jpg', 2),
('Halo Infinite', 'El Jefe Maestro regresa para salvar la humanidad.', 'Shooter', '2021-12-08', 'PEGI 16', 59.99, 'https://upload.wikimedia.org/wikipedia/en/1/14/Halo_Infinite.png', 3),
('Resident Evil Village', 'Sobrevive en una aldea llena de monstruos.', 'Horror', '2021-05-07', 'PEGI 18', 49.99, 'https://upload.wikimedia.org/wikipedia/en/2/2c/Resident_Evil_Village.png', 4),
('Final Fantasy VII Remake', 'Reimagina la historia de Cloud Strife.', 'RPG', '2020-04-10', 'PEGI 16', 59.99, 'https://upload.wikimedia.org/wikipedia/en/c/ce/FFVII_Remake_cover.jpg', 5),
('Assassins Creed Valhalla', 'Conquista Inglaterra como un vikingo.', 'Action RPG', '2020-11-10', 'PEGI 18', 59.99, 'https://upload.wikimedia.org/wikipedia/en/f/ff/Assassin%27s_Creed_Valhalla_cover.jpg', 6),
('FIFA 23', 'El simulador de fútbol más realista.', 'Sports', '2022-09-30', 'PEGI 3', 69.99, 'https://upload.wikimedia.org/wikipedia/en/a/a6/FIFA_23_Cover.jpg', 7),
('Sonic Frontiers', 'Sonic corre libre en un mundo abierto.', 'Platformer', '2022-11-08', 'PEGI 7', 59.99, 'https://upload.wikimedia.org/wikipedia/en/5/52/Sonic_Frontiers_cover_art.jpg', 8),
('Grand Theft Auto V', 'Tres criminales arriesgan todo en Los Santos.', 'Action', '2013-09-17', 'PEGI 18', 29.99, 'https://upload.wikimedia.org/wikipedia/en/a/a5/Grand_Theft_Auto_V.png', 9),
('Elden Ring', 'Un mundo de fantasía oscura creado por Miyazaki.', 'RPG', '2022-02-25', 'PEGI 16', 59.99, 'https://upload.wikimedia.org/wikipedia/en/b/b9/Elden_Ring_Box_art.jpg', 10);

-- Tabla de consolas.
CREATE TABLE IF NOT EXISTS consoles (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  description VARCHAR(255) NOT NULL,
  release_date DATE NOT NULL,
  url VARCHAR(255) NOT NULL,

  company_id INT,
  CONSTRAINT fk_company_console
  FOREIGN KEY (company_id) REFERENCES companies(id) ON DELETE CASCADE
);

INSERT INTO consoles (name, description, release_date, url, company_id) VALUES
('Nintendo Switch', 'Híbrida: juega en la TV o en modo portátil.', '2017-03-03', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Nintendo_Switch_Console.png/1200px-Nintendo_Switch_Console.png', 1),
('PlayStation 5', 'Potencia bruta con carga ultrarrápida SSD.', '2020-11-12', 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/PlayStation_5_and_DualSense_with_transparent_background.png/1200px-PlayStation_5_and_DualSense_with_transparent_background.png', 2),
('Xbox Series X', 'La Xbox más rápida y potente de la historia.', '2020-11-10', 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Xbox_Series_X_Console_and_Controller.png/1200px-Xbox_Series_X_Console_and_Controller.png', 3),
('PlayStation 4', 'La consola que definió la generación pasada.', '2013-11-15', 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/PS4-Console-wDS4.jpg/1200px-PS4-Console-wDS4.jpg', 2),
('Xbox One', 'Centro de entretenimiento todo en uno.', '2013-11-22', 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Microsoft-Xbox-One-Console-wKinect.png/1200px-Microsoft-Xbox-One-Console-wKinect.png', 3),
('Nintendo 3DS', 'Portátil con pantalla 3D sin gafas.', '2011-02-26', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Nintendo-3DS-AquaOpen.png/1200px-Nintendo-3DS-AquaOpen.png', 1),
('Wii U', 'Innovadora consola con mando-pantalla.', '2012-11-18', 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Wii_U_Console_and_Gamepad.png/1200px-Wii_U_Console_and_Gamepad.png', 1),
('Sega Mega Drive', 'La consola de 16-bits que desafió a Nintendo.', '1988-10-29', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Sega-Mega-Drive-JP-Mk1-Console-Set.jpg/1200px-Sega-Mega-Drive-JP-Mk1-Console-Set.jpg', 8),
('PlayStation Vita', 'Portátil potente con pantalla OLED.', '2011-12-17', 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/PlayStation_Vita.png/1200px-PlayStation_Vita.png', 2),
('GameCube', 'Consola compacta y potente de Nintendo.', '2001-09-14', 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/GameCube-Console-Set.png/1200px-GameCube-Console-Set.png', 1);

-- Tabla de disponibilidad de videojuegos en consolas.
CREATE TABLE IF NOT EXISTS videogame_console (
  videogame_id INT,
  console_id INT,
  PRIMARY KEY (videogame_id, console_id),
  CONSTRAINT fk_videogame_console_videogame
    FOREIGN KEY (videogame_id) REFERENCES videogames(id) ON DELETE CASCADE,
  CONSTRAINT fk_videogame_console_console
    FOREIGN KEY (console_id) REFERENCES consoles(id) ON DELETE CASCADE
);

INSERT INTO videogame_console (videogame_id, console_id) VALUES
(1, 1), (1, 7),
(2, 2), (2, 4), 
(3, 3), (3, 5), 
(4, 2), (4, 3), (4, 4), (4, 5), 
(7, 1), (7, 2), (7, 3), (7, 4), (7, 5), 
(8, 1), (8, 2), (8, 3), (8, 4), 
(9, 2), (9, 3), (9, 4), (9, 5); 