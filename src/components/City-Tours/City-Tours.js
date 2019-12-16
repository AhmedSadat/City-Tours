import React, { Component } from "react";
import { tourData } from '../../tourData';
import City from '../City/City'

class CityTours extends Component {

    state = {
        tourData: tourData , 
    }

    tours = this.state.tourData;

    deleteTour(id) {
        this.tours.splice(id, 1);
        this.setState({
            tourData: this.tours
        })
        console.log(this.state.tourData);
    }

    render() {



        return (
            <div>

                {
                    this.tours.map((tour, index) => <City
                        key={tour.id}
                        img={tour.img}
                        city={tour.city}
                        name={tour.name} 
                        info={tour.info}
                        delete={() => this.deleteTour(index)}

                    />

                    )
                }

            </div>

        )


    }

}

export default CityTours;