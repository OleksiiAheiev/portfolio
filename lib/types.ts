export interface IReactNode {
  children: React.ReactNode;
}

interface ILogo {
  icon: React.ReactElement;
}

export interface IAppearance extends ILogo {
  theme: string;
};

export interface INavigation {
  name: string;
  href: string;
}

export interface IScrollingProps extends IReactNode {
  baseVelocity: number;
}

export interface ILogos extends ILogo {
  name: string;
}

export interface IMousePosition {
  x: number;
  y: number;
}

export interface IParticlesProps {
  className?: string;
  quantity?: number;
  staticity?: number;
  ease?: number;
  refresh?: boolean;
}

export interface IAppearanceButtonProps extends ILogo {
  theme: string;
  currentTheme?: string;
}

export interface IContacts extends ILogo {
  href: string;
  label: string;
  handle: string;
}
