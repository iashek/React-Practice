const head1 = React.createElement(
    "h1",
    {
        id: "title",
    },
    "heading1"
);

const head2 = React.createElement(
    "h1",
    {
        id: "title",
    },
    "heading2"
);

const container = React.createElement(
    "div",
    {
        id: "container",
    },
    [head1, head2]
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);