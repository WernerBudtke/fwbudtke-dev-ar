import React from 'react';

type TypographyProps<E extends React.ElementType> = {
  as?: E;
  font?: 'creepster' | 'system';
  className?: string;
  children?: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<E>, 'as' | 'children'>;

function Typography<E extends React.ElementType = 'p'>(
  props: TypographyProps<E>,
  ref: React.ForwardedRef<any>
) {
  const { as, font = 'creepster', className, children, ...rest } = props as any;
  const Component: any = as || 'p';
  const fontClass = font === 'creepster' ? 'creepster-regular' : 'font-primary';
  const cls = [fontClass, className].filter(Boolean).join(' ');
  return (
    <Component ref={ref} className={cls} {...rest}>
      {children}
    </Component>
  );
}

Typography.displayName = 'Typography';

export default React.forwardRef(Typography) as <E extends React.ElementType = 'p'>(
  props: TypographyProps<E> & { ref?: React.Ref<any> }
) => React.ReactElement | null;
