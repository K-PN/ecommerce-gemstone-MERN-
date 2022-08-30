import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'


export default function SearchBox() {
    return (
        <Form className="d-flex me-auto">
            <InputGroup>
                <FormControl
                    type="text"
                    name="q"
                    id="q"
                    placeholder="search here..."
                    aria-label="Search Products"
                    aria-describedby="button-search"
                ></FormControl>
                <Button variant="outline-primary" type="submit" id="button-search">
                    <i className="fas fa-search"></i>
                </Button>
            </InputGroup>
        </Form>
    );
}