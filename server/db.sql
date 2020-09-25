CREATE SCHEMA quotes;

CREATE TABLE quotes.quote (
  id INT NOT NULL AUTO_INCREMENT,
  text VARCHAR(2000) NOT NULL,
  color VARCHAR(45) NOT NULL,
  backgroundColor VARCHAR(45) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO quotes.quote (text, color, backgroundColor) VALUES
('Do Not Let Yesterday Take Up Too Much Of Today.', '#E6E825', '#540C9C'),
('The Purpose Of Art Is Washing The Dust Of Daily Life Off Our Souls.', '#F2C424', '#0C1EA6'),
('If You Are Working On Something That You Really Care About, You Do Not Have To Be Pushed. The Vision Pulls You.', '#47E655', '#99204A');
