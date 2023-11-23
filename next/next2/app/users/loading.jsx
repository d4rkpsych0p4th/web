"use client"
import React, { useState, useEffect } from 'react';
import { css } from '@emotion/react';
import { BarLoader } from 'react-spinners';

const LoadingPage = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simula una carga asíncrona
        const fakeAsyncOperation = async () => {
            // Simula una carga asíncrona (puede ser la carga real de datos)
            await new Promise(resolve => setTimeout(resolve, 5000));

            // Cambia el estado para mostrar la barra de carga durante 5 segundos
            setLoading(true);
        };

        fakeAsyncOperation();
    }, []);

    const override = css`
        display: block;
        margin: 0 auto;
    `;

    return (
        <div>
            {loading ? (
                <div>
                    <h1>Loading...</h1>
                    <BarLoader color={'#36D7B7'} loading={loading} css={override} />
                </div>
            ) : (
                <h1>Loading Completed!</h1>
            )}
        </div>
    );
};

export default LoadingPage;
