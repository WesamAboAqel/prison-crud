-- Enum definitions
CREATE TYPE sex AS ENUM ('Male', 'Female');
CREATE TYPE offences AS ENUM ('assault', 'contraband', 'disobedience', 'escape_attempt', 'vandalism');
CREATE TYPE facilitycondition AS ENUM ('Under Construction', 'Maintenance', 'Accepting', 'Full');
CREATE TYPE shifttype AS ENUM ('A', 'B', 'C');

-- Core tables
CREATE TABLE prisonercases (
    id           integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    description  text NOT NULL
);

CREATE TABLE facilities (
    id          integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name        varchar(128) NOT NULL,
    manager_id  integer,
    location    text NOT NULL,
    state       facilitycondition NOT NULL,
    capacity    integer DEFAULT 0,
    type        varchar(128)
);

CREATE TABLE managers (
    id           integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name         varchar(128) NOT NULL,
    staff_count  integer DEFAULT 0,
    facility_id  integer NOT NULL,
    address      text,
    phonenumber  text
);

CREATE TABLE prisoners (
    id           integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    fullname     varchar(128) NOT NULL,
    prisonercase integer NOT NULL,
    nationality  varchar(64) NOT NULL,
    gender       sex NOT NULL,
    dob          date NOT NULL,
    location     text NOT NULL
);

CREATE TABLE shifts (
    id        shifttype PRIMARY KEY,
    begintime time,
    endtime   time,
    duration  interval GENERATED ALWAYS AS (endtime - begintime) STORED
);

CREATE TABLE staff (
    id          integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    fullname    varchar(128) NOT NULL,
    facility_id integer NOT NULL,
    rank        varchar(64),
    shift       shifttype NOT NULL,
    manager_id  integer NOT NULL
);

CREATE TABLE visitors (
    id       integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    fullname varchar(128) NOT NULL
);

CREATE TABLE visits (
    id          integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    prisoner_id integer NOT NULL,
    visitor     text NOT NULL,
    staff_id    integer NOT NULL,
    date        date,
    room        text
);

CREATE TABLE inmateoffences (
    id          integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    prisoner_id integer NOT NULL,
    offencetype offences NOT NULL
);

CREATE TABLE medicalrecords (
    id          integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    prison_id   integer,
    prisoner_id integer,
    offencetype offences NOT NULL,
    CHECK (prison_id IS NOT NULL OR prisoner_id IS NOT NULL),
    CHECK (prison_id IS NULL OR prisoner_id IS NULL OR prison_id = prisoner_id)
);

CREATE TABLE prisonerallowedfacilities (
    prisoner_id integer NOT NULL,
    facility_id integer NOT NULL,
    PRIMARY KEY (prisoner_id, facility_id)
);

CREATE TABLE staffallowedfacilities (
    staff_id    integer NOT NULL,
    facility_id integer NOT NULL,
    PRIMARY KEY (staff_id, facility_id)
);

-- Foreign keys
ALTER TABLE facilities               ADD CONSTRAINT facilities_manager_fk   FOREIGN KEY (manager_id)  REFERENCES managers(id);
ALTER TABLE managers                 ADD CONSTRAINT managers_facility_fk    FOREIGN KEY (facility_id)  REFERENCES facilities(id);
ALTER TABLE prisoners                ADD CONSTRAINT prisoners_case_fk       FOREIGN KEY (prisonercase) REFERENCES prisonercases(id);
ALTER TABLE staff                    ADD CONSTRAINT staff_facility_fk       FOREIGN KEY (facility_id)  REFERENCES facilities(id);
ALTER TABLE staff                    ADD CONSTRAINT staff_manager_fk        FOREIGN KEY (manager_id)   REFERENCES managers(id);
ALTER TABLE staff                    ADD CONSTRAINT staff_shift_fk          FOREIGN KEY (shift)        REFERENCES shifts(id);
ALTER TABLE visits                   ADD CONSTRAINT visits_prisoner_fk      FOREIGN KEY (prisoner_id)  REFERENCES prisoners(id);
ALTER TABLE visits                   ADD CONSTRAINT visits_staff_fk         FOREIGN KEY (staff_id)     REFERENCES staff(id);
ALTER TABLE inmateoffences           ADD CONSTRAINT inmateoffences_prisoner_fk FOREIGN KEY (prisoner_id) REFERENCES prisoners(id);
ALTER TABLE medicalrecords           ADD CONSTRAINT medicalrecords_prison_fk   FOREIGN KEY (prison_id)   REFERENCES prisoners(id);
ALTER TABLE medicalrecords           ADD CONSTRAINT medicalrecords_prisoner_fk FOREIGN KEY (prisoner_id) REFERENCES prisoners(id);
ALTER TABLE prisonerallowedfacilities ADD CONSTRAINT p2f_prisoner_fk        FOREIGN KEY (prisoner_id)  REFERENCES prisoners(id);
ALTER TABLE prisonerallowedfacilities ADD CONSTRAINT p2f_facility_fk        FOREIGN KEY (facility_id)  REFERENCES facilities(id);
ALTER TABLE staffallowedfacilities    ADD CONSTRAINT s2f_staff_fk           FOREIGN KEY (staff_id)     REFERENCES staff(id);
ALTER TABLE staffallowedfacilities    ADD CONSTRAINT s2f_facility_fk        FOREIGN KEY (facility_id)  REFERENCES facilities(id);
