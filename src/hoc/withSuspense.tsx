import React from "react"

export function withSuspense<WCP>(WrappedComponent: React.ComponentType<WCP>) {
    return (props: WCP) => {
        return <React.Suspense fallback={<div>loading...</div>} >
            <WrappedComponent {...props} />
        </React.Suspense>
    }
}

// import React, { Suspense } from 'react';
// import Preloader from '../components/common/Preloader/Preloader';

// export const withSuspence = <WCP>(WrapComponent: React.ComponentType<WCP>) => {
//     return (props: WCP) => {
//         return <Suspense fallback={<Preloader />}>
//             <WrapComponent {...props} />
//         </Suspense>
//     };
// }