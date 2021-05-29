import React from 'react'
import './CountriesDataComponent.css'
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';
import { Link } from 'react-router-dom';

function CountriesDataComponent(props) {
    console.log(`props`, props)
    function generate_country_data(country) {
        if (!country) { return (<div>no data found</div>) }
        let case_studies_views = country.case_studies.map((case_study, index) => {
            return (
                <div className='data_box'   >
                    <Link className="data_link" to={`/KNOWLEDGECENTER/CASE_STUDIES/${case_study.id}`}>
                        <i class="fas fa-external-link-alt mr-2 ml-1"></i>
                        {`CASE STUDY: ${case_study.title}`}
                    </Link>
                </div>
            )
        })
        let reports_view = country.reports_publications.map((report, index) => {
            return (
                <div className='data_box'   >
                    <Link className="data_link" to={`/KNOWLEDGECENTER/REPORTS/${report.id}`}>
                        <i class="fas fa-external-link-alt mr-2 ml-1"></i>
                        {`REPORT: ${report.title}`}
                    </Link>
                </div>
            )
        })
        let projects_view = country.projects.map((project, index) => {
            return (
                <div className='data_box'   >
                    <Link className="data_link" to={`/KNOWLEDGECENTER/PROJECTS/${project.id}`}>
                        <i class="fas fa-external-link-alt mr-2 ml-1"></i>
                        {`PROJECT: ${project.title}`}
                    </Link>
                </div>
            )
        })

        let all_data = [...case_studies_views, ...reports_view, ...projects_view]
        if (all_data.length === 0) { return (<div>no data found</div>) }

        return all_data

    }

    function generate_selected_countries_views(selected_countries, loaded_counties) {
        let views = selected_countries.map((country, country_index) => {
            let loaded_country = loaded_counties.filter((loaded_country) => country === loaded_country.alpha2_code)
            loaded_country = loaded_country[0]
            console.log('country', country, 'loaded_country', loaded_country)
            return (
                <li key={loaded_country.id} className={
                    `country_data_item
                    index_${country_index === 0 ? "first" : country_index} 
                    index_${country_index === (selected_countries.length - 1) ? "last" : country_index}
                    `
                }>
                    <div className=
                        {
                            `country_data_header 
                            index_${country_index === 0 ? "first" : country_index} 
                            index_${country_index === (selected_countries.length - 1) ? "last" : country_index}`
                        }
                    >
                        {loaded_country.name}
                        <Button color="warning" id={`toggler_${loaded_country.id}`} >
                            <i class="fas fa-angle-double-down"></i>
                        </Button>
                    </div>
                    <UncontrolledCollapse className='country_data_body' toggler={`#toggler_${loaded_country.id}`}>
                        {generate_country_data(loaded_country)}
                    </UncontrolledCollapse>
                </li>
            )
        })

        return views
    }

    return (
        <div>
            {!!props.countries && props.Loadedcountrys &&
                <ul style={{ width: '100%' }}>
                    {generate_selected_countries_views(props.countries, props.Loadedcountrys)}
                </ul>
            }

        </div>
    )
}

export default CountriesDataComponent
