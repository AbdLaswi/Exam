
USE bookstore ;

-- -----------------------------------------------------
-- Table Book
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Book (
  title VARCHAR(255) NOT NULL,
  book_id INT NOT NULL AUTO_INCREMENT,
  auther VARCHAR(255) NULL,
  publisher VARCHAR(255) NOT NULL,
  published_at INT NULL,
  pages INT NULL,
  PRIMARY KEY (book_id),
  UNIQUE INDEX book_id_UNIQUE (book_id ASC) );
