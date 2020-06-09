-- phpMyAdmin SQL Dump
-- version 4.9.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Jun 07, 2020 at 03:41 PM
-- Server version: 5.7.26
-- PHP Version: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `Twitter_Project`
--

-- --------------------------------------------------------

--
-- Table structure for table `tweets`
--

CREATE TABLE `tweets` (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `tweet` varchar(140) NOT NULL,
  `created_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tweets`
--

INSERT INTO `tweets` (`id`, `id_user`, `tweet`, `created_at`) VALUES
(21, 13, 'hello', '2020-06-04 17:04:44');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `birthday` date NOT NULL,
  `sexe` varchar(50) NOT NULL,
  `city` varchar(50) NOT NULL,
  `mail` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `is_actif` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `first_name`, `last_name`, `birthday`, `sexe`, `city`, `mail`, `password`, `is_actif`) VALUES
(13, 'Yoram', 'Taieb', '2001-01-30', 'M', 'Paris', 'yoram@gmail.com', '$2a$12$dCH3dHWYi4yc6fTKWH/hDOSI6NwI1gd31VWXbReoWX14FjpdrAOvy', 1),
(15, 'Paul', 'Taieb', '2001-01-30', 'ddd', 'Paris', 'paul@gmail.com', '$2a$12$HYaNzimiKWQEV88yT7IMKeq6tQE3EGyZ4btlwSmS56LdamIHWOqCS', 1),
(16, 'Pierre', 'Lefort', '2001-01-30', 'M', 'Paris', 'pierre@gmail.com', '$2a$12$NcG2dmdfg1xis1Pz26X77udigIPBDmluVIgzITPyO8F2TGfqpQYuC', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tweets`
--
ALTER TABLE `tweets`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `mail` (`mail`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tweets`
--
ALTER TABLE `tweets`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;