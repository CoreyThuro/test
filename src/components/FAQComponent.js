//accordian of faq questions and answers
import React from 'react';

function FAQ() {


let openContent = (e) => {
  console.log(e.target.value);

  let button = document.getElementById(`button${e.target.value}`);
  button.classList.toggle("is-open");

  let content = document.getElementById(`content${e.target.value}`);

  if (content.style.maxHeight) {
    //if the accordion is open
    content.style.maxHeight = null;
  } else {
    //if the accordion is closed
    content.style.maxHeight = content.scrollHeight + "px";
  }
};

    return (
      <div className="faq-container">
        <h1>FAQ</h1>
        <button
          value="1"
          id="button1"
          onClick={openContent}
          className="accordion"
        >
          First Frequently Asked Question
        </button>
        <div id="content1" className="accordion-content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga labore
            in laudantium magni at adipisci doloribus mollitia ab laborum fugit
            maxime veritatis, quisquam est quaerat pariatur nemo deserunt
            placeat porro! Ad, ipsa atque in aut tempora sapiente doloremque.
            Alias aliquam voluptate quos maxime labore sint in, quasi quisquam?
            Sed tempore similique sunt, quasi sit praesentium perspiciatis
            molestiae alias culpa eos! Harum, error deserunt. Exercitationem
            maxime quae aperiam nulla est eveniet natus commodi earum autem at,
            sint molestiae totam dolore dolorem quia deleniti voluptatibus
            sapiente quis nostrum! Nemo optio blanditiis atque.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga labore
            in laudantium magni at adipisci doloribus mollitia ab laborum fugit
            maxime veritatis, quisquam est quaerat pariatur nemo deserunt
            placeat porro! Ad, ipsa atque in aut tempora sapiente doloremque.
            Alias aliquam voluptate quos maxime labore sint in, quasi quisquam?
            Sed tempore similique sunt, quasi sit praesentium perspiciatis
            molestiae alias culpa eos! Harum, error deserunt. Exercitationem
            maxime quae aperiam nulla est eveniet natus commodi earum autem at,
            sint molestiae totam dolore dolorem quia deleniti voluptatibus
            sapiente quis nostrum! Nemo optio blanditiis atque.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga labore
            in laudantium magni at adipisci doloribus mollitia ab laborum fugit
            maxime veritatis, quisquam est quaerat pariatur nemo deserunt
            placeat porro! Ad, ipsa atque in aut tempora sapiente doloremque.
            Alias aliquam voluptate quos maxime labore sint in, quasi quisquam?
            Sed tempore similique sunt, quasi sit praesentium perspiciatis
            molestiae alias culpa eos! Harum, error deserunt. Exercitationem
            maxime quae aperiam nulla est eveniet natus commodi earum autem at,
            sint molestiae totam dolore dolorem quia deleniti voluptatibus
            sapiente quis nostrum! Nemo optio blanditiis atque.
          </p>
        </div>

        <button
          value="2"
          id="button2"
          onClick={openContent}
          className="accordion"
        >
          Second Frequently Asked Question
        </button>

        <div id="content2" className="accordion-content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga labore
            in laudantium magni at adipisci doloribus mollitia ab laborum fugit
            maxime veritatis, quisquam est quaerat pariatur nemo deserunt
            placeat porro! Ad, ipsa atque in aut tempora sapiente doloremque.
            Alias aliquam voluptate quos maxime labore sint in, quasi quisquam?
            Sed tempore similique sunt, quasi sit praesentium perspiciatis
            molestiae alias culpa eos! Harum, error deserunt. Exercitationem
            maxime quae aperiam nulla est eveniet natus commodi earum autem at,
            sint molestiae totam dolore dolorem quia deleniti voluptatibus
            sapiente quis nostrum! Nemo optio blanditiis atque.
          </p>
        </div>
        <button
          value="3"
          id="button3"
          onClick={openContent}
          className="accordion"
        >
          Third Frequently Asked Question
        </button>

        <div id="content3" className="accordion-content">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
            ullam ad nam, ut tempora ipsa minima expedita quia quisquam
            exercitationem alias distinctio sequi eius consequatur modi eveniet
            quos vitae aperiam! Commodi quia, alias tempora iusto ab nesciunt ut
            deserunt exercitationem voluptates cumque, laborum architecto
            eveniet aliquid id obcaecati ratione delectus? Distinctio
            reprehenderit quos vitae, fuga veniam quisquam alias omnis ipsam!
            Iure iusto minima quisquam et accusantium ratione quibusdam rem vero
            quas incidunt provident velit veniam voluptatibus voluptatem soluta
            dolores, quae, maxime tempora, nihil dolore doloribus? Quae, nobis!
            Sapiente, sequi asperiores.
          </p>
        </div>
      </div>
    );
}

export default FAQ;