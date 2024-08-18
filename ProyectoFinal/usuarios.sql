-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 18-08-2024 a las 03:04:05
-- Versión del servidor: 5.00.15
-- Versión de PHP: 5.4.3

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `proyecto_final`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(30) DEFAULT NULL,
  `apellido` varchar(30) DEFAULT NULL,
  `edad` int(3) DEFAULT NULL,
  `mail` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=13 ;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `apellido`, `edad`, `mail`) VALUES
(1, 'Natanael', 'Hagan', 32, 'juan_hagan@bignet.com'),
(2, 'Gonzalo', 'Pillai', 32, 'g_pillai@bignet.com'),
(3, 'Ana', 'Dharma', 27, 'ana@bignet.com'),
(4, 'Maria', 'Anchor', 26, 'mary@bignet.com'),
(5, 'Alfredo', 'Fernandez', 31, 'af@bignet.com'),
(6, 'prueba insert', 'apellido', 1000, 'prueba@insert.com'),
(9, 'prueba insert', 'apellido', 1000, 'prueba@insert.com'),
(10, 'Natanael', 'apellido', 1000, 'prueba@insert.com'),
(11, 'prueba insert', 'apellido', 1000, 'prueba@insert.com'),
(12, 'prueba insert', 'apellido', 1000, 'prueba@insert.com');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
