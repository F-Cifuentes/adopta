import React from 'react';

function Tags({ text, color }) {
  return <span className={`badge bg-${color}`}>{text}</span>;
}

export default Tags;
