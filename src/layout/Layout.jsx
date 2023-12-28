import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header>
        <h1>Crypto App</h1>
        <p>
          <a href="https://github.com/merfdev">Mrefdev</a> | ex Project{" "}
        </p>
      </header>
      {children}
      <footer>
        <p>Developed by muhammad with hope</p>
      </footer>
    </>
  );
}

export default Layout;
