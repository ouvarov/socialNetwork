import React from 'react';

const Loading: React.FunctionComponent = () => {
    const loaderItem = Array.from({ length: 10 }, (_, idx) => idx);

    return (
        <div className="loader">
            <div className="loader__wrap">
                {loaderItem.map(item => (
                    <div key={item} className="loader__item" />
                ))}
            </div>
        </div>
    );
};

export default Loading;
