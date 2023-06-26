import React from "react";
import { useLocation } from "react-router-dom";
import NavBar from "../../components/navBar/navBar";
import "./program.css";
import check from "../../assets/checklist.png";
import { useEffect } from "react";

const Program = () => {
  const content = useLocation().state.content;
  // location.state.content

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [content]);

  return (
    <div className="">
      <NavBar />
      <div className="program">
        <header className="program__heading">
          <div className="program__heading--container">
            <div className="program__heading--right">
              <h1 className="program__heading__header">{content.header}</h1>
              <p className="program__heading__paragraph">
                {content.header_content}
              </p>
            </div>
            <div className="program__heading--left">
              <img src={content.img} alt="" />
            </div>
          </div>
        </header>
        <div className="posts">
          {content.content.map((post, index) => (
            <div key={index} className="post">
              {/* <img src={content.img} alt="" />  */}
              <div className="content">
                <h1 className="main-heading">{post.header}</h1>
                {post.content.map((con) => {
                  if (con.content_type === "p") {
                    return (
                      <div>
                        {con.sub_content !== "" ? (
                          <h3 className="sub-heading">{con.sub_content}</h3>
                        ) : (
                          ""
                        )}
                        <p className="paragraph">{con.content}</p>
                      </div>
                    );
                  } else if (con.content_type === "l") {
                    return (
                      <div>
                        {con.sub_content !== "" ? (
                          <h3 className="sub-heading">{con.sub_content}</h3>
                        ) : (
                          ""
                        )}
                        <div>
                          {con.content.map((c) => {
                            return (
                              <div className="paragraph">
                                <img
                                  src={check}
                                  className="checkMark"
                                  alt="F"
                                />
                                <div>{c}</div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  } else if (con.content_type === "l_i") {
                    return (
                      <div>
                        {con.sub_content !== "" ? (
                          <h3 className="sub-heading">{con.sub_content}</h3>
                        ) : (
                          ""
                        )}
                        <div className="list-image-con">
                          {con.content.map((c) => {
                            return (
                              <div className="list-image">
                                <span className="paragraph">{c.text}</span>
                                <img src={c.img} alt="" />
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Program;
