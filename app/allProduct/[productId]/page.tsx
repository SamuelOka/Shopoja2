import { ProT } from "../../components/product";
import { promises } from "fs";
import { Details } from "../../components/detailPRO";

// import { useCart } from "../content/CartContent";

export default async function ProductDetails({
  params,
}: {
  params: Promise<{ productId: number }>;
}) {
  const ID = (await params).productId;
  return (
    <div>
      <Details proid={ID} />
    </div>
  );
}
