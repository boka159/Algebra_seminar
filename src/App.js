import './App.css';
import React from 'react';
import Messages from './components/Messages';
import Input from './components/Input';
import Sidebar from './components/Sidebar';

function randomName() {
    const adjectives = ["autumn", "hidden", "bitter", "misty", "silent", "empty", "dry", "dark", "summer", "icy", "delicate", "quiet", "white", "cool", "spring", "winter", "patient", "twilight", "dawn", "crimson", "wispy", "weathered", "blue", "billowing", "broken", "cold", "damp", "falling", "frosty", "green", "long", "late", "lingering", "bold", "little", "morning", "muddy", "old", "red", "rough", "still", "small", "sparkling", "throbbing", "shy", "wandering", "withered", "wild", "black", "young", "holy", "solitary", "fragrant", "aged", "snowy", "proud", "floral", "restless", "divine", "polished", "ancient", "purple", "lively", "nameless"];
    const nouns = ["waterfall", "river", "breeze", "moon", "rain", "wind", "sea", "morning", "snow", "lake", "sunset", "pine", "shadow", "leaf", "dawn", "glitter", "forest", "hill", "cloud", "meadow", "sun", "glade", "bird", "brook", "butterfly", "bush", "dew", "dust", "field", "fire", "flower", "firefly", "feather", "grass", "haze", "mountain", "night", "pond", "darkness", "snowflake", "silence", "sound", "sky", "shape", "surf", "thunder", "violet", "water", "wildflower", "wave", "water", "resonance", "sun", "wood", "dream", "cherry", "tree", "fog", "frost", "voice", "paper", "frog", "smoke", "star"];
    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    return adjective + noun;
  }
  
  function randomColor() {
    return '#' + Math.floor(Math.random() * 0xFFFFFA).toString(16);
  }
  
class App extends React.Component {

  constructor() {
    super();
    //channel ID je CqxAegA5sXfiS9c4
    this.drone = new window.Scaledrone("CqxAegA5sXfiS9c4", {
      data: this.state.member
    });
    this.drone.on('open', error => {
      if (error) {
        //tu mijenjamo u slučaju greške sa servisom (npr. alert error popup)
        return console.error(error);
      }
      const member = {...this.state.member};
      member.id = this.drone.clientId;
      this.setState({member});
    });

    const room = this.drone.subscribe("observable-room");

    room.on('data', (data, member) => {
      const messages = this.state.messages;
      messages.push({member, text: data});
      this.setState({messages});
    });
  }
  
  state = {
    messages: [],
    member: {
      username: randomName(),
      color: randomColor()
    }
  }

  onSendMessage = (message) => {
    //quick fix for sending empty message
    if (message.length === 0) return;
    this.drone.publish({
      room: "observable-room",
      message
    });
  }

  toggleSidebar = () => {
    this.sidebar.ToggleSidebar();
  }

  render(){
    return (
      <div className="App">
        <div className="App-header">
          <button className='sidebar-btn' onClick={this.toggleSidebar}>Sidebar</button>
        <h1>Algebra Seminar</h1>
        <div></div>
      </div>
      <Sidebar ref={(reference) => this.sidebar = reference}/>
      <Messages
        messages={this.state.messages}
        currentMember={this.state.member}
      />
      <Input onSendMessage={this.onSendMessage}/>
    </div>
    );
  }
}

export default App;
