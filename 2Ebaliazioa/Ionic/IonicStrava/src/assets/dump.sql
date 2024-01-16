CREATE TABLE IF NOT EXISTS klubas(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT, 
    cover_photo_small TEXT,
    sport_type TEXT,
    private BOOLEAN,
    member_count NUMBER,
    description TEXT,
    club_type TEXT
);
INSERT or IGNORE INTO klubas(id, name, cover_photo_small, sport_type, private, member_count, description, club_type) VALUES (1, 'uni eibar dam1', '../../assets/img/klubadam1.jpg', 'swimming', true, 0, 'DAM 1. mailako ikasleak', 'company');
INSERT or IGNORE INTO klubas(id, name, cover_photo_small, sport_type, private, member_count, description, club_type) VALUES (2, 'uni eibar irakasleak', '../../assets/img/klubairakasleak.jpg', 'running', true, 20, 'Uniko irakasleak', 'company');
INSERT or IGNORE INTO klubas(id, name, cover_photo_small, sport_type, private, member_count, description, club_type) VALUES (3, 'Uni eibar daw2', '../../assets/img/klubadaw2.jpg', 'running', true, 13, 'DAW 2. mailako ikasleak', 'company');
INSERT or IGNORE INTO klubas(id, name, cover_photo_small, sport_type, private, member_count, description, club_type) VALUES (4, 'uni eibar dam2', '../../assets/img/klubadam2.jpg', 'biking', false, 9, 'DAM 2. mailako ikasleak', 'company');

CREATE TABLE IF NOT EXISTS atletas (
    id TEXT,
    firtsname TEXT,
    lastname TEXT,
    kluba_id NUMBER
);
INSERT or IGNORE INTO atletas (id, firtsname, lastname, kluba_id) VALUES
('11111111A', 'izaskun', 'Kortabitarte', 1);
INSERT or IGNORE INTO atletas (id, firtsname, lastname, kluba_id) VALUES
('22222222B', 'pedro', 'perez', 1);

CREATE TABLE IF NOT EXISTS jardueras (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    distance NUMBER,
    moving_time NUMBER,
    elapsed_time NUMBER,
    type TEXT,
    workout_type NUMBER,
    atleta_id TEXT
);
INSERT or IGNORE INTO jardueras (id, name, distance, moving_time, elapsed_time, type, workout_type, atleta_id) VALUES
(1, 'prueba bat', 10.00, 2.00, 2.00, 'korrika', 1, '11111111A');
INSERT or IGNORE INTO jardueras (id, name, distance, moving_time, elapsed_time, type, workout_type, atleta_id) VALUES
(2, 'beste jarduera bat', 30.00, 1.50, 2.00, 'bizikletan', 2, '22222222B');

CREATE TABLE IF NOT EXISTS pending_transactions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    endpoint TEXT NOT NULL,
    method TEXT NOT NULL,
    payload TEXT NOT NULL,
    timestamp DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);