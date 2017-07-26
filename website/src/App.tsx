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
  counter: number;
}

class App extends React.Component<{}, IAppState> {
  constructor() {
    super();
    this.state = {
      counter: 0,
      showModal: true,
    };
    this.close = this.close.bind(this);
    this.updateCounter = this.updateCounter.bind(this);
  }

  public updateCounter(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.checked) {
      this.setState({ counter: this.state.counter + 1 });
    } else {
      this.setState({ counter: this.state.counter - 1 });
    }
  }

  public close() {
    this.setState({ showModal: false });
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
              <CountyFilterSelect />
            </Col>
            <Col sm={12} md={4}>
              <GenderFilterSelect />
            </Col>
            <Col sm={12} md={4}>
              <ServiceFilterSelect />
            </Col>
          </Row>
          <Row>
            <Col>
              <OrganizationList organizations={organizations} />
            </Col>
          </Row>
        </Grid>
        <Modal show={this.state.showModal} onHide={this.close} dialogClassName="custom-modal">
          <Modal.Header />
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
                  <Checkbox onChange={this.updateCounter}>Benton</Checkbox>
                  <Checkbox onChange={this.updateCounter}>Chelan</Checkbox>
                  <Checkbox onChange={this.updateCounter}>Clark</Checkbox>
                  <Checkbox onChange={this.updateCounter}>Cowlitz</Checkbox>
                  <Checkbox onChange={this.updateCounter}>Douglas</Checkbox>
                  <Checkbox onChange={this.updateCounter}>Grant</Checkbox>
                  <Checkbox onChange={this.updateCounter}>Grays Harbor</Checkbox>
                  <Checkbox onChange={this.updateCounter}>Island</Checkbox>
                  <Checkbox onChange={this.updateCounter}>Jefferson</Checkbox>
                  <Checkbox onChange={this.updateCounter}>King</Checkbox>
                  <Checkbox onChange={this.updateCounter}>Kitsap</Checkbox>
                  <Checkbox onChange={this.updateCounter}>Kittitas</Checkbox>
                  <Checkbox onChange={this.updateCounter}>Lewis</Checkbox>
                  <Checkbox onChange={this.updateCounter}>Mason</Checkbox>
                  <Checkbox onChange={this.updateCounter}>Okanogan</Checkbox>
                  <Checkbox onChange={this.updateCounter}>Pierce</Checkbox>
                  <Checkbox onChange={this.updateCounter}>Snohomish</Checkbox>
                  <Checkbox onChange={this.updateCounter}>Spokane</Checkbox>
                  <Checkbox onChange={this.updateCounter}>Stevens</Checkbox>
                  <Checkbox onChange={this.updateCounter}>Thurston</Checkbox>
                  <Checkbox onChange={this.updateCounter}>Walla Walla</Checkbox>
                  <Checkbox onChange={this.updateCounter}>Whatcom</Checkbox>
                  <Checkbox onChange={this.updateCounter}>Whitman</Checkbox>
                  <Checkbox onChange={this.updateCounter}>Yakima</Checkbox>
                </Col>
                <Col lg={4}>
                  <h1>I'm looking for these services:</h1>
                  <h4><i>You can select multiple services</i></h4>
                  <Checkbox onChange={this.updateCounter}>Childcare</Checkbox>
                  <Checkbox onChange={this.updateCounter}>Education</Checkbox>
                  <Checkbox onChange={this.updateCounter}>Employment</Checkbox>
                  <Checkbox onChange={this.updateCounter}>Health</Checkbox>
                  <Checkbox onChange={this.updateCounter}>Housing</Checkbox>
                  <Checkbox onChange={this.updateCounter}>Legal</Checkbox>
                  <Checkbox onChange={this.updateCounter}>Other</Checkbox>
                </Col>
                <Col lg={4}>
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
                  <Button disabled={this.state.counter === 0} bsSize="large" onClick={this.close}>
                    Show Results Now</Button>
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
