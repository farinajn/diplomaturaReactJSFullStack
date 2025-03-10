-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 19-08-2024 a las 01:47:57
-- Versión del servidor: 5.00.15
-- Versión de PHP: 5.4.3

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `m5u2`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleados`
--

CREATE TABLE IF NOT EXISTS `empleados` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `apellido` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `trabajo` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `edad` int(3) DEFAULT NULL,
  `salario` int(12) DEFAULT NULL,
  `mail` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=22 ;

--
-- Volcado de datos para la tabla `empleados`
--

INSERT INTO `empleados` (`nombre`, `trabajo`) VALUES
('Juan', 'Programador Senior'),
('Gonzalo', 'Programador Senior'),
('Ana', 'Desarrollador Web'),
('Maria', 'Desarrollador Web'),
('Alfredo', 'Programador'),
('Juan', 'Programador'),
('Eduardo', 'Programador'),
('Alejandro', 'Programador'),
('Hernan', 'Especialista Multimedia'),
('Paublo', 'Especialista Multimedia'),
('Arturo', 'Especialista Multimedia'),
('Jimena', 'Diseñador Web Senior'),
('Roberto', 'Administrador de Sistemas'),
('Daniel', 'Administrador de Sistemas'),
('Miguel', 'Ejecutivo de Ventas Senior'),
('Monica', 'Ejecutivo de Ventas'),
('Alicia', 'Ejecutivo de Ventas'),
('Jose', 'Ejecutivo de Ventas'),
('Sabrina', 'Gerente de Soporte Tecnico'),
('Pedro', 'Gerente de Finanzas'),
('Mariano', 'Presidente');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
