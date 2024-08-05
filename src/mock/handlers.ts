import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('/user', () => {
    return HttpResponse.json({
      name: 'John Doe',
      email: 'john.doe@example.com',
      bio: 'Software Developer',
      profilePicture: 'https://via.placeholder.com/150',
    });
  }),
  http.put('/user', () => {
    return HttpResponse.json();
  }),
];
