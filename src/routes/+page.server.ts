import { getAllProducts } from '$lib/api/products';
import { getAllProductType } from '$lib/api/products';

export async function load() {
	const products = await getAllProducts();
	const productType = await getAllProductType();
	return { products, productType };
}
