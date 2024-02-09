// Bagian ini menggunakan konsep nested component
// Nested component hampir sama dengan atomic design
// Hanya saja component ini masih dalam satu file yang sama

const CardProduct = (props) => {
  const { children } = props;
  return (
    <div className="max-w-xs bg-white w-full border border-gray-200 rounded-lg shadow m-2">
      <div className="p-5">{children}</div>
    </div>
  );
};

const HeaderCardProduct = (props) => {
  const { image } = props;
  return (
    <a href="">
      <img src={image} alt="" />
    </a>
  );
};

const BodyCardProduct = (props) => {
  const { productName, children } = props;
  return (
    <a href="">
      <h5 className="mt-4 mb-2 text-lg font-bold tracking-tight text-gray-700">
        {productName}
      </h5>
      <p className="font-normal text-sm text-gray-700">{children}</p>
    </a>
  );
};

const FooterCardProduct = (props) => {
  const { price } = props;
  return (
    <div className="flex justify-between pt-6 items-center">
      <h3 className="text-xl font-bold text-rose-600">{price}</h3>
      <a
        href=""
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Order now!
      </a>
    </div>
  );
};

CardProduct.Header = HeaderCardProduct;
CardProduct.Body = BodyCardProduct;
CardProduct.Footer = FooterCardProduct;

export default CardProduct;
