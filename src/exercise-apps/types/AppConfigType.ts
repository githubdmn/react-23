import { FunctionComponent } from 'react';

type AppConfig = {
  name: string;
  path: string;
  component: FunctionComponent;
  color?: string;
}

export default AppConfig;