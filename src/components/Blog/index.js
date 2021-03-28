import React from 'react';


import './style.scss';

const Blog = () => (
  <div className='blog'>
    <div className="blog--title"> lorem ispum </div>
    <div className="blog--video" >
    <iframe width={screen.width > 780 ? '560' : '460'} height={screen.width > 780 ? '320' : '220'} src="https://www.youtube.com/embed/NiP9TrjHUvs?start=2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <div className="blog--article">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae reiciendis dicta autem ipsum provident laborum facere vitae, veritatis in eum explicabo error, iste eligendi aperiam, fugiat pariatur quibusdam neque expedita? Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus laudantium ut error rem ex iusto odit repudiandae obcaecati quidem, et nulla impedit numquam eligendi quis deleniti ad omnis sapiente dicta.Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus laudantium ut error rem ex iusto odit repudiandae obcaecati quidem, et nulla impedit numquam eligendi quis deleniti ad omnis sapiente dicta.
  </div>

</div>
)

export default Blog
