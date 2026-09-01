import Fastify from 'fastify';
import cors from '@fastify/cors';


const app = Fastify({
  logger: true,
});

await app.register(cors, {
  origin: 'http://localhost:4200',
});

let todos = [
  {
    id: 1,
    title: 'Разобраться с React',
  },
  {
    id: 2,
    title: 'Разобраться с Fastify',
  },
];


app.get('/', async () => {
  return 'hello world';
});

app.get('/api/todos', async () => {
  return todos;
});

app.post<{
  Body: {
    title: string;
  };
}>('/api/todos', async (request, reply) => {
  const todo = {
    id: Date.now(),
    title: request.body.title,
  };

  todos.push(todo);

  return reply.code(201).send(todo);
});

app.delete<{
  Params: {
    id: string;
  };
}>('/api/todos/:id', async (request, reply) => {
  const id = Number(request.params.id);

  todos = todos.filter(todo => todo.id !== id);

  return reply.code(204).send();
});

await app.listen({
  port: 3200,
});