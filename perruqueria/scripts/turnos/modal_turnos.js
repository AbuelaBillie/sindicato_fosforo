import turnos_slot from "../../turnos_slot.js"
import turnos_detalle from "../../turno_detalle.js"
import { fecha_a_texto } from "../utils/fechas.js";

export function modalTurnos(fecha_turno) {
    turnos_slot.forEach(element => {
        let contenedor_turno = document.getElementById(element.id)
        let horario_turno = contenedor_turno.id.toString().slice(0, 2)
        let spot_turno = contenedor_turno.id.toString().slice(2, 4)
        contenedor_turno.addEventListener("click", () => {
            if (contenedor_turno.classList.contains("turno-disponible")) {
                Swal.fire({
                    icon: "warning",
                    text: `¿Reservar ${fecha_a_texto(fecha_turno)} a las ${horario_turno}:00HS?`,
                    showCloseButton: true
                })
                    .then(response => {
                        if (response.isConfirmed) {
                            Swal.fire({
                                html:
                                    `<div class="modal-turno-asignado">
                    <h2>RESERVAR TURNO</h2>
                    <h3>${fecha_a_texto(fecha_turno)} - ${horario_turno}:00HS - ${spot_turno}</h3>
                    <section>
                        <div class="row">
                            <h3>MASCOTA</h3>
                        </div>
                        <div class="column">
                            <label for="">Nombre</label>
                            <input type="text" value="">
                        </div>
                        <div class="column">
                            <label for="">Tamaño</label>
                            <select>
                                <option value="0">Sin seleccionar</option>
                                <option value="1">Grande</option>
                                <option value="2">Mediano</option>
                                <option value="3">Pequeño</option>
                            </select>
                        </div>
                        <div class="column">
                            <label for="">Observaciones</label>
                            <textarea name="" id=""></textarea>
                        </div>
                    </section>
                    <section>
                        <div class="row">
                            <h3>TUTOR</h3>
                        </div>
                        <div class="column">
                            <label for="">Nombre</label>
                            <input type="text" value="">
                        </div>
                        <div class="column">
                            <label for="">Teléfono</label>
                            <input type="tel" value="" >
                        </div>
                        <div class="column">
                            <label for="">Teléfono Alternativo</label>
                            <input type="tel" value="">
                        </div>
                        <div class="column">
                            <label for="">Email</label>
                            <input type="email" value="">
                        </div>
                    </section>
                    <section>
                        <div class="row">
                            <h3>DETALLE</h3>
                        </div>
                        <div class="column">
                            <label for="">Servicio</label>
                            <select>
                                <option value="0">Sin seleccionar</option>
                                <option value="1">Baño</option>
                                <option value="2">Baño y corte</option>
                            </select>
                        </div>
                        <div class="column">
                            <label for="">Spot</label>
                            <input type="text" value="${spot_turno}" disabled>
                        </div>
                        <div class="column">
                            <label for="">Fecha turno</label>
                            <input type="date" value="${fecha_turno}" disabled>
                        </div>
                        <div class="column">
                            <label for="">Hora turno</label>
                            <input type="time" value="${horario_turno}:00" disabled>
                        </div>
                        <div class="column">
                            <label for="">Observaciones</label>
                            <textarea name="" id=""></textarea>
                        </div>
                        <div class="column botonera">
                            <button type="button" class="reservar" id="btn-reservar">Reservar</button>
                        </div>
                    </section>
                            </div>`,
                                showCloseButton: true,
                                showConfirmButton: false,
                                allowOutsideClick: false
                            })
                            let btn_reservar = document.getElementById("btn-reservar")
                            btn_reservar.addEventListener("click", ()=>{
                                Swal.fire({
                                    icon: "success",
                                    text: "Turno reservado con éxito"
                                });
                            })      
                        }
                    })
            } else {
                Swal.fire({
                    html:
                        `<div class="modal-turno-asignado">
            <h2>TURNO RESERVADO</h2>
            <h3>${fecha_a_texto(turnos_detalle.fecha_turno)} - ${turnos_detalle.hora_turno}:00HS</h3>
            <h4>${turnos_detalle.servicio.nombre} - <span>${turnos_detalle.mascota.tamaño}</span> - <span>${turnos_detalle.spot}</span></h4>
            <section>
                <div class="row">
                    <h3>MASCOTA</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="btn-edit-mascota"><title>Editar</title><path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="btn-guardar-edit oculto" id="btn-guardar-edit-mascota"><title>Guardar</title><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="btn-cancelar-edit oculto" id="btn-cancelar-edit-mascota"><title>Cancelar</title><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                </div>
                <div class="column">
                    <label for="">Nombre</label>
                    <input type="text" value="${turnos_detalle.mascota.nombre}" disabled>
                </div>
                <div class="column">
                    <label for="tamaño">Tamaño</label>
                    <input type="text" value="${turnos_detalle.mascota.tamaño}" disabled>
                </div>
                <div class="column">
                    <label for="">Observaciones</label>
                    <textarea name="" id="reserva-mascota-obs" disabled>${turnos_detalle.mascota.observaciones}</textarea>
                </div>
            </section>
            <section>
                <div class="row">
                    <h3>TUTOR</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="btn-edit-tutor"><path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="btn-guardar-edit oculto" id="btn-guardar-edit-tutor"><title>Guardar</title><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="btn-cancelar-edit oculto" id="btn-cancelar-edit-tutor"><title>Cancelar</title><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                </div>
                <div class="column">
                    <label for="">Nombre</label>
                    <input type="text" value="${turnos_detalle.mascota.tutor.nombre}" disabled>
                </div>
                <div class="column">
                    <label for="">Teléfono</label>
                    <input type="tel" id="reserva-tutor-tel" value="${turnos_detalle.mascota.tutor.tel}" disabled>
                </div>
                <div class="column">
                    <label for="">Teléfono Alternativo</label>
                    <input type="tel" id="reserva-tutor-tel-alt" value="${turnos_detalle.mascota.tutor.tel_alt}" disabled>
                </div>
                <div class="column">
                    <label for="">Email</label>
                    <input type="email" id="reserva-tutor-email" value="${turnos_detalle.mascota.tutor.email}" disabled>
                </div>
            </section>
            <section>
                <div class="row">
                    <h3>DETALLE</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="btn-edit-detalle"><path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="btn-guardar-edit oculto" id="btn-guardar-edit-detalle"><title>Guardar</title><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="btn-cancelar-edit oculto" id="btn-cancelar-edit-detalle"><title>Cancelar</title><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                </div>
                <div class="column">
                    <label for="">Servicio</label>
                    <input type="text" id="reserva-detalle-servicio" value="${turnos_detalle.servicio.nombre}" disabled>
                </div>
                <div class="column">
                    <label for="">Spot</label>
                    <input type="text" id="reserva-detalle-spot" value="${turnos_detalle.spot}" disabled>
                </div>
                <div class="column">
                    <label for="">Fecha turno</label>
                    <input type="date" value="${turnos_detalle.fecha_turno}" disabled>
                </div>
                <div class="column">
                    <label for="">Hora turno</label>
                    <input type="time" value="${turnos_detalle.hora_turno}:00" disabled>
                </div>
                <div class="column">
                    <label for="">Recepción reserva</label>
                    <input type="text" value="${turnos_detalle.operador}" disabled>
                </div>
                <div class="column">
                    <label for="">Carga en sistema</label>
                    <input type="date" value="${turnos_detalle.fecha_carga}" disabled>
                </div>
                <div class="column">
                    <label for="">Observaciones</label>
                    <textarea name="" id="reserva-detalle-obs" disabled>${turnos_detalle.obs_turno}</textarea>
                </div>
                <div class="column botonera">
                    <button type="button" class="reprogramar">Reprogramar</button>
                    <button type="button" class="anular">Anular</button>
                </div>
            </section>
                    </div>`,
                    showCloseButton: true,
                    showConfirmButton: false
                });

                //EDICION MASCOTA////////////////////////////////////////////////////////////////////
                let btn_edit_mascota = document.getElementById("btn-edit-mascota")
                let btn_guardar_edit_mascota = document.getElementById("btn-guardar-edit-mascota")
                let btn_cancelar_edit_mascota = document.getElementById("btn-cancelar-edit-mascota")
                let reserva_mascota_obs = document.getElementById("reserva-mascota-obs")

                btn_edit_mascota.addEventListener("click",()=>{
                    btn_edit_mascota.classList.add("oculto")
                    btn_guardar_edit_mascota.classList.remove("oculto")
                    btn_cancelar_edit_mascota.classList.remove("oculto")
                    reserva_mascota_obs.disabled = false;
                })

                btn_guardar_edit_mascota.addEventListener("click",()=>{
                    btn_edit_mascota.classList.remove("oculto")
                    btn_guardar_edit_mascota.classList.add("oculto")
                    btn_cancelar_edit_mascota.classList.add("oculto")
                    reserva_mascota_obs.disabled = true;
                })

                btn_cancelar_edit_mascota.addEventListener("click",()=>{
                    btn_edit_mascota.classList.remove("oculto")
                    btn_guardar_edit_mascota.classList.add("oculto")
                    btn_cancelar_edit_mascota.classList.add("oculto")
                    reserva_mascota_obs.disabled = true;
                })
                /////////////////////////////////////////////////////////////////////////////////////

                //EDICION TUTOR//////////////////////////////////////////////////////////////////////
                let btn_edit_tutor = document.getElementById("btn-edit-tutor")
                let btn_guardar_edit_tutor = document.getElementById("btn-guardar-edit-tutor")
                let btn_cancelar_edit_tutor = document.getElementById("btn-cancelar-edit-tutor")
                let reserva_tutor_tel = document.getElementById("reserva-tutor-tel")
                let reserva_tutor_tel_alt = document.getElementById("reserva-tutor-tel-alt")
                let reserva_tutor_email = document.getElementById("reserva-tutor-email")

                btn_edit_tutor.addEventListener("click",()=>{
                    btn_edit_tutor.classList.add("oculto")
                    btn_guardar_edit_tutor.classList.remove("oculto")
                    btn_cancelar_edit_tutor.classList.remove("oculto")
                    reserva_tutor_tel.disabled = false;
                    reserva_tutor_tel_alt.disabled = false;
                    reserva_tutor_email.disabled = false;
                })

                btn_guardar_edit_tutor.addEventListener("click",()=>{
                    btn_edit_tutor.classList.remove("oculto")
                    btn_guardar_edit_tutor.classList.add("oculto")
                    btn_cancelar_edit_tutor.classList.add("oculto")
                    reserva_tutor_tel.disabled = true;
                    reserva_tutor_tel_alt.disabled = true;
                    reserva_tutor_email.disabled = true;
                })

                btn_cancelar_edit_tutor.addEventListener("click",()=>{
                    btn_edit_tutor.classList.remove("oculto")
                    btn_guardar_edit_tutor.classList.add("oculto")
                    btn_cancelar_edit_tutor.classList.add("oculto")
                    reserva_tutor_tel.disabled = true;
                    reserva_tutor_tel_alt.disabled = true;
                    reserva_tutor_email.disabled = true;
                })
                /////////////////////////////////////////////////////////////////////////////////////

                //EDICION DETALLE////////////////////////////////////////////////////////////////////
                let btn_edit_detalle = document.getElementById("btn-edit-detalle")
                let btn_guardar_edit_detalle = document.getElementById("btn-guardar-edit-detalle")
                let btn_cancelar_edit_detalle = document.getElementById("btn-cancelar-edit-detalle")
                let reserva_detalle_servicio = document.getElementById("reserva-detalle-servicio")
                let reserva_detalle_spot = document.getElementById("reserva-detalle-spot")
                let reserva_detalle_obs = document.getElementById("reserva-detalle-obs")

                btn_edit_detalle.addEventListener("click",()=>{
                    btn_edit_detalle.classList.add("oculto")
                    btn_guardar_edit_detalle.classList.remove("oculto")
                    btn_cancelar_edit_detalle.classList.remove("oculto")
                    reserva_detalle_servicio.disabled = false;
                    reserva_detalle_spot.disabled = false;
                    reserva_detalle_obs.disabled = false;
                })

                btn_guardar_edit_detalle.addEventListener("click",()=>{
                    btn_edit_detalle.classList.remove("oculto")
                    btn_guardar_edit_detalle.classList.add("oculto")
                    btn_cancelar_edit_detalle.classList.add("oculto")
                    reserva_detalle_servicio.disabled = true;
                    reserva_detalle_spot.disabled = true;
                    reserva_detalle_obs.disabled = true;
                })

                btn_cancelar_edit_detalle.addEventListener("click",()=>{
                    btn_edit_detalle.classList.remove("oculto")
                    btn_guardar_edit_detalle.classList.add("oculto")
                    btn_cancelar_edit_detalle.classList.add("oculto")
                    reserva_detalle_servicio.disabled = true;
                    reserva_detalle_spot.disabled = true;
                    reserva_detalle_obs.disabled = true;
                })
                /////////////////////////////////////////////////////////////////////////////////////
            }
        })
    });
}

