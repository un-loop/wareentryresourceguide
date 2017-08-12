import * as React from "react";
import { Col, Grid, Row } from "react-bootstrap";
import FilterableOrganizationList from "./Containers/FilterableOrganizationList";

class App extends React.Component<{}, {}> {
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
              <FilterableOrganizationList/>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
