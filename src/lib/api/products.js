import pb from './pocketbase';

export async function getAllProducts() {
	try {
		return await pb.collection('products').getFullList();
	} catch (error) {
		console.error('Error fetching products:', error);
		throw error;
	}
}

export async function getAllProductType() {
	try {
		return await pb.collection('productType').getFullList();
	} catch (error) {
		console.error('Error fetching productType:', error);
		throw error;
	}
}
