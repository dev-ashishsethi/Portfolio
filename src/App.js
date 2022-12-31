import { Link } from 'react-router-dom';
import './style.css';

function App() {
  return (
    <div className="App">
     
        <header class='hero'>
        <img class='hero-img' src="images\Frame.png" alt="hero"/>

        <h1 class='hero-heading'>Ashish Sethi, the <span class='heading-inverted'>web developer</span></h1>
    </header>

    <section class='section ow'>
        <div class='container container-center'>
            <h1>About me</h1>
            <p>Hello Everyone👋, I am Ashish Sethi. I am a Computer Science graduate, who completed his engineering in 2020. I am currently working as a Analyst at Capgemini. I aspire to be a web developer.</p>
        </div>
    </section>

    <section class='section'>
        <div class='container container-center'>
            <h1>Technologies</h1>
            <p>I'm familiar with <strong>HTML5, CSS3, JavaScript, ReactJS, Github, and Web Hosting with Netlify.</strong>.</p>
        </div>
    </section>

    <section class='section ow'>
        <div class='container container-center'>
            <h1>Projects</h1>
            <p>I like to showcase my work and thus, you can see my projects hosted online.</p>
            <Link class='link link-primary' to="/project">See Projects</Link> 
        </div>
    </section>

    <section class='section'>
        <div class='container container-center'>
            <h1>Blogs</h1>
            <p>I'm also working on some technical and non-technical blogs. I like to document my journey of learning.</p>
            <Link class='link link-secondary' to="/blog">Read Blogs</Link>
        </div>
    </section>


    <footer class='footer'>
        <div class='footer-header'>Connect with me</div>
        <ul class='social-links list-non-bullet'>
            <li class='list-item-inline'><a class='link' href="https://github.com/dev-ashishsethi" target="_blank">Github</a></li>
            <li class='list-item-inline'><a class='link' href="https://linkedin.com/in/aashishsethii01" target="_blank">Linkedin</a></li>
            <li class='list-item-inline'><a class='link' href="https://twitter.com/web_AshishSethi" target="_blank">Twitter</a></li>
        </ul>
    </footer>
    </div>
  );
}

export default App;
