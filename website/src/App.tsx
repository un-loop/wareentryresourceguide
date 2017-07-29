import * as React from "react";
import { Button, Col, FormGroup, Grid, Modal, Row } from "react-bootstrap";
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
  constructor()
  {
    super();
    this.state = {
      counter: 0,
      showModal: true,
    };
    this.close = this.close.bind(this);
    this.updateCounter = this.updateCounter.bind(this);
  }
  public render()
  {
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
                  <FormGroup>
                  <div className="checkbox">
                    <label>
                      <input name="Benton" type="checkbox" onChange={this.updateCounter} />
                      Benton
                    </label>
                  </div>
                  <div className="checkbox">
                    <label>
                      <input name="Chelan" type="checkbox" onChange={this.updateCounter} />
                      Chelan
                    </label>
                  </div>
                  <div className="checkbox">
                    <label>
                      <input name="Clark" type="checkbox" onChange={this.updateCounter} />
                      Clark
                    </label>
                  </div>
                  <div className="checkbox">
                    <label>
                      <input name="Cowlitz" type="checkbox" onChange={this.updateCounter} />
                      Cowlitz
                    </label>
                  </div>
                  <div className="checkbox">
                    <label>
                      <input name="Douglas" type="checkbox" onChange={this.updateCounter} />
                      Douglas
                    </label>
                  </div>
                  <div className="checkbox">
                    <label>
                      <input name="Grant" type="checkbox" onChange={this.updateCounter} />
                      Grant
                    </label>
                  </div>
                  <div className="checkbox">
                    <label>
                      <input name="Grays Harbor" type="checkbox" onChange={this.updateCounter} />
                      Grays Harbor
                    </label>
                  </div>
                  <div className="checkbox">
                    <label>
                      <input name="Island" type="checkbox" onChange={this.updateCounter} />
                      Island
                    </label>
                  </div>
                  <div className="checkbox">
                    <label>
                      <input name="Jefferson" type="checkbox" onChange={this.updateCounter} />
                      Jefferson
                    </label>
                  </div>
                  <div className="checkbox">
                    <label>
                      <input name="King" type="checkbox" onChange={this.updateCounter} />
                      King
                    </label>
                  </div>
                  <div className="checkbox">
                    <label>
                      <input name="Kitsap" type="checkbox" onChange={this.updateCounter} />
                      Kitsap
                    </label>
                  </div><div className="checkbox">
                    <label>
                      <input name="Kittitas" type="checkbox" onChange={this.updateCounter} />
                      Kittitas
                    </label>
                  </div>
                  <div className="checkbox">
                    <label>
                      <input name="Lewis" type="checkbox" onChange={this.updateCounter} />
                      Lewis
                    </label>
                  </div>
                  <div className="checkbox">
                    <label>
                      <input name="Mason" type="checkbox" onChange={this.updateCounter} />
                      Mason
                    </label>
                  </div>
                  <div className="checkbox">
                    <label>
                      <input name="Okanogan" type="checkbox" onChange={this.updateCounter} />
                      Okanogan
                    </label>
                  </div>
                  <div className="checkbox">
                    <label>
                      <input name="Pierce" type="checkbox" onChange={this.updateCounter} />
                      Pierce
                    </label>
                  </div>
                  <div className="checkbox">
                    <label>
                      <input name="Snohomish" type="checkbox" onChange={this.updateCounter} />
                      Snohomish
                    </label>
                  </div>
                  <div className="checkbox">
                    <label>
                      <input name="Spokane" type="checkbox" onChange={this.updateCounter} />
                      Spokane
                    </label>
                  </div>
                  <div className="checkbox">
                    <label>
                      <input name="Stevens" type="checkbox" onChange={this.updateCounter} />
                      Stevens
                    </label>
                  </div>
                  <div className="checkbox">
                    <label>
                      <input name="Thurston" type="checkbox" onChange={this.updateCounter} />
                      Thurston
                    </label>
                  </div>
                  <div className="checkbox">
                    <label>
                      <input name="Walla Walla" type="checkbox" onChange={this.updateCounter} />
                      Walla Walla
                    </label>
                  </div>
                  <div className="checkbox">
                    <label>
                      <input name="Whatcom" type="checkbox" onChange={this.updateCounter} />
                      Whatcom
                    </label>
                  </div>
                  <div className="checkbox">
                    <label>
                      <input name="Whitman" type="checkbox" onChange={this.updateCounter} />
                      Whitman
                    </label>
                  </div>
                  <div className="checkbox">
                    <label>
                      <input name="Yakima" type="checkbox" onChange={this.updateCounter} />
                      Yakima
                    </label>
                  </div>
                  </FormGroup>
                </Col>
                <Col lg={4}>
                  <h1>I'm looking for these services:</h1>
                  <h4><i>You can select multiple services</i></h4>
                  <FormGroup>
                  <div className="checkbox">
                    <label>
                      <input name="Childcare" type="checkbox" onChange={this.updateCounter} />
                      Childcare
                    </label>
                  </div>
                  <div className="checkbox">
                    <label>
                      <input name="Education" type="checkbox" onChange={this.updateCounter} />
                      Education
                    </label>
                  </div>
                  <div className="checkbox">
                    <label>
                      <input name="Employment" type="checkbox" onChange={this.updateCounter} />
                      Employment
                    </label>
                  </div>
                  <div className="checkbox">
                    <label>
                      <input name="Health" type="checkbox" onChange={this.updateCounter} />
                      Health
                    </label>
                  </div>
                  <div className="checkbox">
                    <label>
                      <input name="Housing" type="checkbox" onChange={this.updateCounter} />
                      Housing
                    </label>
                  </div>
                  <div className="checkbox">
                    <label>
                      <input name="Legal" type="checkbox" onChange={this.updateCounter} />
                      Legal
                    </label>
                  </div>
                  <div className="checkbox">
                    <label>
                      <input name="Other" type="checkbox" onChange={this.updateCounter} />
                      Other
                    </label>
                  </div>
                  </FormGroup>
                </Col>
                <Col lg={4}>
                  <h1>I identify as:</h1>
                  <h4>You can only select one</h4>
                 <FormGroup>
                  <div className="radio">
                    <label>
                      <input type="radio" value="female" name="gender" onChange={this.updateCounter}/>
                      Female
                    </label>
                  </div>
                  <div className="radio">
                    <label>
                      <input type="radio" value="male" name="gender" onChange={this.updateCounter}/>
                       Male
                    </label>
                  </div>
                  <div className="radio">
                    <label>
                      <input type="radio" value="pnts" name="gender" onChange={this.updateCounter}/>
                      Prefer not to specify
                    </label>
                  </div>
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

  public updateCounter(event: any)
  {
    const input = event.target as HTMLInputElement;
    if (input.checked)
    {
      this.setState({ counter: this.state.counter + 1 });
    }
    else
    {
      this.setState({ counter: this.state.counter - 1 });
    }
  }

  public close()
  {
    this.setState({ showModal: false });
  }
}

export default App;
