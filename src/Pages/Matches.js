import React, { useEffect, useState } from "react";
import axios from "axios";
import { URL_Base } from "../Constants/URL_Base";
import { MatchContainer, ContainerImage } from '../Components/StyleMatches'
import { CardCharging } from '../Components/StyleHome';
import HeartBeating from '../Assets/HeartBeating.gif'

function Matches() {

    const [matches, setMatches] = useState([])

    useEffect(() => {
        GetAllMatches()
    }, [])

    const GetAllMatches = () => {
        axios.get(`${URL_Base}matches`)
            .then((res) => {
                setMatches(res.data.matches)
            })
            .catch((err) => {
                alert(err.response.data.message)
            })
    }

    const match = matches.map((match) => {
        return (
            <MatchContainer
                key={match.id}
                title="Conversar com o seu match">
                <ContainerImage
                    style={{
                        backgroundImage: `url(${match.photo})`
                    }} />
                <p>{match.name}</p>
            </MatchContainer>
        )
    })

    return (
        <div>
            {match.length !== 0 ?
                <section>
                    {match}
                </section>
                :
                <section>
                    <CardCharging
                        style={{
                            backgroundImage: `url(${HeartBeating})`,
                            borderRadius: 6,
                        }}>
                        <h1>Seu matches aparecerão aqui. Veja mais perfis!</h1>
                    </CardCharging>
                </section>
            }
        </div>

    )
}

export default Matches;