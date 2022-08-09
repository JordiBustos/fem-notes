const Pet = ({
    name = "Doens't have",
    animal="God",
    breed="Divinity"
    }) => {
    return (
        React.createElement("div", {}, [
            React.createElement("h1", {}, name),
            React.createElement("h2", {}, animal),
            React.createElement("h2", {}, breed),
        ])
    );
};

const App = () => {
    return React.createElement(
        "div",
        {},
        [
            React.createElement("h1", {id: "brand"}, "Adopt Me!"),
            React.createElement(Pet, {
                name: "Pina",
                animal:"Dog",
                breed:"Border Collie"
            }),
            React.createElement(Pet, {
                name: "Cartucho",
                animal:"Dog",
                breed:"Chihuahua"
            }),
            React.createElement(Pet, {
                name: "Luna",
                animal:"Dog",
                breed:"Havanese"
            })
        ]
    );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));