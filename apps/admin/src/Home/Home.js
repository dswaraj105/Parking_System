import Container from '@mui/material/Container';
import HomeLogo from './HomeLogo/HomeLogo';
import Controls from './Controls/Controls';
import Form from './UploadForm/Form';
import classes from './Home.module.css';

const Home = () => {

  return (
    <Container>
      <HomeLogo />
      <div className={classes.box}>
        <Controls />
        <Form />
      </div>
    </Container>
  );
}

export default Home;