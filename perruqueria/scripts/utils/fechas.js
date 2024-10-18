export function fecha_a_texto(inputDate) {
    const daysOfWeek = [
        "DOMINGO", "LUNES", "MARTES", "MIÉRCOLES", 
        "JUEVES", "VIERNES", "SÁBADO"
    ];
    const months = [
        "ENERO", "FEBRERO", "MARZO", "ABRIL", 
        "MAYO", "JUNIO", "JULIO", "AGOSTO", 
        "SEPTIEMBRE", "OCTUBRE", "NOVIEMBRE", "DICIEMBRE"
    ];

    // Convierte la fecha de entrada a un objeto Date
    const dateParts = inputDate.split('-');
    const date = new Date(Date.UTC(dateParts[0], dateParts[1] - 1, dateParts[2]));

    // Verifica si la fecha es válida
    if (isNaN(date.getTime())) {
        throw new Error('Fecha inválida');
    }

    // Obtiene el día de la semana y el mes
    const dayName = daysOfWeek[date.getUTCDay()];
    const day = date.getUTCDate();
    const monthName = months[date.getUTCMonth()];
    const year = date.getUTCFullYear();

    // Devuelve la fecha en el formato deseado
    return `${dayName} ${day} de ${monthName} de ${year}`;
}

export function formatFecha(date) {
    if(date != null){
        let fecha = new Date(date)
        return fecha.toISOString().split('T')[0]
    }else{
        return ""
    }
    
}