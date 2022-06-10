-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- 主機： localhost
-- 產生時間： 2022-06-10 20:14:41
-- 伺服器版本： 8.0.29
-- PHP 版本： 8.1.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `cgd101_g1`
--

-- --------------------------------------------------------

--
-- 資料表結構 `ask_log`
--

CREATE TABLE `ask_log` (
  `ask_id` int NOT NULL COMMENT 'Not Null(PK,AI)',
  `ask_time` datetime NOT NULL COMMENT 'Not Null',
  `ask_content` varchar(500) NOT NULL COMMENT 'Not Null',
  `member_id` int NOT NULL COMMENT 'Not Null(FK)',
  `ans_backstage_id` int NOT NULL COMMENT 'Not Null(FK)',
  `ask_src` int NOT NULL COMMENT '1:會員諮詢，:2:教師回答'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- 傾印資料表的資料 `ask_log`
--

INSERT INTO `ask_log` (`ask_id`, `ask_time`, `ask_content`, `member_id`, `ans_backstage_id`, `ask_src`) VALUES
(1, '2022-06-03 15:59:05', '請問N5單字第8題的答案是?', 1, 1, 1),
(2, '2022-06-04 15:59:05', '您好，N5單字第8題的答案是あか。', 2, 2, 2),
(3, '2022-06-03 16:01:09', '請問會話要怎麼練習比較好?', 3, 3, 1),
(4, '2022-06-03 18:02:02', '多聽多看多寫，就會熟練了。', 1, 1, 2);

-- --------------------------------------------------------

--
-- 資料表結構 `backstage`
--

CREATE TABLE `backstage` (
  `backstage_id` int NOT NULL COMMENT 'Not Null(PK,AI)',
  `backstage_name` varchar(30) NOT NULL COMMENT 'Not Null',
  `backstage_account` varchar(30) NOT NULL COMMENT 'Not Null',
  `backstage_password` varchar(30) NOT NULL COMMENT 'Not Null',
  `backstage_status` char(1) NOT NULL COMMENT 'Not Null(0-停用,1-教師帳號,2-管理員帳號)'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- 傾印資料表的資料 `backstage`
--

INSERT INTO `backstage` (`backstage_id`, `backstage_name`, `backstage_account`, `backstage_password`, `backstage_status`) VALUES
(1, '管理員01', 'admin@gmail.com', 'aaaAAA111', '2'),
(2, '管理員02', 'admin2@gmail.com', 'eeeEEE111', '0'),
(3, '教師', 'teacher@gmail.com', 'tttTTT111', '1');

-- --------------------------------------------------------

--
-- 資料表結構 `error`
--

CREATE TABLE `error` (
  `error_id` int NOT NULL COMMENT 'Not Null(PK,AI)',
  `member_id` int NOT NULL COMMENT 'Not Null(FK)',
  `error_txt` varchar(800) NOT NULL COMMENT 'Not Null',
  `error_file` varchar(300) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `error_status` char(1) NOT NULL COMMENT 'Not Null(0-未審核,1-通過,2-未通過)',
  `error_datetime` datetime(6) NOT NULL COMMENT 'Not Null'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- 傾印資料表的資料 `error`
--

INSERT INTO `error` (`error_id`, `member_id`, `error_txt`, `error_file`, `error_status`, `error_datetime`) VALUES
(1, 1, '購買n5單字課程後，無法解鎖地圖', './images/report/error1.png', '0', '2022-06-04 16:47:02.000000'),
(2, 2, '購買裝備後，無法正常穿戴', './images/report/error2.png', '2', '2022-06-03 16:47:02.000000'),
(3, 3, '留言區無法按讚', './images/report/error3.png', '1', '2022-06-02 16:48:36.000000');

-- --------------------------------------------------------

--
-- 資料表結構 `fav`
--

CREATE TABLE `fav` (
  `post_id` int NOT NULL COMMENT 'Not Null(PK,FK)',
  `member_id` int NOT NULL COMMENT 'Not Null(PK,FK)'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- 傾印資料表的資料 `fav`
--

INSERT INTO `fav` (`post_id`, `member_id`) VALUES
(1, 1),
(3, 2),
(2, 3);

-- --------------------------------------------------------

--
-- 資料表結構 `item`
--

CREATE TABLE `item` (
  `item_id` int NOT NULL COMMENT 'Not Null(PK,AI)',
  `item_name` varchar(30) NOT NULL COMMENT 'Not Null',
  `item_img` varchar(300) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT 'Not Null',
  `item_price` int NOT NULL COMMENT 'Not Null',
  `item_info` varchar(90) NOT NULL COMMENT 'Not Null',
  `item_status` int NOT NULL COMMENT 'Not Null(1-上架,2-下架)'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- 傾印資料表的資料 `item`
--

INSERT INTO `item` (`item_id`, `item_name`, `item_img`, `item_price`, `item_info`, `item_status`) VALUES
(1, '漁夫帽', './images/1.png', 300, '帥氣漁夫帽，提升您的角色帥氣度。', 1),
(2, '頭盔', './images/2.png', 500, '鋼鐵頭盔，加成角色防禦力。', 1),
(3, '洋裝', './images/3.png', 700, '氣質洋裝，加成角色氣質度。', 2);

-- --------------------------------------------------------

--
-- 資料表結構 `item_record`
--

CREATE TABLE `item_record` (
  `item_order_id` int NOT NULL COMMENT 'Not Null(PK,AI)',
  `member_id` int NOT NULL COMMENT 'Not Null(FK)',
  `item_id` int NOT NULL COMMENT 'Not Null(FK)',
  `payment_time` datetime(6) NOT NULL COMMENT 'Not Null',
  `item_price` int NOT NULL COMMENT 'Not Null(FK)'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- 傾印資料表的資料 `item_record`
--

INSERT INTO `item_record` (`item_order_id`, `member_id`, `item_id`, `payment_time`, `item_price`) VALUES
(1, 1, 1, '2022-06-04 14:04:07.000000', 300),
(2, 2, 2, '2022-06-02 14:04:07.000000', 500),
(3, 3, 3, '2022-06-01 07:23:31.000000', 700);

-- --------------------------------------------------------

--
-- 資料表結構 `lesson`
--

CREATE TABLE `lesson` (
  `lesson_id` int NOT NULL COMMENT 'Not Null(PK,AI)',
  `lesson_name` varchar(50) NOT NULL COMMENT 'Not Null',
  `lesson_img` varchar(300) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT 'Not Null',
  `lesson_price` int NOT NULL COMMENT 'Not Null',
  `lesson_info` varchar(90) NOT NULL COMMENT 'Not Null',
  `lesson_type_id` int NOT NULL COMMENT 'Not Null(FK)',
  `lesson_status` int NOT NULL COMMENT 'Not Null(1-上架,2-下架)'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- 傾印資料表的資料 `lesson`
--

INSERT INTO `lesson` (`lesson_id`, `lesson_name`, `lesson_img`, `lesson_price`, `lesson_info`, `lesson_type_id`, `lesson_status`) VALUES
(1, 'あ', './images/payment_map.png', 0, 'N5單字大全，統整N5 JLPT高頻率出現的單字，讓考生能夠輕鬆掌握精華重點。', 1, 1),
(2, 'い', './images/payment_map.png', 0, 'N4會話大全，統整N4 JLPT高頻率出現的聽力會話，讓考生能夠輕鬆掌握精華重點。', 1, 1),
(3, 'う', './images/payment_map.png', 0, 'N3會話大全，統整N3 JLPT高頻率出現的聽力會話，讓考生能夠輕鬆掌握精華重點。', 1, 1),
(4, 'え', './images/payment_map.png', 0, 'N3會話大全，統整N3 JLPT高頻率出現的聽力會話，讓考生能夠輕鬆掌握精華重點。', 1, 1),
(5, 'お', './images/payment_map.png', 0, 'N3會話大全，統整N3 JLPT高頻率出現的聽力會話，讓考生能夠輕鬆掌握精華重點。', 1, 1),
(6, '數字', './images/payment_map.png', 0, '', 2, 1),
(7, '顏色', './images/payment_map.png', 0, '', 2, 1),
(8, '時間', './images/payment_map.png', 0, '', 2, 1),
(9, '食物', './images/payment_map.png', 0, '', 2, 1),
(10, '交通', './images/payment_map.png', 0, '', 2, 1),
(11, '日常會話', './images/payment_map.png', 0, '', 3, 1);

-- --------------------------------------------------------

--
-- 資料表結構 `lesson_record`
--

CREATE TABLE `lesson_record` (
  `lesson_order_id` int NOT NULL COMMENT 'Not Null(PK, AI)',
  `memeber_id` int NOT NULL COMMENT 'Not Null(FK)',
  `lesson_id` int NOT NULL COMMENT 'Not Null(FK)',
  `payment_time` datetime NOT NULL COMMENT 'Not Null',
  `lesson_price` int NOT NULL COMMENT 'Not Null(FK)'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- 傾印資料表的資料 `lesson_record`
--

INSERT INTO `lesson_record` (`lesson_order_id`, `memeber_id`, `lesson_id`, `payment_time`, `lesson_price`) VALUES
(1, 1, 1, '2022-06-04 15:18:43', 300),
(2, 2, 2, '2022-06-01 07:18:44', 500),
(3, 3, 3, '2022-06-02 13:18:59', 700);

-- --------------------------------------------------------

--
-- 資料表結構 `lesson_type`
--

CREATE TABLE `lesson_type` (
  `type_id` int NOT NULL COMMENT 'Not Null(PK,AI)',
  `type_name` varchar(30) NOT NULL COMMENT 'Not Null(五十音、單字、會話)'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- 傾印資料表的資料 `lesson_type`
--

INSERT INTO `lesson_type` (`type_id`, `type_name`) VALUES
(1, '五十音'),
(2, '單字'),
(3, '會話');

-- --------------------------------------------------------

--
-- 資料表結構 `member`
--

CREATE TABLE `member` (
  `member_id` int NOT NULL COMMENT 'Not Null(PK,AI)',
  `member_name` varchar(30) NOT NULL COMMENT 'Not Null',
  `account` varchar(30) NOT NULL COMMENT 'Not Null(email)',
  `password` varchar(30) NOT NULL COMMENT 'Not Null',
  `member_status` char(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT 'Not Null(0-停用,1-啟用)',
  `coin` int NOT NULL COMMENT 'Not Null',
  `level` int NOT NULL COMMENT 'Not Null(FK)',
  `role` varchar(300) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT './images/char_00_0.png' COMMENT 'Not Null'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- 傾印資料表的資料 `member`
--

INSERT INTO `member` (`member_id`, `member_name`, `account`, `password`, `member_status`, `coin`, `level`, `role`) VALUES
(1, 'Kenny', 'abc@gmail.com', 'aaaAAA111', '1', 0, 1, './images/char_00_0.png'),
(2, 'Jerry', 'def@gmail.com', 'bbbBBB111', '0', 100, 1, './images/char_00_0.png'),
(3, 'Bill', 'efg@gmail.com', 'cccCCC111', '1', 0, 1, './images/char_00_0.png');

-- --------------------------------------------------------

--
-- 資料表結構 `member_level`
--

CREATE TABLE `member_level` (
  `level` int NOT NULL COMMENT 'Not Null(PK,AI)',
  `title` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT 'Not Null(\r\n1~5 = 初心者,\r\n6~20 = 冒險者 ,\r\n21~30=探險者,\r\n31~50=大探險者,\r\n51~60=超探險者,\r\n61~70=究極探險者,\r\n71~80=無敵探險者,\r\n81~90=神探險者,\r\n91~99=極醒探險者,\r\n100(MAX)=超銀河探險者)'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- 傾印資料表的資料 `member_level`
--

INSERT INTO `member_level` (`level`, `title`) VALUES
(1, '初心者'),
(2, '冒險者'),
(3, '探險者');

-- --------------------------------------------------------

--
-- 資料表結構 `message`
--

CREATE TABLE `message` (
  `message_id` int NOT NULL COMMENT 'Not Null(PK,AI)',
  `message_date` datetime(6) NOT NULL COMMENT 'Not Null',
  `member_id` int NOT NULL COMMENT 'Not Null(FK)',
  `post_id` int NOT NULL COMMENT 'Not Null(FK)',
  `message_txt` varchar(800) NOT NULL COMMENT 'Not Null'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- 傾印資料表的資料 `message`
--

INSERT INTO `message` (`message_id`, `message_date`, `member_id`, `post_id`, `message_txt`) VALUES
(1, '2022-06-04 16:32:42.000000', 1, 1, '+1想參加讀書會'),
(2, '2022-06-03 16:33:54.000000', 2, 2, 'QQ我沒報名到JPLT考試'),
(3, '2022-06-02 16:33:54.000000', 3, 3, '+1 我也想要有個伴一起讀書');

-- --------------------------------------------------------

--
-- 資料表結構 `post`
--

CREATE TABLE `post` (
  `post_id` int NOT NULL COMMENT 'Not Null(PK,AI)',
  `member_id` int NOT NULL COMMENT 'Not Null(FK)',
  `post_date` datetime(6) NOT NULL COMMENT 'Not Null',
  `post_txt` varchar(800) NOT NULL COMMENT 'Not Null',
  `post_title` varchar(300) NOT NULL COMMENT 'Not Null',
  `post_status` int NOT NULL COMMENT 'Not Null(1:顯示,2:隱藏)'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- 傾印資料表的資料 `post`
--

INSERT INTO `post` (`post_id`, `member_id`, `post_date`, `post_txt`, `post_title`, `post_status`) VALUES
(1, 1, '2022-06-04 16:18:08.000000', '有誰有報名今年12月的JLPT N4考試? 有沒有興趣來讀書會一起練習討論呢?', '今年12月的JLPT N4考試', 1),
(2, 2, '2022-06-03 16:18:08.000000', '有誰可以推薦一下甚麼日劇適合初學者練習聽力呢?', '適合初學者練習聽力的日劇', 1),
(3, 3, '2022-06-01 16:20:11.000000', '升級測驗會話第3題為甚麼答案不是a?', '升級測驗會話第3題', 1);

-- --------------------------------------------------------

--
-- 資料表結構 `quiz_record`
--

CREATE TABLE `quiz_record` (
  `quiz_record_id` int NOT NULL COMMENT 'Not Null(PK,AI)',
  `quiz_id` int NOT NULL COMMENT 'Not Null(FK)',
  `member_id` int NOT NULL COMMENT 'Not Null(FK)',
  `quiz_score` int NOT NULL COMMENT 'Not Null',
  `quiz_time` datetime(6) NOT NULL COMMENT 'Not Null'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- 傾印資料表的資料 `quiz_record`
--

INSERT INTO `quiz_record` (`quiz_record_id`, `quiz_id`, `member_id`, `quiz_score`, `quiz_time`) VALUES
(1, 1, 1, 90, '2022-06-04 15:22:38.000000'),
(2, 2, 2, 80, '2022-06-01 15:22:38.000000'),
(3, 3, 3, 50, '2022-06-01 03:23:01.000000');

-- --------------------------------------------------------

--
-- 資料表結構 `q_data`
--

CREATE TABLE `q_data` (
  `option_id` int NOT NULL COMMENT 'Not Null(PK,AI)',
  `lesson_id` int NOT NULL COMMENT 'Not Null(FK)',
  `txt` varchar(240) NOT NULL COMMENT 'Not Null',
  `option_point` int NOT NULL COMMENT 'Not Null',
  `ans` varchar(240) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT 'Not Null',
  `option_content1` varchar(240) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT 'Not Null',
  `option_content2` varchar(240) NOT NULL COMMENT 'Not Null',
  `option_content3` varchar(240) NOT NULL COMMENT 'Not Null',
  `option_status` int NOT NULL COMMENT 'Not Null(1:上架,2:下架)'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- 傾印資料表的資料 `q_data`
--

INSERT INTO `q_data` (`option_id`, `lesson_id`, `txt`, `option_point`, `ans`, `option_content1`, `option_content2`, `option_content3`, `option_status`) VALUES
(1, 1, 'ああ', 10, 'aa', 'aka\r\n\r\n\r\n', 'sata', 'hana', 1),
(2, 1, 'なか', 10, 'naka', 'kaya', 'tana', 'maka', 1),
(3, 1, 'たま', 10, 'tama', 'kana', 'nata', 'sama', 1),
(4, 1, 'はさ', 10, 'hasa', 'rasa', 'naka', 'wana', 1),
(5, 1, 'らや', 10, 'raya', 'an', 'sara', 'tana', 1),
(6, 1, 'はま', 10, 'hama', 'nata', 'awa', 'haha', 1),
(7, 1, 'たん', 10, 'tan', 'han', 'nan', 'an', 1),
(8, 1, 'なあ', 10, 'naa', 'nia', 'taa', 'kaya', 1),
(9, 1, 'はは', 10, 'haha', 'han', 'hasa', 'haya', 1),
(10, 1, 'わあ', 10, 'waa', 'nama', 'aka', 'kaha', 1),
(11, 1, 'さわ', 10, 'sawa', 'sata', 'nama', 'tara', 1),
(12, 1, 'たな', 10, 'tana', 'kaha', 'naka', 'aka', 1),
(13, 1, 'やら', 10, 'yara', 'waka', 'raya', 'rata', 1),
(14, 1, 'かま', 10, 'kama', 'kaha', 'rawa', 'aka', 1),
(15, 1, 'まは', 10, 'yaha', 'maha', 'kana', 'haha', 1),
(16, 1, 'さら', 10, 'sara', 'tana', 'rasa', 'hasa', 1),
(17, 1, 'やん', 10, 'yan', 'han', 'ran', 'wan', 1),
(18, 1, 'さや', 10, 'saya', 'raya', 'nata', 'yan', 1),
(19, 1, 'らわ', 10, 'rawa', 'an', 'sara', 'yawa', 1),
(20, 1, 'たや', 10, 'taya', 'waka', 'tana', 'kaha', 1),
(21, 2, 'いき', 10, 'iki', 'ishi', 'kini', 'chiki', 1),
(22, 2, 'にし', 10, 'nishi', 'hini', 'chishi', 'kichi', 1),
(23, 2, 'ちみ', 10, 'chimi', 'richi', 'shimi', 'shichi', 1),
(24, 2, 'きに', 10, 'kini', 'chini', 'shini', 'kiri', 1),
(25, 2, 'いし', 10, 'ishi', 'ihi', 'iri', 'ichi', 1),
(26, 2, 'ひり', 10, 'hiri', 'niki', 'michi', 'hishi', 1),
(27, 2, 'いみ', 10, 'imi', 'shimi', 'chiki', 'iri', 1),
(28, 2, 'きち', 10, 'kichi', 'chiki', 'kini', 'richi', 1),
(29, 2, 'ひみ', 10, 'himi', 'shini', 'iki', 'kini', 1),
(30, 2, 'りき', 10, 'riki', 'shichi', 'richi', 'chimi', 1),
(31, 2, 'にひ', 10, 'nihi', 'chii', 'nishi', 'nichi', 1),
(32, 2, 'しち', 10, 'shichi', 'ichi', 'kini', 'kichi', 1),
(33, 2, 'にき', 10, 'niki', 'iki', 'nichi', 'kini', 1),
(34, 2, 'りし', 10, 'rishi', 'shiki', 'iri', 'shichi', 1),
(35, 2, 'しひ', 10, 'shihi', 'chimi', 'rimi', 'hini', 1),
(36, 2, 'りち', 10, 'richi', 'shichi', 'iki', 'himi', 1),
(37, 2, 'みひ', 10, 'mihi', 'nihi', 'himi', 'nishi', 1),
(38, 2, 'ちき', 10, 'chiki', 'hii', 'shichi', 'kimi', 1),
(39, 2, 'いい', 10, 'ii', 'yaya', 'mimi', 'nini', 1),
(40, 2, 'みい', 10, 'mii', 'nii', 'kii', 'rii', 1),
(41, 3, 'うぬ', 10, 'unu', 'uru', 'tsusu', 'kunu', 1),
(42, 3, 'くす', 10, 'kusu', 'sunu', 'kutsu', 'nuu', 1),
(43, 3, 'つう', 10, 'tsuu', 'suu', 'nutsu', 'kusu', 1),
(44, 3, 'ぬむ', 10, 'numu', 'kumu', 'tsunu', 'suku', 1),
(45, 3, 'する', 10, 'suru', 'kusu', 'tsusu', 'suru', 1),
(46, 3, 'ゆす', 10, 'yusu', 'numu', 'yuu', 'rufu', 1),
(47, 3, 'ふく', 10, 'fuku', 'tsuru', 'uku', 'nufu', 1),
(48, 3, 'すむ', 10, 'sumu', 'kunu', 'tsusu', 'sunu', 1),
(49, 3, 'くる', 10, 'kuru', 'tsunu', 'nufu', 'kusu', 1),
(50, 3, 'つぬ', 10, 'tusnu', 'uyu', 'unu', 'ruyu', 1),
(51, 3, 'るう', 10, 'ruu', 'kunu', 'tsuu', 'mutsu', 1),
(52, 3, 'むふ', 10, 'mufu', 'nuu', 'tsuku', 'umu', 1),
(53, 3, 'うゆ', 10, 'uyu', 'tsumu', 'nutsu', 'tsuku', 1),
(54, 3, 'くつ', 10, 'kutsu', 'rufu', 'nuku', 'kunu', 1),
(55, 3, 'ぬふ', 10, 'nufu', 'nutsu', 'suku', 'sunu', 1),
(56, 3, 'つる', 10, 'tsuru', 'numu', 'tsuru', 'suku', 1),
(57, 3, 'ゆう', 10, 'yuu', 'nutsu', 'tsuu', 'sumu', 1),
(58, 3, 'むつ', 10, 'mutsu', 'utsu', 'usu', 'kunu', 1),
(59, 3, 'るふ', 10, 'rufu', 'yusu', 'kusu', 'mutsu', 1),
(60, 3, 'うむ', 10, 'umu', 'suku', 'nutsu', 'unu', 1),
(61, 4, 'えて', 10, 'ete', 'neke', 'see', 'kese', 1),
(62, 4, 'けへ', 10, 'kehe', 'teke', 'sene', 'hete', 1),
(63, 4, 'ねせ', 10, 'nese', 'eke', 'mehe', 'kene', 1),
(64, 4, 'てえ', 10, 'tee', 'sete', 'nese', 'kete', 1),
(65, 4, 'めね', 10, 'mene', 'ete', 'rese', 'nese', 1),
(66, 4, 'れせ', 10, 'rese', 'eke', 'rene', 'kere', 1),
(67, 4, 'ねけ', 10, 'neke', 'seme', 'sene', 'hete', 1),
(68, 4, 'へえ', 10, 'hee', 'teke', 'sene', 'kehe', 1),
(69, 4, 'てめ', 10, 'teme', 'kese', 'mere', 'tene', 1),
(70, 4, 'せめ', 10, 'seme', 'nere', 'sene', 'sene', 1),
(71, 4, 'へて', 10, 'hete', 'nese', 'ehe', 'kese', 1),
(72, 4, 'てけ', 10, 'teke', 'neke', 'tehe', 'eke', 1),
(73, 4, 'せえ', 10, 'see', 'kese', 'ehe', 'sene', 1),
(74, 4, 'ねれ', 10, 'nere', 'meke', 'ete', 'mene', 1),
(75, 4, 'せて', 10, 'sete', 'teke', 'sene', 'eke', 1),
(76, 4, 'えけ', 10, 'eke', 'sete', 'ete', 'neke', 1),
(77, 4, 'ねせ', 10, 'nese', 'sene', 'nehe', 'sere', 1),
(78, 4, 'めて', 10, 'mete', 'hete', 'kese', 'nese', 1),
(79, 4, 'けれ', 10, 'kere', 'nere', 'kehe', 'nese', 1),
(80, 4, 'れね', 10, 'rene', 'nete', 'rese', ',mere', 1),
(81, 5, 'のこ', 10, 'noko', 'koo', 'oso', 'soho', 1),
(82, 5, 'もお', 10, 'moo', 'soto', 'hoo', 'kono', 1),
(83, 5, 'とこ', 10, 'toko', 'koo', 'noto', 'ono', 1),
(84, 4, 'のと', 10, 'noto', 'kono', 'noo', 'soto', 1),
(85, 4, 'そも', 10, 'somo', 'oso', 'soto', 'komo', 1),
(86, 4, 'のろ', 10, 'noro', 'noto', 'yoso', 'koro', 1),
(87, 4, 'こも', 10, 'komo', 'koro', 'mono', 'koo', 1),
(88, 5, 'おそ', 10, 'oso', 'homo', 'ono', 'yoko', 1),
(89, 5, 'とよ', 10, 'toyo', 'yoro', 'toko', 'moyo', 1),
(90, 5, 'ほも', 10, 'homo', 'somo', 'soto', 'tono', 1),
(91, 5, 'よろ', 10, 'yoro', 'toko', 'koo', 'noto', 1),
(92, 5, 'ほお', 10, 'hoo', 'oso', 'horo', 'soo', 1),
(93, 5, 'おの', 10, 'ono', 'too', 'oyo', 'rono', 1),
(94, 5, 'そと', 10, 'soto', 'oso', 'noto', 'komo', 1),
(95, 5, 'ろを', 10, 'rowo', 'royo', 'too', 'moyo', 1),
(96, 5, 'そを', 10, 'sowo', 'sono', 'yoko', 'hoo', 1),
(97, 5, 'その', 10, 'sono', 'hono', 'yoro', 'soro', 1),
(98, 5, 'もの', 10, 'mono', 'toko', 'kono', 'noko', 1),
(99, 5, 'よそ', 10, 'yoso', 'yoso', 'somo', 'oso', 1),
(100, 5, 'よほ', 10, 'yoho', 'homo', 'hoo', 'koto', 1),
(101, 6, '1', 10, 'いち', 'い', 'いい', 'いさ', 1),
(102, 6, '2', 10, 'に', 'こ', 'し', 'の', 1),
(103, 6, '3', 10, 'さん', 'さ', 'ちい', 'きい', 1),
(104, 6, '4', 10, 'よん', 'とん', 'しい', 'よい', 1),
(105, 6, '5', 10, 'ご', 'ごお', 'こ', 'こう', 1),
(106, 6, '6', 10, 'ろく', 'るく', 'ろ', 'ろう', 1),
(107, 6, '7', 10, 'なな', 'ちち', 'ささ', 'らら', 1),
(108, 6, '8', 10, 'はち', 'はさ', 'ばば', 'ばき', 1),
(109, 6, '9', 10, 'きゅう', 'じゅう', 'じょ', 'ぐう', 1),
(110, 6, '10', 10, 'じゅう', 'しう', 'し', 'きゅう', 1),
(111, 6, '100', 10, 'ひゃく', 'ひく', 'はく', 'りゃく', 1),
(112, 6, '1千', 10, 'せん', 'せえ', 'せへ', 'えん', 1),
(113, 6, '1萬', 10, 'いちまん', 'いまん', 'いさまん', 'いじまん', 1),
(114, 7, '白色', 10, 'しろ', 'りろ', 'しる', 'りる', 1),
(115, 7, '黑色', 10, 'くろ', 'しろ', 'りる', 'くる', 1),
(116, 7, '紅色', 10, 'あか', 'あめ', 'あお', 'あや', 1),
(117, 7, '藍色', 10, 'あお', 'あか', 'あめ', 'あや', 1),
(118, 7, '黃色', 10, 'きいろ', 'きしろ', 'けろろ', 'ふくろ', 1),
(119, 7, '棕色', 10, 'ちゃいろ', 'ちゃろ', 'そいろ', 'そういろ', 1),
(120, 7, '綠色', 10, 'みどり', 'るい', 'みとひ', 'ねどり', 1),
(121, 7, '紫色', 10, 'むらさき', 'みらざき', 'むやさき', 'むらきさ', 1),
(122, 7, '金色', 10, 'きんいろ', 'ぎんいろ', 'さんいろ', 'むらきさ', 1),
(123, 7, '銀色', 10, 'ぎんいろ', 'きんいろ', 'いんいろ', 'いいろ', 1),
(124, 8, '前天', 10, 'おととい', 'おどどい', 'おとどい', 'おと', 1),
(125, 8, '昨天', 10, 'きのう', 'さのう', 'きよう', 'さおう', 1),
(126, 8, '今天', 10, 'きょう', 'きのう', 'さょう', 'しょう', 1),
(127, 8, '明天', 10, 'あした', 'あきだ', 'ありた', 'まいら', 1),
(128, 8, '後天', 10, 'あさって', 'あきって', 'あさて', 'ほうてん', 1),
(129, 8, '星期日', 10, 'にちようび', 'にちようひ', 'いようび', 'いちよび', 1),
(130, 8, '星期一', 10, 'げつようび', 'いちようび', 'いようび', 'けつようび', 1),
(131, 8, '星期二', 10, 'かようび', 'ほようび', 'けようび', 'ファイヤーようび', 1),
(132, 8, '星期三', 10, 'すいようび', 'さんようび', 'ずようひ', 'すいよひ', 1),
(133, 8, '星期四', 10, 'もくようび', 'ももようび', 'もよようび', 'もようび', 1),
(134, 8, '星期五', 10, 'きんようび', 'ぎんようび', 'きいようび', 'きようび', 1),
(135, 8, '星期六', 10, 'どようび', 'ろくようび', 'ととようび', 'とうようび', 1),
(136, 8, '星期日', 10, '日曜日', '月曜日', '土曜日', '水曜日', 1),
(137, 8, '星期一', 10, '月曜日', '火曜日', '日曜日', '木曜日', 1),
(138, 8, '星期二', 10, '火曜日', '水曜日', '土曜日', '木曜日', 1),
(139, 8, '星期三', 10, '水曜日', '火曜日', '土曜日', '金曜日', 1),
(140, 8, '星期四', 10, '木曜日', '火曜日', '土曜日', '水曜日', 1),
(141, 8, '星期五', 10, '金曜日', '火曜日', '土曜日', '月曜日', 1),
(142, 8, '星期六', 10, '土曜日', '火曜日', '月曜日', '水曜日', 1),
(143, 11, '初次見面', 10, 'はじめまして', 'おねがいします', 'さよなら', 'すみません', 1),
(144, 11, '早安', 10, 'おはよう', 'こにちは', 'こんばんは', 'おやすみ', 1),
(145, 11, '午安', 10, 'こにちは', 'おはよう', 'こんばんは', 'おやすみ', 1),
(146, 11, '晚安', 10, 'こんばんは', 'おはよう', 'こにちは', 'おやすみ', 1),
(147, 11, '晚安(睡前)', 10, 'おやすみ', 'おはよう', 'こにちは', 'こんばんは ', 1),
(148, 11, '謝謝', 10, 'ありがとうございます', 'はじめまして', 'おねがいします', 'さよなら', 1),
(149, 11, '不好意思', 10, 'すみません', 'はじめまして', 'おねがいします', 'さよなら', 1),
(150, 11, '拜託', 10, 'おねがいします', 'はじめまして', 'すみません', 'さよなら', 1),
(151, 11, '再見', 10, 'さよなら', 'すみません', 'はじめまして', 'おねがいします', 1);

-- --------------------------------------------------------

--
-- 資料表結構 `report`
--

CREATE TABLE `report` (
  `report_id` int NOT NULL COMMENT 'Not Null(PK,AI)',
  `member_id` int NOT NULL COMMENT 'Not Null(FK)',
  `post_id` int NOT NULL COMMENT 'Not Null(FK)',
  `report_status` char(1) NOT NULL COMMENT 'Not Null(0-未審核,1-通過,2-未通過)',
  `report_reason` char(12) NOT NULL COMMENT 'Not Null(暴力內容,廣告推銷,色情內容,垃圾內容,恐怖主義)'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- 傾印資料表的資料 `report`
--

INSERT INTO `report` (`report_id`, `member_id`, `post_id`, `report_status`, `report_reason`) VALUES
(1, 1, 1, '1', '廣告推銷'),
(2, 2, 2, '0', '暴力內容'),
(3, 3, 3, '2', '恐怖主義');

-- --------------------------------------------------------

--
-- 資料表結構 `topic`
--

CREATE TABLE `topic` (
  `quiz_id` int NOT NULL COMMENT 'Not Null(PK,AI)',
  `lesson_id` int NOT NULL COMMENT 'Not Null(FK)'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- 傾印資料表的資料 `topic`
--

INSERT INTO `topic` (`quiz_id`, `lesson_id`) VALUES
(1, 1),
(2, 2),
(3, 3);

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `ask_log`
--
ALTER TABLE `ask_log`
  ADD PRIMARY KEY (`ask_id`),
  ADD KEY `ask_log_member_fk` (`member_id`),
  ADD KEY `ask_log_backstage_fk` (`ans_backstage_id`);

--
-- 資料表索引 `backstage`
--
ALTER TABLE `backstage`
  ADD PRIMARY KEY (`backstage_id`);

--
-- 資料表索引 `error`
--
ALTER TABLE `error`
  ADD PRIMARY KEY (`error_id`),
  ADD KEY `error_member_fk` (`member_id`);

--
-- 資料表索引 `fav`
--
ALTER TABLE `fav`
  ADD PRIMARY KEY (`post_id`,`member_id`),
  ADD KEY `like_member_fk` (`member_id`);

--
-- 資料表索引 `item`
--
ALTER TABLE `item`
  ADD PRIMARY KEY (`item_id`);

--
-- 資料表索引 `item_record`
--
ALTER TABLE `item_record`
  ADD PRIMARY KEY (`item_order_id`),
  ADD KEY `item_record_member_fk` (`item_id`),
  ADD KEY `item_record_item_fk` (`member_id`);

--
-- 資料表索引 `lesson`
--
ALTER TABLE `lesson`
  ADD PRIMARY KEY (`lesson_id`),
  ADD KEY `lesson_type_fk` (`lesson_type_id`);

--
-- 資料表索引 `lesson_record`
--
ALTER TABLE `lesson_record`
  ADD PRIMARY KEY (`lesson_order_id`),
  ADD KEY `lesson_record_member_fk` (`memeber_id`),
  ADD KEY `lesson_record_lesson_fk` (`lesson_id`);

--
-- 資料表索引 `lesson_type`
--
ALTER TABLE `lesson_type`
  ADD PRIMARY KEY (`type_id`);

--
-- 資料表索引 `member`
--
ALTER TABLE `member`
  ADD PRIMARY KEY (`member_id`),
  ADD KEY `member_member_level_fk` (`level`);

--
-- 資料表索引 `member_level`
--
ALTER TABLE `member_level`
  ADD PRIMARY KEY (`level`);

--
-- 資料表索引 `message`
--
ALTER TABLE `message`
  ADD PRIMARY KEY (`message_id`),
  ADD KEY `message_member_fk` (`member_id`),
  ADD KEY `message_post_fk` (`post_id`);

--
-- 資料表索引 `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`post_id`),
  ADD KEY `post_member_fk` (`member_id`);

--
-- 資料表索引 `quiz_record`
--
ALTER TABLE `quiz_record`
  ADD PRIMARY KEY (`quiz_record_id`),
  ADD KEY `quiz_record_topic_fk` (`quiz_id`),
  ADD KEY `quiz_record_member_fk` (`member_id`);

--
-- 資料表索引 `q_data`
--
ALTER TABLE `q_data`
  ADD PRIMARY KEY (`option_id`),
  ADD KEY `option_lesson_fk` (`lesson_id`);

--
-- 資料表索引 `report`
--
ALTER TABLE `report`
  ADD PRIMARY KEY (`report_id`),
  ADD KEY `report_member_fk` (`member_id`),
  ADD KEY `report_post_fk` (`post_id`);

--
-- 資料表索引 `topic`
--
ALTER TABLE `topic`
  ADD PRIMARY KEY (`quiz_id`),
  ADD KEY `topic_lesson_fk` (`lesson_id`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `ask_log`
--
ALTER TABLE `ask_log`
  MODIFY `ask_id` int NOT NULL AUTO_INCREMENT COMMENT 'Not Null(PK,AI)', AUTO_INCREMENT=5;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `backstage`
--
ALTER TABLE `backstage`
  MODIFY `backstage_id` int NOT NULL AUTO_INCREMENT COMMENT 'Not Null(PK,AI)', AUTO_INCREMENT=4;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `error`
--
ALTER TABLE `error`
  MODIFY `error_id` int NOT NULL AUTO_INCREMENT COMMENT 'Not Null(PK,AI)', AUTO_INCREMENT=4;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `item`
--
ALTER TABLE `item`
  MODIFY `item_id` int NOT NULL AUTO_INCREMENT COMMENT 'Not Null(PK,AI)', AUTO_INCREMENT=4;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `item_record`
--
ALTER TABLE `item_record`
  MODIFY `item_order_id` int NOT NULL AUTO_INCREMENT COMMENT 'Not Null(PK,AI)', AUTO_INCREMENT=4;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `lesson`
--
ALTER TABLE `lesson`
  MODIFY `lesson_id` int NOT NULL AUTO_INCREMENT COMMENT 'Not Null(PK,AI)', AUTO_INCREMENT=12;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `lesson_record`
--
ALTER TABLE `lesson_record`
  MODIFY `lesson_order_id` int NOT NULL AUTO_INCREMENT COMMENT 'Not Null(PK, AI)', AUTO_INCREMENT=4;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `lesson_type`
--
ALTER TABLE `lesson_type`
  MODIFY `type_id` int NOT NULL AUTO_INCREMENT COMMENT 'Not Null(PK,AI)', AUTO_INCREMENT=4;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `member`
--
ALTER TABLE `member`
  MODIFY `member_id` int NOT NULL AUTO_INCREMENT COMMENT 'Not Null(PK,AI)', AUTO_INCREMENT=7;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `member_level`
--
ALTER TABLE `member_level`
  MODIFY `level` int NOT NULL AUTO_INCREMENT COMMENT 'Not Null(PK,AI)', AUTO_INCREMENT=4;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `message`
--
ALTER TABLE `message`
  MODIFY `message_id` int NOT NULL AUTO_INCREMENT COMMENT 'Not Null(PK,AI)', AUTO_INCREMENT=4;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `post`
--
ALTER TABLE `post`
  MODIFY `post_id` int NOT NULL AUTO_INCREMENT COMMENT 'Not Null(PK,AI)', AUTO_INCREMENT=4;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `quiz_record`
--
ALTER TABLE `quiz_record`
  MODIFY `quiz_record_id` int NOT NULL AUTO_INCREMENT COMMENT 'Not Null(PK,AI)', AUTO_INCREMENT=4;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `q_data`
--
ALTER TABLE `q_data`
  MODIFY `option_id` int NOT NULL AUTO_INCREMENT COMMENT 'Not Null(PK,AI)', AUTO_INCREMENT=152;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `report`
--
ALTER TABLE `report`
  MODIFY `report_id` int NOT NULL AUTO_INCREMENT COMMENT 'Not Null(PK,AI)', AUTO_INCREMENT=4;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `topic`
--
ALTER TABLE `topic`
  MODIFY `quiz_id` int NOT NULL AUTO_INCREMENT COMMENT 'Not Null(PK,AI)', AUTO_INCREMENT=4;

--
-- 已傾印資料表的限制式
--

--
-- 資料表的限制式 `ask_log`
--
ALTER TABLE `ask_log`
  ADD CONSTRAINT `ask_log_backstage_fk` FOREIGN KEY (`ans_backstage_id`) REFERENCES `backstage` (`backstage_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ask_log_member_fk` FOREIGN KEY (`member_id`) REFERENCES `member` (`member_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- 資料表的限制式 `error`
--
ALTER TABLE `error`
  ADD CONSTRAINT `error_member_fk` FOREIGN KEY (`member_id`) REFERENCES `member` (`member_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- 資料表的限制式 `fav`
--
ALTER TABLE `fav`
  ADD CONSTRAINT `like_member_fk` FOREIGN KEY (`member_id`) REFERENCES `member` (`member_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `like_post_fk` FOREIGN KEY (`post_id`) REFERENCES `post` (`post_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- 資料表的限制式 `item_record`
--
ALTER TABLE `item_record`
  ADD CONSTRAINT `item_record_item_fk` FOREIGN KEY (`member_id`) REFERENCES `member` (`member_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `item_record_member_fk` FOREIGN KEY (`item_id`) REFERENCES `item` (`item_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- 資料表的限制式 `lesson`
--
ALTER TABLE `lesson`
  ADD CONSTRAINT `lesson_type_fk` FOREIGN KEY (`lesson_type_id`) REFERENCES `lesson_type` (`type_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- 資料表的限制式 `lesson_record`
--
ALTER TABLE `lesson_record`
  ADD CONSTRAINT `lesson_record_lesson_fk` FOREIGN KEY (`lesson_id`) REFERENCES `lesson` (`lesson_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `lesson_record_member_fk` FOREIGN KEY (`memeber_id`) REFERENCES `member` (`member_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- 資料表的限制式 `member`
--
ALTER TABLE `member`
  ADD CONSTRAINT `member_member_level_fk` FOREIGN KEY (`level`) REFERENCES `member_level` (`level`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- 資料表的限制式 `message`
--
ALTER TABLE `message`
  ADD CONSTRAINT `message_member_fk` FOREIGN KEY (`member_id`) REFERENCES `member` (`member_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `message_post_fk` FOREIGN KEY (`post_id`) REFERENCES `post` (`post_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- 資料表的限制式 `post`
--
ALTER TABLE `post`
  ADD CONSTRAINT `post_member_fk` FOREIGN KEY (`member_id`) REFERENCES `member` (`member_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- 資料表的限制式 `quiz_record`
--
ALTER TABLE `quiz_record`
  ADD CONSTRAINT `quiz_record_member_fk` FOREIGN KEY (`member_id`) REFERENCES `member` (`member_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `quiz_record_topic_fk` FOREIGN KEY (`quiz_id`) REFERENCES `topic` (`quiz_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- 資料表的限制式 `q_data`
--
ALTER TABLE `q_data`
  ADD CONSTRAINT `option_lesson_fk` FOREIGN KEY (`lesson_id`) REFERENCES `lesson` (`lesson_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- 資料表的限制式 `report`
--
ALTER TABLE `report`
  ADD CONSTRAINT `report_member_fk` FOREIGN KEY (`member_id`) REFERENCES `member` (`member_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `report_post_fk` FOREIGN KEY (`post_id`) REFERENCES `post` (`post_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- 資料表的限制式 `topic`
--
ALTER TABLE `topic`
  ADD CONSTRAINT `topic_lesson_fk` FOREIGN KEY (`lesson_id`) REFERENCES `lesson` (`lesson_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
