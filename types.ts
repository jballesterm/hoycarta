import React from 'react';

export interface ServiceFeature {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

export interface ComparisonPoint {
  feature: string;
  hoyCarta: boolean | string;
  others: boolean | string;
}
