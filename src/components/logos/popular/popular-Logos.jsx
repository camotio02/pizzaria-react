import { Logo } from "../../Logo";
import { Alert } from "react-native-web";
import Temotio from '../../../assets/timo.jpg'
import { Link, useNavigate } from "react-router-dom";
import './popular-Logos.css'
import { MenuItens } from "../menu/menuItens";
import { useState } from "react";

export const PopularLogos = () => {
    const [searchFoods, setSearchFood] = useState('');
    const navigate = useNavigate();
    const HandleAddRecipe = () => {
        navigate('/add-recipes')
    }
    const handleChangeEmail = (e) => {
        const setSearch = e.target.value;

    }
    // function searchFood(event) {
    //     //Ler o valor do input de busca.
    //     const resultadoNaoEncontrado = document.querySelector('h1.resultado')
    //     const valorPesquisado = event.target.value.toLowerCase()
    //     //Encontrar a lista de cards no HTML.
    //     const carts = document.querySelectorAll('.cart')

    //     //Para cada  um dos cards ler o titulo da comida.
    //     carts.forEach(cart => {
    //         const titulo = cart.querySelector('h3').innerHTML.toLowerCase()
    //         //Para os titulos que contem  o valor da busca esconder o card.

    //         if (!titulo.includes(valorPesquisado)) {
    //             cart.style.display = 'none'
    //         } else {
    //             cart.style.display = 'block'
    //         }
    //     })
    // }
    const pesquisar = () => { };

    const searchFood = () => { };
    const Seguindo = () => {
        navigate('/seguindo')
    }
    const popular = () => {
        navigate('/home')
    }
    const Ingredients = () => {
        navigate('/add-recipes')
    }
    // const HandleHome = () => {
    //     const menuItens = document.querySelector('.menuitens')
    //     if(!menuItens) {

    //     }
    // }

    const hndlePerfilUser = () => {
        navigate('/perfiluser')
    }
    return (
        <>

            <div className="before" onClick={HandleAddRecipe}>
                +
            </div>
            <MenuItens />
            <div className="logos">
                <Logo />
                <img
                    onClick={hndlePerfilUser}
                    src={
                      Temotio
                    }
                    alt=""
                ></img>
            </div>
            <div className="pesquisa">
                <input
                    id="input"
                    name="input"
                    className="input"
                    type="search"
                    placeholder="O que vamos cozinhar hoje?"
                    onKeyUp={searchFood}
                    onChange={handleChangeEmail}
                    value={setSearchFood}
                />
                <svg
                    onClick={pesquisar}
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10.0057 8.80503H9.37336L9.14923 8.58891C9.93368 7.67639 10.4059 6.49171 10.4059 5.20297C10.4059 2.32933 8.07662 0 5.20297 0C2.32933 0 0 2.32933 0 5.20297C0 8.07662 2.32933 10.4059 5.20297 10.4059C6.49171 10.4059 7.67639 9.93368 8.58891 9.14923L8.80503 9.37336V10.0057L12.8073 14L14 12.8073L10.0057 8.80503ZM5.20297 8.80503C3.20983 8.80503 1.60091 7.19611 1.60091 5.20297C1.60091 3.20983 3.20983 1.60091 5.20297 1.60091C7.19611 1.60091 8.80503 3.20983 8.80503 5.20297C8.80503 7.19611 7.19611 8.80503 5.20297 8.80503Z"
                        fill="#F86E10"
                    />
                </svg>
            </div>
            <div className="selecao" onClick={Seguindo}>
                <div className="celec popular">
                    <a >
                        <p>FAVORITOS</p>
                    </a>
                </div>
                <div className="celec " onClick={popular}>
                    <a >
                        <p>POPULARES</p>
                    </a>
                </div>
                <div className="celec" onClick={Ingredients}>
                    <a>
                        <p>MEUS INGREDIENTES</p>
                    </a>
                </div>
            </div>
        </>

    )
}