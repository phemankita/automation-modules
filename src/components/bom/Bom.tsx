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

import {bomCloudProvider, bomPath, bomName, BomModel} from '../../models';

export interface BomProps {
  bom: BomModel
}

class BomInternal extends React.Component<BomProps, any> {

  render() {
    return this.renderTile()
  }

  renderTile() {
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
                        <a href="/">{this.bomCloudProvider}</a>
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
                  <Column className="button">
                    <a
                      href={this.bomPath}
                      download={this.bomName}
                      target="_blank">
                      <Button>Download</Button>
                    </a>
                  </Column>
                  <Column className="button">
                    <Button disabled>Deploy</Button>
                  </Column>
                </Row>
              </Grid>
            </ClickableTile>
          </div>
        </div>
      </div>
    )
  }

  get bomCloudProvider(): string {
   return bomCloudProvider(this.props.bom)
  }

  get bomPath(): string {
   return bomPath(this.props.bom)
  }

  get bomName(): string {
   let name: string = bomName(this.props.bom)
   return name + '.yaml'
  }

}

export const Bom = BomInternal
