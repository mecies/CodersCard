import React, { useState } from 'react';
import { Tabs as MuiTabs, TabsProps as MuiTabsProps, makeStyles } from '@material-ui/core';
import { FilterTab } from '../FilterTab/FilterTab';
export type TabsProps = MuiTabsProps;

export const FilterTabs = (props: TabsProps): JSX.Element => {
  const [value, setValue] = useState(1);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <MuiTabs {...props} onChange={handleChange} value={value}>
      <FilterTab label="All"></FilterTab>
      <FilterTab label="Mobile"></FilterTab>
      <FilterTab label="Web"></FilterTab>
      <FilterTab label="Other"></FilterTab>
    </MuiTabs>
  );
};