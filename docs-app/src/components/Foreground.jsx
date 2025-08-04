import React, { useState } from 'react';
import { GoDownload } from "react-icons/go";
import { GoX } from "react-icons/go";

function Foreground() {
  const [downloadingIndex, setDownloadingIndex] = useState(null);

  const handleDownload = (index) => {
    setDownloadingIndex(index);

    setTimeout(() => {
      setDownloadingIndex(null);
    }, 3000);
  };

  const data = [
    {
      desc: "File 1 description",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now" }
    },
    {
      desc: "File 2 description",
      filesize: "1.2mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Start Download" }
    },
    {
      desc: "File 3 description",
      filesize: "2.5mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Get File" }
    }
  ];

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        {data.map((item, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Doc {index + 1}</h5>
                <p className="card-text">{item.desc}</p>
                <p className="text-muted">Size: {item.filesize}</p>
                <a href="#" className="btn btn-primary " onClick={()=>alert("moved to next")}>Go somewhere</a>
              </div>
              {item.tag.isOpen && (
                <div className="card-footer bg-info text-white p-2 d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-2">
                    <GoDownload
                      onClick={() => handleDownload(index)}
                      style={{ cursor: "pointer" }}
                    />
                    <span>
                      {downloadingIndex === index
                        ? "Downloading..."
                        : item.tag.tagTitle}
                    </span>
                  </div>
                  <GoX style={{ cursor: "pointer" }} />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Foreground;
