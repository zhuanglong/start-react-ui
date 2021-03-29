import React from 'react';
import { Button } from 'start-react-ui';

export default () => (
  <div id="components-button-demo-btn">
    <Button size="lg">Default(large)</Button>
    <Button type="primary" size="md">
      Primary(default)
    </Button>
    <Button type="info" size="sm">
      Info(small)
    </Button>
    <Button type="link" href="#" size="sm">
      Link(small)
    </Button>
  </div>
);
