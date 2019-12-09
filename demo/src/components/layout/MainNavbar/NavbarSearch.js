import React from "react";
import {
  Form,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormInput
} from "shards-react";


class SidebarMainNavbar extends React.Component{

  
  render() {
    return(
      <Form className="main-navbar__search w-100 d-none d-md-flex d-lg-flex">
      <InputGroup seamless className="ml-3">
        <InputGroupAddon type="prepend">
          <InputGroupText>
            <i className="material-icons">search</i>
          </InputGroupText>
        </InputGroupAddon>
        <FormInput
          className="navbar-search"
          placeholder="Search for something..."
        />
      </InputGroup>
    </Form>
    );
  };
}


export default SidebarMainNavbar