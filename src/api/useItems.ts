import axios from "axios";
import {TItem} from "../models/indes";

export const useItems = () => {
    const getItems = async () : Promise<TItem[]> => {
      const res = await axios.get('http://localhost:3000/items')
        return res.data
    }

    const getItem = async (id: string) : Promise<TItem> => {
        const res = await axios.get(`http://localhost:3000/items/${id}`)
        return res.data
    }

    return {
        getItem,
        getItems
    }
}