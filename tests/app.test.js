import request from 'supertest';
import { app } from '../src/app.js';

describe('Task Manager API basic tests', () => {
  it('should respond to the health check route', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('message');
  });

  it('should return 401 for protected tasks route without token', async () => {
    const res = await request(app).get('/api/tasks');
    expect(res.status).toBe(401);
  });
});

