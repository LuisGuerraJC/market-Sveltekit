import pb from "$lib/api/pocketbase";
export const load = async ({ params, url }) => {
    try {
        const basePath = params.product
        const pageParam = Number(params.page)

        if (url.searchParams.toString()) {
            console.log(url.searchParams.toString())
            const nuevo = url.searchParams.get('nuevo')
            const oferta = url.searchParams.get('oferta')
            let queryFilter = `type='${params.product}'`
            if (nuevo) queryFilter += " && is_new=True"
            if (oferta) queryFilter += " && is_discounted=True"
            console.log(queryFilter, "peticion")
            const data = await pb.collection('productsTest').getList(pageParam, 3, { filter: queryFilter });
            const { items, totalPages, page } = data
            return { items, totalPages, page, basePath, pageParam }

        }
        else {
            const data = await pb.collection('productsTest').getList(pageParam, 3, { filter: `type='${params.product}'` });
            const { items, totalPages, page } = data
            return { items, totalPages, page, basePath, pageParam }

        }

    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
}
