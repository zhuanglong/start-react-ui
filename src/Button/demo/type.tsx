import React from 'react';
import { Button } from 'start-react-ui';

export default () => (
  <div id="components-button-demo-btn">
    <Button>default</Button>
    <Button type="primary">primary</Button>
    <Button type="info">info</Button>
    <Button disabled>disabled</Button>
    <Button size="lg">disabled</Button>
    <Button type="link" href="https://www.baidu.com/">
      link
    </Button>
  </div>
);
