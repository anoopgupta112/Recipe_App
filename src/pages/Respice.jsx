import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components';

function Respice() {
    const [active, setActiveTag] = useState();
    const [details, setDetails] = useState({});
    let param = useParams()
    const fetchDetails = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${param.name}/information?apiKey=e6cb30fe00a041a4a6a8ecdc920b9348`);
        const detailsData = await data.json();
        setDetails(detailsData);
        console.log(detailsData);
    };
    useEffect(() => {
        fetchDetails();
    }, [param.name])

    return (
        <DetailWrapper>


            <div>
                <h2>{details.title}</h2>
                <img src={details.image} alt="" />
            </div>
            <Info>
                <Button className={active === 'instruction' ? 'active' : ''} onClick={() => setActiveTag("instruction")}>Instructions</Button>
                <Button className={active === 'ingredient' ? 'active' : ''} onClick={() => setActiveTag("ingredient")}>Ingredients</Button>
                {active === 'instruction' ? (

                    <div>
                        <p>{details.code}</p>
                        <h3 dangerouslySetInnerHTML={{ __html: details.summary }}>
                        </h3>
                        <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}>
                        </h3>
                    </div>) : (
                    <div>
                        <p>{details.code}</p>

                        {/* <ul>
                            {(details.extendedIngredients).map((ingredient) => {
                                <li key={ingredient.id}>{console.log(ingredient.id)} helo {ingredient.id}</li>
                            })}

                        </ul> */}
                    </div>
                )
                }
            </Info>
        </DetailWrapper>
    )
}

const DetailWrapper = styled.div`
margin-top: 10rem;
margin-bottom: 5rem;
display: flex;


.active{
    background: linear-gradient(35deg, #662f2b, #9c544f);
    color: white;
}
h2{
    margin-bottom: 2rem;
}
li{
    font-size: 1.2rem;
    line-height: 2.5rem;
}
ul{
    margin-top: 2rem;
}
h3{
    font-size: 0.8rem;
}

`;
const Button = styled.button`
margin-left: 3rem;
padding: 1rem 2rem;
color: #313131;
background: white;
border: 2px solid black;
margin-right: 2rem;
font-weight: 600;
`;
const Info = styled.div`

height: 3rem;
margin-left: 5rem;

`;
export default Respice;