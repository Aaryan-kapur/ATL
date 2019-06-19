import React, { Component } from "react";
// import axios from "axios";
import {
  MDBInput,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem
} from "mdbreact";
import Nav from "./Nav";
import * as $ from "jquery";

class App extends Component {
  handleSubmit = event => {
    event.preventDefault();
    // Variable to hold request
    var request;

    // Bind to the submit event of our form
    $("#foo").submit(function(event) {
      // Abort any pending request
      if (request) {
        request.abort();
      }
      // setup some local variables
      var $form = $(this);

      // Let's select and cache all the fields
      var $inputs = $form.find("input, select, button, textarea");

      // Serialize the data in the form
      var serializedData = $form.serialize();

      // Let's disable the inputs for the duration of the Ajax request.
      // Note: we disable elements AFTER the form data has been serialized.
      // Disabled form elements will not be serialized.
      $inputs.prop("disabled", true);

      // Fire off the request to /form.php
      var payload = {
        url:
          "https://script.google.com/macros/s/AKfycbyGRUEIfe7aWNaSjL7RjwNlP_lcTXslt_GnFgBoKMOuuHwaq0lq/exec",
        method: "POST",
        dataType: "jsonp",
        data: serializedData
      };
      request = $.ajax(payload);

      // Callback handler that will be called on success
      request.done(function(response, textStatus, jqXHR) {
        // Log a message to the console
        console.log("Hooray, it worked!");
        console.log(response);
        console.log(textStatus);
        console.log(jqXHR);
      });

      // Callback handler that will be called on failure
      request.fail(function(jqXHR, textStatus, errorThrown) {
        // Log the error to the console
        console.error(
          "The following error occurred: " + textStatus,
          errorThrown
        );
      });

      // Callback handler that will be called regardless
      // if the request failed or succeeded
      request.always(function() {
        // Reenable the inputs
        $inputs.prop("disabled", false);
      });

      // Prevent default posting of form
      event.preventDefault();
    });

    // const user = {
    //   uniqueid: this.state.uniqueid,
    //   name: this.state.name,
    //   school: this.state.school,
    //   designation: this.state.designation,
    //   mobile: this.state.mobile,
    //   email: this.state.email

    // };

    // axios.post(`https://perplexed.tech/atl`, { user })
    //   .then(res => {
    //     console.log(res);
    //     console.log(res.data);
    //   })
  };

  constructor(props) {
    super(props);
    this.state = {
      uniqueid: "",
      username: "",
      school: "",
      designation: "",
      mobile: "",
      email: ""
    };
  }

  render() {
    return (
      <React.Fragment>
        <Nav />

        <div className="App">
          <div className="container">
            <p className="title">Atal Tinkering Labs</p>
            <div className="dabba">
              <form id="foo" onSubmit={this.handleSubmit}>
                <MDBInput
                  label="Unique ID"
                  type="text"
                  name="uniqueid"
                  id="uniqueid"
                  value={this.state.uniqueid}
                  onChange={e => this.setState({ uniqueid: e.target.value })}
                />{" "}
                <MDBInput
                  label="Name"
                  type="text"
                  name="username"
                  id="username"
                  value={this.state.name}
                  onChange={e => this.setState({ username: e.target.value })}
                />
                <MDBInput
                  label="School"
                  type="text"
                  name="school"
                  id="school"
                  value={this.state.school}
                  onChange={e => this.setState({ school: e.target.value })}
                />{" "}
                <MDBInput
                  label="Designation"
                  type="text"
                  name="designation"
                  id="designation"
                  value={this.state.designation}
                  onChange={e => this.setState({ designation: e.target.value })}
                />{" "}
                <MDBInput
                  label="Contact Number"
                  type="number"
                  name="mobile"
                  id="mobile"
                  value={this.state.mobile}
                  onChange={e => this.setState({ mobile: e.target.value })}
                />{" "}
                <MDBInput
                  label="E-Mail"
                  type="email"
                  name="email"
                  id="email"
                  value={this.state.email}
                  onChange={e => this.setState({ email: e.target.value })}
                />{" "}
                <MDBDropdown dropright className="dropdown ">
                  <MDBDropdownToggle caret color="primary">
                    Select Event Location
                  </MDBDropdownToggle>
                  <MDBDropdownMenu basic>
                    <MDBDropdownItem>A</MDBDropdownItem>
                    <MDBDropdownItem> B</MDBDropdownItem>
                    <MDBDropdownItem>C</MDBDropdownItem>
                    <MDBDropdownItem>A</MDBDropdownItem>
                    <MDBDropdownItem> B</MDBDropdownItem>
                    <MDBDropdownItem>C</MDBDropdownItem>
                    <MDBDropdownItem>A</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
                <div className="buttonDabba">
                  <button type="submit" className=" btn button ">
                    {" "}
                    Submit
                  </button>
                </div>
              </form>
            </div>{" "}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
