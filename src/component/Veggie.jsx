import React from 'react'
import { Component, useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/dist/css/splide.min.css';
import { Link } from 'react-router-dom';

function Veggie() {

    const [veggie, setVeggie] = useState([]);
    useEffect(() => {
        getVeggie();

    }, []);

    const getVeggie = async () => {
        const check = localStorage.getItem('veggie');
        if (check) {
            setVeggie(JSON.parse(check));

        }
        else {
            const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=e6cb30fe00a041a4a6a8ecdc920b9348&number=9&sort=price`;
            const api = await fetch(url);
            const data = await api.json();
            localStorage.setItem('veggie', JSON.stringify(data.results))
            setVeggie(data.results)
        }

    }
    return (
        <div>
            <Wrapper>
                <h3>Our Vegetarian Picks</h3>

                <Splide options={{
                    perPage: 3,
                    arrows: false, pagination: false,
                    drag: 'free', gap: '5rem'
                }}>
                    {veggie.map(res => {
                        return (
                            <SplideSlide key={res.id}>
                                <Card>
                                    <Link to={'/recipe/' + res.id}>
                                        <p>
                                            {res.title}
                                        </p>
                                        <img src={res.image} alt="nothing" />
                                        <Gradient></Gradient>
                                    </Link>
                                </Card>
                            </SplideSlide>
                        );
                    })}
                </Splide>
            </Wrapper>

        </div>
    )
}
const Wrapper = styled.div`
margin: 4rem 0rem`;

const Card = styled.div`
height: 13rem;
border-radius: 2rem;
overflow: hidden;
postion: relative;
img{
    border-radius: 2rem;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
}
p{
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center
   
}`;
const Gradient = styled.div`
z-index: 3;
position: absolute;
border-radius: 2rem;
margin: 0;
width: 100%;
height: 100%;
background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5))
`;
export default Veggie;
