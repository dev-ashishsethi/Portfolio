import { Link } from "react-router-dom";

export function Blogs() {
    return (
      <>
          <header class='hero'>
    <h1 class='hero-heading'>Read my <span class='heading-inverted'>blogs</span></h1>
  </header>

  <ul class="list-non-bullet">
    <li>
      <article class="showcase-list container container-center">
        <h1>What is CSS box model?</h1>
        <small>20 November, 2021</small>
        <p>
          While writing CSS it can be really tough to understand why that element in your html is not aligning as per your expections. This blog can help you understand CSS box modeling and make your CSS development easier.
        </p>

        <a class="link link-primary" href="https://dev.to/devashishsethi/what-is-css-box-model-2214" target='_blank' rel='noopener'>Read More</a>
      </article>
    </li>

    <li>
      <article class="showcase-list container container-center ow">
        <h1>How to use Margin in CSS?</h1>
        <small>20 November, 2021</small>
        <p>
          It can get a bit confusing to understand the shorthand method of writing margin measurements in your CSS file. This blog can help you understand and make it easier for you to use margin in shorthand.
        </p>

        <a class="link link-primary" href='https://dev.to/devashishsethi/how-to-use-margin-in-css-501i' target='_blank' rel='noopener'>Read More</a>
      </article>
    </li>
  </ul>


  <footer class='footer'>
    <div class='footer-header'>Connect with me</div>
    <ul class='social-links list-non-bullet'>
      <li class='list-item-inline'><a class='link' href="https://github.com/dev-ashishsethi">Github</a></li>
            <li class='list-item-inline'><a class='link' href="https://linkedin.com/in/aashishsethii01">Linkedin</a></li>
            <li class='list-item-inline'><a class='link' href="https://twitter.com/web_AshishSethi">Twitter</a></li>
    </ul>
  </footer>

      </>
    )
}

 

