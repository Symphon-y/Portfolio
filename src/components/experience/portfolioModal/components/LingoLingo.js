import BtnPrimary from '../../../shared/BtnPrimary';
import Header from './Header';
import Github from './logos/Github';
import LingoLogo from './logos/LingoLogo';

const LingoLingo = () => {
  return (
    <>
      <Header>
        <div className='info-stack'>
          <h3 style={{ marginTop: '0rem' }}>Role: Full Stack Developer</h3>
        </div>
        <LingoLogo />
        <BtnPrimary
          className={'btn-primary github'}
          onClick={(e) => {
            e.stopPropagation();
            window.open(
              'https://github.com/Team-Scar/Lingo-Lingo#readme',
              '_blank'
            );

            // window.location.href = 'https://github.com/Team-Scar/Lingo-Lingo';
          }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
            }}>
            <Github style={{ width: '2rem' }} />
            View On Github
          </div>
        </BtnPrimary>
      </Header>
      <div className='modal-body'>
        <h1 style={{ alignSelf: 'flex-start' }}>About:</h1>
        <p>
          Our team was tasked with the development and design of an online
          language exchange platform consisting of a forum, chat feature, and
          event scheduler. The forum allows the user to ask questions related to
          a language they would like to learn. The chat feature allows users to
          directly message one another and the event scheduler allows users to
          schedule events and add them directly to the communtiy calendar.
        </p>
        <img
          className='portfolio-gif'
          src='https://media.giphy.com/media/kuLrkcF0EugfYxKq50/giphy.gif'
          alt='sign up gif'
        />
        <h1 style={{ alignSelf: 'flex-start' }}>Components:</h1>
        <p>
          This section provides a broad overview of just a few of the exciting
          functionalities our team implemented for the Lingo Lingo web platform.
        </p>
        <ul>
          <li>
            User authentication: New end-users are required to create a user
            account with log-in details. Upon opening the app, the user will be
            prompted to provide their log-in details if not already logged in,
            and/or create a new user account in order to access the app’s
            functionalities.
          </li>
          <li>
            Forum Category Filtering: The user will have the optserion to filter
            the topics they wish to view by category, or by clicking on any of
            the module tags on the module description.
          </li>
          <li>
            Viewing a Forum Post: When users click on a post it will bring up
            the details of the post and associated responses, allowing the users
            to interact.
          </li>
          <li>
            Live Chat Feature: Will allow users to chat with individual users
            directly. Will have a log of all previous conversations and display
            a list of all connections.
          </li>
          <li>
            Events: Will allow users to schedule and announce an event. Events
            will be clickable to display the event detail and allow the user to
            save it to their calendar.
          </li>
          <li>
            Profiles: User profiles will consist of a brief bio, languages the
            user wants to learn, current languages the user speaks, the topics
            they are interested in, and the ability to start a chat with that
            user. The user will have the ability to add other users to their
            connections list. The user will be able to modify their own profile.
          </li>
        </ul>
      </div>
    </>
  );
};

export default LingoLingo;
