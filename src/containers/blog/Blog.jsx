import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">Veja alguns de nossos, <br /> trabalhos e faça parte do futuro.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="Setembro, 2022" text="Aqui irão nossas páginas já feitas" />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="Maio, 2022" text="Aqui irão nossas páginas já feitas" />
        <Article imgUrl={blog03} date="Janeiro, 2022" text="Aqui irão nossas páginas já feitas" />
        <Article imgUrl={blog04} date="Outubro, 2021" text="Aqui irão nossas páginas já feitas" />
        <Article imgUrl={blog05} date="Julho, 2021" text="Aqui irão nossas páginas já feitas" />
      </div>
    </div>
  </div>
);

export default Blog;
