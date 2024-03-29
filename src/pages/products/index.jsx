import { Fragment } from "react";
import CardProduct from "../../components/Fragments/CardProduct";
import Navbar from "../../components/Fragments/Navbar";

//Data dummy untuk test rendering list
const products = [
  {
    id: 1,
    name: "Crew Neck",
    image: "/images/produk-1.jpg",
    price: "Rp. 450.000",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur explicabo tempore autem amet corporis repudiandae.",
  },
  {
    id: 2,
    name: "New Crew Neck",
    image: "/images/produk-1.jpg",
    price: "Rp. 700.000",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
      explicabo tempore autem amet corporis repudiandae. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.`,
  },
];

const userEmail = localStorage.getItem("email");

const ProductsPage = () => {
  return (
    <Fragment>
      <Navbar userEmail={userEmail} />
      <div className="flex justify-center">
        {products.map((product) => (
          //key disini bukan merupakan props
          <CardProduct key={product.id}>
            <CardProduct.Header image={product.image} />
            <CardProduct.Body productName={product.name}>
              {product.description}
            </CardProduct.Body>
            <CardProduct.Footer price={product.price} />
          </CardProduct>
        ))}
      </div>
    </Fragment>
  );
};

export default ProductsPage;
