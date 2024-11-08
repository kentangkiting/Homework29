import React, { useEffect } from "react";

function WithLogger(WrappedComponent) {
  return function withLogger(props) {
    useEffect(() => {
      console.log("component has Mounted");
      return () => {
        console.log("component has unmounted");
      };
    }, []);
    return <WrappedComponent {...props} />;
  };
}

function MyComponent() {
  return <div>Belajar HOC</div>;
}

export default WithLogger(MyComponent);
