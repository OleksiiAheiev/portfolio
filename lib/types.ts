export interface IAppearance {
  theme: string;
  icon: React.ReactElement;
};

export interface INavigation {
  name: string;
  href: string;
}

export interface IScrollingProps {
  children: React.ReactNode;
  baseVelocity: number;
}

export interface ILogo {
  name: string;
  icon: React.ReactElement;
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
