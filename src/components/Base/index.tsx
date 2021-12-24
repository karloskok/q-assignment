import React, { ComponentProps, useState } from 'react';
import IBaseComponentProps from '../../interfaces/componentProps';

const PROP_MESSAGE = 'Hello from ';

function BaseComponent<P extends object>(WrappedComponent: React.ComponentType<P>) {
    class Base extends React.Component<P & IBaseComponentProps> {

        // componentDidMount() {
        //   console.log(PROP_MESSAGE + WrappedComponent.name);
        // }

        render() {
            const { loading, ...props } = this.props;
            return loading ? <></> : <WrappedComponent message={PROP_MESSAGE} {...props as P} />;
        }
    };
    WrappedComponent.displayName = `BaseComponent (${WrappedComponent.displayName || WrappedComponent.name})`;
    return Base;
}
// function getDisplayName(WrappedComponen: any) {
//   return WrappedComponent.displayName || WrappedComponent.name || 'Component';
// }

export default BaseComponent;
