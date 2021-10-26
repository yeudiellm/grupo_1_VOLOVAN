--
-- Creación de Base de Datos
--
DROP DATABASE IF EXISTS volovan_db;
CREATE DATABASE volovan_db;
USE volovan_db;


--
-- Creación de Tablas
--

DROP TABLE IF EXISTS `Usuarios`;
CREATE TABLE `Usuarios` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `esAdmin` BOOLEAN DEFAULT False, 
  `nombre`  VARCHAR(100) NOT NULL, 
  `email` VARCHAR(100) NOT NULL,
  `password` VARCHAR (100) NOT NULL,
  `avatar_nombre` VARCHAR(100)  NOT NULL, 
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

DROP TABLE IF EXISTS `CategoriasProductos`;
CREATE TABLE `CategoriasProductos` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nombre`  VARCHAR(100) NOT NULL, 
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;


DROP TABLE IF EXISTS `Productos`;
CREATE TABLE `Productos` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(100) NOT NULL, 
  `descripcion` VARCHAR(100) DEFAULT NULL,
  `precio` FLOAT(4,2)  DEFAULT 13.00,
  `imagen_nombre` VARCHAR(100) NOT NULL, 
  `id_categoria` INT UNSIGNED NOT NULL, 
  PRIMARY KEY (`id`),
  KEY `id_producto_categoria` (`id_categoria`),
  CONSTRAINT `id_producto_categoria` FOREIGN KEY (`id_categoria`) REFERENCES `CategoriasProductos` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

DROP TABLE IF EXISTS `Pedidos`;
CREATE TABLE `Pedidos` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `fecha` DATETIME NOT NULL, 
  `id_producto` INT UNSIGNED NOT NULL, 
  `id_usuario` INT UNSIGNED NOT NULL, 
  `cantidad`  INT UNSIGNED NOT NULL, 
  `sub_total` FLOAT  NOT NULL, 
  PRIMARY KEY (`id`),
  KEY `id_pedido_producto` (`id_producto`),
  KEY `id_pedido_usuario` (`id_usuario`),
  CONSTRAINT `id_pedido_producto` FOREIGN KEY (`id_producto`) REFERENCES `Productos` (`id`),
  CONSTRAINT `id_pedido_usuario` FOREIGN KEY (`id_usuario`) REFERENCES `Usuarios` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;


--
-- Importación de algunos datos. 
--


INSERT INTO `Usuarios` VALUES
(1,True,'Hassir','hassir@gmail.com','$2a$10$qrB1wqk0edVF0LEeL0v37OPeDk67qDDm3IqUcXyOcXnL9HuE6Gzbq', 'img_avatar.png'),
(2,True,'Luis','luis@gmail.com','$2a$10$qrB1wqk0edVF0LEeL0v37OPeDk67qDDm3IqUcXyOcXnL9HuE6Gzbq', 'img_avatar.png'),
(3,True,'Yeudiel','yeudiel@gmail.com','$2a$10$qrB1wqk0edVF0LEeL0v37OPeDk67qDDm3IqUcXyOcXnL9HuE6Gzbq', 'img_avatar.png'),
(4,True,'Julian','yeudiel@gmail.com','$2a$10$qrB1wqk0edVF0LEeL0v37OPeDk67qDDm3IqUcXyOcXnL9HuE6Gzbq', 'img_avatar.png'),
(5,True,'Alicia','alicia10@gmail.com','$2a$10$qrB1wqk0edVF0LEeL0v37OPeDk67qDDm3IqUcXyOcXnL9HuE6Gzbq', 'img_avatar.png'),
(6,True,'Elena','elen01@gmail.com','$2a$10$qrB1wqk0edVF0LEeL0v37OPeDk67qDDm3IqUcXyOcXnL9HuE6Gzbq', 'img_avatar.png'),
(7,True,'Oscar','osctor@gmail.com','$2a$10$qrB1wqk0edVF0LEeL0v37OPeDk67qDDm3IqUcXyOcXnL9HuE6Gzbq', 'img_avatar.png'),
(8,True,'Juliette','juls@gmail.com','$2a$10$qrB1wqk0edVF0LEeL0v37OPeDk67qDDm3IqUcXyOcXnL9HuE6Gzbq', 'img_avatar.png'),
(9,True,'Aceneth','acemonni@gmail.com','$2a$10$qrB1wqk0edVF0LEeL0v37OPeDk67qDDm3IqUcXyOcXnL9HuE6Gzbq', 'img_avatar.png'),
(10,True,'Kirsten','kirs012@gmail.com','$2a$10$qrB1wqk0edVF0LEeL0v37OPeDk67qDDm3IqUcXyOcXnL9HuE6Gzbq', 'img_avatar.png');

INSERT INTO `CategoriasProductos` VALUES
(1, "salados"),
(2, "dulces"),
(3, "especiales"), 
(4, "postres"); 

 
INSERT INTO `Productos` VALUES
(1,"Volovan de Jamon","Hojaldre relleno con jamon, queso amarillo y salsa chipotle.", 13.00, "volovan-jamon.jpg",1),
(2,"Volovan de Pollo","Hojaldre relleno con picadillo de pollo (tiene tomate, cebolla, chiles verdes)",13.00, "volovan-pollo.jpg",1),
(3,"Volovan Hawaiano","Hojaldre relleno con piña, jamon, queso amarillo y salsa chipotle", 13.00, "volovan-hawiano.jpg",1),
(4,"Volovan Choriqueso","Hojaldre relleno con chorizo, queso y chiles verdes", 13.00,  "volovan-choriqueso.jpg",1),
(5,"Volovan Tres quesos","Hojaldre relleno con queso de hebra, queso manchego y queso amarillo", 13.00, "volovan-tres-quesos.jpg",1),
(6,"Volovan Atún", "Hojaldre relleno con ensalda de atún",13.00,"volovan-atun.jpg", 1),
(7,"Volovan de Champiñones","Hojaldre relleno con champiñones, salsa habanero y queso de hebra",13.00,"volovan-champiñones.jpg",1),
(8,"Volovan de Piña","Hojaldre relleno jalea de piña",13.00, "volovan-pinia.jpg", 2),
(9,"Volovan de PiñaCoco","Hojaldre relleno jalea de piña y con coco molido",13.00, "volovan-pinia-coco.jpg",2), 
(10,"Volovan de Manjar","Hojaldre relleno con manjar de leche",13.00,"volovan-manjar.jpg",2), 
(11,"Volovan de Zarzamora", "Hojaldre relleno con mermelada de zarzamora", 13.00,"volovan-zarzamora.jpg",2), 
(12,"Volovan de Nutella","Hojaldre relleno con nutella y queso crema",13.00,"volovan-nutella.jpg",2), 
(13,"Volovan de Cajeta","Hojaldre relleno con cajeta",13.00,"volovan-cajeta.jpg",2), 
(14,"Volovan de Fresa","Hojaldre relleno jalea de fresa",13.00,"volovan-fresa.jpg", 2),
(15,"Volovan de Arroz con Leche","Hojaldre relleno de arroz con leche",13.00,"volovan-arroz-con-leche.jpg",2), 
(16,"Volovan de Manzana","Hojaldre relleno con jalea de manzana",13.00,"volovan-manzana.jpg",2),
(17,"Volovan de Guayaba","Hojaldre relleno con jalea de guayaba",13.00,"volovan-guayaba.jpg",2), 
(18,"Megavolo","Hojaldre con picadillo, jamon, salchicha, queso de hebra, queso amarillo y salsa habanero",18.00,"volovan-megavolo.jpg",3), 
(19,"Paseados","Hojaldre con salchicha, picadillo o  jamon y queso de hebra",18.00,"volovan-paseado.jpg",3), 
(20,"Voloburger","Hamburguesa con masa de hojaldre",25.00,"volovan-burguer.jpg",3),
(21,"Reyna","Hojaldre con salchica, queso de hebra, queso amarillo, piña, salsa chipotle, salchicha y pastor", 35.00, "volovan-reyna.jpg",3),
(22,"MisterVolo","Hojaldre con pastor, picadillo, jamon y salsa habanero",35.00,"volovan-mistervolo.jpg",3), 
(23,"Pastor","Hojaldre con pastor y queso manchego",15.00, "volovan-pastor.jpg",3),
(24,"CheeseCake de Oreo","Pay de queso y galletas Oreo",13.00,"volovan-pay-oreo.jpg",4), 
(25,"Carlotta version","Pay de queso sabor a limon",20.00,"volovan-carlota-limon.jpg",4);


SELECT * FROM Usuarios;

INSERT INTO `Pedidos` VALUES
(1, '2021-10-28 13:00:00',1,5,10, 130.00),
(2, '2021-10-28 13:00:00',3,5,10, 130.00),
(3, '2021-10-28 13:00:00',13,5,10, 130.00),
(4, '2021-10-29 11:00:00',1,6,10, 130.00),
(5, '2021-10-30 13:00:00',9,7,10, 130.00),
(6, '2021-10-30 16:00:00',10,5,10, 130.00), 
(7, '2021-10-30 16:00:00',1,8,10, 130.00),
(8, '2021-10-30 10:00:00',11,9,10, 130.00),
(9, '2021-10-30 10:00:00',12,9,10, 130.00), 
(10, '2021-10-30 08:00:00',16,5,10, 130.00); 





