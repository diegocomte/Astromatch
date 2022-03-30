import axios from 'axios';
import { useEffect, useState } from 'react';
import { Header } from '../Constants/Header';
import { URL_Base } from "../Constants/URL_Base";
import {
    CardContainer,
    ButtonsContainer,
    ButtonDislike,
    ButtonLike,
    ProfileBio,
    CardCharging,
} from '../Components/StyleHome';
import HeartBeating from '../Assets/HeartBeating.gif'


function Home() {
    const [profiles, setProfiles] = useState([])
    const [choice, setChoice] = useState(false)

    const GetValueFromButtons = (value) => {
        setChoice(value)
        ChoosePerson()
    }

    useEffect(() => {
        GetProfileToChose()
    }, [])

    const GetProfileToChose = () => {
        axios.get(`${URL_Base}person`)
            .then((res) => {
                setProfiles(res.data.profile)
            })
            .catch((err) => {
                alert(err.response.data.message)
            })
    }

    const ChoosePerson = () => {
        const Body = {
            id: `${profiles.id}`,
            choice: choice
        }
        axios.post(`${URL_Base}choose-person`, Body, Header)
            .then((res) => {
                GetProfileToChose()
            })
            .catch((err) => {
                alert(err.response.data.message)
            })
    }

    return (
        <div>
            {profiles.length !== 0 ? 
                <CardContainer
                    style={{
                        backgroundImage: `url(${profiles.photo})`,
                        borderRadius: 6,
                    }}>
                    <ProfileBio>
                        <p className='Profile'>{profiles.name}, {profiles.age}</p>
                        <p className='Bio'>{profiles.bio}</p>
                    </ProfileBio>
                </CardContainer>
                :
                <CardCharging
                style={{
                    backgroundImage: `url(${HeartBeating})`,
                    borderRadius: 6,
                }}>
                    <h1>Carregando...</h1>
                </CardCharging>
            }

            <ButtonsContainer>
                <ButtonDislike
                    title="Ignorar"
                    onClick={() => {
                        GetValueFromButtons(false)
                    }}>
                    X
                </ButtonDislike>

                <ButtonLike
                    title="Aprovar"
                    onClick={() => {
                        GetValueFromButtons(true)
                    }}>
                    ♥
                </ButtonLike>
            </ButtonsContainer>
        </div>
    )
}

export default Home