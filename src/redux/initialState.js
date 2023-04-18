const initialState = {
  posts: [
    {
      id: '1',
      title: 'Article title I',
      shortDescription: 'Short description of the article...',
      content: 'Short description of the article...',
      publishedDate: '02-02-2022',
      author: 'John Doe',
      category: 'staff',
    },
    {
      id: '2',
      title: 'Article title II',
      shortDescription: 'Short description of the article...',
      content: 'Short description of the article...',
      publishedDate: '02-02-2022',
      author: 'John Doe',
      category: 'examples',
    },
    {
      id: '3',
      title: 'Article title III',
      shortDescription: 'Short description of the article...',
      content: 'Short description of the article...',
      publishedDate: '02-02-2022',
      author: 'John Doe',
      category: 'text',
    },
  ],
  categories: ['examples', 'text', 'staff'],
};
export default initialState;