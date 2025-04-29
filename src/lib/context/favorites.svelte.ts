import { getContext, setContext } from "svelte"

const key = Symbol("FavoriteKey")

type cartItem = {
    id: string
    name: string
    price: number
    liked: boolean
}
export class ShopList {

    #CartItems = $state<cartItem[]>([])

    get cartItems() {
        return this.#CartItems
    }

    addItem = (v: cartItem) => {
        this.#CartItems.push(v)
    }
    removeItem = (id: string) => {
        const exists = this.#CartItems.find(fav => fav.id === id);
        if (!exists) return "item inexistente"
        this.#CartItems = this.#CartItems.filter(fav => fav.id !== id)
    }
}

export function setFavoriteContext() {
    setContext(key, new ShopList())
}

export function getFavoriteContext(): ShopList {
    return getContext(key)
}