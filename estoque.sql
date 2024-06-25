-- phpMyAdmin SQL Dump
-- version 4.5.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 25-Jun-2024 às 17:29
-- Versão do servidor: 5.7.11
-- PHP Version: 5.6.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `estoque`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `entrada_produto`
--

CREATE TABLE `entrada_produto` (
  `id` int(11) NOT NULL,
  `id_produto` int(11) DEFAULT NULL,
  `qtde` int(11) DEFAULT NULL,
  `valor_unitario` decimal(9,2) DEFAULT '0.00',
  `data_entrada` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `funcionario`
--

CREATE TABLE `funcionario` (
  `id` int(11) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `cpf` varchar(14) NOT NULL,
  `cargo` varchar(50) NOT NULL,
  `senha` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `funcionario`
--

INSERT INTO `funcionario` (`id`, `nome`, `cpf`, `cargo`, `senha`) VALUES
(1, 'bruno', '333.333.333-33', 'programador', 'xesq'),
(2, 'ruan', '222.222.222-22', 'faxineiro', 'xesq');

-- --------------------------------------------------------

--
-- Estrutura da tabela `produto`
--

CREATE TABLE `produto` (
  `id` int(11) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `marca` varchar(100) NOT NULL,
  `descricao` varchar(50) DEFAULT NULL,
  `qtde` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `produto`
--

INSERT INTO `produto` (`id`, `nome`, `marca`, `descricao`, `qtde`) VALUES
(3, 'sabao', 'todas', 'sei la', 100);

-- --------------------------------------------------------

--
-- Estrutura da tabela `saida_produto`
--

CREATE TABLE `saida_produto` (
  `id` int(11) NOT NULL,
  `id_produto` int(11) DEFAULT NULL,
  `qtde` int(11) DEFAULT NULL,
  `valor_unitario` decimal(9,2) DEFAULT '0.00',
  `data_saida` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `entrada_produto`
--
ALTER TABLE `entrada_produto`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_produto` (`id_produto`);

--
-- Indexes for table `funcionario`
--
ALTER TABLE `funcionario`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `produto`
--
ALTER TABLE `produto`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `saida_produto`
--
ALTER TABLE `saida_produto`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_produto` (`id_produto`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `entrada_produto`
--
ALTER TABLE `entrada_produto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `funcionario`
--
ALTER TABLE `funcionario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `produto`
--
ALTER TABLE `produto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `saida_produto`
--
ALTER TABLE `saida_produto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
--
-- Constraints for dumped tables
--

--
-- Limitadores para a tabela `entrada_produto`
--
ALTER TABLE `entrada_produto`
  ADD CONSTRAINT `entrada_produto_ibfk_1` FOREIGN KEY (`id_produto`) REFERENCES `produto` (`id`);

--
-- Limitadores para a tabela `saida_produto`
--
ALTER TABLE `saida_produto`
  ADD CONSTRAINT `saida_produto_ibfk_1` FOREIGN KEY (`id_produto`) REFERENCES `produto` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
