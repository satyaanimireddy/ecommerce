import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { filterProducts } from '../redux/actions/productActions'

const Filter = () => {
    const [searchkey, setSearchkey] = useState("")
    const [sortkey, setSortkey] = useState("popular")
    const [category, setCategory] = useState("all")

    let dispatch = useDispatch()

    return (
        <div className='row justify-content-center align-items-center my-4'>
            <div className='col-md-4'>
                <input type="text" className='form-control' value={searchkey} onChange={(e) => setSearchkey(e.target.value)} placeholder='Search products' />
            </div>
            <div className='col-md-2'>
                <select className='form-control' value={sortkey} onChange={(e) => setSortkey(e.target.value)}>
                    <option value="popular">Popular</option>
                    <option value="htl">High To low</option>
                    <option value="lth">Low To High</option>
                </select>
            </div>
            <div className='col-md-2'>
                <select className='form-control' value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="all">All</option>
                    <option value="electronics">Electronics</option>
                    <option value="fashion">Fashion</option>
                    <option value="mobiles">Mobiles</option>
                </select>
            </div>
            <div className='col-md-2'>
                <button className='btn btn-dark' onClick={() => dispatch(filterProducts(searchkey, sortkey, category))}>Filter</button>
            </div>
        </div>
    )
}

export default Filter