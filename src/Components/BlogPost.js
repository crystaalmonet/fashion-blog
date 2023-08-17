function BlogPost({ title, imageUrl, children }) {
    const currentDate = new Date().toLocaleDateString();
  
    return (
      <article>
        <h3>{title}</h3>
        <p>{currentDate}</p>
        <div className="content">
          <img src={imageUrl} alt="Blog Post" />
          {children}
        </div>
        <a href="#" className="read-more">Continue...</a>
      </article>
    );
  }
  
  export default BlogPost;