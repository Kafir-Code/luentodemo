const showMain = ({ render }) => {
    const data = {
      viesti: "presentController",
    };
  
    render("index.eta", data);
  };
  
  export { showMain };