import Link from "../shared/ui/Link.jsx";
import Error from "../feature/Error/ui/index.jsx";

function Footer() {

  return (
      <footer className="footer">
          <h1 className="logo">Ф.И.О.</h1>
          <ul>
              <li>Номер телефона: <Link href="tel:+123123123">+123123123</Link></li>
              <li>Email: <Link href="mailto: someone@example.com">someone@example.com</Link></li>
              <li>Git: <Link href="https://github.com/">https://github.com/</Link></li>
          </ul>
      </footer>
  )
}

export default Footer
