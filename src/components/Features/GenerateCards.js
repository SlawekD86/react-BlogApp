import React from 'react';
import { Card, Row, Button, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { getAllPosts } from '../../redux/postsRedux';
import { Link } from 'react-router-dom';

const GenerateCards = () => {
  const posts = useSelector(getAllPosts);
  console.log(posts);

  return (
    <Row>
      {posts.map((post) => (
        <Col xs={12} md={6} lg={4} key={post.id} className="my-3">
          <Card>
            <Card.Body>
              <Card.Title>{post.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{post.publishedDate}</Card.Subtitle>
              <Card.Text className='pt-2 mb-0'><strong>Author:</strong> {post.author}</Card.Text>
              <Card.Text><strong>Description:</strong> {post.content}</Card.Text>
              <Link to={`/post/${post.id}`}>
                <Button variant="primary" >Read More</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>

  )
};
export default GenerateCards;