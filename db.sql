#paciente

CREATE TABLE paciente(
    cedula INT NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    genero ENUM('femenino', 'masculino') NOT NULL,
    fecha_nacimiento DATE NOT NULL,
    edad INT NOT NULL
);

CREATE INDEX nombre_completo ON paciente(nombre, apellido);


#especialidad

CREATE TABLE especialidad(
    id INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    CONSTRAINT PK_id PRIMARY KEY(id));


#hospital

CREATE TABLE hospital(
    nit INT  NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    direccion VARCHAR(100) NOT NULL,
    CONSTRAINT PK_nit PRIMARY KEY(nit)
);


#comunicacion_pacientes

CREATE TABLE comunicacion_pacientes(
    paciente_fk INT NOT NULL,
    tipo ENUM('celular', 'telefono', 'email', 'redes sociales') NOT NULL,
    contacto VARCHAR(255) NOT NULL,
    CONSTRAINT FK_paciente FOREIGN KEY (paciente_fk) REFERENCES paciente(cedula)
);

#historial_medico

CREATE TABLE historial_medico(
    paciente_fk INT NOT NULL,
    descripcion TEXT NOT NULL,
    CONSTRAINT FK_paciente_historial FOREIGN KEY (paciente_fk) REFERENCES paciente(cedula)
);

#avisos

CREATE TABLE aviso(
    hospital_fk INT NOT NULL,
    nombre VARCHAR(255) NOT NULL,
    descripcion TEXT NOT NULL,
    fecha DATE NOT NULL,
    CONSTRAINT FK_hospital_avisos FOREIGN KEY (hospital_fk) REFERENCES hospital(nit)
);

#contacto_hospital

CREATE TABLE contacto_hospital(
    hospital_fK INT NOT NULL,
    tipo ENUM('celular', 'telefono', 'email', 'redes sociales') NOT NULL,
    contacto VARCHAR(255) NOT NULL,
    CONSTRAINT FK_hospital_contacto FOREIGN KEY (hospital_fk) REFERENCES hospital(nit)
);


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

#comunicacion_doctores

CREATE TABLE comunicacion_doctores(
    doctor_fk INT NOT NULL,
    tipo ENUM('celular', 'telefono', 'email', 'redes sociales') NOT NULL,
    contacto VARCHAR(255) NOT NULL,
    CONSTRAINT FK_doctor_comunicacion FOREIGN KEY (doctor_fk) REFERENCES doctor(id)
);


#personal

CREATE TABLE personal(
    hospital_fk INT NOT NULL,
    doctor_fk INT NOT NULL,
    CONSTRAINT FK_hospital_personal FOREIGN KEY (hospital_fk) REFERENCES hospital(nit),
    CONSTRAINT FK_doctor_personal FOREIGN KEY (doctor_fk) REFERENCES doctor(id)
);


#poblacion

CREATE TABLE poblacion(
    doctor_fk INT NOT NULL,
    paciente_fk INT NOT NULL,
    CONSTRAINT FK_doctor_poblacion FOREIGN KEY (doctor_fk) REFERENCES doctor(id),
    CONSTRAINT FK_paciente_poblacion FOREIGN KEY (paciente_fk) REFERENCES paciente(cedula)
);