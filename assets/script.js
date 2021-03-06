//Titulo 
document.write("<p><u><b>Estadisticas Centro Medico Ñuñoa</b></u></p>");

//Arreglos con objeto en su interior para recopilar informacion de pacientes por especialidad médica
var radiologia = [
    {HORA: '11:00', ESPECIALISTA: 'IGNACIO SCHULZ', PACIENTE: 'FRANCISCA ROJAS', RUT: '9878782-1', PREVISION: 'FONASA'},
    {HORA: '11:30', ESPECIALISTA: 'FEDERICO SUBERCASEAUX', PACIENTE: 'PAMELA ESTRADA', RUT: '15345241-3', PREVISION: 'ISAPRE'},
    {HORA: '15:00', ESPECIALISTA: 'FERNANDO WURTHZ', PACIENTE: 'ARMANDO LUNA', RUT: '16445345-9', PREVISION: 'ISAPRE'},
    {HORA: '15:30', ESPECIALISTA: 'ANA MARIA GODOY', PACIENTE: 'MANUEL GODOY', RUT: '17666419-0', PREVISION: 'FONASA'},
    {HORA: '16:00', ESPECIALISTA: 'PATRICIA SUAZO', PACIENTE: 'RAMON ULLOA', RUT: '14989389-K', PREVISION: 'FONASA'}
];

var traumatologia = [
    {HORA: '8:00', ESPECIALISTA: 'MARIA PAZ ALTUZARRA', PACIENTE: 'PAULA SANCHEZ', RUT: '15554774-5', PREVISION: 'FONASA'},
    {HORA: '10:00', ESPECIALISTA: 'RAUL ARAYA', PACIENTE: 'ANGÉLICA NAVAS', RUT: '15444147-9', PREVISION: 'ISAPRE'},
    {HORA: '10:30', ESPECIALISTA: 'MARIA ARRIAGADA', PACIENTE: 'ANA KLAPP', RUT: '17879423-9', PREVISION: 'ISAPRE'},
    {HORA: '11:00', ESPECIALISTA: 'ALEJANDRO BADILLA', PACIENTE: 'FELIPE MARDONES', RUT: '1547423-6', PREVISION: 'ISAPRE'},
    {HORA: '11:30', ESPECIALISTA: 'CECILIA BUDNIK', PACIENTE: 'DIEGO MARRE', RUT: '16554741-K', PREVISION: 'FONASA'},
    {HORA: '12:00', ESPECIALISTA: 'ARTURO CAVAGNARO', PACIENTE: 'CECILIA MENDEZ', RUT: '9747535-8', PREVISION: 'ISAPRE'},
    {HORA: '12:30', ESPECIALISTA: 'ANDRES KANACRI', PACIENTE: 'MARCIAL SUAZO', RUT: '11254785-5', PREVISION: 'ISAPRE'}
];

var dental = [
    {HORA: '8:30', ESPECIALISTA: 'ANDREA ZUÑIGA', PACIENTE: 'MARCELA RETAMAL', RUT: '11123425-6', PREVISION: 'ISAPRE'},
    {HORA: '11:00', ESPECIALISTA: 'MARIA PIA ZAÑARTU', PACIENTE: 'ANGEL MUÑOZ', RUT: '9878789-2', PREVISION: 'ISAPRE'},
    {HORA: '11:30', ESPECIALISTA: 'SCARLETT WITTING', PACIENTE: 'MARIO KAST', RUT: '7998789-5', PREVISION: 'FONASA'},
    {HORA: '13:00', ESPECIALISTA: 'FRANCISCO VON TEUBER', PACIENTE: 'KARIN FERNANDEZ', RUT: '18887662-K', PREVISION: 'FONASA'},
    {HORA: '13:30', ESPECIALISTA: 'EDUARDO VIÑUELA', PACIENTE: 'HUGO SANCHEZ', RUT: '17665461-4', PREVISION: 'FONASA'},
    {HORA: '14:00', ESPECIALISTA: 'RAQUEL VILLASECA', PACIENTE: 'ANA SEPULVEDA', RUT: '14441281-0', PREVISION: 'ISAPRE'}
];

//Cantidad de atenciones por especialidad
document.write("<b>Cantidad de atenciones por especialidad</b>", "<br>");
document.write (
    "Cantidad de atenciones para Radiología: ", radiologia.length, "<br>",
    "Cantidad de atenciones para Traumatología: ", traumatologia.length, "<br>", 
    "Cantidad de atenciones para Dental: ", dental.length, "<br>",
    "<br>"
);


document.write("<b>Atenciones área Radiología</b>", "<br>");
//Datos (Nombre y previsión) de primer paciente correspondiente a especialidad Radiología
document.write(`Primera atención: ${radiologia[0].PACIENTE} - ${radiologia[0].RUT} - ${radiologia[0].PREVISION} | `);
//Datos (Nombre y previsión) de ultimo paciente correspondiente a especialidad Radiología
document.write(`Última atención: ${radiologia[radiologia.length - 1].PACIENTE} - ${radiologia[radiologia.length - 1].RUT} - ${radiologia[radiologia.length - 1].PREVISION}`);


document.write ("<br>", "<br>");


document.write("<b>Atenciones área Traumatología</b>", "<br>");
//Datos (Nombre y previsión) de primer paciente correspondiente a especialidad Traumatología
document.write(`Primera atención: ${traumatologia[0].PACIENTE} - ${traumatologia[0].RUT} - ${traumatologia[0].PREVISION} | `);
//Datos (Nombre y previsión) de último paciente correspondiente a especialidad Traumatología
document.write(`Última atención: ${traumatologia[traumatologia.length - 1].PACIENTE} - ${traumatologia[traumatologia.length - 1].RUT} - ${traumatologia[traumatologia.length - 1].PREVISION}`);


document.write ("<br>", "<br>");


document.write("<b>Atenciones área Dental</b>", "<br>");
//Datos (Nombre y previsión) de primer paciente correspondiente a especialidad Dental
document.write(`Primera atención: ${dental[0].PACIENTE} - ${dental[0].RUT} - ${dental[0].PREVISION} | `);
//Datos (Nombre y previsión) de último paciente correspondiente a especialidad Dental
document.write(`Última atención: ${dental[dental.length - 1].PACIENTE} - ${dental[dental.length - 1].RUT} - ${dental[dental.length - 1].PREVISION}`);