import { test, expect } from '@playwright/test';

const baseURL = 'https://jsonplaceholder.typicode.com';

test.describe('Testy API dla jsonplaceholder.typicode.com', () => {

    test('GET /posts powinien zwrócić listę postów', async ({ request }) => {
      const response = await request.get(`${baseURL}/posts`);
      expect(response.status()).toBe(200);
  
      const data = await response.json();
      expect(Array.isArray(data)).toBe(true);
      expect(data.length).toBeGreaterThan(0);
    });
  
    test('GET /posts/1 powinien zwrócić pojedynczy post', async ({ request }) => {
      const response = await request.get(`${baseURL}/posts/1`);
      expect(response.status()).toBe(200);
  
      const data = await response.json();
      expect(data).toHaveProperty('id', 1);
    });
  
    test('GET /comments powinien zwrócić listę komentarzy', async ({ request }) => {
      const response = await request.get(`${baseURL}/comments`);
      expect(response.status()).toBe(200);
  
      const data = await response.json();
      expect(Array.isArray(data)).toBe(true);
      expect(data.length).toBeGreaterThan(0);
    });
  
    test('GET /comments/1 powinien zwrócić pojedynczy komentarz', async ({ request }) => {
      const response = await request.get(`${baseURL}/comments/1`);
      expect(response.status()).toBe(200);
  
      const data = await response.json();
      expect(data).toHaveProperty('id', 1);
    });
  
    test('Struktura obiektu postu powinna być poprawna', async ({ request }) => {
      const response = await request.get(`${baseURL}/posts/1`);
      expect(response.status()).toBe(200);
  
      const data = await response.json();
      expect(data).toMatchObject({
        userId: expect.any(Number),
        id: expect.any(Number),
        title: expect.any(String),
        body: expect.any(String),
      });
    });
    test('POST /posts powinien utworzyć nowy post', async ({ request }) => {
        const newPost = {
          title: 'Nowy tytuł',
          body: 'Treść nowego postu',
          userId: 1,
        };
      
        const response = await request.post(`${baseURL}/posts`, {
          data: newPost,
        });
      
        expect(response.status()).toBe(201);
      
        const data = await response.json();
        expect(data).toMatchObject(newPost);
        expect(data).toHaveProperty('id');
      });

  });