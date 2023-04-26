const initialState = {
  posts: [
    {
      id: '1',
      title: 'Article title I',
      shortDescription: 'Short description of the article...',
      content: 'Sports inspire, unite, and challenge us to push our limits. They provide a platform for competition, camaraderie, and physical and mental growth.',
      publishedDate: '2022-02-02',
      author: 'John Doe',
      category: 'Sport',
    },
    {
      id: '2',
      title: 'Article title II',
      shortDescription: 'Short description of the article...',
      content: 'News inform, educate and shape our world view. They keep us up-to-date on current events and provide insight into the issues that affect us all',
      publishedDate: '2022-02-02',
      author: 'John Doe',
      category: 'News',
    },
    {
      id: '3',
      title: 'Article title III',
      shortDescription: 'Short description of the article...',
      content: 'Movies offer escape, entertainment and education. They connect us and inspire us. A form of art that will always have a special place in our hearts.',
      publishedDate: '2022-02-02',
      author: 'John Doe',
      category: 'Movies',
    },
  ],
  categories: ['Sport', 'News', 'Movies'],
};
export default initialState;