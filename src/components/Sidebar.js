import React from 'react'

import { Divider, IconButton, List } from '@material-ui/core';
import { mainListItems, secondaryListItems } from './listItems';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

function Sidebar({ classes }) {
    return (
        <>
            
            <Divider />

            <List> {mainListItems}</List>
            <Divider />
            {/* <List>{secondaryListItems}</List> */}

        </>
    )
}

export default Sidebar
