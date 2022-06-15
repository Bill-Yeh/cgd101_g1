-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- 主機： localhost
-- 產生時間： 2022-06-15 14:00:06
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
-- 資料庫： `tibamefe_cgd101g1`
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
-- 資料表結構 `consult`
--

CREATE TABLE `consult` (
  `consult_id` int NOT NULL COMMENT 'PK',
  `member_id` int NOT NULL COMMENT 'FK',
  `backstage_id` int NOT NULL COMMENT 'FK',
  `message` varchar(600) NOT NULL,
  `send_from` int NOT NULL COMMENT '1-teacher;2-user'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- 傾印資料表的資料 `consult`
--

INSERT INTO `consult` (`consult_id`, `member_id`, `backstage_id`, `message`, `send_from`) VALUES
(1, 1, 3, '', 1);

-- --------------------------------------------------------

--
-- 資料表結構 `error`
--

CREATE TABLE `error` (
  `error_id` int NOT NULL COMMENT 'Not Null(PK,AI)',
  `member_id` int NOT NULL COMMENT 'Not Null(FK)',
  `error_title` varchar(200) DEFAULT NULL,
  `error_txt` varchar(800) NOT NULL COMMENT 'Not Null',
  `error_file` varchar(300) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `error_status` char(1) NOT NULL COMMENT 'Not Null(0-未審核,1-通過,2-未通過)',
  `error_datetime` datetime(6) NOT NULL COMMENT 'Not Null'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- 傾印資料表的資料 `error`
--

INSERT INTO `error` (`error_id`, `member_id`, `error_title`, `error_txt`, `error_file`, `error_status`, `error_datetime`) VALUES
(1, 1, NULL, '購買n5單字課程後，無法解鎖地圖', './images/report/error1.png', '0', '2022-06-04 16:47:02.000000'),
(2, 2, NULL, '購買裝備後，無法正常穿戴', './images/report/error2.png', '2', '2022-06-03 16:47:02.000000'),
(3, 3, NULL, '留言區無法按讚', './images/report/error3.png', '1', '2022-06-02 16:48:36.000000');

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
(1, '頭巾', './images/char_hat_1.png', 300, '很帥氣的頭巾', 1),
(2, '巫師帽', './images/char_hat_2.png', 300, '戴上去彷彿進入魔法世界', 1),
(3, '淑女帽', './images/char_hat_3.png', 300, '氣質滿分的編織淑女帽', 1),
(4, '狐狸面具', './images/char_hat_4.png', 400, '為你增添神祕的色彩', 1),
(5, '玫瑰別針', './images/char_hat_5.png', 400, '別上玫瑰，成為美麗的化身吧', 1),
(6, '草帽', './images/char_hat_6.png', 400, '戴上草帽、你就是日語世界的冒險家', 1),
(7, '貝雷帽', './images/char_hat_7.png', 400, '時髦貝雷', 1),
(8, '貓耳', './images/char_hat_8.png', 600, 'Party!Party!', 1),
(9, '紅圍巾', './images/char_dress_1.png', 100, '復古手織、溫暖的紅圍巾', 1),
(10, '西裝', './images/char_dress_2.png', 150, '褐色西裝，正式但不失溫柔', 1),
(11, '和服', './images/char_dress_3.png', 150, '日本世界必備的和服，人人都需要有一件', 1),
(12, '水手服', './images/char_dress_4.png', 150, '青春洋溢的水手服', 1),
(13, '武士服', './images/char_dress_5.png', 200, '帶著武士精神學習日文吧！！', 1),
(14, '日料廚師服', './images/char_dress_6.png', 200, '變身成最有精神的日式料理店老闆吧', 1),
(15, '大披巾', './images/char_dress_7.png', 200, '禦寒用大披巾，包緊整個身體', 1),
(16, '吊帶服', './images/char_dress_8.png', 250, '卡哇依必備的吊帶', 1),
(17, '白衣', './images/char_dress_9.png', 250, '看起來乾淨清爽的白T', 1),
(18, '背心', './images/char_dress_10.png', 250, '穿上明亮的背心、讓你充滿活力', 1),
(19, '武士刀', './images/char_tool_1.png', 500, '名匠打造的百萬名刀', 1),
(20, '木棍', './images/char_tool_2.png', 500, '成為語實巨進最強的巫師吧！！', 1),
(21, '魔杖', './images/char_tool_3.png', 300, '覺得手空空的嗎？來根木棒吧！', 1),
(22, '劍', './images/char_tool_4.png', 500, '西式的劍也非常帥氣呢', 1);

-- --------------------------------------------------------

--
-- 資料表結構 `item_record`
--

CREATE TABLE `item_record` (
  `item_order_id` int NOT NULL COMMENT 'Not Null(PK,AI)',
  `member_id` int NOT NULL COMMENT 'Not Null(FK)',
  `item_id` int NOT NULL COMMENT 'Not Null(FK)',
  `payment_time` datetime(6) NOT NULL COMMENT 'Not Null'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- 傾印資料表的資料 `item_record`
--

INSERT INTO `item_record` (`item_order_id`, `member_id`, `item_id`, `payment_time`) VALUES
(1, 1, 1, '2022-05-01 14:04:07.000000'),
(2, 2, 2, '2022-05-04 14:04:07.000000'),
(3, 3, 3, '2022-05-06 07:23:31.000000'),
(4, 1, 2, '2022-05-07 19:03:07.000000'),
(5, 1, 3, '2022-05-08 19:03:07.000000'),
(6, 1, 4, '2022-05-09 19:03:07.000000'),
(7, 1, 5, '2022-05-10 19:03:07.000000'),
(8, 1, 6, '2022-05-11 19:03:07.000000'),
(9, 1, 7, '2022-05-12 19:03:07.000000'),
(10, 1, 8, '2022-05-13 19:03:07.000000'),
(11, 1, 9, '2022-05-14 19:03:07.000000'),
(12, 1, 10, '2022-05-15 19:03:07.000000'),
(13, 1, 11, '2022-05-16 19:03:07.000000'),
(14, 1, 12, '2022-05-17 19:03:07.000000'),
(15, 1, 13, '2022-05-18 19:03:07.000000'),
(16, 1, 14, '2022-05-19 19:03:07.000000'),
(17, 1, 15, '2022-05-20 19:03:07.000000'),
(18, 1, 16, '2022-05-21 19:03:07.000000'),
(19, 1, 17, '2022-05-22 19:03:07.000000'),
(20, 1, 18, '2022-05-23 19:03:07.000000'),
(21, 1, 19, '2022-05-24 19:03:07.000000'),
(22, 1, 20, '2022-05-25 19:03:07.000000'),
(23, 1, 21, '2022-05-26 19:03:07.000000'),
(24, 1, 22, '2022-05-27 19:03:07.000000');

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
(11, '日常會話', './images/payment_map.png', 0, '', 3, 1),
(12, 'N4單字', './images/payement_map.png', 300, 'N4單字大全，系統化統整N4單字，依日檢出題基準進行模擬', 2, 1),
(13, 'N4會話', './images/payement_map.png', 300, 'N4會話大全，集結日檢N4高頻率出現的會話，讓你輕鬆自學！', 3, 1),
(14, 'N3單字', './images/payement_map.png', 300, 'N3單字大全，系統化統整N3單字，依日檢出題基準進行模擬', 2, 1),
(15, 'N3會話', './images/payement_map.png', 300, 'N3會話大全，集結日檢N3高頻率出現的會話，讓你輕鬆自學！', 3, 1),
(16, 'N2單字', './images/payement_map.png', 300, 'N2單字大全，系統化統整N2單字，依日檢出題基準進行模擬', 2, 1),
(17, 'N2會話', './images/payement_map.png', 300, 'N2會話大全，集結日檢N2高頻率出現的會話，讓你輕鬆自學！', 3, 1),
(18, 'N1單字', './images/payement_map.png', 300, 'N1單字大全，系統化統整N1單字，依日檢出題基準進行模擬', 2, 1),
(19, 'N1會話', './images/payement_map.png', 300, 'N1會話大全，集結日檢N1高頻率出現的會話，讓你輕鬆自學！', 3, 1),
(20, '單字統整', './images/payement_map.png', 300, 'N5~N1單字統整精華濃縮日檢N5~N1所有高分必備單字，絕對超滿足。', 2, 1),
(21, '會話統整', './images/payement_map.png', 300, 'N5~N1會話統整精華濃縮日檢N5~N1所有高分必備會話，絕對超滿足', 3, 1);

-- --------------------------------------------------------

--
-- 資料表結構 `lesson_record`
--

CREATE TABLE `lesson_record` (
  `lesson_order_id` int NOT NULL COMMENT 'Not Null(PK, AI)',
  `member_id` int NOT NULL COMMENT 'Not Null(FK)',
  `lesson_id` int NOT NULL COMMENT 'Not Null(FK)',
  `payment_time` datetime NOT NULL COMMENT 'Not Null'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- 傾印資料表的資料 `lesson_record`
--

INSERT INTO `lesson_record` (`lesson_order_id`, `member_id`, `lesson_id`, `payment_time`) VALUES
(1, 1, 1, '2022-05-01 15:18:43'),
(2, 2, 2, '2022-05-02 07:18:44'),
(3, 3, 3, '2022-05-03 13:18:59'),
(4, 1, 2, '2022-05-27 19:15:06'),
(5, 1, 3, '2022-05-27 19:15:06'),
(6, 1, 4, '2022-05-27 19:15:06'),
(7, 1, 5, '2022-05-27 19:15:06'),
(8, 1, 6, '2022-05-27 19:15:06'),
(9, 1, 7, '2022-05-27 19:15:06'),
(10, 1, 8, '2022-05-27 19:15:06'),
(11, 1, 9, '2022-05-27 19:15:06'),
(12, 1, 10, '2022-05-27 19:15:06'),
(13, 1, 11, '2022-05-27 19:15:06');

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
(1, 'Kenny', 'abc@gmail.com', 'aaaAAA111', '1', 1000, 4, './images/char_00_0.png'),
(2, 'Jerry', 'def@gmail.com', 'bbbBBB111', '0', 100, 1, './images/char_00_0.png'),
(3, 'Bill', 'efg@gmail.com', 'cccCCC111', '1', 0, 1, './images/char_00_0.png'),
(7, 'Triangle', 'tri@gmail.com', 'TRItri123', '1', 666, 1, './images/char_00_0.png');

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
(3, '探險者'),
(4, '大探險者'),
(5, '超探險者'),
(6, '究極探險者'),
(7, '無敵探險者'),
(8, '神探險者'),
(9, '極醒探險者'),
(10, '超銀河探險者');

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
(2, '2022-06-03 16:33:54.000000', 2, 1, 'QQ我沒報名到JPLT考試'),
(3, '2022-06-02 16:33:54.000000', 3, 1, '+1 我也想要有個伴一起讀書'),
(4, '2022-06-10 19:22:01.000000', 2, 4, '背就對了!加油'),
(5, '2022-06-10 19:22:01.000000', 1, 4, '背就對了!加油');

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
  `post_type` int NOT NULL COMMENT '1-五十音，2-單字，3-會話，4-升級測驗',
  `post_status` int NOT NULL COMMENT 'Not Null(1:顯示,2:隱藏)'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- 傾印資料表的資料 `post`
--

INSERT INTO `post` (`post_id`, `member_id`, `post_date`, `post_txt`, `post_title`, `post_type`, `post_status`) VALUES
(1, 1, '2022-05-05 16:18:08.000000', '有誰有報名今年12月的JLPT N4考試? 有沒有興趣來讀書會一起練習討論呢?', '今年12月的JLPT N4考試', 4, 1),
(2, 2, '2022-05-10 16:18:08.000000', '有誰可以推薦一下甚麼日劇適合初學者練習聽力呢?', '適合初學者練習聽力的日劇', 4, 1),
(3, 3, '2022-05-20 16:20:11.000000', '升級測驗會話第3題為甚麼答案不是a?', '升級測驗會話第3題', 4, 1),
(4, 3, '2022-05-22 18:46:20.000000', '你們知道50音要怎麼背嗎?', '日文50音要怎麼背?', 1, 1),
(5, 2, '2022-05-22 20:46:40.000000', '你們知道單字要怎麼背嗎？', '單字好難背啊啊啊啊！', 2, 1),
(6, 3, '2022-05-28 12:10:30.000000', '徵求5名夥伴一起學習日文會話，有誰想+1呢？', '日文會話讀書會，有興趣參加嗎？', 3, 1),
(7, 2, '2022-05-30 14:20:10.000000', '最近想練習日語聽力，但不知道該選甚麼影集好呢？', '有人有推薦的日劇嗎？想練習日文聽力', 4, 1),
(8, 2, '2022-05-30 20:30:50.000000', 'N4測驗的第3題想了好久還是不知道答案，有誰可以解答一下呢？', '請問N4測驗的第3題為甚麼答案是B啊？', 4, 1);

-- --------------------------------------------------------

--
-- 資料表結構 `quiz_record`
--

CREATE TABLE `quiz_record` (
  `quiz_record_id` int NOT NULL COMMENT 'Not Null(PK,AI)',
  `lesson_id` int NOT NULL COMMENT 'Not Null(FK)',
  `member_id` int NOT NULL COMMENT 'Not Null(FK)',
  `quiz_score` int NOT NULL COMMENT 'Not Null',
  `quiz_pass` int DEFAULT NULL COMMENT '0-未通過，1-通過',
  `quiz_time` datetime(6) NOT NULL COMMENT 'Not Null'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- 傾印資料表的資料 `quiz_record`
--

INSERT INTO `quiz_record` (`quiz_record_id`, `lesson_id`, `member_id`, `quiz_score`, `quiz_pass`, `quiz_time`) VALUES
(1, 1, 1, 90, 1, '2022-06-04 15:22:38.000000'),
(2, 2, 2, 80, 1, '2022-06-01 15:22:38.000000'),
(3, 3, 3, 50, 0, '2022-06-01 03:23:01.000000'),
(4, 3, 3, 50, 0, '2022-06-01 03:23:01.000000');

-- --------------------------------------------------------

--
-- 資料表結構 `q_data`
--

CREATE TABLE `q_data` (
  `option_id` int NOT NULL COMMENT 'Not Null(PK,AI)',
  `lesson_id` int NOT NULL COMMENT 'Not Null(FK)',
  `txt` varchar(240) NOT NULL COMMENT 'Not Null',
  `ans` varchar(240) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT 'Not Null',
  `option_content1` varchar(240) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT 'Not Null',
  `option_content2` varchar(240) NOT NULL COMMENT 'Not Null',
  `option_content3` varchar(240) NOT NULL COMMENT 'Not Null',
  `option_point` int NOT NULL COMMENT 'Not Null',
  `option_status` int NOT NULL COMMENT 'Not Null(1:上架,2:下架)'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- 傾印資料表的資料 `q_data`
--

INSERT INTO `q_data` (`option_id`, `lesson_id`, `txt`, `ans`, `option_content1`, `option_content2`, `option_content3`, `option_point`, `option_status`) VALUES
(1, 1, 'ああ', 'aa', 'aka', 'sata', 'hana', 10, 1),
(2, 1, 'なか', 'naka', 'kaya', 'tana', 'maka', 10, 1),
(3, 1, 'たま', 'tama', 'kana', 'nata', 'sama', 10, 1),
(4, 1, 'はさ', 'hasa', 'rasa', 'naka', 'wana', 10, 1),
(5, 1, 'らや', 'raya', 'an', 'sara', 'tana', 10, 1),
(6, 1, 'はま', 'hama', 'nata', 'awa', 'haha', 10, 1),
(7, 1, 'たん', 'tan', 'han', 'nan', 'an', 10, 1),
(8, 1, 'なあ', 'naa', 'nia', 'taa', 'kaya', 10, 1),
(9, 1, 'はは', 'haha', 'han', 'hasa', 'haya', 10, 1),
(10, 1, 'わあ', 'waa', 'nama', 'aka', 'kaha', 10, 1),
(11, 1, 'さわ', 'sawa', 'sata', 'nama', 'tara', 10, 1),
(12, 1, 'たな', 'tana', 'kaha', 'naka', 'aka', 10, 1),
(13, 1, 'やら', 'yara', 'waka', 'raya', 'rata', 10, 1),
(14, 1, 'かま', 'kama', 'kaha', 'rawa', 'aka', 10, 1),
(15, 1, 'まは', 'yaha', 'maha', 'kana', 'haha', 10, 1),
(16, 1, 'さら', 'sara', 'tana', 'rasa', 'hasa', 10, 1),
(17, 1, 'やん', 'yan', 'han', 'ran', 'wan', 10, 1),
(18, 1, 'さや', 'saya', 'raya', 'nata', 'yan', 10, 1),
(19, 1, 'らわ', 'rawa', 'an', 'sara', 'yawa', 10, 1),
(20, 1, 'たや', 'taya', 'waka', 'tana', 'kaha', 10, 1),
(21, 2, 'いき', 'iki', 'ishi', 'kini', 'chiki', 10, 1),
(22, 2, 'にし', 'nishi', 'hini', 'chishi', 'kichi', 10, 1),
(23, 2, 'ちみ', 'chimi', 'richi', 'shimi', 'shichi', 10, 1),
(24, 2, 'きに', 'kini', 'chini', 'shini', 'kiri', 10, 1),
(25, 2, 'いし', 'ishi', 'ihi', 'iri', 'ichi', 10, 1),
(26, 2, 'ひり', 'hiri', 'niki', 'michi', 'hishi', 10, 1),
(27, 2, 'いみ', 'imi', 'shimi', 'chiki', 'iri', 10, 1),
(28, 2, 'きち', 'kichi', 'chiki', 'kini', 'richi', 10, 1),
(29, 2, 'ひみ', 'himi', 'shini', 'iki', 'kini', 10, 1),
(30, 2, 'りき', 'riki', 'shichi', 'richi', 'chimi', 10, 1),
(31, 2, 'にひ', 'nihi', 'chii', 'nishi', 'nichi', 10, 1),
(32, 2, 'しち', 'shichi', 'ichi', 'kini', 'kichi', 10, 1),
(33, 2, 'にき', 'niki', 'iki', 'nichi', 'kini', 10, 1),
(34, 2, 'りし', 'rishi', 'shiki', 'iri', 'shichi', 10, 1),
(35, 2, 'しひ', 'shihi', 'chimi', 'rimi', 'hini', 10, 1),
(36, 2, 'りち', 'richi', 'shichi', 'iki', 'himi', 10, 1),
(37, 2, 'みひ', 'mihi', 'nihi', 'himi', 'nishi', 10, 1),
(38, 2, 'ちき', 'chiki', 'hii', 'shichi', 'kimi', 10, 1),
(39, 2, 'いい', 'ii', 'yaya', 'mimi', 'nini', 10, 1),
(40, 2, 'みい', 'mii', 'nii', 'kii', 'rii', 10, 1),
(41, 3, 'うぬ', 'unu', 'uru', 'tsusu', 'kunu', 10, 1),
(42, 3, 'くす', 'kusu', 'sunu', 'kutsu', 'nuu', 10, 1),
(43, 3, 'つう', 'tsuu', 'suu', 'nutsu', 'kusu', 10, 1),
(44, 3, 'ぬむ', 'numu', 'kumu', 'tsunu', 'suku', 10, 1),
(45, 3, 'する', 'suru', 'kusu', 'tsusu', 'suru', 10, 1),
(46, 3, 'ゆす', 'yusu', 'numu', 'yuu', 'rufu', 10, 1),
(47, 3, 'ふく', 'fuku', 'tsuru', 'uku', 'nufu', 10, 1),
(48, 3, 'すむ', 'sumu', 'kunu', 'tsusu', 'sunu', 10, 1),
(49, 3, 'くる', 'kuru', 'tsunu', 'nufu', 'kusu', 10, 1),
(50, 3, 'つぬ', 'tusnu', 'uyu', 'unu', 'ruyu', 10, 1),
(51, 3, 'るう', 'ruu', 'kunu', 'tsuu', 'mutsu', 10, 1),
(52, 3, 'むふ', 'mufu', 'nuu', 'tsuku', 'umu', 10, 1),
(53, 3, 'うゆ', 'uyu', 'tsumu', 'nutsu', 'tsuku', 10, 1),
(54, 3, 'くつ', 'kutsu', 'rufu', 'nuku', 'kunu', 10, 1),
(55, 3, 'ぬふ', 'nufu', 'nutsu', 'suku', 'sunu', 10, 1),
(56, 3, 'つる', 'tsuru', 'numu', 'tsuru', 'suku', 10, 1),
(57, 3, 'ゆう', 'yuu', 'nutsu', 'tsuu', 'sumu', 10, 1),
(58, 3, 'むつ', 'mutsu', 'utsu', 'usu', 'kunu', 10, 1),
(59, 3, 'るふ', 'rufu', 'yusu', 'kusu', 'mutsu', 10, 1),
(60, 3, 'うむ', 'umu', 'suku', 'nutsu', 'unu', 10, 1),
(61, 4, 'えて', 'ete', 'neke', 'see', 'kese', 10, 1),
(62, 4, 'けへ', 'kehe', 'teke', 'sene', 'hete', 10, 1),
(63, 4, 'ねせ', 'nese', 'eke', 'mehe', 'kene', 10, 1),
(64, 4, 'てえ', 'tee', 'sete', 'nese', 'kete', 10, 1),
(65, 4, 'めね', 'mene', 'ete', 'rese', 'nese', 10, 1),
(66, 4, 'れせ', 'rese', 'eke', 'rene', 'kere', 10, 1),
(67, 4, 'ねけ', 'neke', 'seme', 'sene', 'hete', 10, 1),
(68, 4, 'へえ', 'hee', 'teke', 'sene', 'kehe', 10, 1),
(69, 4, 'てめ', 'teme', 'kese', 'mere', 'tene', 10, 1),
(70, 4, 'せめ', 'seme', 'nere', 'sene', 'sene', 10, 1),
(71, 4, 'へて', 'hete', 'nese', 'ehe', 'kese', 10, 1),
(72, 4, 'てけ', 'teke', 'neke', 'tehe', 'eke', 10, 1),
(73, 4, 'せえ', 'see', 'kese', 'ehe', 'sene', 10, 1),
(74, 4, 'ねれ', 'nere', 'meke', 'ete', 'mene', 10, 1),
(75, 4, 'せて', 'sete', 'teke', 'sene', 'eke', 10, 1),
(76, 4, 'えけ', 'eke', 'sete', 'ete', 'neke', 10, 1),
(77, 4, 'ねせ', 'nese', 'sene', 'nehe', 'sere', 10, 1),
(78, 4, 'めて', 'mete', 'hete', 'kese', 'nese', 10, 1),
(79, 4, 'けれ', 'kere', 'nere', 'kehe', 'nese', 10, 1),
(80, 4, 'れね', 'rene', 'nete', 'rese', ',mere', 10, 1),
(81, 5, 'のこ', 'noko', 'koo', 'oso', 'soho', 10, 1),
(82, 5, 'もお', 'moo', 'soto', 'hoo', 'kono', 10, 1),
(83, 5, 'とこ', 'toko', 'koo', 'noto', 'ono', 10, 1),
(84, 4, 'のと', 'noto', 'kono', 'noo', 'soto', 10, 1),
(85, 4, 'そも', 'somo', 'oso', 'soto', 'komo', 10, 1),
(86, 4, 'のろ', 'noro', 'noto', 'yoso', 'koro', 10, 1),
(87, 4, 'こも', 'komo', 'koro', 'mono', 'koo', 10, 1),
(88, 5, 'おそ', 'oso', 'homo', 'ono', 'yoko', 10, 1),
(89, 5, 'とよ', 'toyo', 'yoro', 'toko', 'moyo', 10, 1),
(90, 5, 'ほも', 'homo', 'somo', 'soto', 'tono', 10, 1),
(91, 5, 'よろ', 'yoro', 'toko', 'koo', 'noto', 10, 1),
(92, 5, 'ほお', 'hoo', 'oso', 'horo', 'soo', 10, 1),
(93, 5, 'おの', 'ono', 'too', 'oyo', 'rono', 10, 1),
(94, 5, 'そと', 'soto', 'oso', 'noto', 'komo', 10, 1),
(95, 5, 'ろを', 'rowo', 'royo', 'too', 'moyo', 10, 1),
(96, 5, 'そを', 'sowo', 'sono', 'yoko', 'hoo', 10, 1),
(97, 5, 'その', 'sono', 'hono', 'yoro', 'soro', 10, 1),
(98, 5, 'もの', 'mono', 'toko', 'kono', 'noko', 10, 1),
(99, 5, 'よそ', 'yoso', 'yoso', 'somo', 'oso', 10, 1),
(100, 5, 'よほ', 'yoho', 'homo', 'hoo', 'koto', 10, 1),
(101, 6, '1', 'いち', 'い', 'いい', 'いさ', 10, 1),
(102, 6, '2', 'に', 'こ', 'し', 'の', 10, 1),
(103, 6, '3', 'さん', 'さ', 'ちい', 'きい', 10, 1),
(104, 6, '4', 'よん', 'とん', 'しい', 'よい', 10, 1),
(105, 6, '5', 'ご', 'ごお', 'こ', 'こう', 10, 1),
(106, 6, '6', 'ろく', 'るく', 'ろ', 'ろう', 10, 1),
(107, 6, '7', 'なな', 'ちち', 'ささ', 'らら', 10, 1),
(108, 6, '8', 'はち', 'はさ', 'ばば', 'ばき', 10, 1),
(109, 6, '9', 'きゅう', 'じゅう', 'じょ', 'ぐう', 10, 1),
(110, 6, '10', 'じゅう', 'しう', 'し', 'きゅう', 10, 1),
(111, 6, '100', 'ひゃく', 'ひく', 'はく', 'りゃく', 10, 1),
(112, 6, '1千', 'せん', 'せえ', 'せへ', 'えん', 10, 1),
(113, 6, '1萬', 'いちまん', 'いまん', 'いさまん', 'いじまん', 10, 1),
(114, 7, '白色', 'しろ', 'りろ', 'しる', 'りる', 10, 1),
(115, 7, '黑色', 'くろ', 'しろ', 'りる', 'くる', 10, 1),
(116, 7, '紅色', 'あか', 'あめ', 'あお', 'あや', 10, 1),
(117, 7, '藍色', 'あお', 'あか', 'あめ', 'あや', 10, 1),
(118, 7, '黃色', 'きいろ', 'きしろ', 'けろろ', 'ふくろ', 10, 1),
(119, 7, '棕色', 'ちゃいろ', 'ちゃろ', 'そいろ', 'そういろ', 10, 1),
(120, 7, '綠色', 'みどり', 'るい', 'みとひ', 'ねどり', 10, 1),
(121, 7, '紫色', 'むらさき', 'みらざき', 'むやさき', 'むらきさ', 10, 1),
(122, 7, '金色', 'きんいろ', 'ぎんいろ', 'さんいろ', 'むらきさ', 10, 1),
(123, 7, '銀色', 'ぎんいろ', 'きんいろ', 'いんいろ', 'いいろ', 10, 1),
(124, 8, '前天', 'おととい', 'おどどい', 'おとどい', 'おと', 10, 1),
(125, 8, '昨天', 'きのう', 'さのう', 'きよう', 'さおう', 10, 1),
(126, 8, '今天', 'きょう', 'きのう', 'さょう', 'しょう', 10, 1),
(127, 8, '明天', 'あした', 'あきだ', 'ありた', 'まいら', 10, 1),
(128, 8, '後天', 'あさって', 'あきって', 'あさて', 'ほうてん', 10, 1),
(129, 8, '星期日', 'にちようび', 'にちようひ', 'いようび', 'いちよび', 10, 1),
(130, 8, '星期一', 'げつようび', 'いちようび', 'いようび', 'けつようび', 10, 1),
(131, 8, '星期二', 'かようび', 'ほようび', 'けようび', 'ファイヤーようび', 10, 1),
(132, 8, '星期三', 'すいようび', 'さんようび', 'ずようひ', 'すいよひ', 10, 1),
(133, 8, '星期四', 'もくようび', 'ももようび', 'もよようび', 'もようび', 10, 1),
(134, 8, '星期五', 'きんようび', 'ぎんようび', 'きいようび', 'きようび', 10, 1),
(135, 8, '星期六', 'どようび', 'ろくようび', 'ととようび', 'とうようび', 10, 1),
(136, 8, '星期日', '日曜日', '月曜日', '土曜日', '水曜日', 10, 1),
(137, 8, '星期一', '月曜日', '火曜日', '日曜日', '木曜日', 10, 1),
(138, 8, '星期二', '火曜日', '水曜日', '土曜日', '木曜日', 10, 1),
(139, 8, '星期三', '水曜日', '火曜日', '土曜日', '金曜日', 10, 1),
(140, 8, '星期四', '木曜日', '火曜日', '土曜日', '水曜日', 10, 1),
(141, 8, '星期五', '金曜日', '火曜日', '土曜日', '月曜日', 10, 1),
(142, 8, '星期六', '土曜日', '火曜日', '月曜日', '水曜日', 10, 1),
(143, 11, '初次見面', 'はじめまして', 'おねがいします', 'さよなら', 'すみません', 10, 1),
(144, 11, '早安', 'おはよう', 'こにちは', 'こんばんは', 'おやすみ', 10, 1),
(145, 11, '午安', 'こにちは', 'おはよう', 'こんばんは', 'おやすみ', 10, 1),
(146, 11, '晚安', 'こんばんは', 'おはよう', 'こにちは', 'おやすみ', 10, 1),
(147, 11, '晚安(睡前)', 'おやすみ', 'おはよう', 'こにちは', 'こんばんは ', 10, 1),
(148, 11, '謝謝', 'ありがとうございます', 'はじめまして', 'おねがいします', 'さよなら', 10, 1),
(149, 11, '不好意思', 'すみません', 'はじめまして', 'おねがいします', 'さよなら', 10, 1),
(150, 11, '拜託', 'おねがいします', 'はじめまして', 'すみません', 'さよなら', 10, 1),
(151, 11, '再見', 'さよなら', 'すみません', 'はじめまして', 'おねがいします', 10, 1);

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
-- 資料表索引 `consult`
--
ALTER TABLE `consult`
  ADD PRIMARY KEY (`consult_id`),
  ADD KEY `backstage_id` (`backstage_id`),
  ADD KEY `member_id` (`member_id`);

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
  ADD KEY `lesson_record_member_fk` (`member_id`),
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
  ADD KEY `quiz_record_topic_fk` (`lesson_id`),
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
-- 使用資料表自動遞增(AUTO_INCREMENT) `consult`
--
ALTER TABLE `consult`
  MODIFY `consult_id` int NOT NULL AUTO_INCREMENT COMMENT 'PK', AUTO_INCREMENT=2;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `error`
--
ALTER TABLE `error`
  MODIFY `error_id` int NOT NULL AUTO_INCREMENT COMMENT 'Not Null(PK,AI)', AUTO_INCREMENT=4;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `item`
--
ALTER TABLE `item`
  MODIFY `item_id` int NOT NULL AUTO_INCREMENT COMMENT 'Not Null(PK,AI)', AUTO_INCREMENT=23;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `item_record`
--
ALTER TABLE `item_record`
  MODIFY `item_order_id` int NOT NULL AUTO_INCREMENT COMMENT 'Not Null(PK,AI)', AUTO_INCREMENT=25;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `lesson`
--
ALTER TABLE `lesson`
  MODIFY `lesson_id` int NOT NULL AUTO_INCREMENT COMMENT 'Not Null(PK,AI)', AUTO_INCREMENT=22;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `lesson_record`
--
ALTER TABLE `lesson_record`
  MODIFY `lesson_order_id` int NOT NULL AUTO_INCREMENT COMMENT 'Not Null(PK, AI)', AUTO_INCREMENT=14;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `lesson_type`
--
ALTER TABLE `lesson_type`
  MODIFY `type_id` int NOT NULL AUTO_INCREMENT COMMENT 'Not Null(PK,AI)', AUTO_INCREMENT=4;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `member`
--
ALTER TABLE `member`
  MODIFY `member_id` int NOT NULL AUTO_INCREMENT COMMENT 'Not Null(PK,AI)', AUTO_INCREMENT=8;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `member_level`
--
ALTER TABLE `member_level`
  MODIFY `level` int NOT NULL AUTO_INCREMENT COMMENT 'Not Null(PK,AI)', AUTO_INCREMENT=11;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `message`
--
ALTER TABLE `message`
  MODIFY `message_id` int NOT NULL AUTO_INCREMENT COMMENT 'Not Null(PK,AI)', AUTO_INCREMENT=6;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `post`
--
ALTER TABLE `post`
  MODIFY `post_id` int NOT NULL AUTO_INCREMENT COMMENT 'Not Null(PK,AI)', AUTO_INCREMENT=9;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `quiz_record`
--
ALTER TABLE `quiz_record`
  MODIFY `quiz_record_id` int NOT NULL AUTO_INCREMENT COMMENT 'Not Null(PK,AI)', AUTO_INCREMENT=5;

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
-- 資料表的限制式 `consult`
--
ALTER TABLE `consult`
  ADD CONSTRAINT `consult_ibfk_1` FOREIGN KEY (`backstage_id`) REFERENCES `backstage` (`backstage_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `consult_ibfk_2` FOREIGN KEY (`member_id`) REFERENCES `member` (`member_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

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
  ADD CONSTRAINT `lesson_record_member_fk` FOREIGN KEY (`member_id`) REFERENCES `member` (`member_id`) ON DELETE CASCADE ON UPDATE CASCADE;

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
  ADD CONSTRAINT `lesson_id` FOREIGN KEY (`lesson_id`) REFERENCES `lesson` (`lesson_id`),
  ADD CONSTRAINT `quiz_record_member_fk` FOREIGN KEY (`member_id`) REFERENCES `member` (`member_id`) ON DELETE CASCADE ON UPDATE CASCADE;

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
