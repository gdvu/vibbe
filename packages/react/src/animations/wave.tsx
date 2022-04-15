import React, { FC, memo } from 'react';
import css from 'styled-jsx/css';

const getStyleWave = (
  top: number,
  left: number,
  minSize: number,
  maxSize: number,
  backgroundColor: string
) => {
  return css.resolve`
    .wave-effect {
      position: absolute;
      top: ${top}px;
      left: ${left}px;
      background-color: ${backgroundColor};
      border-radius: 50%;
      transform: translate3d(-50%, -50%, 0);
      animation: wave 320ms linear forwards;
      transition: 320ms linear 0s;
      width: ${minSize}px;
      height: ${minSize}px;
    }

    @keyframes wave {
      0% {
        opacity: 0.6;
      }
      40% {
        opacity: 0.8;
      }
      60% {
        opacity: 1;
      }
      80% {
        opacity: 0.6;
      }
      100% {
        width: ${maxSize}px;
        height: ${maxSize}px;
        opacity: 0;
      }
    }
  `;
};

interface WaveEffectProps {
  x: number;
  y: number;
  width: number;
  height: number;
  onReset: () => void;
  backgroundColor: string;
}

type WaveProps = WaveEffectProps & { active: boolean };

const WaveEffect: FC<WaveEffectProps> = props => {
  const { x, y, width, height, backgroundColor, onReset } = props;

  const setInPositive = (
    x: number,
    y: number,
    width: number,
    height: number
  ): { setX: number; setY: number } => {
    if (
      Math.sign(x) === 1 ||
      Math.sign(y) === 1 ||
      Math.sign(x) === 0 ||
      Math.sign(y) === 0
    ) {
      return { setX: x, setY: y };
    }

    const setX: number = parseInt(width / 2 + '');
    const setY: number = parseInt(height / 2 + '');

    return { setX, setY };
  };

  const mathMinSize: any = Math.min(width, height) * 0.5;
  const mathMaxSize: any = Math.max(width, height) * 2.5;
  const minSize: number = parseInt(mathMinSize);
  const maxSize: number = parseInt(mathMaxSize);

  const { setX, setY } = setInPositive(x, y, width, height);

  const { styles, className } = getStyleWave(
    setY,
    setX,
    minSize,
    maxSize,
    backgroundColor
  );

  return (
    <>
      <div onAnimationEnd={onReset} className='wave-container'>
        <span className={`${className} wave-effect`}></span>
      </div>
      <style jsx>{`
        .wave-container {
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
        }
      `}</style>
      {styles}
    </>
  );
};

const Wave: FC<WaveProps> = props => {
  const { active, ...rest } = props;

  if (!active) {
    return null;
  }

  return <WaveEffect {...rest} />;
};

const MemoWave = memo<WaveProps>(Wave);

export default MemoWave;
