import { useContext } from "react";
import { StockContext } from "../contexts/StockContext.jsx";

export default function useStock(){
    return useContext(StockContext)
}