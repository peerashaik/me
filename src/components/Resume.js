import React from "react";

const Resume = () => {
    const openResume = () => {
        const pdfUrl = "senior-user-interface-designer.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "senior-user-interface-designer.pdf";
        window.open(link);
        link.click();
    };
    return (
        <>
        <a href="#" title="Download Resume" onClick={openResume} className="link">
            Download - RESUME
        </a>
        </>
    );
};

export default Resume;