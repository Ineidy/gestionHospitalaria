#paciente

CREATE TABLE paciente(
    cedula INT NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    genero ENUM('femenino', 'masculino') NOT NULL,
    fecha_nacimiento DATE NOT NULL,
    edad INT NOT NULL
    CONSTRAINT PK_cedula PRIMARY KEY(cedula)
);

CREATE INDEX nombre_completo ON paciente(nombre, apellido);



INSERT INTO paciente (cedula, nombre, apellido, genero, fecha_nacimiento, edad)
VALUES
(10123456, 'Carlos', 'Perez', 'masculino', '1985-06-15', 39),
(10234567, 'Ana', 'Gomez', 'femenino', '1990-09-21', 34),
(10345678, 'Luis', 'Rodriguez', 'masculino', '1982-03-10', 42),
(10456789, 'Maria', 'Lopez', 'femenino', '1995-12-05', 28),
(10567890, 'Jorge', 'Ramirez', 'masculino', '1978-07-30', 46),
(10678901, 'Lucia', 'Martinez', 'femenino', '1988-11-17', 35),
(10789012, 'Miguel', 'Hernandez', 'masculino', '1992-04-02', 32),
(10890123, 'Sofia', 'Fernandez', 'femenino', '2000-05-08', 24),
(10901234, 'Fernando', 'Diaz', 'masculino', '1997-08-25', 27),
(11012345, 'Laura', 'Garcia', 'femenino', '1983-01-13', 41);





#especialidad

CREATE TABLE especialidad(
    id INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    CONSTRAINT PK_id PRIMARY KEY(id));



INSERT INTO especialidad (nombre)
VALUES
('Cardiología'),
('Dermatología'),
('Neurología'),
('Pediatría'),
('Oftalmología'),
('Ginecología'),
('Psiquiatría'),
('Ortopedia'),
('Oncología'),
('Urología');




#hospital

CREATE TABLE hospital(
    nit INT  NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    direccion VARCHAR(100) NOT NULL,
    CONSTRAINT PK_nit PRIMARY KEY(nit)
);


INSERT INTO hospital (nit, nombre, direccion)
VALUES
(800123456, 'Hospital Central', 'Calle 10 #15-30'),
(800234567, 'Clínica La Esperanza', 'Carrera 5 #22-45'),
(800345678, 'Hospital San José', 'Avenida 1 #10-20'),
(800456789, 'Clínica del Norte', 'Calle 25 #18-50'),
(800567890, 'Hospital General', 'Carrera 12 #30-10'),
(800678901, 'Clínica Salud Total', 'Calle 33 #25-15'),
(800789012, 'Hospital Santa María', 'Carrera 8 #16-40'),
(800890123, 'Clínica Los Álamos', 'Avenida 6 #12-25'),
(800901234, 'Hospital La Paz', 'Calle 45 #22-35'),
(801012345, 'Clínica Bienestar', 'Carrera 9 #28-32');



#comunicacion_pacientes

CREATE TABLE comunicacion_pacientes(
    paciente_fk INT NOT NULL,
    tipo ENUM('celular', 'telefono', 'email', 'redes sociales') NOT NULL,
    contacto VARCHAR(255) NOT NULL,
    CONSTRAINT FK_paciente FOREIGN KEY (paciente_fk) REFERENCES paciente(cedula)
);



INSERT INTO comunicacion_pacientes (paciente_fk, tipo, contacto)
VALUES
(10123456, 'celular', '3112345678'),
(10234567, 'email', 'ana.gomez@gmail.com'),
(10345678, 'telefono', '601234567'),
(10456789, 'redes sociales', '@maria_lopez95'),
(10567890, 'celular', '3209876543'),
(10678901, 'email', 'lucia.martinez88@gmail.com'),
(10789012, 'telefono', '601987654'),
(10890123, 'redes sociales', '@sofia_fernandez'),
(10901234, 'celular', '3123456789'),
(11012345, 'email', 'laura.garcia83@hotmail.com');




#historial_medico

CREATE TABLE historial_medico(
    paciente_fk INT NOT NULL,
    descripcion TEXT NOT NULL,
    CONSTRAINT FK_paciente_historial FOREIGN KEY (paciente_fk) REFERENCES paciente(cedula)
);



