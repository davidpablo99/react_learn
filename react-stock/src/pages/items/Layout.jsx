import { Link ,Outlet, useLocation } from "react-router-dom";

export default function ItemsLayout(){
    
    const { pathname } = useLocation()

    return(
        <main>
            <h1>Stock Itens</h1>
            <div className="tabs">
                <Link 
                    to="/items" 
                    className={`tab ${pathname === "/items" ? "active" : ""}`}
                >
                    Todos os items
                </Link>
                <Link 
                    to="/items/new" 
                    className={`tab ${pathname === "/items/new" ? "active" : ""}`}
                >
                    Novo item
                </Link>
            </div>
            <Outlet/>
        </main>
    )
}