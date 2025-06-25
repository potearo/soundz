import React, { ReactNode, CSSProperties } from 'react';
export type SoundzTheme = {
    tooltipBg?: string;
    tooltipColor?: string;
    pulseColor?: string;
};
interface IconProps {
    name: 'speaker' | 'waves' | 'audioLines' | 'audioWaves';
    size?: number;
    strokeWidth?: number;
}
interface SoundzProps {
    children: ReactNode;
    providedFX?: string;
    customFX?: string | null;
    noClickSound?: boolean;
    loading?: () => React.ReactNode;
    wrap?: string | null;
    fetchCooldown?: number;
    clickCooldown?: number;
    hoverFX?: string | null;
    enableHaptics?: boolean;
    keyboardKey?: string | null;
    icon?: IconProps | null;
    showTooltip?: boolean;
    tooltipText?: string;
    tooltipPosition?: 'top' | 'bottom' | 'left' | 'right';
    tooltipAnimation?: 'fade' | 'scale' | 'slide';
    theme?: 'auto' | 'light' | 'dark' | 'neon' | 'pastel' | 'mono';
    customTheme?: SoundzTheme | null;
    animationSpeed?: string;
    layout?: string;
    className?: string;
    style?: CSSProperties;
    apiBaseUrl?: string;
}
interface SoundzContextProps extends Partial<SoundzProps> {
}
export declare function SoundzProvider({ children, ...defaults }: {
    children: ReactNode;
} & SoundzContextProps): import("react/jsx-runtime").JSX.Element;
export declare function Soundz(props: SoundzProps): string | number | bigint | boolean | Iterable<React.ReactNode> | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | import("react/jsx-runtime").JSX.Element | null | undefined;
export {};
