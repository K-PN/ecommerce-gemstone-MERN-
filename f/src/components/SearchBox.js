import { Form, Button, InputGroup, FormControl, Nav } from 'react-bootstrap';
import './SearchBox.css';

export default function SearchBox() {
  return (
    <Form className="d-flex me-auto">
      <InputGroup>
        <FormControl
          type="text"
          name="q"
          id="q"
          placeholder="search here"
          aria-label="Search Products"
          aria-describedby="button-search"
        ></FormControl>
        <Button variant="outline-dark" type="submit" id="button-search">
          <i className="fas fa-search"></i>
        </Button>
      </InputGroup>
    </Form>
  );
}
