
-- HASTALAR TABLOSU
CREATE TABLE patients (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  tc VARCHAR(11),
  birth_date DATE,
  gender VARCHAR(10),
  disability_type VARCHAR(100),
  report_status VARCHAR(50),
  report_rate VARCHAR(10),
  report_start DATE,
  report_end DATE,
  block VARCHAR(5),
  group_code VARCHAR(5),
  room_number VARCHAR(10),
  guardian_name VARCHAR(100),
  guardian_relation VARCHAR(50),
  guardian_contact VARCHAR(20),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- PERSONELLER TABLOSU
CREATE TABLE staff (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  username VARCHAR(50),
  password VARCHAR(100),
  role VARCHAR(50),
  contact VARCHAR(50),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ZİYARETÇİ TAKİBİ
CREATE TABLE visits (
  id INT AUTO_INCREMENT PRIMARY KEY,
  patient_id INT,
  visitor_name VARCHAR(100),
  visit_date DATETIME,
  relation VARCHAR(50),
  note TEXT,
  FOREIGN KEY (patient_id) REFERENCES patients(id)
);

-- ODA DOLULUK TAKİBİ
CREATE TABLE rooms (
  id INT AUTO_INCREMENT PRIMARY KEY,
  block VARCHAR(5),
  room_number VARCHAR(10),
  capacity INT,
  current_count INT
);
