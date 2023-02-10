
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './ChatFeed.js';
import LoginForm from './LoginForm.js';
import '../index.css';

const projectID = 'c4deea19-f64d-4630-ba11-fcf4c5aafb75';

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};


export default App;
