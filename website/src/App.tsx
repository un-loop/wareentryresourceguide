import * as React from "react";
import { Button, Checkbox, Col, FormGroup, Grid, Modal, Radio, Row } from "react-bootstrap";
import FilterableOrganizationList from "./FilterableOrganizationList";
import "./modal.css";
import Organization from "./Organization";

const organizations = new Array<Organization>(
  new Organization(
    "Washington State Employment Security Department",
    new Array<string>("All"),
    "P.O. Box 9046, Olympia, WA 98507",
    "(360) 902-9500",
    "https://esd.wa.gov",
    "",
    "Provides unemployment benefits, and jobs and training resources. ",
    new Array<string>("Employment", "Education", "Other"),
    true,
    true,
  ),
  new Organization(
    "WorkSource",
    new Array<string>("All"),
    "",
    "(888) 316-5627",
    "https://www.worksourcewa.com",
    "",
    "Job training and assistance with job search.",
    new Array<string>("Employment", "Other"),
    true,
    true,
  ),
  new Organization(
    "Washington State Department of Licensing",
    new Array<string>("All"),
    "P.O. Box 9020, Olympia, WA 98507",
    "(360) 902-3600",
    "https://fortress.wa.gov/dol/dolprod/dsdreinstatements/",
    "",
    "Assistance reinstating driver's license.",
    new Array<string>("Legal", "Other"),
    true,
    true,
  ),
  new Organization(
    "The Northwest Justice Project",
    new Array<string>("All"),
    "401 Second Avenue S., Suite 407, Seattle, WA 98104",
    "(888) 201-1012",
    "https://nwjustice.org",
    "",
    "Legal aid program providing assistance to low-income people.",
    new Array<string>("Legal"),
    true,
    true,
  ),
  new Organization(
    "Choices and Changes, Inc.",
    new Array<string>("Benton"),
    "1236 Columbia Park Trail, Richland, WA 99352",
    "(509) 735-7899",
    "http://tcchoicesandchanges.com/",
    "vyaselsky@tcchoicesandchanges.com",
    "Choices & Changes' ultimate goal for chemical substance abuse...",
    new Array<string>("Health"),
  ),
  new Organization(
    "Oxford House Mahan",
    new Array<string>("Benton"),
    "707 Benham Street, Richland, WA 99352",
    "(509) 578-1042",
    "http://www.transitionalhousing.org/li/oxfordhousemahan",
    "",
    "Oxford House Mahan is a self-run, self-supported recovery house for recovering alcoholics and drug addicts.",
    new Array<string>("Housing"),
    false,
    true,
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
  public render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col sm={12} md={12}>
              <h1>Washington Re-entry Connect</h1>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={12}>
              <FilterableOrganizationList organizations={organizations}/>
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
                  <Checkbox>Benton</Checkbox>
                  <Checkbox>Chelan</Checkbox>
                  <Checkbox>Clark</Checkbox>
                  <Checkbox>Cowlitz</Checkbox>
                  <Checkbox>Douglas</Checkbox>
                  <Checkbox>Grant</Checkbox>
                  <Checkbox>Grays Harbor</Checkbox>
                  <Checkbox>Island</Checkbox>
                  <Checkbox>Jefferson</Checkbox>
                  <Checkbox>King</Checkbox>
                  <Checkbox>Kitsap</Checkbox>
                  <Checkbox>Kittitas</Checkbox>
                  <Checkbox>Lewis</Checkbox>
                  <Checkbox>Mason</Checkbox>
                  <Checkbox>Okanogan</Checkbox>
                  <Checkbox>Pierce</Checkbox>
                  <Checkbox>Snohomish</Checkbox>
                  <Checkbox>Spokane</Checkbox>
                  <Checkbox>Stevens</Checkbox>
                  <Checkbox>Thurston</Checkbox>
                  <Checkbox>Walla Walla</Checkbox>
                  <Checkbox>Whatcom</Checkbox>
                  <Checkbox>Whitman</Checkbox>
                  <Checkbox>Yakima</Checkbox>
                </Col>
                <Col lg={4}>
                  <h1>I'm looking for these services:</h1>
                  <h4><i>You can select multiple services</i></h4>
                  <Checkbox>Childcare</Checkbox>
                  <Checkbox>Education</Checkbox>
                  <Checkbox>Employment</Checkbox>
                  <Checkbox>Health</Checkbox>
                  <Checkbox>Housing</Checkbox>
                  <Checkbox>Legal</Checkbox>
                  <Checkbox>Other</Checkbox>
                </Col>
                <Col lg={4}>
                  <h1>I identify as:</h1>
                  <h4>You can only select one</h4>
                  <FormGroup>
                    <Radio name="radioGroup">Female</Radio>
                    <Radio name="radioGroup">Male</Radio>
                    <Radio name="radioGroup">Prefer not to specify</Radio>
                  </FormGroup>
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
}

export default App;
