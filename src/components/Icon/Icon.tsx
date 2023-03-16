import { Icon as Iconify } from '@iconify/react/dist/offline';
import React, { CSSProperties } from 'react';

// Note that we use the offline version of iconify
// for apps that can't call out to a public CDN
import { loadAllIcons } from '../../icons';

// TODO: This is a side effect. Wrap it into an icon component
// so we don't load until we need them.
loadAllIcons();

export type IconProps = {
  name: string; // TODO: keyof loaded icons somehow?
  rotate?: 0 | 90 | 180 | 270;
  flip?: 'horizontal' | 'vertical';

  /**
   * Size of the icon in either pixels or CSS units.
   */
  size?: CSSProperties['fontSize'];

  /**
   * Use `display: block` for the icon container.
   */
  block?: boolean;

  /**
   * Props to pass down to the icon SVG
   */
  svgProps?: Omit<React.SVGAttributes<any>, 'onLoad'>;

  className?: string;

  style?: React.CSSProperties;
};

// export const Icon = polymorphicForwardRef<'i', IconProps>(
//   ({ as, className, name, block, flip, rotate = 0, size = 16, svgProps, ...props }, ref) => (
//     <Box
//       as={as || 'i'}
//       ref={ref}
//       role="img"
//       className={cx(
//         {
//           'rui-block rui-align-top': block,
//           'rui-inline-block rui-align-middle': !block
//         },
//         className
//       )}
//       {...props}
//     >
//       <Iconify
//         icon={name}
//         // Note this `any` cast is because they include the SVGAttribute.rotate
//         // that overrides their own rotate attribute that's supposed to
//         // support a string for degrees.
//         rotate={`${rotate}deg` as any}
//         flip={flip}
//         width={size}
//         height={size}
//         {...svgProps}
//         mode="svg"
//       />
//     </Box>
//   )
// );

/**
 * Icon documentation
 *
 * ## Accessibility
 * - If the icon has semantic meaning add an `aria-label` to describe the icon
 */
export function Icon({ name, className, flip, rotate = 0, style, size = 16, svgProps }: IconProps) {
  return (
    <Iconify
      icon={name}
      // Note this `any` cast is because they include the SVGAttribute.rotate
      // that overrides their own rotate attribute that's supposed to
      // support a string for degrees.
      rotate={`${rotate}deg` as any}
      flip={flip}
      width={size}
      height={size}
      style={style}
      className={className}
      {...svgProps}
      mode="svg"
    />
  );
}
