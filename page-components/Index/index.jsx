import Hero from './Hero';

import Topbar from '../../components/Topbar/Topbar';
import TodoList from '@/components/Todolist/Todolist';

export const Index = () => {
  return (
    <div>
      <Topbar />
      <Hero />
      <TodoList />
    </div>
  );
};
