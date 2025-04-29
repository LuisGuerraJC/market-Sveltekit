import pb from './pocketbase';


export async function getAllProductsTest() {
	try {
		return await pb.collection('productsTest').getFullList();
	} catch (error) {
		console.error('Error fetching products:', error);
		throw error;
	}
}
// export async function getPaginatedProducts() {
// 	try {
// 		return await pb.collection('products').getFullList();
// 	} catch (error) {
// 		console.error('Error fetching products:', error);
// 		throw error;
// 	}
// }
// export async function FirstProducts() {
// 	try {
// 		return await pb.collection('products').getFullList();
// 	} catch (error) {
// 		console.error('Error fetching products:', error);
// 		throw error;
// 	}
// }