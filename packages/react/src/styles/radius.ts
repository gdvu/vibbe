export interface RadiusCSS {
  radius?: string;
  radiusTop?: string;
  radiusTopLeft?: string;
  radiusTopRight?: string;
  radiusBottom?: string;
  radiusBottomLeft?: string;
  radiusBottomRight?: string;
  radiusLeft?: string;
  radiusRight?: string;
  radiusSlash?: string;
  radiusBackSlash?: string;
}

export const radiusCss = (vcs?: RadiusCSS) => {
  return `
  ${vcs?.radius ? `border-radius: ${vcs?.radius};` : ''}
    ${
      vcs?.radiusBottomLeft
        ? `border-bottom-left-radius: ${vcs?.radiusBottomLeft};`
        : ''
    }
    ${
      vcs?.radiusTopRight
        ? `border-top-right-radius: ${vcs?.radiusTopRight};`
        : ''
    }
    ${
      vcs?.radiusTopLeft ? `border-top-left-radius: ${vcs?.radiusTopLeft};` : ''
    }
    ${
      vcs?.radiusBottomRight
        ? `border-bottom-right-radius: ${vcs?.radiusBottomRight};`
        : ''
    }
    ${
      vcs?.radiusBottom
        ? `border-bottom-right-radius: ${vcs?.radiusBottom};border-bottom-left-radius: ${vcs?.radiusBottom};`
        : ''
    }
    ${
      vcs?.radiusTop
        ? `border-top-right-radius: ${vcs?.radiusTop};border-top-left-radius: ${vcs?.radiusTop};`
        : ''
    }
    ${
      vcs?.radiusLeft
        ? `border-top-left-radius: ${vcs?.radiusLeft};border-bottom-left-radius: ${vcs?.radiusLeft};`
        : ''
    }
    ${
      vcs?.radiusRight
        ? `border-top-right-radius: ${vcs?.radiusRight};border-bottom-right-radius: ${vcs?.radiusRight};`
        : ''
    }
    ${
      vcs?.radiusSlash
        ? `border-top-right-radius: ${vcs?.radiusSlash};border-bottom-left-radius: ${vcs?.radiusSlash};`
        : ''
    }
    ${
      vcs?.radiusBackSlash
        ? `border-top-left-radius: ${vcs?.radiusBackSlash};border-bottom-right-radius: ${vcs?.radiusBackSlash};`
        : ''
    }
  `;
};
