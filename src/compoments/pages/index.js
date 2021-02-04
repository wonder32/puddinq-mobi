import React from 'react';
import styled from "styled-components";


const Home = () => {

    return (
        <MainContainer className="home-main-container">

            <div className="row">
                <div className="col-lg">
                    <div className="block-content">
                        <h1 className="display-5 text-uppercase py-5 text-center">
                            puddinq.mobi
                        </h1>
                        <p>Puddinq.mobi is een Nederlandse online applicatie voor inzage in officiële open overheidsdata.
                            De app geeft inzage in de ruimtelijke ordening op vlakken als kaarten, gebouw- en kadastergrenzen,
                            bebouwingshoogten, gepubliceerde vergunningen en (historische) luchtfoto's.
                        </p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg">
                    <div className="block-content">
                        <h2 className="display-5 text-uppercase py-5 text-center">
                            OpenData
                        </h2>
                        <p>Open data is de gangbare term voor publiek beschikbare overheidsdata. Met name vanwege de
                        wet openbaarheid van bestuur is hiermee de drempel weggenomen voor burgers om inzage te krijgen
                        in verschillende bronnen zonder daar een aanvraag (WOB verzoek) voor te doen. Deze applicatie
                        bundelt verschillende bronnen en vegroot daarme het gemak deze brommen te raadplegen.
                        </p>
                    </div>
                </div>
                <div className="col-lg">
                    <div className="block-content">
                        <h2 className="display-5 text-uppercase py-5 text-center">
                            Bronnen
                        </h2>
                        <p>Puddinq maakt voornamelijk gebruik van de gegevens uit PDOK, maar ook van gegevens uit het
                        kadaster en register voor gepubliceerde vergunningen.
                        </p>

                    </div>
                </div>
                <div className="col-lg">
                    <div className="block-content">
                        <h2 className="display-5 text-uppercase py-5 text-center">
                            Non profit
                        </h2>
                        <p>Deze applicatie is een non profit initiatief vanuit mijn passie voor web applicaties, api's en
                        ervaring met geo informatie. Het project is een oefenruimte voor werken met react en openlayers.
                            De broncode is opensource maar maakt gebruik van enkele koppelingen (api's) die niet onder de
                            opensource licentie vallen. Voor contact of info mail naar info@puddinq.mobi.
                        </p>
                    </div>
                </div>
            </div>
        </MainContainer>
    )

}

export default Home;

//  STYLED COMPONENTS STYLES
const MainContainer = styled.div`
h2 {
    color: var(--black);
}

.block-content {
    margin: 5px;
    padding: 16px;
    background-color: var(--white);
    border-radius: 16px;
    opacity: 0.95;
}
`;