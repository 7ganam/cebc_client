import React, { useEffect, useState } from 'react'

import country_data from "./country_data.json";


import { useCallback } from 'react';
import { useHttpClient } from "../../../../../hooks/http-hook"

import CountriesDataComponent from './CountriesDataComponent/CountriesDataComponent'
import './MapComponent.css'


function MapComponent() {

    const { isLoading: countrysIsLoading, error: countrysError, sendRequest: sendcountrysRequest, clearError } = useHttpClient();
    const [Loadedcountrys, setLoadedcountrys] = useState([]);
    const fetch_countrys = useCallback(
        async () => {
            try {

                const responseData = await sendcountrysRequest(`${process.env.REACT_APP_BACKEND_URL}/countries`);

                setLoadedcountrys(responseData);
            } catch (err) {
                console.log({ err })
            }


        },
        [sendcountrysRequest],
    );



    const mena_countries = ["Algeria", "Egypt", "Bahrain", "Iran", "Iraq", "Jordan", "Kuwait", "Lebanon", "Libyan Arab Jamahiriya", "Morocco", 'Oman', 'Qatar', "Saudi Arabia", "Syrian Arab Republic", 'Tunisia', "United Arab Emirates", "Yemen", "Mauritania"]

    const mena_countries_alpha2 = ["DZ", "EG", "BH", "IQ", "JO", "KW", "LB", "LY", "MA", 'OM', 'QA', "SA", "SY", 'TN', "AE", "YE", 'PS']

    const [ClickedCountries, setClickedCountries] = useState([])

    function toggle_country(country_code) {
        setClickedCountries((old_state) => {
            if (old_state.includes(country_code)) {
                return (old_state.filter(code => code !== country_code))
            }
            else {
                return ([...old_state, country_code])
            }
        })

    }


    function draw_map() {
        if (window.$) {
            window.$(function () {
                window.$('#world-map').vectorMap(
                    {
                        map: 'world_mill_en',
                        backgroundColor: 'white',
                        regionStyle: {
                            initial: {
                                fill: 'gray',
                                "fill-opacity": 1,
                                stroke: 'none',
                                "stroke-width": 0,
                                "stroke-opacity": 1
                            },
                            hover: {

                                "fill-opacity": 0.8,
                                cursor: 'pointer'
                            },
                            selected: {
                                fill: '#FCC744'
                            },
                            selectedHover: {
                            }
                        },

                        focusOn: {
                            x: 0.54,
                            y: 0.52,
                            scale: 4
                        },
                        zoomOnScroll: false,
                        regionsSelectable: true,
                        panOnDrag: false,
                        onRegionClick: function (event, code) {
                            toggle_country(code)
                        },

                    }
                );
            });
        }
        else {
            setTimeout(draw_map, 200);
        }
    }

    function hide_countries(shown_country_list) {
        let all_countries = country_data.ref_country_codes
        let countries_to_hide = all_countries.filter((country) => {
            return !shown_country_list.includes(country.alpha2)
        })
        let russia = document.querySelectorAll('[data-code="RU"]');
        if (russia.length > 0) {
            for (let country_to_hide of countries_to_hide) {
                let country_node = document.querySelectorAll(`[data-code=${country_to_hide.alpha2}`);
                if (country_node.length > 0) {
                    country_node[0].style.display = 'none'
                }
            }
        }
        else {
            setTimeout(() => { hide_countries(shown_country_list) }, 200);
        }
    }

    useEffect(() => {
        fetch_countrys()
    }, []);

    useEffect(() => {
        draw_map()
        hide_countries(mena_countries_alpha2)
    }, [])
    return (
        <>
            <div
                className='knowledge_center_map'
                style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: "100%", marginBottom: '10px' }}
            >
                <div id="world-map" style={{ width: "100%", height: '400px', margin: 'auto' }}></div>
            </div>
            {!!Loadedcountrys && Loadedcountrys.length > 0 &&
                <div style={{ width: "100%", padding: '0' }}>
                    <CountriesDataComponent countries={ClickedCountries} Loadedcountrys={Loadedcountrys} />
                </div>
            }
        </>
    )
}

export default MapComponent
