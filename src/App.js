import "./App.css";
import Testimony from "./components/Testimony";

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <h1>Here is what our alumni say about freeCodeCamp:</h1>
        <Testimony
          name="Shawn Wang"
          country="Singapore"
          image="1"
          charge="Software Engineer"
          enterprise="Amazon"
          testimony="It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer."
          quote="freeCodeCamp changed my life."
        />
        <Testimony
          name="Sarah Chima"
          country="Nigeria"
          image="2"
          charge="Software Engineer"
          enterprise="ChatDesk"
          testimony2=" as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company."
          quote="freeCodeCamp was the gateway to my career"
        />
        <Testimony
          name="Emma Bostian"
          country="Sweden"
          image="3"
          charge="Software Engineer"
          enterprise="Spotify"
          testimony="I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on "
          quote="freeCodeCamp gave me the skills"
          testimony2="and confidence I needed to land my dream job as a software engineer at Spotify."
        />
      </div>
    </div>
  );
}

export default App;
