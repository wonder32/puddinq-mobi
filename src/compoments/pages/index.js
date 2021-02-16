import React from 'react';
import styled from "styled-components";
import combinationOne from '../../images/combinatie-een.PNG';
import combinationTwo from '../../images/combinatie-twee.PNG';
import kadaster from '../../images/kadaster.PNG';
import hights from '../../images/hoogtes.PNG';
import permits from '../../images/vergunningen.PNG';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Home = () => {

    return (
        <HelmetProvider>
        <MainContainer className="home-main-container">
            <Helmet
                title="Puddinq.mobi - Home"
                meta={[
                    { property: "og:title", content: "Puddinq.mobi | geografische OpenData van kadaster tot vergunning" },
                    { property: "description", content: "Kaart applicatie waarop per adres zaken als luchtfoto's, kadaster- en bouwgrenzen, hoogtes en vergunningen bekeken kunnen worden." },
                    { property: "og:description", content: "Kaart applicatie waarop per adres zaken als luchtfoto's, kadaster- en bouwgrenzen, hoogtes en vergunningen bekeken kunnen worden." },
                    { property: "og:type", content: "website" },
                    { property: "og:url", content: "https://www.puddinq.mobi" },
                    { property: "og:image", content: "https://www.puddinq.mobi/combination-twee.png" },
                    // Any other meta tags go here as objects or you can just add children directly inside this component.
                ]}
            />
            <div className="row">
                <div className="col-lg">
                    <div className="block-content">
                        <h1 className="display-5 text-uppercase py-5 text-center">
                            Puddinq.mobi
                        </h1>
                        <p>
                            Deze website permanent beta status als speeltuin voor mijzelf en geïnteresseerden. Aan de
                            inhoud van de website kunnen geen rechten worden verleend en er wordt gebuik gemaakt van
                            functionele coockies om het gedrag te volgen en daarmee het gebruik te verbeteren.
                        </p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg">
                    <div className="block-content">
                        <h2 className="display-5 text-uppercase py-5 text-center">
                            Vergunningen
                        </h2>
                        <p>Een onderdeel van deze app is de weergave van gepubliceerde vergunningen in de kaart. U hoeft
                            niet de locale gemeente website of krant door te lopen of uw adres er tussen staat. U kan
                            in een oogopslag zien welke vergunningen gepubliiceerd zijn in de directe omgeving van de
                            zoekopdracht.
                        </p>
                        <img src={permits} className="rounded img-fluid" alt="voorbeeld vergunningen" />
                    </div>
                </div>
                <div className="col-lg">
                    <div className="block-content">
                        <h2 className="display-5 text-uppercase py-5 text-center">
                            Hoogtes
                        </h2>
                        <p>Met de hoogtekaart kan je snel afwijkingen zien in de omgeving. Deze informatielaag geeft snel </p>
                        inzicht bij het overwegen van een opbouw door te vergelijken met de buren of in te schatten welke
                        bouwwerken op een perceel staan.
                        <img src={hights} className="rounded img-fluid" alt="voorbeeld hoogtes" />
                    </div>
                </div>
                <div className="col-lg">
                    <div className="block-content">
                        <h2 className="display-5 text-uppercase py-5 text-center">
                            Kadaster
                        </h2>
                        <p>Het kadaster geeft de officiële grenzen aan van percelen. Met een grove benadering kan zo</p>
                        snel worden gezien of bouwwerken op of over de grens staan van een perceel.
                        <img src={kadaster} className="rounded img-fluid" alt="voorbeeld kadaster" />
                    </div>
                </div>
                <div className="row">
                <div className="col-lg">
                    <div className="block-content">
                        <h2 className="display-5 text-uppercase py-5 text-center">
                            Panden
                        </h2>
                        <p>De laag met panden geeft de offieel geregistreerde bouwgrenzen weer. Deze komen grotendeels
                            overeen met werkelijke bouwwerken. Maar het kan ook betekeninen dat er een bouwwerk toegestaan
                        is maar (nog) niet daadwerkelijk geplaatst.</p>
                        <img src={kadaster} className="rounded img-fluid" alt="voorbeeld panden" />
                    </div>
                </div>
                <div className="col-lg">
                    <div className="block-content">
                        <h2 className="display-5 text-uppercase py-5 text-center">
                            Combinatie 1
                        </h2>
                        <p>De kracht van deze applicatie komt het best tot recht bij de combinatie van lagen. Per laag kan
                            ook de transparantie ingesteld worden om nuances nog scherper in beeld te brengen. (luchtfoto,
                            gebouwgrens en bouwgrens)
                        </p>
                        <img src={combinationOne} className="rounded img-fluid" alt="voorbeeld combinatie" />
                    </div>
                </div>
                    <div className="col-lg">
                        <div className="block-content">
                            <h2 className="display-5 text-uppercase py-5 text-center">
                                Combinatie 2
                            </h2>
                            <p>De hoogtekaart kan een logisch beeld geven voor de aanvraag van een opbouw binnen een perceel. (kadaster,
                                bouwgrens, hoogtes en vergunningen)
                            </p>
                            <img src={combinationTwo} className="rounded img-fluid" alt="voorbeeld combinatie twee" />
                        </div>
                    </div>
                </div>
            </div>
        </MainContainer>
        </HelmetProvider>
    )

}

export default Home;

//  STYLED COMPONENTS STYLES
const MainContainer = styled.div`
h2 {
    color: var(--black);
}


.row {
    margin:0;
}

.block-content {
    margin: 5px;
    padding: 16px;
    background-color: var(--white);
    border-radius: 16px;
    opacity: 0.95;
}
`;