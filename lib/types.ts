export interface IAppearance {
  theme: string;
  icon: React.ReactElement;
};

export interface INavigation {
  name: string;
  href: string;
}

export interface IParallaxProps {
  children: React.ReactNode;
  baseVelocity: number;
}
