import useFetch from ".";

export default function UseFetchHookTest() {
  const { data, error, pending } = useFetch(
    "https://dummyjson.com/products",
    {}
  );

  return (
    <div>
      <h2>Use Fatch hook</h2>
      <ui>
        {data && data.products && data.products.length
          ? data.products.map((item) => <li key={item.key}>{item.title}</li>)
          : "Please wite."}
      </ui>
    </div>
  );
}