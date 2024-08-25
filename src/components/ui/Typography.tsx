import { VariantProps, cva } from "class-variance-authority";
import type {
  ComponentPropsWithoutRef,
  ElementType,
  PropsWithChildren,
} from "react";
import { cn } from "@/lib/utils";

type PolymorphicAsProp<E extends ElementType> = {
  as?:
    | E
    | React.ComponentType<Omit<ComponentPropsWithoutRef<E>, "as">>
    | React.FunctionComponent<Omit<ComponentPropsWithoutRef<E>, "as">>;
};

type PolymorphicProps<E extends ElementType> = PropsWithChildren<
  Omit<ComponentPropsWithoutRef<E>, "as"> & PolymorphicAsProp<E>
>;

const typographyVariants = cva("", {
  variants: {
    variant: {
      h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl font-caption",
      h2: "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 font-caption",
      h3: "scroll-m-20 text-xl font-semibold tracking-tight font-caption",
      p: "leading-7 [&:not(:first-child)]:mt-6",
      base: "",
      quote: "mt-6 border-l-2 pl-6 italic",
      code: "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
      lead: "text-xl text-muted-foreground",
      large: "text-lg font-semibold",
      small: "text-sm font-medium leading-none",
      muted: "text-sm text-muted-foreground",
      link: "text-indigo-500 font-medium hover:underline",
    },
  },
  defaultVariants: {
    variant: "base",
  },
});
type TypographyCvaProps = VariantProps<typeof typographyVariants>;

const defaultElement = "p";

const defaultElementMapping: Record<
  NonNullable<TypographyCvaProps["variant"]>,
  ElementType
> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  p: "p",
  quote: "blockquote" as "p",
  code: "code",
  lead: "p",
  large: "p",
  small: "p",
  muted: "p",
  link: "a",
  base: "p",
} as const;

const getDefaultElement = (variant: TypographyCvaProps["variant"]) => {};

export function Typography<E extends ElementType = typeof defaultElement>({
  as,
  children,
  className,
  variant,
  ...restProps
}: PolymorphicProps<E> & TypographyCvaProps) {
  const Component: ElementType =
    as ?? defaultElementMapping[variant ?? "base"] ?? defaultElement;

  return (
    <Component
      {...(restProps as ComponentPropsWithoutRef<E>)}
      className={cn(typographyVariants({ variant }), className)}
    >
      {children}
    </Component>
  );
}