INSERT INTO historial_medico (paciente_fk, descripcion)
VALUES
(10123456, 'Paciente con hipertensión controlada. Revisión cada 6 meses.'),
(10234567, 'Paciente con antecedentes de alergias. Necesita evitar ciertos medicamentos.'),
(10345678, 'Paciente con diagnóstico de diabetes tipo 2. Tratamiento con insulina.'),
(10456789, 'Paciente en seguimiento por embarazo. Control mensual recomendado.'),
(10567890, 'Paciente con antecedentes de cirugía ortopédica. Recuperación satisfactoria.'),
(10678901, 'Paciente con asma. Usa inhalador de rescate y control cada 3 meses.'),
(10789012, 'Paciente con problemas de colesterol alto. Dieta y ejercicio recomendados.'),
(10890123, 'Paciente con episodios de ansiedad. Tratamiento psicológico en curso.'),
(10901234, 'Paciente con dolor crónico de espalda. Fisioterapia recomendada.'),
(11012345, 'Paciente con historia familiar de enfermedades cardíacas. Recomendaciones de estilo de vida saludable.');




#avisos

CREATE TABLE aviso(
    hospital_fk INT NOT NULL,
    nombre VARCHAR(255) NOT NULL,
    descripcion TEXT NOT NULL,
    fecha DATE NOT NULL,
    CONSTRAINT FK_hospital_avisos FOREIGN KEY (hospital_fk) REFERENCES hospital(nit)
);


INSERT INTO aviso (hospital_fk, nombre, descripcion, fecha)
VALUES
(800123456, 'Aviso de Vacunación', 'Se realizarán jornadas de vacunación del 10 al 20 de noviembre.', '2024-10-09'),
(800234567, 'Cierre Temporal', 'La clínica estará cerrada por mantenimiento el 15 de octubre.', '2024-10-09'),
(800345678, 'Campaña de Salud', 'Campaña de salud preventiva durante todo el mes de octubre.', '2024-10-09'),
(800456789, 'Consulta Gratuita', 'Consulta médica gratuita para adultos mayores el 5 de noviembre.', '2024-10-09'),
(800567890, 'Taller de Nutrición', 'Taller de nutrición para pacientes diabéticos el 12 de octubre.', '2024-10-09'),
(800678901, 'Emergencias', 'Recuerde que la atención de emergencias es 24/7.', '2024-10-09'),
(800789012, 'Chequeo Anual', 'Invitamos a todos los pacientes a realizarse su chequeo anual.', '2024-10-09'),
(800890123, 'Programa de Ejercicio', 'Se inicia un programa de ejercicios para pacientes con sobrepeso.', '2024-10-09'),
(800901234, 'Atención Psicológica', 'Se ofrece atención psicológica para pacientes con estrés.', '2024-10-09'),
(801012345, 'Promoción de Salud Mental', 'Promoción de salud mental con talleres el 20 de octubre.', '2024-10-09');




#contacto_hospital

CREATE TABLE contacto_hospital(
    hospital_fK INT NOT NULL,
    tipo ENUM('celular', 'telefono', 'email', 'redes sociales') NOT NULL,
    contacto VARCHAR(255) NOT NULL,
    CONSTRAINT FK_hospital_contacto FOREIGN KEY (hospital_fk) REFERENCES hospital(nit)
);



INSERT INTO contacto_hospital (hospital_fk, tipo, contacto)
VALUES
(800123456, 'telefono', '601234567'),
(800234567, 'celular', '3101234567'),
(800345678, 'email', 'info@hospitalcentral.com'),
(800456789, 'redes sociales', '@clinicalaesperanza'),
(800567890, 'telefono', '602345678'),
(800678901, 'celular', '3112345678'),
(800789012, 'email', 'contacto@hospitalanjos.com'),
(800890123, 'redes sociales', '@hospitalgeneral'),
(800901234, 'telefono', '603456789'),
(801012345, 'celular', '3209876543');




#cuentas

CREATE TABLE cuentas(
    id INT NOT NULL AUTO_INCREMENT ,
    paciente_fk INT NOT NULL,
    hospital_fK INT NOT NULL,
    precio DOUBLE NOT NULL,
    fecha DATETIME NOT NULL,
    motivo TEXT NOT NULL,
    CONSTRAINT PK_id PRIMARY KEY(id),
    CONSTRAINT FK_paciente_cuentas FOREIGN KEY (paciente_fk) REFERENCES paciente(cedula),
    CONSTRAINT FK_hospital_cuentas FOREIGN KEY (hospital_fk) REFERENCES hospital(nit)
);

CREATE INDEX IX_precio ON cuentas(precio)



