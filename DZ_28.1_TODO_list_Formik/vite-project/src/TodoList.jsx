import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const TodoSchema = Yup.object().shape({
  task: Yup.string()
    .min(5, 'Минимальная длина 5 символов')
    .required('Обязательное поле'),
});

const TodoList = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (values, { resetForm }) => {
    setTasks([...tasks, values.task]);
    resetForm();
  };

  return (
    <div>
      <h1>TODO List</h1>
      <Formik
        initialValues={{ task: '' }}
        validationSchema={TodoSchema}
        onSubmit={addTask}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <Field type="text" name="task" placeholder="Введите задачу" />
              <ErrorMessage name="task" component="div" style={{ color: 'red' }} />
            </div>
            <button type="submit" disabled={isSubmitting}>
              Добавить
            </button>
          </Form>
        )}
      </Formik>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
