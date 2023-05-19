import React, {useEffect, useState} from "react";
import ApiService from "../../Services/api-service";
import "./random-planet.css";

const RandomPlanet = () => {
    const apiService = new ApiService();

    const [planet, setPlanet] = useState({
        id: undefined,
        name: null,
        population: null,
        rotationPeriod: null,
        diameter: null,
    });

    const updatePlanet = async () => {
        const count = await apiService.getPlanetsCount();
        let id = Math.floor(Math.random() * count) + 1;
        apiService.getPlanet(id).then((planet) =>
            setPlanet({
                id,
                name: planet.name,
                population: planet.population,
                rotationPeriod: planet.rotation_period,
                diameter: planet.diameter,
            })
        );
    };

    useEffect(() => {
        const interval = setInterval(() => {
            updatePlanet();
        }, 2000);
        return () => clearInterval(interval);
    }, []);
    return (
        <div className="random-planet bg-dark rounded">
            <img
                className="planet-image"
                src="https://starwars-visualguide.com/assets/img/planets/5.jpg"
            />
            <div>
                <h4>{planet.name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Population</span>
                        <span>{planet.population}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Rotation Period</span>
                        <span>{planet.rotationPeriod}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Diameter</span>
                        <span>{planet.diameter}</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};
export default RandomPlanet;
