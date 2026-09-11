import React from "react";

const Resume = () => {
    const onButtonClick = () => {
        const pdfUrl = "Senior User Interface and Content Designer.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "Senior User Interface and Content Designer.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <>
        <a href="#" title="Download Resume" onClick={onButtonClick} className="link">
            Download - RESUME
        </a>
        </>
    );
};

export default Resume;