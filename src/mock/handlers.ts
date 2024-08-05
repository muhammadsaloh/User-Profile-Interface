import { http, HttpResponse } from 'msw';

const userData = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  bio: 'Software Developer',
  profilePicture: 'https://picsum.photos/id/91/300/200'
};

export const handlers = [
  http.get('/user', () => {
    return HttpResponse.json(userData);
  })
];
