    //Create Element in React
    const heading = React.createElement("h1",{id:"heading", xyz:"attribute2"},"Hello World From React..........")  //first parmater --> ElementType , 2nd param ---> attribute of tag , 3rd ---> 

    //create Root
    const root = ReactDOM.createRoot(document.getElementById("root"));

    root.render(heading);