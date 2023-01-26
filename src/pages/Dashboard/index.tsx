import React, { useState, useEffect } from "react";
import SearchBar from "../../components/SearchBar";
import Table from "../../components/Table";

const Dashboard = () => {
    const heros = localStorage.getItem('heros');
    const obtHeros = heros ? JSON.parse(heros) : JSON.parse('')
    const [items, setItems] = useState(obtHeros);
    const [searchingItems, setSearchingItems] = useState(obtHeros);
    const [searching, setSearching] = useState(false)

    useEffect(() => {
        if (!searching) {
            localStorage.setItem('heros', JSON.stringify(items));
        }
    }, [items, searching]);

    const filterHeroSubmit = (name: string) => {
        const nameToLowerCase = name.toLowerCase()



    const filterItem = items.filter((hero: any) => {
            const heroToLowerCase = hero.name.toLowerCase()
            if (heroToLowerCase.includes(nameToLowerCase)) {
                return hero
            }
        })
 
        if (name.length > 0) {
            setSearching(true)
            setSearchingItems(filterItem)
        } else {
            setSearching(false)
        }
    }

    const deleteHeroSubmit = (key: number) => {

        const filterItem = items.filter((hero: any) => {
            if (hero.id !== key) {
                return hero
            }
        })
        setItems(filterItem)
    }

    return (
        <div>
            <SearchBar filterHeroSubmit={filterHeroSubmit}/>

            <Table heros={searching ? searchingItems : items } deleteHeroSubmit={deleteHeroSubmit}/>
            {/* <button
                onClick={()=> console.log("Anteriores")}
            >
                Anteriores
            </button>
            &nbsp;
            <button
                onClick={()=> console.log("Siguientes")}
            >
                Siguientes
            </button> */}
        </div>
    );
};

export default Dashboard;