import axios, { Axios } from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function App() {
    const [data,setData]=useState({})
    useEffect( ()=>{
        (async ()=>{
            try {
                const response= await axios.get("https://portfolio.aashishsethii01.repl.co/")
                setData(response.data)
            } catch (error) {
                console.error("axios error",error);
            }
        })()
    },[])
  return (
    <div className="App">
        <header class='hero'>
        <img class='hero-img' src="images\Frame.png" alt="hero"/>
        <h1 class="hero-heading">Ashish Sethi, the <span class="heading-inverted">web developer</span></h1>
    </header>

    <section class='section ow'>
        <div class='container container-center'>
            <h1>About me</h1>
            <p>{data?.AboutMe}</p>
        </div>
    </section>

    <section class='section'>
        <div class='container container-center'>
            <h1>Technologies</h1>
            <p>{data?.Technologies !==null?data?.Technologies?.split("<strong>")[0]:""}<strong>{data?.Technologies !==null?data?.Technologies?.split("<strong>")[1]?.split("</strong>")[0]:""}</strong></p>
        </div>
    </section>

    <section class='section ow'>
        <div class='container container-center'>
            <h1>Projects</h1>
            <p>{data?.Projects}</p>
            <Link class='link link-primary' to="/project">See Projects</Link> 
        </div>
    </section>

    <section class='section'>
        <div class='container container-center'>
            <h1>Blogs</h1>
            <p>{data?.Blogs}</p>
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
