import React from "react";

export default props => {
  return (
    <div id="blogposts">
      {props.posts.map(p => {
        return (
          <div key={p.date}>
            <div className="flex">
              <h1 className="wp-title">{p.title.rendered}</h1>
              <h4>{p.date}</h4>
            </div>
            <div dangerouslySetInnerHTML={{ __html: p.content.rendered }} />
            <br className="clear-float" />
          </div>
        );
      })}
    </div>
  );
};
