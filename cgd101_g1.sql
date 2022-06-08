-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- 主機： localhost
-- 產生時間： 2022-06-08 17:46:43
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
(1, 'N5單字', './images/payment_map.png', 300, 'N5單字大全，統整N5 JLPT高頻率出現的單字，讓考生能夠輕鬆掌握精華重點。', 1, 1),
(2, 'N4會話', './images/payment_map.png', 600, 'N4會話大全，統整N4 JLPT高頻率出現的聽力會話，讓考生能夠輕鬆掌握精華重點。', 2, 1),
(3, 'N3會話', './images/payment_map.png', 700, 'N3會話大全，統整N3 JLPT高頻率出現的聽力會話，讓考生能夠輕鬆掌握精華重點。', 3, 2);

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
  `role` varchar(300) NOT NULL COMMENT 'Not Null'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- 傾印資料表的資料 `member`
--

INSERT INTO `member` (`member_id`, `member_name`, `account`, `password`, `member_status`, `coin`, `level`, `role`) VALUES
(1, 'Kenny', 'abc@gmail.com', 'aaaAAA111', '1', 0, 1, ''),
(2, 'Jerry', 'def@gmail.com', 'bbbBBB111', '0', 100, 1, ''),
(3, 'Bill', 'efg@gmail.com', 'cccCCC111', '1', 0, 1, '');

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
(1, 1, 'あか', 0, 'aka', 'ame\r\n\r\n\r\n', 'ao', 'nan', 1),
(2, 2, 'あお', 1, 'ao', 'aka', 'nan', 'ame', 1),
(3, 3, 'あめ', 2, 'ame', 'ao', 'aka', 'nan', 2);

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
  MODIFY `lesson_id` int NOT NULL AUTO_INCREMENT COMMENT 'Not Null(PK,AI)', AUTO_INCREMENT=4;

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
  MODIFY `option_id` int NOT NULL AUTO_INCREMENT COMMENT 'Not Null(PK,AI)', AUTO_INCREMENT=4;

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
