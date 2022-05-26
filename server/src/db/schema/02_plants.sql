DROP TABLE IF EXISTS plants CASCADE;

CREATE TABLE IF NOT EXISTS plants (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  sci_name VARCHAR(255) NOT NULL,
  common_names TEXT,
  family VARCHAR(255) NOT NULL,
  aspca_url VARCHAR(255) NOT NULL,
  image_url VARCHAR(255) NOT NULL
);