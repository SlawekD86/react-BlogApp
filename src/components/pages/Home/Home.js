import React from 'react';
import GenerateCards from '../../Features/GenerateCards';
import SiteTitle from '../../SiteTitle/SiteTitle';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div className="d-flex justify-content-between">
        <SiteTitle>All Posts</SiteTitle>
        <Link to='/post/add'><Button variant="outline-info">Add Post</Button></Link>
      </div>
      <GenerateCards />
    </div>
  );
};
export default Home;