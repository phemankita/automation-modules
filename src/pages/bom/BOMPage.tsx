import React from 'react';
import {Column, Grid, Row} from 'carbon-components-react';

import {Bom} from '../../components';

export class BOMPage extends React.Component<any, any> {

  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Column lg={{span: 12}} md={{span: 8}} sm={{span: 4}}>
              <h1>BOM catalog</h1>
            </Column>
          </Row>
          <Row>
            <Column lg={{span: 10}} md={{span: 6}} sm={{span: 4}}>
              <Bom />
              {/*<p>BOM Catalog Menu</p>*/}
            </Column>
          </Row>
        </Grid>
      </div>
    );
  }
}
