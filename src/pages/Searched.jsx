import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';


function Searched() {

    let param = useParams();
    const [searchedRes, setSearchedRes] = useState([]);

    const getSearched = async (name) => {
        const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=e6cb30fe00a041a4a6a8ecdc920b9348&query=${name}`;
        const data = await fetch(url);
        const respices = await data.json();
        setSearchedRes(respices.results)

    };

    useEffect(() => {
        getSearched(param.search);
        console.log(param.search);
    }, [param.search])

    return (
        <Grid>
            {searchedRes.map((item) => {
                return (
                    <Card key={item.id}>
                        <img src={item.image}></img>
                        <h4>{item.title} </h4>
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


export default Searched;