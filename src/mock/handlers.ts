import { http, HttpResponse } from 'msw';

const userData = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  bio: 'Software Developer',
  profilePicture: 'https://picsum.photos/200/300',
};

export const handlers = [
  http.get('/user', () => {
    return HttpResponse.json(userData);
  }),
];
