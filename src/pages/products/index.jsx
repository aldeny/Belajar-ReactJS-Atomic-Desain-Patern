import CardProduct from "../../components/Fragments/CardProduct";

const ProductsPage = () => {
  return (
    <div className="flex justify-center">
      <CardProduct>
        <CardProduct.Header image="/images/produk-1.jpg" />
        <CardProduct.Body productName="Crew Neck">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
          explicabo tempore autem amet corporis repudiandae.
        </CardProduct.Body>
        <CardProduct.Footer price="Rp. 450.000" />
      </CardProduct>

      <CardProduct>
        <CardProduct.Header image="/images/produk-1.jpg" />
        <CardProduct.Body productName="Crew Neck">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
          explicabo tempore autem amet corporis repudiandae.
        </CardProduct.Body>
        <CardProduct.Footer price="Rp. 450.000" />
      </CardProduct>
    </div>
  );
};

export default ProductsPage;
