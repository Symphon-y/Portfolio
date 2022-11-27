/* eslint-disable react/jsx-no-comment-textnodes */
import BtnPrimary from '../../../shared/BtnPrimary';
import Header from './Header';
import Github from './logos/Github';
import LingoLogo from './logos/LingoLogo';

const LingoLingo = () => {
  return (
    <>
      <Header>
        <div className='info-stack'>
          <h3 style={{ marginTop: '0rem' }}>Role: Full Stack Engineer</h3>
        </div>
        <LingoLogo />
        <BtnPrimary
          style={{ fill: 'white' }}
          className={'btn-primary github'}
          onClick={(e) => {
            e.stopPropagation();
            window.open(
              'https://github.com/Team-Scar/Lingo-Lingo#readme',
              '_blank'
            );
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
        <h1 style={{ alignSelf: 'flex-start' }}>// About:</h1>
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
        <h1 style={{ alignSelf: 'flex-start' }}>// Components:</h1>
        <p>
          This section provides a broad overview of just a few of the exciting
          functionalities our team implemented for the Lingo Lingo web platform.
        </p>
        <ul>
          <li>
            User authentication: New end-users are required to create a user
            account with log-in details. Upon opening the app, the user is
            prompted to provide their log-in details if they are not already
            logged in, and/or create a new user account in order to access the
            app’s functionalities.
          </li>
          <li>
            Forum Category Filtering: The user ahs the option to filter the
            topics they wish to view by category, or by clicking on any of the
            module tags on the module description.
          </li>
          <li>
            Viewing a Forum Post: When users click on a post it opens the
            details of the post and associated responses, allowing the users to
            interact.
          </li>
          <li>
            Live Chat Feature: Allows users to chat with each other directly.
            Has a log of all previous conversations and displays a list of all
            connections.
          </li>
          <li>
            Events: Allows users to schedule and announce an event. Events are
            clickable to display the event details and allow the user to save it
            to their calendar.
          </li>
          <li>
            Profiles: User profiles consist of a brief bio, languages the user
            wants to learn, current languages the user speaks, the topics they
            are interested in, and the ability to start a chat with the selected
            user. The user has the ability to add other users to their
            connections list and is able to modify their own profile.
          </li>
        </ul>
      </div>
    </>
  );
};

export default LingoLingo;
