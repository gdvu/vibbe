import { MouseEvent, RefObject, useState } from 'react';

const useMouse = (
  ref: RefObject<HTMLElement>
): {
  onMouse: (e: MouseEvent<HTMLElement>) => void;
  onReset: () => void;
  x: number;
  y: number;
  width: number;
  height: number;
  active: boolean;
} => {
  const [xCor, setXCor] = useState(0);
  const [yCor, setYCor] = useState(0);
  const [widthElement, setWidthElement] = useState(0);
  const [heightElement, setHeightElement] = useState(0);
  const [active, setActive] = useState(false);

  const onMouse = (e: MouseEvent<HTMLElement>) => {
    if (!ref.current) return;

    const width = ref.current.offsetWidth;
    const height = ref.current.offsetHeight;
    const x: number = e.clientX - ref.current.offsetLeft;
    const y: number = e.clientY - ref.current.offsetTop;

    setActive(true);
    setYCor(y);
    setXCor(x);
    setWidthElement(width);
    setHeightElement(height);
  };

  const onReset = () => {
    setActive(false);
    setYCor(0);
    setXCor(0);
    setWidthElement(0);
    setHeightElement(0);
  };

  return {
    onMouse,
    onReset,
    width: widthElement,
    height: heightElement,
    x: xCor,
    y: yCor,
    active
  };
};

export default useMouse;
