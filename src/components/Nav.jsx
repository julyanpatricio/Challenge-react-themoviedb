import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import bannerMovies from '../bannerMovies.jpg'
import logoMovies from '../logoMovies.png'
import Search from "./Search";
import './Nav.css';
import { filterMovies } from "../actions";
import { useDispatch } from "react-redux";


function Nav() {
    const [filterRating, setFilterRating] = useState(null);
    const dispatch = useDispatch()
    const urlPatch = useLocation().pathname

    function handleChange(e) {
        if (e.target.value * 2 !== filterRating) return setFilterRating((e.target.value * 2))
        document.querySelectorAll('[name=rating]').forEach((x) => x.checked = false)
        setFilterRating(null)
    }

    useEffect(() => {
        dispatch(filterMovies(filterRating))
    }, [dispatch, filterRating])

    return (
        <div className="navbar" style={{
            backgroundImage: `linear-gradient(0deg, rgba(52,58,64,1) 0%, rgba(52,58,64,0) 100%), url(${bannerMovies})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        }}>
            <div className='nav-izq'>
                <Link className="navbar-brand" to="/">
                    <img id="logo" src={logoMovies} height={80} className="d-inline-block align-top" alt="" />
                </Link>
                {urlPatch !== '/' ? <Link style={{ textDecoration: 'none',marginLeft: '3%'}} to="/">{`<<< Back to movies`}</Link> : null}
            </div>
            <nav>
                <ul className="list">
                    <li className='list-item'>
                        <Search />
                    </li>
                    {urlPatch === '/' ? <li className='list-item'>
                        <div className='stars-filter'>
                            <div>
                                Filter by rating
                            </div>
                            <div className="rating">
                                <input id="radio5" type="radio" name="rating" value="5" onClick={handleChange} />
                                <label id='estrellas' htmlFor="radio5">★</label>
                                <input id="radio4" type="radio" name="rating" value="4" onClick={handleChange} />
                                <label id='estrellas' htmlFor="radio4">★</label>
                                <input id="radio3" type="radio" name="rating" value="3" onClick={handleChange} />
                                <label id='estrellas' htmlFor="radio3">★</label>
                                <input id="radio2" type="radio" name="rating" value="2" onClick={handleChange} />
                                <label id='estrellas' htmlFor="radio2">★</label>
                                <input id="radio1" type="radio" name="rating" value="1" onClick={handleChange} />
                                <label id='estrellas' htmlFor="radio1">★</label>
                            </div>
                        </div>
                    </li> : null}
                </ul>
            </nav>
        </div >
    );
}

export default Nav;
