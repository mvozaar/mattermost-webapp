// Copyright (c) 2019 securCom Ltd. All Rights Reserved.

import React from 'react';
import {FormattedMessage} from 'react-intl';

export default class SecurComLogo extends React.PureComponent {
    render() {
        return (
            <span {...this.props}>
                <FormattedMessage
                    id='generic_icons.securcom'
                    defaultMessage='securCom Logo'
                >
                    {(ariaLabel) => (
                        <svg
                            version='1.1'
                            id='Layer_1'
                            x='0px'
                            y='0px'
                            viewBox='0 0 302 579'
                            style={style.background}
                            role='icon'
                            aria-label={ariaLabel}
                        >
                            <g transform='matrix(2.25,0,0,2.25,-195,-375)'>
                                <path
                                    style={style.stx}
                                    d='M151.83,187.66c58.17,0,105.33,47.16,105.33,105.33S210,398.32,151.83,398.32S46.5,351.16,46.5,292.99
                                    c0,0,0-0.01,0-0.01'
                                />
                                <path
                                    style={style.st1}
                                    d='M66.96,340.36l-13.81,8c-2.79,1.61-0.27,5.93,2.52,4.32l13.81-8C72.27,343.07,69.75,338.75,66.96,340.36
                                    L66.96,340.36z'
                                />
                                <path
                                    style={style.st1}
                                    d='M102.74,376.78l-8,13.82c-1.61,2.79,2.71,5.31,4.32,2.52l8-13.82C108.67,376.51,104.35,373.99,102.74,376.78
                                    L102.74,376.78z'
                                />
                                <path
                                    style={style.st1}
                                    d='M151.52,390.12v15.95c0,3.22,5,3.22,5,0v-15.95C156.52,386.9,151.52,386.9,151.52,390.12L151.52,390.12z'
                                />
                                <path
                                    style={style.stx1}
                                    d='M199.89,377.44l8.07,14c1.61,2.79,5.93,0.27,4.32-2.52l-8.07-14C202.6,372.13,198.28,374.65,199.89,377.44
                                    L199.89,377.44z'
                                />
                                <path
                                    style={style.st1}
                                    d='M235.27,342.78l13.86,8c2.79,1.61,5.31-2.71,2.52-4.32l-13.81-8c-2.79-1.61-5.31,2.71-2.52,4.32l0,0H235.27z'
                                />
                                <path
                                    style={style.st1}
                                    d='M248.99,295.48h15.95c3.22,0,3.22-5,0-5h-15.95C245.77,290.48,245.77,295.48,248.99,295.48L248.99,295.48z'
                                />
                                <path
                                    style={style.st1}
                                    d='M237.79,247.5l13.81-8c2.79-1.61,0.27-5.93-2.52-4.32l-13.81,8C232.48,244.79,235,249.11,237.79,247.5
                                    L237.79,247.5z'
                                />
                                <path
                                    style={style.st1}
                                    d='M204.21,211.05l8.31-14.39c1.61-2.79-2.71-5.31-4.32-2.52l-8.31,14.39
                                    C198.28,211.32,202.6,213.84,204.21,211.05L204.21,211.05z'
                                />
                                <path
                                    style={style.st2}
                                    d='M154.02,159.31'
                                />
                                <path
                                    style={style.st2}
                                    d='M154.02,292.98'
                                />
                                <path
                                    style={style.st2}
                                    d='M119.42,163.86'
                                />
                                <path
                                    style={style.st2}
                                    d='M154.02,292.98'
                                />
                                <path
                                    style={style.st3}
                                    d='M55,252.45c10.63-25.84,31.13-46.38,56.95-57.06'
                                />
                                <path
                                    style={style.st4}
                                    d='M152.03,228.17c35.8,0,64.82,29.02,64.82,64.82s-29.02,64.82-64.82,64.82'
                                />
                                <path
                                    style={style.st5}
                                    d='M154.02,259.19c18.67,0,33.8,15.13,33.8,33.8s-15.13,33.8-33.8,33.8'
                                />
                            </g>
                        </svg>
                    )}
                </FormattedMessage>
            </span>
        );
    }
}

const style = {
    background: {
        enableBackground: 'new 0 0 302 579',
    },
    st0: {
        fillRule: 'evenodd',
        clipRule: 'evenodd',
    },
    stx: {
        fill: 'none',
        stroke: '#1C75BC',
        strokeWidth: '45',
        strokeMiterlimit: '10',
    },
    st1: {
        fill: '#FFFFFF',
    },
    st2: {
        fill: 'none',
        stroke: '#FFFFFF',
        strokeWidth: '8',
        strokeMiterlimit: '10',
    },
    st3: {
        fill: 'none',
        stroke: '#D1D3D4',
        strokeWidth: '30',
        strokeMiterlimit: '10',
    },
    st4: {
        fill: 'none',
        stroke: '#D1D3D4',
        strokeWidth: '8',
        strokeMiterlimit: '10',
    },
    st5: {
        fill: 'none',
        stroke: '#1C75BC',
        strokeWidth: '8',
        strokeMiterlimit: '10',
    },
};
