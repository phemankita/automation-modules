import React from 'react';

import './Bom.scss';

import {
  Tile,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Grid,
  Row,
  Column,
  ClickableTile,
} from 'carbon-components-react';

class BomInternal extends React.Component<any, any> {

  render() {
    return (
      <div className="bx--grid">
        <div className="bx--row">
          <div className="bx--col, row-margin">
            <ClickableTile>
              <Grid>
                <Row>
                  <Column className="dimensions">
                    <Breadcrumb noTrailingSlash>
                      <BreadcrumbItem>
                        <a href="/">AWS</a>
                      </BreadcrumbItem>
                    </Breadcrumb>
                  </Column>
                </Row>
                <Row>
                  <Column>
                    <div className="custom">
                      <ul>
                        <li>OpenShift Cluster</li>
                        <li>CloudPak for Integration</li>
                      </ul>
                    </div>
                  </Column>
                </Row>
                <Row>
                  <Column>
                    <a
                      href="./boms/cp4i_aws.yaml"
                      download="cp4i_aws.yaml"
                      target="_blank">
                      <Button>Download</Button>
                    </a>
                  </Column>
                  <Column>
                    <Button>Deploy</Button>
                  </Column>
                </Row>
              </Grid>
            </ClickableTile>
          </div>
        </div>
      </div>
    )
  }
}

export const Bom = BomInternal
