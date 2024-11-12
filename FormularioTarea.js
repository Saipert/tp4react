import React, { useState } from 'react';

const FormularioTarea = ({ onAddTarea }) => {
    const [tarea, setTarea] = useState({
        proyecto: '',
        tipo: '',
        persona: '',
        storyPoints: '',
        prioridad: '',
        fechaCreacion: '',
        resumen: ''
    });

    const handleChange = (e) => {
        setTarea({ ...tarea, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddTarea(tarea);
        setTarea({
            proyecto: '',
            tipo: '',
            persona: '',
            storyPoints: '',
            prioridad: '',
            fechaCreacion: '',
            resumen: ''
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="proyecto" placeholder="Proyecto" value={tarea.proyecto} onChange={handleChange} required />
            <input type="text" name="tipo" placeholder="Tipo de Tarea" value={tarea.tipo} onChange={handleChange} required />
            <input type="text" name="persona" placeholder="Persona Asignada" value={tarea.persona} onChange={handleChange} required />
            <input type="number" name="storyPoints" placeholder="Story Points" value={tarea.storyPoints} onChange={handleChange} required />
            <select name="prioridad" value={tarea.prioridad} onChange={handleChange} required>
                <option value="">Prioridad</option>
                <option value="Alta">Alta</option>
                <option value="Media">Media</option>
                <option value="Baja">Baja</option>
            </select>
            <input type="date" name="fechaCreacion" value={tarea.fechaCreacion} onChange={handleChange} required />
            <textarea name="resumen" placeholder="Resumen" value={tarea.resumen} onChange={handleChange} required></textarea>
            <button type="submit">Agregar Tarea</button>
        </form>
    );
};

export default FormularioTarea;
