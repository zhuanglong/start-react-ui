import React from 'react';
import { Button } from 'start-react-ui';

export default () => (
  <div id="components-button-demo-btn">
    <Button disabled>Default(disabled)</Button>
    <Button type="primary" disabled>
      Primary(disabled)
    </Button>
    <Button type="info" disabled>
      Info(disabled)
    </Button>
    <Button type="link" href="#" disabled>
      Link(disabled)
    </Button>
  </div>
);
