import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Card, { CardVariant } from './components/Card';
import EventsExample from './components/EventsExample';
import List from './components/List';
import TodoItem from './components/TodoItem';
import UserItem from './components/UserItem';
import { ITodo, IUser } from './types/types';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import UsersPage from './components/UsersPage';
import TodosPage from './components/TodosPage';
import UserItemPage from './components/UserItemPage';
import TodoItemPage from './components/TodoItemPage';

const App = () => {
  return (
    <BrowserRouter>
        <div>
          <div>
            <Link to={'/users'}>Пользователи</Link>
            <Link to={'/todos'}>Задачи</Link>
          </div>
          <Routes>
          <Route path="/users" element={<UsersPage/>}/>
          <Route path="/todos" element={<TodosPage/>}/>
          <Route path="/users/:id" element={<UserItemPage/>}/>
          <Route path="/todos/:id" element={<TodoItemPage/>}/>
          </Routes>
        </div>
    </BrowserRouter>
  );
};

export default App;