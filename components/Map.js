import React from 'react';

const Map = () => {
    return (
        <div>
        <section className="map-area">
            <div id="map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3016.023376745925!2d-74.41429959999999!3d40.89330210000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3087ccc688a7d%3A0x43150851d6e31428!2s10%20Pleasant%20Valley%20Wy%2C%20Boonton%2C%20NJ%2007005%2C%20USA!5e0!3m2!1sen!2sin!4v1704381079678!5m2!1sen!2sin" className="map" allowFullScreen="">
                </iframe>
            </div>
        </section>

        <style jsx>{`
           .map {
                width: 100%;
                height: 100%
           } 
        `}</style>
        </div>
    );
};

export default Map;
