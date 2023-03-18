import React, { useState } from "react";
import Button from "react-bootstrap/Button";

function Plot({ content, limit }) {
  const [showAll, setShowAll] = useState(false);

  const showMore = () => setShowAll(true);
  const showLess = () => setShowAll(false);

  if (content.length <= limit) {
    return <div>{content}</div>;
  }
  if (showAll) {
    return (
      <div>
        {content}
        <Button size="sm" variant="link" onClick={showLess}>
          Read less
        </Button>
      </div>
    );
  }
  const toShow = content.substring(0, limit) + "...";
  return (
    <div>
      {toShow}
      <Button size="sm" variant="link" onClick={showMore}>
        Read more
      </Button>
    </div>
  );
}

export default Plot;
