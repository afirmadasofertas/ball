import { Header } from "@/components/adidas/header";
import { ProductDetail } from "@/components/adidas/product-detail";
import { footerColumns } from "@/lib/product-data";

export default function Home() {
  return (
    <div className="page-container">
      <Header />

      <ProductDetail />

      <footer className="site-footer">
        <div className="footer-grid">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3>{column.title}</h3>
              {column.links.map((link) => (
                <a href="#" key={link}>
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>

        <div className="legal-footer">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms and Conditions</a>
          <span>© 2026 adidas America, Inc.</span>
        </div>
      </footer>
    </div>
  );
}
