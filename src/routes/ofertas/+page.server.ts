import pb from "$lib/api/pocketbase";

export async function load() {
    try {
        const products = await pb.collection('productsTest').getFullList({ filter: "is_discounted=true" });
        return { products }

    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
}
