import * as React from "react";
import { Col, Panel } from "react-bootstrap";
import CountyFilterContainer from "../Containers/CountyFilterContainer";
import GenderFilterContainer from "../Containers/GenderFilterContainer";
import ServiceCategoryFilterContainer from "../Containers/ServiceCategoryFilterContainer";

export class Filter extends React.Component<{}, {}> {
  public render()
  {
    return (
      <div>
        <div>
          <Panel header={<h1>Find services...</h1>} bsStyle="info">
            <Col sm={12} md={4}>
              <CountyFilterContainer/>
            </Col>
            <Col sm={12} md={4}>
              <ServiceCategoryFilterContainer/>
            </Col>
            <Col sm={12} md={4}>
              <GenderFilterContainer/>
            </Col>
        </Panel>
        </div>
      </div>
    );
  }
}
