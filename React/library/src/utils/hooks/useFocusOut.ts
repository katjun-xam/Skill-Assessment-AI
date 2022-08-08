import { useEffect, useRef } from 'react';

interface Props {
  onFocusOut: () => void;
  shouldDisableFocusOut?: boolean;
}

export function useFocusOut(props: Props) {
  const { onFocusOut, shouldDisableFocusOut } = props;
  const node = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleFocusOut = (event: MouseEvent) => {
      if (!!node.current && !node.current.contains(event.target as Node)) {
        onFocusOut();
      }
    };

    if (!shouldDisableFocusOut) {
      document.addEventListener('click', handleFocusOut);
    }
    return () => {
      document.removeEventListener('click', handleFocusOut);
    };
  }, [onFocusOut, shouldDisableFocusOut]);

  // usage:
  // const { node } = useFocusOut({ onFocusOut: () => console.log('nice') });

  return { node };
}
