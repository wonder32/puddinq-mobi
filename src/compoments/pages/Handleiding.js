import React from 'react';
import styled from "styled-components";
import search from '../../images/search.PNG';
import layers from '../../images/lagen.PNG';
import sidebarOut from "../../images/sidebar-out.PNG";
import sidebarIn from "../../images/sidebar-in.PNG";
import fullscreen from "../../images/fullscreen.PNG";
import sharing from "../../images/sharing.PNG";
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Gebruik = () => {

    return (
        <HelmetProvider>
        <GebruikContainer className="home-main-container container-fluid">
            <Helmet
                title="Puddinq.mobi - Handleiding web applicatie"
                meta={[
                    { property: "og:title", content: "Puddinq.mobi | handleiding voor gebruik van de puddinq applicatie" },
                    { property: "description", content: "Beschrijving voor de kaart applicatie waarop per adres zaken als luchtfoto's, kadaster- en bouwgrenzen, hoogtes en vergunningen bekeken kunnen worden." },
                    { property: "og:description", content: "Beschrijving voor de kaart applicatie waarop per adres zaken als luchtfoto's, kadaster- en bouwgrenzen, hoogtes en vergunningen bekeken kunnen worden." },
                    { property: "og:type", content: "website" },
                    { property: "og:url", content: "https://www.puddinq.mobi/handleiding/" },
                    { property: "og:image", content: "https://www.puddinq.mobi/combination-twee.png" },
                    // Any other meta tags go here as objects or you can just add children directly inside this component.
                ]}
            />
            <div className="row">
                <div className="col-lg">
                    <div className="block-content">
                        <h2 className="display-5 text-uppercase py-5 text-center">
                            Handleiding
                        </h2>
                        <p>
                            De app is gemaakt om zo duidelijk mogelijk te zijn, maar om de werking van alle onderdelen helder
                            te houden hieronder per onderdeel de werking:
                        </p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg">
                    <div className="block-content">
                        <h2 className="display-5 text-uppercase py-5 text-center">
                            Zoeken
                        </h2>
                        <p>
                            Het zoeken van een locatie kan gemakkelijk met het vergrootglas links boven in het scherm. Een
                            locatie wordt altijd als zoeksuggestie weergegeven, en alleen uit die weergave kan gekozen worden.
                        </p>
                        <img src={search} className="rounded img-fluid" alt="voorbeeld zoeken" />
                    </div>
                </div>
                <div className="col-lg">
                    <div className="block-content">
                        <h2 className="display-5 text-uppercase py-5 text-center">
                            Volledig scherm
                        </h2>
                        <p>Is uw beeldscherm te klein? met de volledig scherm optie kan de kaart op volledig scherm weergegeven worden.
                        </p>
                        <img src={fullscreen} className="rounded img-fluid" alt="voorbeeld volledig scherm" />
                    </div>
                </div>
                <div className="col-lg">
                    <div className="block-content">
                        <h2 className="display-5 text-uppercase py-5 text-center">
                            Zijbalk
                        </h2>
                        <p>In de zijbalk kunnen de lagen geselecteerd worden. klik op het kleine label om deze te openen.
                        </p>
                        <img src={sidebarOut} className="rounded img-fluid" alt="voorbeeld zijbalk" />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg">
                    <div className="block-content">
                        <h2 className="display-5 text-uppercase py-5 text-center">
                            Zijbalk sluiten
                        </h2>
                        <p>
                            Het sluiten van de zijbalk gaat met het pijltje.
                        </p>
                        <img src={sidebarIn} className="rounded img-fluid" alt="voorbeeld zijbalk sluiten" />
                    </div>
                </div>
                <div className="col-lg">
                    <div className="block-content">
                        <h2 className="display-5 text-uppercase py-5 text-center">
                            Lagen selecteren
                        </h2>
                        <p>
                            Het aan en uitzetten van een laag gaat door het te selecteren of juist niet. De transparatie
                            kan worden ingesteld door de schuif onder de laag te bewegen.
                        </p>
                        <img src={layers} className="rounded img-fluid" alt="voorbeeld zijbalk sluiten" />
                    </div>
                </div>
                <div className="col-lg">
                    <div className="block-content">
                        <h2 className="display-5 text-uppercase py-5 text-center">
                            Delen
                        </h2>
                        <p>
                            Er zijn twee opties om eem zoekopdracht te delen. Met de whatsapp button is gemakkelijk een
                            locatie te delen. Op de pc is ook de screenshot optie beschikbar die het huidige kaartbeeld
                            opslaat als afbeelding.
                        </p>
                        <img src={sharing} className="rounded img-fluid" alt="voorbeeld zijbalk sluiten" />
                    </div>
                </div>
            </div>

        </GebruikContainer>
            </HelmetProvider>
    )

}

export default Gebruik;

//  STYLED COMPONENTS STYLES
const GebruikContainer = styled.div`
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