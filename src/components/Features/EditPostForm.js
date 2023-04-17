import { useDispatch } from 'react-redux';
import { editPost } from '../../redux/postsRedux';
import { Navigate, useNavigate } from 'react-router-dom';
import PostForm from './PostForm';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getPostsById } from '../../redux/postsRedux';

const EditPostForm = () => {
    const { id } = useParams();
    const post = useSelector((state) => getPostsById(state, id));

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = (post) => {
        dispatch(editPost({ ...post, id }));
        navigate('/');
    };

    if (!post) return <Navigate to="/" />;
    else return <PostForm action={handleSubmit} actionText="Edit Post" title={post.title} author={post.author} publishedDate={post.publishedDate} content={post.content}></PostForm>;
};

export default EditPostForm;