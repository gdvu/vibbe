import css from 'styled-jsx/css';
import { StyledTwo } from '.';
import styledCss from './core';
import { classNameElements, clearCss } from './utils';

export const getResolveCss = (
  cssAll: StyledTwo,
  className: string,
  prefix?: string
) => {
  const cssbase = clearCss(styledCss(cssAll.base));
  const cssHover = clearCss(styledCss(cssAll._hover));
  const cssActive = clearCss(styledCss(cssAll._active));
  const cssFocus = clearCss(styledCss(cssAll._focus));
  const cssVisited = clearCss(styledCss(cssAll._visited));
  const cssAfter = clearCss(styledCss(cssAll._after));
  const cssBefore = clearCss(styledCss(cssAll._before));
  const cssPlaceholder = clearCss(styledCss(cssAll._placeholder));

  const { hover, active, focus, visited, base, after, before, placeholder } =
    classNameElements(cssAll, className);

  return css.resolve`
    ${`.${prefix}${base}`} {
      ${cssbase}
    }

    ${`.${prefix}${hover}`}:hover {
      ${cssHover ?? ''}
    }

    ${`.${prefix}${focus}`}:focus {
      ${cssFocus ?? ''}
    }

    ${`.${prefix}${visited}`}:visited {
      ${cssVisited ?? ''}
    }

    ${`.${prefix}${active}`}:active {
      ${cssActive ?? ''}
    }

    ${`.${prefix}${after}`}::after {
      ${cssAfter ?? ''}
    }

    ${`.${prefix}${before}`}::before {
      ${cssBefore ?? ''}
    }

    ${`.${prefix}${placeholder}`}::placeholder {
      ${cssPlaceholder ?? ''}
    }
  `;
};
