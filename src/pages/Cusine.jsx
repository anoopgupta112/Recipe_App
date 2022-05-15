import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';


function Cusine() {
    const [cuisine, setCuisine] = useState([]);
    let params = useParams();
    const getCuisine = async (name) => {
        const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=e6cb30fe00a041a4a6a8ecdc920b9348&cuisine=${name}`;
        const data = await fetch(url);
        const respices = await data.json();
        setCuisine(respices.results)
    };
    useEffect(() => {
        getCuisine(params.type);
    }, [params.type])
    return (
        <Grid>
            {cuisine.map(item => {
                return (
                    <Card key={item.id}>

                        <img src={item.image}></img>
                    </Card>
                )
            })}
        </Grid>
    )
}
const Grid = styled.div`

display: grid;
grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
grid-gap: 3rem;
`;
const Card = styled.div`
img{
    widht: 100%;
    border-radius: 2rem;

}
a{
    text-decoration: none:
}
h4{
    text-align: center;
    padding: 1rem;
}
`;

export default Cusine