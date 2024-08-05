
    // creating h1 tag is react 
   const heading =  React.createElement("h1",{id:"heading"},"Hello word from react ...");
   //const root = ReactDOM.createRoot(document.getElementById(root));
   const root = ReactDOM.createRoot(document.getElementById("root"));
   root.render(heading);

   const heading1 = React.createElement("h1",{},"hello this is second heading");
   const root1 = ReactDOM.createRoot(document.getElementById("root1"));
   root1.render(heading1);