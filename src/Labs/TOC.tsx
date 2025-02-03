// import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

export default function TOC() {
  return (
    <Nav variant="pills">
      <Nav.Item>
        <Nav.Link href="#/Labs">Lab 1</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#/Labs/Lab2">Lab 2</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#/Labs/Lab3">Lab 3</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#/Kambaz">Kambaz</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        {/* Add the required ID attribute */}
        <Nav.Link 
          href="https://github.com/XinjieShen121/kambaz-react-web-app-cs5610-sp25.git" 
          id="wd-github"
        >
          My GitHub
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
