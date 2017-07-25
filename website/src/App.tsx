import * as React from "react";
import { Col, Grid, Row } from "react-bootstrap";
import CountyFilterSelect from "./CountyFilterSelect";
import GenderFilterSelect from "./GenderFilterSelect";
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

class App extends React.Component<{}, {}> {
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
      </div>
    );
  }
}

export default App;
