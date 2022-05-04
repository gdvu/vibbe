export interface BorderRadius {
  brXsmall?: boolean;
  brSmall?: boolean;
  brMedium?: boolean;
  brLarge?: boolean;
  brXlarge?: boolean;
  brRounded?: boolean;
}

export interface BorderWidth {
  bw1?: boolean;
  bw2?: boolean;
  bw3?: boolean;
  bw4?: boolean;
  bw5?: boolean;

  bwt1?: boolean;
  bwt2?: boolean;
  bwt3?: boolean;
  bwt4?: boolean;
  bwt5?: boolean;

  bwbt?: boolean;
  bwb2?: boolean;
  bwb3?: boolean;
  bwb4?: boolean;
  bwb5?: boolean;

  bwl1?: boolean;
  bwl2?: boolean;
  bwl3?: boolean;
  bwl4?: boolean;
  bwl5?: boolean;

  bwr1?: boolean;
  bwr2?: boolean;
  bwr3?: boolean;
  bwr4?: boolean;
  bwr5?: boolean;
}

export type Borders = BorderRadius & BorderWidth;
