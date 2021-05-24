import React, { useState, useCallback, useEffect, useMemo } from 'react'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { useHttpClient } from '../../../../../hooks/http-hook'

const PaginationComponent = (props) => {



    const [PageNumber, setPageNumber] = useState(1)

    function handle_pagination(event, button_number) {
        event.preventDefault();
        setPageNumber(button_number);
        props.fetch_items(props.items_per_page, button_number)
        console.log(`button_number`, button_number)
    }





    function generate_pagination_bar(news_count, items_per_page, page_number) {
        if (!news_count) {
            return (<div>loading...</div>)
        }
        else {
            let pagination_entries = []
            for (let i = 1; i <= Math.ceil(news_count / items_per_page); i++) {
                pagination_entries.push(
                    <PaginationItem onClick={(e) => { handle_pagination(e, i) }} active={i === page_number} >
                        <PaginationLink href="#">
                            {i}
                        </PaginationLink>
                    </PaginationItem>
                )
            }


            return (
                <div style={{ margin: "auto", width: "100%", display: 'flex', justifyContent: 'center' }}>
                    <Pagination aria-label="Page navigation example">
                        {pagination_entries}
                    </Pagination>
                </div>
            )
        }


    }




    return (
        <div>
            {generate_pagination_bar(props.LoadedItemsCount, props.items_per_page, PageNumber)}
        </div>
    )
}

export default PaginationComponent
