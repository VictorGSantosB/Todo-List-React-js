import { useState } from "react";

const TodoForm = ({storeTodos}) => {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!value || !category)  {
      Toastify({
        text: "Preencha todos os campos!",
        duration: 2000, // duração em milissegundos
        close: true, // botão de fechar
        gravity: "top", // posição do toast
        position: "right", // posição da gravidade
        backgroundColor: "#FF6347",
      }).showToast();
      return
    };
    storeTodos(value,category)
    //LIMPAR OS CAMPOS
    // console.log(value,category)
    setCategory("")
    setValue("")
    Toastify({
      text: "Tarefa adicionada com sucesso",
      duration: 2000, // duração em milissegundos
      close: true, // botão de fechar
      gravity: "top", // posição do toast
      position: "right", // posição da gravidade
      backgroundColor: "#4CAF50",
    }).showToast();
    
  };

  return (
    <div className="todo-form">
      <h2>Criar Tarefas</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite o titulo!"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="" disabled>
            Selecione a Categoria
          </option>
          <option value="Trabalho">Trabalho</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Estudos">Estudos</option>
        </select>
        <button type="submit">Criar Tarefa</button>
      </form>
    </div>
  );
};

export default TodoForm;
