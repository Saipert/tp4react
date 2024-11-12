import React, { useState } from 'react';
import FormularioTarea from './components/FormularioTarea';
import ListaTareas from './components/ListaTareas';

const App = () => {
    const [tareas, setTareas] = useState([]);

    const agregarTarea = (tarea) => {
        setTareas([...tareas, tarea]);
    };

    const eliminarTarea = (index) => {
        setTareas(tareas.filter((_, i) => i !== index));
    };

    return (
        <div>
            <h1>Lista de Tareas</h1>
            <FormularioTarea onAddTarea={agregarTarea} />
            <ListaTareas tareas={tareas} onDeleteTarea={eliminarTarea} />
        </div>
    );
};

export default App;
