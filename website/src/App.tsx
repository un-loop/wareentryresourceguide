import * as React from "react";
import { Button, Checkbox, Col, Grid, Modal, Radio, Row } from "react-bootstrap";
import CountyFilterSelect from "./CountyFilterSelect";
import GenderFilterSelect from "./GenderFilterSelect";
import "./modal.css";
import Organization from "./Organization";
import OrganizationList from "./OrganizationList";
import ServiceFilterSelect from "./ServiceFilterSelect";

const organizations = new Array<Organization>(
  new Organization(
    "My cool organization",
    new Array<string>("King", "Benton"),
    "1234 Fake Address St, Seattle WA, 98103",
    "(555) 555-1234",
    "www.fakewebsite.com",
    "fakeemail@fake.com",
    "A fake organization.",
    new Array<string>("Fake stuff."),
  ),
  new Organization(
    "My cool organization",
    new Array<string>("King", "Benton"),
    "1234 Fake Address St, Seattle WA, 98103",
    "(555) 555-1234",
    "www.fakewebsite.com",
    "fakeemail@fake.com",
    "A fake organization.",
    new Array<string>("Fake stuff."),
  ),
  new Organization(
    "My cool organization",
    new Array<string>("King", "Benton"),
    "1234 Fake Address St, Seattle WA, 98103",
    "(555) 555-1234",
    "www.fakewebsite.com",
    "fakeemail@fake.com",
    "A fake organization.",
    new Array<string>("Fake stuff."),
  ),
  new Organization(
    "My cool organization",
    new Array<string>("King", "Benton"),
    "1234 Fake Address St, Seattle WA, 98103",
    "(555) 555-1234",
    "www.fakewebsite.com",
    "fakeemail@fake.com",
    "A fake organization.",
    new Array<string>("Fake stuff."),
  ),
  new Organization(
    "My cool organization",
    new Array<string>("King", "Benton"),
    "1234 Fake Address St, Seattle WA, 98103",
    "(555) 555-1234",
    "www.fakewebsite.com",
    "fakeemail@fake.com",
    "A fake organization.",
    new Array<string>("Fake stuff."),
  ),
);

interface IAppState {
  showModal: boolean;
}

class App extends React.Component<{}, IAppState> {
   constructor() {
    super();
    this.state = {
      showModal: true,
    };
    this.close = this.close.bind(this);
  }
  public close() {
    alert("HEERE");
    this.setState({ showModal: false});
  }
  public render() {
    return (
      <div>
      <Grid>
        <Row>
          <h1>Washington Re-entry Connect</h1>
        </Row>
        <Row>
          <Col sm={12} md={4}>
            <CountyFilterSelect/>
          </Col>
          <Col sm={12} md={4}>
            <GenderFilterSelect/>
          </Col>
          <Col sm={12} md={4}>
            <ServiceFilterSelect/>
          </Col>
        </Row>
        <Row>
          <Col>
            <OrganizationList organizations={organizations}/>
          </Col>
        </Row>
      </Grid>
      <Modal show={this.state.showModal} onHide={this.close} dialogClassName="custom-modal">
        <Modal.Header closeButton = {true}>
          <Modal.Title>Washington Re-entry Connector</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h1>Washington Re-Entry Connector</h1>
            <h2>Resources for formerly incarcerated people</h2>
            <p>The WA Re-entry Connector is meant to help people in the state of
                Washington re-enter their communities following incarceration. Please
                complete the following three statements and then click "Show results now"
            </p>
            <Grid>
              <Row>
                  <Col lg={4}>
                    <h1>I'm looking for services in this county or these counties:</h1>
                    <h4><i>You can select multiple counties if applicable.</i></h4>
                    <Checkbox>King County/Seattle</Checkbox>
                    <Checkbox>Snohomish County/Everett</Checkbox>
                    <Checkbox>Pierce County/Tacoma</Checkbox>
                    <Checkbox>Skagit County/Mount Vernon</Checkbox>
                    <Checkbox>No county requirements</Checkbox>
                  </Col>
                  <Col lg = {4}>
                    <h1>I'm looking for these services:</h1>
                    <h4><i>You can select multiple services</i></h4>
                    <Checkbox>Childcare</Checkbox>
                    <Checkbox>Education</Checkbox>
                    <Checkbox>Employment</Checkbox>
                    <Checkbox>Healtchare</Checkbox>
                    <Checkbox>Housing</Checkbox>
                    <Checkbox>Legal</Checkbox>
                    <Checkbox>Other</Checkbox>
                  </Col>
                  <Col lg = {4}>
                    <h1>I identify as:</h1>
                    <h4>You can only select one</h4>
                    <Radio>Female</Radio>
                    <Radio>Male</Radio>
                    <Radio>Prefer not to specify</Radio>
                </Col>
              </Row>
              <Row>
                <Col lg={4} />
                <Col lg={4} />
                <Col lg={4}>
                  <Button bsSize="large">Show Results Now</Button>
                </Col>
              </Row>
            </Grid>
        </Modal.Body>
      </Modal>;
      </div>
    );
  }
}

export default App;
