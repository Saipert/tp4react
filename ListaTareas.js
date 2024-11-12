import React from 'react';

const ListaTareas = ({ tareas, onDeleteTarea }) => (
    <ul>
        {tareas.map((tarea, index) => (
            <li key={index}>
                <h3>{tarea.proyecto} - {tarea.tipo}</h3>
                <p>Asignado a: {tarea.persona}</p>
                <p>Story Points: {tarea.storyPoints}</p>
                <p>Prioridad: {tarea.prioridad}</p>
                <p>Fecha de creación: {tarea.fechaCreacion}</p>
                <p>Resumen: {tarea.resumen}</p>
                <button onClick={() => onDeleteTarea(index)}>Eliminar</button>
            </li>
        ))}
    </ul>
);

export default ListaTareas;
