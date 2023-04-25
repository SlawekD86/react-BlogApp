import { Card, Row, Button, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { postsByCategory } from '../../redux/categoriesRedux';
import { Link } from 'react-router-dom';
import React from 'react';

const CategoryPostList = ({ category }) => {
  const posts = useSelector((state) => postsByCategory(state, category));

  return (
    <Row>
      {posts.map((post) => (
        <Col key={post.id} className="my-3">
          <Card>
            <Card.Body>
              <Card.Title>{post.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{post.publishedDate}</Card.Subtitle>
              <Card.Text className='pt-2 mb-0'><strong>Author:</strong> {post.author}</Card.Text>
              <Card.Text><strong>Category:</strong>{post.category}</Card.Text>
              <Card.Body><strong>Description:</strong> <div dangerouslySetInnerHTML={{ __html: post.content }} /></Card.Body>
              <Link to={`/post/${post.id}`}><Button variant="primary">Read More</Button></Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  )
};

export default CategoryPostList;