import ListTable from '../component/listTable';
import Navibar from '../component/navbar';
import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { Button } from 'react-bootstrap'

export default function FriendList() {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    return(
        <>
            <Navibar />
            <div ref={componentRef}>
                <ListTable />
            </div>
            <div className="mx-2 py-3 base">
                <Button variant="success" onClick={handlePrint}>Download Table PDF</Button>
            </div>
        </>
    )
}