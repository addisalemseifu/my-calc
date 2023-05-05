import React from 'react';
import Navbar from './Navbar';
import '../index.css';

export default function HomePage() {
  const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore inventore distinctio obcaecati molestias nemo pariatur, illum provident qui voluptas harum officia dolorum asperiores itaque nobis velit! Necessitatibus eligendi accusamus quod voluptates consectetur, quaerat dolorem natus ut suscipit ad ratione, soluta doloremque! Rem minus autem labore quas omnis? Repellat voluptatem fugiat at, facilis officia consectetur quasi eum dolor, reprehenderit recusandae officiis quis nulla obcaecati praesentium cupiditate nihil ab! Quidem commodi eum doloremque. Iusto, officia? Et nam, eveniet provident voluptatem earum dolor?';
  return (
    <div className="page">
      <Navbar />
      <h2 className="sub_header">Welcome to our page!</h2>
      <p>
        {text}
        <br />
        <br />
        {text}
      </p>
    </div>
  );
}
