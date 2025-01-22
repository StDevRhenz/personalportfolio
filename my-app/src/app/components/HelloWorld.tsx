import React from "react";

const HelloWorld: React.FC = () => {
    return (
        <div>
        <h1>Hello, World</h1>
        </div>
    );
};


const title: React.FC = () => {
    return (
        <div>
            <button>Order now</button>
        </div>
    );
};

export default HelloWorld;

export {title};