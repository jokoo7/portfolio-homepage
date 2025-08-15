import * as React from 'react';

const BREAKPOINTS = {
  mobile: 768, // <768px
  tablet: 1024, // 768px - 1023px
  desktop: 1025, // ≥1024px
};

type DeviceType = 'sm' | 'md' | 'lg';

export function useBreakpoint(): DeviceType {
  const [device, setDevice] = React.useState<DeviceType>('lg');

  React.useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;

      if (width < BREAKPOINTS.mobile) {
        setDevice('sm');
      } else if (width < BREAKPOINTS.tablet) {
        setDevice('md');
      } else {
        setDevice('lg');
      }
    };

    // Cek awal
    checkDevice();

    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  return device;
}
