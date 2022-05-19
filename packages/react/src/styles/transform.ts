import { trimAll } from '../utils';

export interface TransformCSS {
  transform?: string;
  transformBox?: string;
  transformOrigin?: string;
  transformStyle?: string;
  scale?: string;
  scaleX?: string;
  scaleY?: string;
  rotate?: string;
  translate?: string;
  translateX?: string;
  translateY?: string;
  skew?: string;
  skewX?: string;
  skewY?: string;
}

export const transformCss = (vcs?: TransformCSS) => {
  const rotate = vcs?.rotate ? `rotate(${vcs?.rotate})` : '';

  const scale = vcs?.scale ? `scale(${vcs?.scale})` : '';
  const scaleX = vcs?.scaleX ? `scaleX(${vcs?.scaleX})` : '';
  const scaleY = vcs?.scaleY ? `scaleY(${vcs?.scaleY})` : '';
  const scaleFull = `${scale} ${scaleX} ${scaleY}`;

  const translate = vcs?.translate ? `translate(${vcs?.translate})` : '';
  const translateX = vcs?.translateX ? `translateX(${vcs?.translateX})` : '';
  const translateY = vcs?.translateY ? `translateY(${vcs?.translateY})` : '';
  const translateFull = `${translate} ${translateX} ${translateY}`;

  const skew = vcs?.skew ? `skew(${vcs?.skew})` : '';
  const skewX = vcs?.skewX ? `skewX(${vcs?.skewX})` : '';
  const skewY = vcs?.skewY ? `skewY(${vcs?.skewY})` : '';
  const skewFull = `${skew} ${skewX} ${skewY}`;

  const transformFull = trimAll(
    `${scaleFull} ${rotate} ${translateFull} ${skewFull}`
  );

  return `
    ${vcs?.transform ? `transform: ${vcs?.transform};` : ''}
    ${
      vcs?.rotate ||
      vcs?.scale ||
      vcs?.scaleX ||
      vcs?.scaleY ||
      vcs?.translate ||
      vcs?.translateX ||
      vcs?.translateY ||
      vcs?.skew ||
      vcs?.skewX ||
      vcs?.skewY
        ? `transform: ${transformFull};`
        : ''
    }
    ${vcs?.transformBox ? `transform-box: ${vcs?.transformBox};` : ''}
    ${vcs?.transformOrigin ? `transform-origin: ${vcs?.transformOrigin};` : ''}
  `;
};
