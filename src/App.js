import Header from './Components/Header';
import BlogPost from './Components/BlogPost';
import Footer from './Components/Footer';
import './App.css';
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';


function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <BlogPost
          title="On the Street in Brooklyn"
          content="Cray ipsum, dolor sit amet consectetur adipisicing elit. Repellat quidem deserunt
          nemo dignissimos fuga veniam inventore eligendi magnam aperiam odit mollitia
          cupiditate eveniet velit officiis magni aliquid, laborum dolor? Quasi? Veniam
          amet rerum ducimus est ea at neque alias. Temporibus perspiciatis at impedit
          voluptas aut voluptates facere totam aliquid debitis rerum, ex consequuntur, nulla eius quae
          corrupti optio atque ut. Repellendus molestiae doloribus recusandae, itaque voluptatibus
          placeat repellat deserunt amet eaque dignissimos, iste sapiente magnam doloremque. Fugit,
          cum, cupiditate aliquam, mollitia quisquam sed nulla eveniet doloribus neque optio odio qui!
          Id architecto impedit consequatur rem quaerat voluptatibus pariatur quas, quod quisquam
          quo ab molestiae.."
          imageUrl={image1}
        />
        <BlogPost
          title="Vintage in Vogue"
          content="Selfies sunt, dolor sit amet consectetur adipisicing elit. Repellat quidem deserunt
          nemo dignissimos fuga veniam inventore eligendi magnam aperiam odit mollitia
          cupiditate eveniet velit officiis magni aliquid, laborum dolor? Quasi? Veniam amet
          rerum ducimus est ea at neque alias. Temporibus perspiciatis at impedit voluptas
          aut voluptates facere totam aliquid debitis rerum, ex consequuntur, nulla eius quae corrupti
          optio atque ut. Repellendus molestiae doloribus recusandae, itaque voluptatibus placeat
          repellat deserunt amet eaque dignissimos, iste sapiente magnam doloremque. Fugit, cum,
          cupiditate aliquam, mollitia quisquam sed nulla eveniet doloribus neque optio odio qui! Id
          architecto impedit consequatur."
          imageUrl={image2}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
