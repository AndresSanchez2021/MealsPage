import React from 'react';

export const LoadingComponent = () => {
    return (
        <div className="flexCenter center colorPrincipal">
            <span className="fa fa-spinner fa-pulse fa-3x fa-fw "></span>
            <span> Cargando...</span>
        </div>
    )
};