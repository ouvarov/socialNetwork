import * as React from 'react';

type SvgIconOptionalPropsType = {
    width: string;
    height: string;
    className: string;
    children: React.ReactNode;
    viewBox: string;
    fill?: string;
};

type SvgIconPropsType = Partial<SvgIconOptionalPropsType>;

const SvgIcon: React.FC<SvgIconPropsType> = ({
    width = '100%',
    height = '100%',
    children = null,
    className = '',
    viewBox = '',
    fill = 'transparent',
}) => (
    <svg
        className={className}
        width={width}
        height={height}
        xmlns="http://www.w3.org/2000/svg"
        viewBox={viewBox}
        fill={fill}
    >
        {children}
    </svg>
);

export default SvgIcon;
