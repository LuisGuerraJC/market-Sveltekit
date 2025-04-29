import { redirect } from "@sveltejs/kit";

export const load = ({ params }) => {

    throw redirect(302, `/store/${params.product}/1`)
}