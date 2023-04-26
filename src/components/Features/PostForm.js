// @ts-nocheck
import React, { useState, useMemo } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useForm } from 'react-hook-form';
import { getCategories } from '../../redux/categoriesRedux';
import { useSelector } from 'react-redux';

const PostForm = ({ action, actionText, ...props }) => {
  const [title, setTitle] = useState(props.title || '');
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || "");
  const [author, setAuthor] = useState(props.author || '');
  const [content, setContent] = useState(props.content || '');
  const Allcategories = useSelector(getCategories)
  const [category, setCategory] = useState(props.category || '');

  const { register, handleSubmit: validate, formState: { errors }, setValue } = useForm();

  const handleSubmit = (e) => {
    action({ title, author, publishedDate, content, category });
  };

  // date picker handles default date string value in format YYYY-MM-DD - but default value from initial state is DD-MM-YYYY - causes not displaying value from initial state object
  const parsedDate = useMemo(() => new Date(publishedDate), [publishedDate]);
  const date = useMemo(() => ({ day: (parsedDate.getDate()).toString().padStart(2, 0), month: (parsedDate.getMonth() + 1).toString().padStart(2, 0), year: parsedDate.getFullYear() }), [parsedDate]);
  const defaultDate = useMemo(() => `${date.year}-${date.month}-${date.day}`, [date]);


  return (
    <div className="d-flex justify-content-center mt-5">
      <Col xs={6} md={6} lg={6}>
        <Form onSubmit={validate(handleSubmit)}>
          <Form.Group className="mb-3" controlId="postInformations">
            <Form.Label><strong>Title</strong></Form.Label>
            <Form.Control  {...register("title", { required: true, minLength: 3 })} type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter title" style={{ width: '70%' }} />
            {errors.title && <small className="d-block form-text text-danger">This field is required with at least 3 characters</small>}
            <Form.Label className="pt-3"><strong>Date</strong></Form.Label>
            <Form.Control  {...register("date", { required: true, minLength: 3 })} value={defaultDate} type="date" onChange={(e) => setPublishedDate(e.target.value)} placeholder="Enter date" style={{ width: '70%' }} />
            {errors.date && <small className="d-block form-text text-danger">This field is required</small>}
            <Form.Label className="pt-3"><strong>Name</strong></Form.Label>
            <Form.Control {...register("author", { required: true, minLength: 3 })} type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Enter name" style={{ width: '70%' }} />
            {errors.author && <small className="d-block form-text text-danger">Should not be empty and longer than 3 characters</small>}
            <Form.Label className="pt-3"><strong>Category</strong></Form.Label>
            <Form.Select aria-label="select" value={category} {...register("category", { required: true })} onChange={(e) => setCategory(e.target.value)} style={{ width: '70%' }}>
              {Allcategories.map((category) => {
                return (
                  <option key={category} value={category}>{category}</option>
                );
              })}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
            <Form.Label><strong>Content</strong></Form.Label>
            <ReactQuill  {...register("content", { required: true, max: 20 })} theme="snow" placeholder='Write something here ...' value={content} onChange={(value) => { setValue('content', value); setContent(value) }}></ReactQuill>
            {errors.content && <small className="d-block form-text text-danger">Should not be empty and have at least 20 characters</small>}
          </Form.Group>
          <Button variant="info" type="submit" >Add Post</Button>

        </Form>
      </Col>
    </div >
  );
};
export default PostForm;