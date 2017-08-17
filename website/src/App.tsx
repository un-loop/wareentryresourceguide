import * as React from "react";
import { Col, Grid, Row } from "react-bootstrap";
import OrganizationListContainer from "./Containers/OrganizationListContainer";
import { Filter } from "./Presenters/Filter";

export class App extends React.Component<{}, {}> {
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
              <Filter/>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={12}>
              <OrganizationListContainer/>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
