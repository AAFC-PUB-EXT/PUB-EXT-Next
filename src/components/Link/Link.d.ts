import React from 'react';
import '../../style.css';
declare type targetType = '_blank' | '_self' | '_parent' | '_top' | undefined;
/** Types */
export interface LinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
    /** Content of heading */
    children?: React.ReactNode;
    /** The target of hyperlink */
    href: string;
    /** Specifies where to display the linked URL */
    target?: targetType;
    /** Specifies the relationship between the current document and the linked document. */
    rel?: string;
    /** Additional custom classNames */
    className?: string;
}
declare const Link: ({ children, href, target, rel, className, ...rest }: LinkProps) => JSX.Element;
export default Link;
