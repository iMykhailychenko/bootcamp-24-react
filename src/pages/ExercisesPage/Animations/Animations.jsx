import { useState, createRef } from 'react';

import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { Button } from '../../../components/Button';

import styles from './Animations.module.css';

const Toggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(prev => !prev)}>{isOpen ? 'Hide' : 'Open'}</Button>

      <CSSTransition in={isOpen} unmountOnExit className={styles.text} timeout={300}>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque eos debitis ullam maxime! Tempore eveniet
          facere temporibus veniam odio! Rerum accusantium porro omnis velit qui dolorum, similique doloremque dolores
          delectus.
        </p>
      </CSSTransition>
    </>
  );
};

const Todos = () => {
  const [value, setValue] = useState('');
  const handleChange = event => setValue(event.target.value);

  const [todos, setTodos] = useState([]);

  const handleSubmit = event => {
    event.preventDefault();
    setTodos(prev => [{ ref: createRef(null), value }, ...prev]);
    setValue('');
  };

  const handleDelete = v => setTodos(prev => prev.filter(item => item.value !== v.value));

  return (
    <>
      <form action="" className="mt-5" onSubmit={handleSubmit}>
        <input value={value} onChange={handleChange} type="text" />
      </form>

      <ul>
        <TransitionGroup className="todo-list">
          {todos.map(item => (
            <CSSTransition key={item.value} nodeRef={item.ref} timeout={300}>
              <li ref={item.ref} className={styles.item}>
                <p className="m-0 me-4">{item.value}</p>

                <button type="button" onClick={() => handleDelete(item)}>
                  delete
                </button>
              </li>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ul>
    </>
  );
};

export const Animations = () => {
  return (
    <>
      <Toggle />
      <Todos />
    </>
  );
};
