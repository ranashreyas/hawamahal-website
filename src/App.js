import React, { useState } from 'react';
import './App.css';

function TimelineEvent({ year, description }) {
  return (
    <div className="timeline-event">
      <div className="timeline-year">{year}</div>
      <div className="timeline-content">{description}</div>
    </div>
  );
}

function Timeline() {
  const events = [
    {
      year: "1799: Construction of Hawa Mahal",
      description: "Commissioned by Maharaja Sawai Pratap Singh and designed by architect Lal Chand Ustad, inspired by the crown of Lord Krishna."
    },
    {
      year: "Late 18th Century: Completion",
      description: "The palace served as a private observation gallery for royal women, allowing them to observe city life and festivities."
    },
    {
      year: "1956: New Ownership",
      description: "Hawa Mahal came under the administration of the Rajasthan state government after Indian independence and the integration of princely states."
    },
    {
      year: "1960s-1970s: Tourism",
      description: "Growing tourism in Rajasthan prompted early conservation efforts to maintain Hawa Mahal’s structure and intricate sandstone facade."
    },
    {
      year: "2005: Restoration",
      description: "A major restoration project was undertaken by the Archaeological Department of Rajasthan to repair the facade, restore the windows, and preserve the building."
    },
    {
      year: "2011: Lighting",
      description: "Installation of nighttime lighting, enhancing its visibility and drawing tourists to witness its illuminated beauty."
    },
    {
      year: "Present Day",
      description: "Hawa Mahal remains a top tourist destination in Jaipur, symbolizing the city's rich royal heritage, with ongoing preservation efforts."
    }
  ];

  return (
    <div className="timeline">
      <h2>Timeline of Hawa Mahal</h2>
      {events.map((event, index) => (
        <TimelineEvent key={index} year={event.year} description={event.description} />
      ))}
    </div>
  );
}

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item">
      <button className="faq-question" onClick={() => setIsOpen(!isOpen)}>
        {question}
      </button>
      <div className={`faq-answer ${isOpen ? 'open' : ''}`}>
        <p>{answer}</p>
      </div>
    </div>
  );
}

function App() {

  const faqData = [
    {
      question: "Q. Why is Hawa Mahal called the “Palace of Winds”?",
      answer: "A. The palace's 953 windows were designed to allow cool breezes to circulate, keeping the interiors cool and comfortable, which led to its nickname. "
    },
    {
      question: "Q. Is photography allowed inside Hawa Mahal?",
      answer: "A. Yes, photography is encouraged to capture the beauty of this architectural masterpiece."
    },
    {
      question: "Q. What is the best time of year to visit Hawa Mahal?",
      answer: 'A. The best time to visit Hawa Mahal is during the winter months (November to February) when the weather is cooler. Jaipur can get very hot in the summer, with temperatures reaching up to 45°C (113°F), so winter offers a more pleasant experience. Plan to visit early in the morning or late in the afternoon to enjoy the lighting on the palace facade. '
    },
    {
      question: "Q. Are there guided tours available for Hawa Mahal?",
      answer: "A. Yes, guided tours are available, and they can be very informative. Many local guides provide insight into the history, architecture, and cultural significance of Hawa Mahal. Alternatively, audio tours are available through apps or sites like Viator and Tripadvisor."
    },
    {
      question: "Q. Is Hawa Mahal accessible to all age groups?",
      answer: "A. Yes, the palace is accessible, but the stairs can be steep in some areas. Visitors with mobility challenges may find some sections difficult to access."
    },
    {
      question: "Q. Is there a museum inside Hawa Mahal?",
      answer: "A. Yes, there is a small museum inside Hawa Mahal. The museum contains various artifacts, including paintings, ceremonial armor, and historical memorabilia related to Jaipur’s royal family. Visitors can explore the exhibits to learn more about the royal lifestyle and Rajasthan’s rich history."
    },
    {
      question: "Q. Are there places to eat near Hawa Mahal?",
      answer: "A. Yes, there are many dining options nearby, ranging from traditional Rajasthani food to modern cafes. LMB (Laxmi Misthan Bhandar), known for its sweets and thalis, is a popular spot just a few minutes away."
    }
  ];

  return (
    <div className="App">
      <header className="header">
        <h1>Welcome to Hawa Mahal - The Palace of Winds</h1>
        <p>Discover Jaipur's Architectural Marvel</p>
      </header>

      <section className="hero">
        <img
          src="https://cdn.britannica.com/25/242225-050-72142DF7/Front-facade-of-Palace-of-the-Winds-Hawa-Mahal-Jaipur-Rajasthan-India.jpg"
          alt="Hawa Mahal"
          className="hero-image"
        />
      </section>

      <section className="content">

        <div className="section">
          <div class="Row">
            <div class="Column">
              <h2>Historical Significance of Hawa Mahal</h2>
              <p>
                Built in 1799 by Maharaja Sawai Pratap Singh, Hawa Mahal, or the "Palace of Winds," is a striking example of Jaipur’s architectural heritage. Designed by Lal Chand Ustad, its five-story facade, inspired by the crown of Lord Krishna, features 953 small windows, or jharokhas, with intricate latticework that allows cool air to circulate naturally. This design enabled royal women, following the purdah tradition, to discreetly observe Jaipur’s vibrant street life and festivities below without being seen.
                <br></br>
                <br></br>
                Crafted from pink and red sandstone, Hawa Mahal seamlessly blends Rajput and Mughal architectural styles, adding to Jaipur’s identity as the "Pink City." Overlooking the heart of Jaipur’s old city, this architectural marvel stands as a symbol of both the opulence and cultural values of the Kachhwaha Rajput dynasty, attracting admirers from around the world.
              </p>
            </div>
            <div class="Column">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/39/Maharaja_Pratap_Singh_%28Reigned_1778-1803%29_LACMA_M.81.272.4_%281_of_2%29.jpg"
                alt="Maharaja Sawai Pratap Singh"
                className="content-image"
              />
            </div>
          </div>
        </div>

        <div className="section">
          <div class="Row">
            <div class="Column"> 
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Architecture_of_Hawa_Mahal.jpg/2560px-Architecture_of_Hawa_Mahal.jpg"
                alt="Maharaja Sawai Pratap Singh"
                className="content-image"
              />
            </div>
            <div class="Column">
              <h2>Architectural Brilliance</h2>
              <p>
                Hawa Mahal’s unique five-story, honeycomb structure features 953 small windows, or jharokhas, each adorned with intricately carved latticework. This design not only creates a stunning visual effect but also serves a practical purpose, allowing cool breezes to flow through the palace, keeping it comfortable even during the height of summer.
                <br></br>
                <br></br>
                The palace's architecture is a masterful blend of Rajput and Mughal styles, symbolizing Jaipur’s rich cultural heritage. Built with pink and red sandstone, the facade is both striking and harmonious with the "Pink City" aesthetic, standing as an enduring example of Rajasthan’s architectural ingenuity and artistic legacy.
              </p>
            </div>
          </div>
        </div>

        <Timeline />

        <section className="faq-section">
          <h2>Frequently Asked Questions</h2>
          {faqData.map((item, index) => (
            <FAQItem key={index} question={item.question} answer={item.answer} />
          ))}
        </section>

        <div className="section">
          <div class="Row">
            <div class="Column">
              <h2>Visit our Sponsors!</h2>
              <a href="www.anmolexports.com"><p>
                Anmol Exports
              </p></a>
            </div>
          </div>
        </div>

      </section>

      <footer className="footer">
        <p>&copy; 2024 Visit Hawa Mahal. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
