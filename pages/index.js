import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";

function HomePage() { //Um componente chamando outro componente (Menu, Header, Timeline)!! 
    const estilosDaHomePage = {
        //backgroundColor: "red" 
    };

    // console.log(config.playlists); 

    return (
        <>
            <CSSReset />
            <div style={estilosDaHomePage}>

                <Menu />
                <Banner />
                <Header />
                <Timeline playlists={config.playlists}> Conteudo </Timeline>
            </div>
        </>
    )
}

export default HomePage

/* function Menu() {
    return (
        <div>
            Menu
        </div>
    )
} */

const StyledBanner = styled.div`
     
     img {
        width: 1512px;
        height: 230px;
        object-fit: cover;
     }
`;

function Banner() {
    return (
        <StyledBanner>
            <img src={`${config.banner}`} />
        </StyledBanner>
    )
}

const StyledHeader = styled.div`
  
    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
     }
     .user-info {
        margin-top: 10px;
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;

     }
`;
function Header() {
    return (

        <StyledHeader>
            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`} />
                <div>
                    <h2>
                        {config.name}
                    </h2>
                    <p>
                        {config.job}
                    </p>
                </div>
            </section>
        </StyledHeader>
    )
}

function Timeline(props) {
    //console.log("Dentro do componente", props.playlists)
    const playlistName = Object.keys(props.playlists);
    return (
        <StyledTimeline>
            {playlistName.map((playlistName) => { //para cada playlistName, retorna uma playlistName. 
                const videos = props.playlists[playlistName];
                console.log(videos);
                return (
                    <section>
                        <h2>{playlistName}</h2>
                        <div>
                            {videos.map((video) => {
                                return (
                                    <a href={video.url}>
                                        <img src={video.thumb} />
                                        <span>
                                            {video.title}
                                        </span>

                                    </a>
                                )
                            })}
                        </div>
                    </section>
                )
            })}
        </StyledTimeline>
    )
}
