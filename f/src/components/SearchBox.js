import { Form, Button, InputGroup, FormControl, Nav } from 'react-bootstrap';
import { Cart } from 'react-bootstrap-icons';
import './SearchBox.css';
import React, { useState } from 'react';

export default function SearchBox() {
  const [isActive, setActive] = useState(false);
  const toggleClass = () => {
    setActive(!isActive);
  };
  return (
    <div
      className={`search-menu ${isActive ? 'open' : ''}`}
      onClick={toggleClass}
    >
      <Form className="d-flex me-auto search-form">
        <InputGroup>
          <FormControl
            type="text"
            name="q"
            id="q"
            placeholder="Search here"
            aria-label="Search Products"
            aria-describedby="button-search"
          ></FormControl>
          <Button variant="outline-dark" type="submit" id="button-search">
            <i className="fas fa-search"></i>
          </Button>
        </InputGroup>
      </Form>
    </div>
  );
}