INSERT INTO cuentas (paciente_fk, hospital_fk, precio, fecha, motivo)
VALUES
(10123456, 800123456, 1500.00, '2024-10-01 09:30:00', 'Consulta general'),
(10234567, 800234567, 2500.50, '2024-10-02 10:00:00', 'Emergencia médica'),
(10345678, 800345678, 3200.00, '2024-10-03 11:15:00', 'Cirugía ambulatoria'),
(10456789, 800456789, 1200.75, '2024-10-04 14:45:00', 'Control prenatal'),
(10567890, 800567890, 1800.25, '2024-10-05 08:30:00', 'Exámenes de laboratorio'),
(10678901, 800678901, 900.00, '2024-10-06 16:00:00', 'Consulta de seguimiento'),
(10789012, 800789012, 3000.00, '2024-10-07 13:00:00', 'Tratamiento especializado'),
(10890123, 800890123, 750.50, '2024-10-08 09:00:00', 'Terapia física'),
(10901234, 800901234, 1350.00, '2024-10-09 11:30:00', 'Vacunación'),
(11012345, 801012345, 2200.10, '2024-10-09 15:00:00', 'Consulta de salud mental');



#doctor 

CREATE TABLE doctor(
    id INT NOT NULL AUTO_INCREMENT ,
    nombre_completo VARCHAR(255) NOT NULL,
    genero ENUM('femenino', 'masculino') NOT NULL,
    especialidad_fk INT NOT NULL,
    fecha_nacimiento VARCHAR(255) NOT NULL,
    CONSTRAINT PK_id PRIMARY KEY(id),
	CONSTRAINT FK_especialidad_doctor FOREIGN KEY (especialidad_fk) REFERENCES especialidad(id)
);


INSERT INTO doctor (nombre_completo, genero, especialidad_fk, fecha_nacimiento)
VALUES
('Dr. Ana Torres', 'femenino', 1, '1985-03-15'),
('Dr. Carlos Gómez', 'masculino', 2, '1978-06-25'),
('Dra. María López', 'femenino', 3, '1990-01-10'),
('Dr. Juan Pérez', 'masculino', 1, '1982-08-20'),
('Dra. Laura Martínez', 'femenino', 4, '1987-12-30'),
('Dr. Andrés Rodríguez', 'masculino', 2, '1975-05-05'),
('Dra. Sofía Hernández', 'femenino', 5, '1995-11-11'),
('Dr. Javier Ramírez', 'masculino', 3, '1980-02-14'),
('Dra. Valentina Castro', 'femenino', 4, '1992-09-01'),
('Dr. Felipe Díaz', 'masculino', 1, '1988-07-07');




#comunicacion_doctores

CREATE TABLE comunicacion_doctores(
    doctor_fk INT NOT NULL,
    tipo ENUM('celular', 'telefono', 'email', 'redes sociales') NOT NULL,
    contacto VARCHAR(255) NOT NULL,
    CONSTRAINT FK_doctor_comunicacion FOREIGN KEY (doctor_fk) REFERENCES doctor(id)
);


INSERT INTO comunicacion_doctores (doctor_fk, tipo, contacto)
VALUES
(1, 'telefono', '601234567'),
(2, 'celular', '3101234567'),
(3, 'email', 'mlopez@example.com'),
(4, 'redes sociales', '@dr.juanperez'),
(5, 'telefono', '602345678'),
(6, 'celular', '3112345678'),
(7, 'email', 'sofia.hernandez@example.com'),
(8, 'redes sociales', '@dr.javierramirez'),
(9, 'telefono', '603456789'),
(10, 'celular', '3209876543');




#personal

CREATE TABLE personal(
    hospital_fk INT NOT NULL,
    doctor_fk INT NOT NULL,
    CONSTRAINT FK_hospital_personal FOREIGN KEY (hospital_fk) REFERENCES hospital(nit),
    CONSTRAINT FK_doctor_personal FOREIGN KEY (doctor_fk) REFERENCES doctor(id)
);


INSERT INTO personal (hospital_fk, doctor_fk)
VALUES
(800123456, 1),
(800234567, 2),
(800345678, 3),
(800456789, 4),
(800567890, 5),
(800678901, 6),
(800789012, 7),
(800890123, 8),
(800901234, 9),
(801012345, 10);




#poblacion

CREATE TABLE poblacion(
    doctor_fk INT NOT NULL,
    paciente_fk INT NOT NULL,
    CONSTRAINT FK_doctor_poblacion FOREIGN KEY (doctor_fk) REFERENCES doctor(id),
    CONSTRAINT FK_paciente_poblacion FOREIGN KEY (paciente_fk) REFERENCES paciente(cedula)
);



INSERT INTO poblacion (doctor_fk, paciente_fk)
VALUES
(1, 10123456),
(2, 10234567),
(3, 10345678),
(4, 10456789),
(5, 10567890),
(6, 10678901),
(7, 10789012),
(8, 10890123),
(9, 10901234),
(10, 11012345);
