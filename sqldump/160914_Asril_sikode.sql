-- phpMyAdmin SQL Dump
-- version 4.8.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 14, 2018 at 11:21 AM
-- Server version: 10.1.33-MariaDB
-- PHP Version: 7.2.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sikode`
--

-- --------------------------------------------------------

--
-- Table structure for table `answer`
--

CREATE TABLE `answer` (
  `id` bigint(20) NOT NULL,
  `answer` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `answer_img` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `users_id` bigint(20) NOT NULL,
  `question_id` bigint(20) NOT NULL,
  `is_approved` set('1','0') COLLATE utf8mb4_unicode_ci NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `answer`
--

INSERT INTO `answer` (`id`, `answer`, `answer_img`, `users_id`, `question_id`, `is_approved`, `created`) VALUES
(1, 'css itu cascading style. itu lho, yang buat tampilan web menarik.', '', 7, 3, '1', '2018-09-06 10:10:31'),
(2, 'lo bercanda apa ngajak berantem nih? :D', '', 9, 3, '1', '2018-09-06 10:10:31'),
(3, 'coba cek url nya, dah bener belum?', '', 8, 1, '1', '2018-09-06 10:12:34'),
(4, 'coba dibawa ke service center laptop axioo nya', '', 10, 1, '0', '2018-09-06 10:12:34'),
(5, 'ane juga gak tau, bantu up aja deh gan.', '', 7, 5, '1', '2018-09-06 10:14:20'),
(6, 'nodejs itu buat backend react js buat frontend nya', '', 8, 5, '1', '2018-09-06 10:14:20'),
(7, 'soal fundamenta yak, gampang itumah. tinggal lo console log, isi deh dengan bintangnya. wakaka.', '', 6, 2, '1', '2018-09-06 10:15:29');

-- --------------------------------------------------------

--
-- Table structure for table `question`
--

CREATE TABLE `question` (
  `id` bigint(20) NOT NULL,
  `question_title` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `question_content` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `question_img` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `users_id` bigint(20) NOT NULL,
  `is_approved` set('1','0') COLLATE utf8mb4_unicode_ci NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `question`
--

INSERT INTO `question` (`id`, `question_title`, `question_content`, `question_img`, `users_id`, `is_approved`, `created`) VALUES
(1, 'Axios saya gak jalan', 'kenapa axios gak jalan padahal sudah diinstall modulenya', '', 6, '1', '2018-09-06 09:36:34'),
(2, 'soal fundamental', 'gw dapet soal untuk buat bintang persegi, gimana caranya yak?', '', 8, '0', '2018-09-06 09:55:58'),
(3, 'arti css', 'css apaan sih? game counter strike terbaru yak?', '', 10, '1', '2018-09-06 09:55:58'),
(5, 'node js', 'node js buat apaan sih?', '', 7, '1', '2018-09-13 08:35:16');

-- --------------------------------------------------------

--
-- Table structure for table `questiontagrelationship`
--

CREATE TABLE `questiontagrelationship` (
  `id` bigint(20) NOT NULL,
  `question_id` bigint(20) NOT NULL,
  `tag_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `questiontagrelationship`
--

INSERT INTO `questiontagrelationship` (`id`, `question_id`, `tag_id`) VALUES
(1, 3, 2),
(2, 3, 6),
(3, 5, 5),
(4, 5, 6),
(5, 1, 6),
(6, 2, 1),
(7, 2, 1),
(8, 2, 7);

-- --------------------------------------------------------

--
-- Table structure for table `tag`
--

CREATE TABLE `tag` (
  `id` bigint(20) NOT NULL,
  `tag` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tag`
--

INSERT INTO `tag` (`id`, `tag`) VALUES
(1, 'Javascript'),
(2, 'CSS'),
(5, 'Express Js'),
(6, 'React Js'),
(7, 'Python');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) NOT NULL,
  `fullname` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `username` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `fullname`, `username`, `email`, `password`, `image`, `created`) VALUES
(6, 'John Doe', 'john', 'john@gmail.com', 'john', 'BM logo.png', '2018-09-06 07:50:39'),
(7, 'Adhi Nugraha', 'adhi', 'adhi@gmail.com', 'adhi', '', '2018-09-06 09:51:09'),
(8, 'Asril Irsadi', 'asril', 'asril@outlook.com', 'asril', '', '2018-09-10 07:20:21'),
(9, 'dimas', 'dimas', 'dimas@purwa.com', 'dimas', '', '2018-09-06 09:52:14'),
(10, 'raton', 'raton', 'raton@yahoo.com', 'raton', '', '2018-09-06 09:52:14');

-- --------------------------------------------------------

--
-- Table structure for table `votes`
--

CREATE TABLE `votes` (
  `id` bigint(20) NOT NULL,
  `questions_id` bigint(20) NOT NULL,
  `answers_id` bigint(20) NOT NULL,
  `vote` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `answer`
--
ALTER TABLE `answer`
  ADD PRIMARY KEY (`id`),
  ADD KEY `answer_fk0` (`users_id`),
  ADD KEY `answer_fk1` (`question_id`);

--
-- Indexes for table `question`
--
ALTER TABLE `question`
  ADD PRIMARY KEY (`id`),
  ADD KEY `question_fk0` (`users_id`);

--
-- Indexes for table `questiontagrelationship`
--
ALTER TABLE `questiontagrelationship`
  ADD PRIMARY KEY (`id`),
  ADD KEY `QuestionTagRelationship_fk0` (`question_id`),
  ADD KEY `QuestionTagRelationship_fk1` (`tag_id`);

--
-- Indexes for table `tag`
--
ALTER TABLE `tag`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `votes`
--
ALTER TABLE `votes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `votes_fk0` (`questions_id`),
  ADD KEY `votes_fk1` (`answers_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `answer`
--
ALTER TABLE `answer`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `question`
--
ALTER TABLE `question`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `questiontagrelationship`
--
ALTER TABLE `questiontagrelationship`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `tag`
--
ALTER TABLE `tag`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `votes`
--
ALTER TABLE `votes`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `answer`
--
ALTER TABLE `answer`
  ADD CONSTRAINT `answer_fk0` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `answer_fk1` FOREIGN KEY (`question_id`) REFERENCES `question` (`id`);

--
-- Constraints for table `question`
--
ALTER TABLE `question`
  ADD CONSTRAINT `question_fk0` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `questiontagrelationship`
--
ALTER TABLE `questiontagrelationship`
  ADD CONSTRAINT `QuestionTagRelationship_fk0` FOREIGN KEY (`question_id`) REFERENCES `question` (`id`),
  ADD CONSTRAINT `QuestionTagRelationship_fk1` FOREIGN KEY (`tag_id`) REFERENCES `tag` (`id`);

--
-- Constraints for table `votes`
--
ALTER TABLE `votes`
  ADD CONSTRAINT `votes_fk0` FOREIGN KEY (`questions_id`) REFERENCES `question` (`id`),
  ADD CONSTRAINT `votes_fk1` FOREIGN KEY (`answers_id`) REFERENCES `answer` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
