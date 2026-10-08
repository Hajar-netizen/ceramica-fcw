CREATE TABLE coaches (
    id INT PRIMARY KEY AUTO_INCREMENT,
    coach_name VARCHAR(100) NOT NULL,
    role VARCHAR(50),
    img_name VARCHAR(255)
);
INSERT INTO coaches (coach_name, role, img_name)
VALUES
('C. Ahmed Talaat', 'Head Coach', 'C. Ahmed Talaat.jpeg'),
('C. Abd El aziz', 'General Coach', 'C. Abd El aziz.jpeg'),
('C. Ahmed Gamal', 'Goalkeeping Coach', 'C. Ahmed Gamal.jpeg'),
('Dr. Nourhan Ahmed', 'Sports Therapist', 'Dr. Nourhan Ahmed.jpeg'),
('Tamar Mahmoud Taha', 'Team Manager', 'Tamar Mahmoud Taha.jpeg'),
('Ahmed Yasser', 'Team Manager', 'Ahmed Yasser.jpeg'),
('Mohamed Tag', 'Team Manager', 'Mohamed Tag.jpeg');
