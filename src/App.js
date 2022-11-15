import logo from './logo.svg';
import './App.css';
import image from './assests/profile.png';
import git from './assests/git.png';
import behance from './assests/behance.png';
import insta from './assests/insta.png';
import twitter from './assests/twitter.png'
import Card from './components/Card/Card';
import Message from './components/Message/Message';


function App() {
  return (
    <div className="App">
      <div className="profile">
        <Message/>
        <img src={image} />
        <h1>Elvis Mariga</h1>
      </div>
      <div className="cards">
        <Card
          name="GitHub"
          icon={git}
          userName="elvmariga"
          posts="Project: 45"
          link="https://mail.google.com/mail/u/1/#search/wamaya"
        />

        <Card
          name="Behance"
          icon={behance}
          userName="Elvis Mariga"
          posts="Project: 6"
          link="https://mail.google.com/mail/u/1/#search/wamaya"
        />
        <Card
          name="Instagram"
          icon={insta}
          userName="@mariga.elvis"
          posts="Post: 16"
          link="https://mail.google.com/mail/u/1/#search/wamaya"
        />
        <Card
          name="Twitter"
          icon={twitter}
          userName="@elvismariga1"
          posts="Tweets: 245"
          link="https://mail.google.com/mail/u/1/#search/wamaya"
        />
      </div>
    </div>
  );
}

export default App;
