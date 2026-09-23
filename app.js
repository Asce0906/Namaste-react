import ReactDOM from "react-dom/client";

const heading = <h2>This is a react element</h2>;

const TitleComponent = () => <h1>I am a Title Component</h1>;

const HeadingComponent = () => {
  return (
    <div id="container">
      {TitleComponent()}
      <TitleComponent />
      <TitleComponent></TitleComponent>
      <h1>This is a React Functional Component</h1>
      {heading}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
