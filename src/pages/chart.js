import ChartLine from '../component/chartLine'
import Navibar from '../component/navbar'
import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { Button } from 'react-bootstrap'

export default function Chart() {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    return(
        <>
            <Navibar />
            <div ref={componentRef}>
                <ChartLine />
            </div>
            <div className="mx-2 py-3 base">
                <Button variant="success" onClick={handlePrint}>Download Chart PDF</Button>
            </div>
        </>
    )
}