import * as Icons from "@/assets/icons/index";

type IconName = keyof typeof Icons;

type IconProps = {
  name: IconName;
  size?: number;
  className?: string;
};

export function Icon({ name, size = 24, className }: IconProps) {
  const Svg = Icons[name];
  return <Svg width={size} height={size} className={className} />;
}
