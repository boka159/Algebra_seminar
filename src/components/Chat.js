import Messages from './Messages';
import React from 'react';
import Input from "./Input";
import Sidebar from './Sidebar';
import "./Chat.css";

function randomColor() {
  return '#' + Math.floor(Math.random() * 0xFFFFFA).toString(16);
}
class Chat extends React.Component {

  constructor(props) {
    super(props);
    //tvoj channel ID je CqxAegA5sXfiS9c4 / zajednički je PnFavtIMvMsf69yV
    this.drone = new window.Scaledrone("CqxAegA5sXfiS9c4", {
      data: this.state.member
    });
    this.drone.on('open', error => {
      if (error) {
        //tu mijenjamo u slučaju greške sa servisom (npr. alert error popup)
        return alert.error(error);
      }
      const member = { ...this.state.member };
      member.id = this.drone.clientId;
      this.setState({ member });
    });

    const room = this.drone.subscribe("observable-room");

    room.on('data', (data, member) => {
      const messages = this.state.messages;
      messages.push({ member, text: data });
      this.setState({ messages });
    });
  }

  state = {
    messages: [],
    member: {
      username: this.props.username,
      color: randomColor()
    }
  }
  onSendMessage = (message) => {
    // quick fix for sending empty message
    if (message.length === 0) return;
    this.drone.publish({
      room: "observable-room",
      message
    });
  }

  render() {
    return (
      <div className='Chat'>

        <Messages
          messages={this.state.messages}
          currentMember={this.state.member}
        />
        <Input onSendMessage={this.onSendMessage} />
      </div>
    );
  }
}

export default Chat;
