export type DisplayOptions =
  | 'inline'
  | 'block'
  | 'flex'
  | 'grid'
  | 'inline-block'
  | 'inline-flex'
  | 'inline-grid';

export interface VibbeCss {
  display?: DisplayOptions;
  width?: string;
  height?: string;
  radius?: string;
}
