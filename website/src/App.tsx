import * as React from "react";
import { Col, Grid, Row } from "react-bootstrap";
import CountyFilterContainer from "./Containers/CountyFilterContainer";
import OrganizationListContainer from "./Containers/OrganizationListContainer";
import ServiceCategoryFilterContainer from "./Containers/ServiceCategoryFilterContainer";

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
            <Col sm={12} md={4}>
              <CountyFilterContainer/>
            </Col>
            <Col sm={12} md={4}>
              <ServiceCategoryFilterContainer/>
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
