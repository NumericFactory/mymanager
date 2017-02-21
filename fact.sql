-- phpMyAdmin SQL Dump
-- version 4.5.5.1
-- http://www.phpmyadmin.net
--
-- Client :  127.0.0.1
-- Généré le :  Mar 21 Février 2017 à 10:06
-- Version du serveur :  5.7.11
-- Version de PHP :  5.6.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `fact`
--

-- --------------------------------------------------------

--
-- Structure de la table `addresses`
--

CREATE TABLE `addresses` (
  `id` int(11) NOT NULL,
  `address` varchar(255) NOT NULL,
  `cp` int(5) NOT NULL,
  `city` varchar(155) NOT NULL,
  `country` varchar(155) NOT NULL,
  `otherdetails` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `addresstype`
--

CREATE TABLE `addresstype` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` mediumtext NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `address_customer`
--

CREATE TABLE `address_customer` (
  `id` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `address_id` int(11) NOT NULL,
  `addresstype_id` int(3) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `customers`
--

CREATE TABLE `customers` (
  `id` int(11) NOT NULL,
  `businessname` varchar(255) NOT NULL,
  `maincontact_id` int(7) NOT NULL,
  `type_id` int(11) NOT NULL,
  `sirensiret` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `invoices`
--

CREATE TABLE `invoices` (
  `id` int(11) NOT NULL,
  `ref` varchar(255) NOT NULL,
  `user_id` int(12) NOT NULL,
  `customer_id` int(12) NOT NULL,
  `order_id` int(12) DEFAULT NULL,
  `priceht` double NOT NULL,
  `vat` float DEFAULT NULL,
  `legalconditions_id` mediumtext,
  `paymentconditons_id` mediumtext,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `generalconditions_id` int(11) DEFAULT NULL,
  `duedate` timestamp NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `orderlines`
--

CREATE TABLE `orderlines` (
  `id` int(11) NOT NULL,
  `description` mediumtext NOT NULL,
  `quantity` int(11) NOT NULL,
  `priceht` double NOT NULL,
  `amountttc` double NOT NULL,
  `created_at` timestamp NOT NULL,
  `updated_at` timestamp NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `ref` varchar(255) NOT NULL,
  `user_id` int(12) NOT NULL,
  `customer_id` int(12) NOT NULL,
  `priceht` double NOT NULL,
  `vat` float DEFAULT NULL,
  `legalconditions_id` mediumtext,
  `paymentconditons_id` mediumtext,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `generalconditions_id` int(11) DEFAULT NULL,
  `duedate` timestamp NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(70) NOT NULL,
  `firstname` varchar(155) DEFAULT NULL,
  `lastname` varchar(155) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `cp` int(5) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `tel` int(10) DEFAULT NULL,
  `mobile` int(10) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Contenu de la table `users`
--

INSERT INTO `users` (`id`, `name`, `firstname`, `lastname`, `address`, `cp`, `city`, `country`, `tel`, `mobile`, `email`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Fred', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'frederic.lossignol@gmail.com', '$2y$10$TTElUdnt0XxvwVAT02syo.arLhDJ9C72tWp3IbtOPP0Buc4uK1LMO', NULL, '2017-02-17 09:36:52', '2017-02-17 09:36:52'),
(2, 'bill', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'flossignol@laposte.net', '$2y$10$/9yvCUqPhWb3d43I8ij8uOufNsO5fnT7fMhc3TY92gh16XRwSmrM.', 'qhn821PRSGVwLjCvoJIngCwTskRm7EGpRAAO9KZCW7ne1y4XpzjHbeo5XS2l', '2017-02-17 12:40:40', '2017-02-17 12:40:40');

--
-- Index pour les tables exportées
--

--
-- Index pour la table `addresses`
--
ALTER TABLE `addresses`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `invoices`
--
ALTER TABLE `invoices`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `orderlines`
--
ALTER TABLE `orderlines`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `addresses`
--
ALTER TABLE `addresses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `customers`
--
ALTER TABLE `customers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `invoices`
--
ALTER TABLE `invoices`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `orderlines`
--
ALTER TABLE `orderlines`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
