import React from 'react';
import { Button } from 'start-react-ui';

export default () => (
  <div id="components-button-demo-btn">
    <Button>Default</Button>
    <Button type="primary">Primary</Button>
    <Button type="info">Info</Button>
    <Button type="link" href="#">
      Link
    </Button>
  </div>
);
