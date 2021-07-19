import React, { useEffect } from "react";
import { useState } from "react"
import '../App.css'

const FilterText = ({ filter, setFilter }) => {

    const [tempFilter, setTempFilter] = useState("")

    const handleChange = () => {
        if (tempFilter !== "") {
            let filterNew = filter.concat(tempFilter);
            setFilter(filterNew)
        }
        setTempFilter("")
    }

    const handleDelete = (removedItem) => {
        let filterNew = filter.filter(item => item !== removedItem)
        setFilter(filterNew)
    }

    return (

        <div className="mainFilter">
            Adicione o filtro:
            <input type="text" value={tempFilter} onChange={(e) => setTempFilter(e.target.value)} onBlur={() => handleChange()} />
            <div className="filterContainer">
                {filter.map(item => {
                    return (
                        <div className="filterItem">
                            <span>{item}</span>
                            <a onClick={() => handleDelete(item)}>X</a>
                        </div>
                    )
                })}
            </div>

        </div>

    )
}

export default FilterText