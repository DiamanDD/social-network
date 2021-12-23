import React from "react";


export function withSuspense(Component: any,) {


    return (props: any) => {

        return(
        <React.Suspense fallback={<div>...Loading</div>}>
            <div>
                <Component {...props} />
            </div>
        </React.Suspense>)
    }


}