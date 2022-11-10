import React from 'react';
import axios from 'axios';

function Produtos({products}){

    return (

        <div>
            {products.map((products) => (
                <div class='caixaprodutos'> 
                    <div class='divid'> <p> {products.id} </p> </div>
                    <div class='divtitulo'> <p> {products.title} </p> </div>
                    <div class='divimage'> <img src= {products.image}></img> </div>
                </div>
            ))}
        </div>


    )


}

export async function getServerSideProps(context) {
    const response = await axios.get(
        'https://fakestoreapi.com/products'
    );

    const data = await response.data;

    return{
        props: {products:data},
    }
}

export default Produtos;



/*import React from 'react';

export default function Produtos(){
    return(
        <>
            <h1> PRODUTOS </h1>
            <li> Shampoo Anticaspa Clear Men Cabelo Barba 200ML  </li>
            <img src='produto1.png'></img>
            <li> Shampoo Anticaspa Clear Botanique AntiCoceira  </li>
            <img src='produto2.jpg'></img>
            <li> Shampoo Anticaspa Clear Men Cabelo Barba 200ML  </li>
            <img src='produto3.jpg'></img>
            <li> Gel Clear Men Controle de Caspa 300g </li>
            <img src='produto4.jpg'></img>
            <li> Shampoo Clear Mentol Anticaspa Ice Cool  </li>
            <img src='produto5.jpg'></img>
            <li> Shampoo Clear Antiqueda Men </li>
            <img src='produto6.jpg'></img>
        </>
    )
}
*/