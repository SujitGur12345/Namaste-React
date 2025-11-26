    /*
    <div id="parent">
        <div id="child">
        <h1>I'm a Tag H1</h1>
        <h2>I'm a Tag H2</h2>
        </div>
    
    </div>
     */
    
    const parent = React.createElement( "div",{id:"parent"}, [
       
        React.createElement("div", {id:"child1"}, [
            React.createElement("h1",{},"I'm a Tag H1"),
            React.createElement("h2",{},"I'm a Tag H2")
            ]),
             React.createElement("div", {id:"child2"}, [
            React.createElement("h1",{},"I'm a Tag H1"),
            React.createElement("h2",{},"I'm a Tag H2")
            ]),
    ]);
        


    //Create Element in React
    // const heading = React.createElement("h1",{id:"heading", xyz:"attribute2"},"Hello World From React..........")  //first parmater --> ElementType , 2nd param ---> attribute of tag , 3rd ---> 

    // console.log(heading);
    console.log(parent);
    //create Root
    const root = ReactDOM.createRoot(document.getElementById("root"));

    root.render(parent);

    //Props ---> Children and Attribute
    //Nested Div ---> createElement
    //ReactElement(object) => HTML(Browser Understands)
    //JSX ---> Will Help to create Tag