-- Shifts (enum-backed)
INSERT INTO shifts (id, begintime, endtime) VALUES
  ('A', '08:00', '16:00'),
  ('B', '16:00', '00:00'),
  ('C', '00:00', '08:00')
ON CONFLICT (id) DO NOTHING;

DO $$
DECLARE
  v_case_id      int;
  v_facility_id  int;
  v_manager_id   int;
  v_prisoner_id  int;
  v_staff_id     int;
  v_visitor_id   int;
BEGIN
  INSERT INTO prisonercases (description)
  VALUES ('Petty theft and property damage')
  RETURNING id INTO v_case_id;

  INSERT INTO facilities (name, location, state, capacity, type)
  VALUES ('Central Block', 'Irbid', 'Accepting', 200, 'General Holding')
  RETURNING id INTO v_facility_id;

  INSERT INTO managers (name, staff_count, facility_id, address, phonenumber)
  VALUES ('Alice Manager', 1, v_facility_id, '123 Admin Rd', '555-0100')
  RETURNING id INTO v_manager_id;

  UPDATE facilities SET manager_id = v_manager_id WHERE id = v_facility_id;

  INSERT INTO prisoners (fullname, prisonercase, nationality, gender, dob, location)
  VALUES ('John Doe', v_case_id, 'Jordanian', 'Male', DATE '1985-06-15', 'Irbid')
  RETURNING id INTO v_prisoner_id;

  INSERT INTO staff (fullname, facility_id, rank, shift, manager_id)
  VALUES ('Officer Smith', v_facility_id, 'Officer', 'A', v_manager_id)
  RETURNING id INTO v_staff_id;

  INSERT INTO visitors (fullname) VALUES ('Ismail') RETURNING id INTO v_visitor_id;

  INSERT INTO visits (prisoner_id, visitor, staff_id, date, room)
  VALUES (v_prisoner_id, 'Ismail', v_staff_id, CURRENT_DATE, 'A1');

  INSERT INTO inmateoffences (prisoner_id, offencetype)
  VALUES (v_prisoner_id, 'assault');

  INSERT INTO medicalrecords (prison_id, prisoner_id, offencetype)
  VALUES (v_prisoner_id, v_prisoner_id, 'assault');

  INSERT INTO prisonerallowedfacilities (prisoner_id, facility_id)
  VALUES (v_prisoner_id, v_facility_id);

  INSERT INTO staffallowedfacilities (staff_id, facility_id)
  VALUES (v_staff_id, v_facility_id);
END $$;
