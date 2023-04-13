import GenerateCards from '../../Features/GenerateCards';
import SiteTitles from '../../SiteTitles/SiteTitles';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div className="d-flex justify-content-between">
        <SiteTitles>All Posts</SiteTitles>
        <Link to='/post/add'><Button variant="outline-info">Add Post</Button></Link>
      </div>
      <GenerateCards />
    </div>
  );
};
export default Home;