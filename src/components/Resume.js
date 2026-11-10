import React from "react";

const Resume = () => {
    const openResume = () => {
        const pdfUrl = "User Interface Designer and Developer.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "User Interface Designer and Developer.pdf";
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