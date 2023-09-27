import React from 'react';
import Drawer from '../../components/Drawers';
import { IosScreenWrapper } from '../../components/ScreenWrapper'
import colors from '../../styles/theme';

export default function Landing():JSX.Element {
  return (
    <IosScreenWrapper>
      <Drawer/>
    </IosScreenWrapper>
  );
}


