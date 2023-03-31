import { createContext } from "react";
import { IProduct } from "../Interface/IProduct";

interface contextData {
    electronics: IProduct[];
    jewelery: IProduct[];
    man: IProduct[];
    woman: IProduct[];
    setElectronics: (products: IProduct[]) => void;
    setJewelery: (products: IProduct[]) => void;
    setMan: (products: IProduct[]) => void;
    setWoman: (products: IProduct[]) => void;
}

export const MyContext = createContext<contextData>({
    electronics: [{id: 0, title: '', price:'',category:'', description:'',image:''}],
    jewelery:  [{id: 1, title: '', price:'',category:'', description:'',image:''}],
    man:  [{id: 2, title: '', price:'',category:'', description:'',image:''}],
    woman:  [{id: 3, title: '', price:'',category:'', description:'',image:''}],
    setElectronics: () => {},
    setJewelery: () => {},
    setMan: () => {},
    setWoman: () => {},
});