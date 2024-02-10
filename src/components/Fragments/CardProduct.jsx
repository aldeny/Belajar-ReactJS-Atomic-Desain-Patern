// Bagian ini menggunakan konsep nested component
// Nested component hampir sama dengan atomic design
// Hanya saja component ini masih dalam satu file yang sama

const CardProduct = (props) => {
  const { children } = props;
  return (
    <div className="max-w-xs bg-white w-full border border-gray-200 rounded-lg shadow m-2 flex flex-col justify-between">
      {children}
    </div>
  );
};

const HeaderCardProduct = (props) => {
  const { image } = props;
  return (
    <a href="" className="w-full p-5">
      <img src={image} alt="" className="w-9/12 mx-auto" />
    </a>
  );
};

const BodyCardProduct = (props) => {
  const { productName, children } = props;
  return (
    <div className="px-5 pb-5 h-full">
      <a href="">
        <h5 className="mt-4 mb-2 text-lg font-bold tracking-tight text-gray-700">
          {productName}
        </h5>
        <p className="font-normal text-sm text-gray-700">{children}</p>
      </a>
    </div>
  );
};

const FooterCardProduct = (props) => {
  const { price } = props;
  return (
    <div className="flex justify-between items-center px-5 pb-5">
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
