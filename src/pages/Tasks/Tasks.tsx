import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Tasks.css";
import { Task } from "../../components/types/interfaces";

function Tasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskForm, setTaskForm] = useState({ id: "", name: "", status: "Новая", date: "" });
  const [isEditing, setIsEditing] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState<string | null>(null);
  const [statusFilter, setStatusFilter] = useState<string>("Все");

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks") ?? "[]");
    if (storedTasks.length > 0) {
      setTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    } else {
      localStorage.removeItem("tasks");
    }
  }, [tasks]);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setTaskForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTask: Task = { ...taskForm, id: `task-${Math.random().toString(36).substr(2, 9)}` };
    setTasks((prev) => [...prev, newTask]);
    setTaskForm({ id: "", name: "", status: "Новая", date: "" });
  };

  const handleEditTask = (task: Task) => {
    setTaskForm(task);
    setIsEditing(true);
  };

  const handleSaveTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTasks((prev) =>
      prev.map((t) => (t.id === taskForm.id ? { ...taskForm } : t))
    );
    setIsEditing(false);
    setTaskForm({ id: "", name: "", status: "Новая", date: "" });
  };

  const handleDeleteTask = (id: string) => {
    setTasks((prev) => {
      const updatedTasks = prev.filter((task) => task.id !== id);
      return updatedTasks;
    });
    setShowModal(false);
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStatusFilter(e.target.value);
  };

  const handleDownloadJSON = () => {
    const jsonBlob = new Blob([JSON.stringify(tasks)], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(jsonBlob);
    link.download = "tasks.json";
    link.click();
  };

  const handleUploadJSON = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const tasksFromFile = JSON.parse(reader.result as string);
        setTasks(tasksFromFile);
      };
      reader.readAsText(file);
    }
  };

  const filteredTasks = statusFilter === "Все"
    ? tasks
    : tasks.filter((task) => task.status === statusFilter);

  return (
    <>
      <Header />
      <div className="tasks">
        <h2 className="tasks__title">Задачи 5S</h2>
        <h2 className="tasks__title_info">Фильтр задач (скачать/загрузить)</h2>
        <div className="filter-container">
          <select onChange={handleFilterChange} value={statusFilter}>
            <option value="Все">Все</option>
            <option value="Новая">Новая</option>
            <option value="В работе">В работе</option>
            <option value="Завершена">Завершена</option>
          </select>
          <button onClick={handleDownloadJSON}>Скачать задачи</button>
          <input type="file" accept=".json" onChange={handleUploadJSON} />
        </div>
        <h2 className="tasks__title_info">Добавить задачу</h2>
        <form className="tasks-form" onSubmit={isEditing ? handleSaveTask : handleAddTask}>
          <input
            type="text"
            name="name"
            placeholder="Название задачи"
            value={taskForm.name}
            onChange={handleFormChange}
            required
          />
          <select name="status" value={taskForm.status} onChange={handleFormChange}>
            <option value="Новая">Новая</option>
            <option value="В работе">В работе</option>
            <option value="Завершена">Завершена</option>
          </select>
          <input
            type="date"
            name="date"
            value={taskForm.date}
            onChange={handleFormChange}
            required
          />
          <button type="submit">
            {isEditing ? "Сохранить изменения" : "Добавить задачу"}
          </button>
        </form>

        <table className="tasks-table">
          <thead>
            <tr>
              <th>ID задачи</th>
              <th>Название задачи</th>
              <th>Статус</th>
              <th>Дата создания</th>
              <th>Действия</th>
            </tr>
          </thead>
          <tbody className="tasks-tbody">
            {filteredTasks.map((task) => (
              <tr key={task.id}>
                <td>{task.id}</td>
                <td>{task.name}</td>
                <td>{task.status}</td>
                <td>{task.date}</td>
                <td>
                  <button className="tasks-tbody__perf" onClick={() => handleEditTask(task)}>Редактировать</button>
                  <button className="tasks-tbody__delete" onClick={() => {
                    setShowModal(true);
                    setTaskToDelete(task.id);
                  }}>
                    Удалить
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <p>Вы уверены, что хотите удалить задачу?</p>
              <button onClick={() => handleDeleteTask(taskToDelete!)}>Удалить</button>
              <button onClick={() => setShowModal(false)}>Отмена</button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Tasks;





