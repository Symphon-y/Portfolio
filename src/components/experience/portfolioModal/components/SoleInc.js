/* eslint-disable react/jsx-no-comment-textnodes */
import BtnPrimary from '../../../shared/BtnPrimary';
import Header from './Header';
import Github from './logos/Github';

const SoleInc = () => {
  return (
    <>
      <Header>
        <div className='info-stack'>
          <h3 style={{ marginTop: '0rem' }}>Role: Full Stack Engineer</h3>
        </div>
        <img
          src='https://raw.githubusercontent.com/TitanInSpirit/Project_Atelier/main/Assets/Logo%20-%20Darkv1.png'
          alt='sole inc logo'
        />
        <BtnPrimary
          className={'btn-primary github'}
          style={{ fill: 'white', backgroundColor: '#80dbd8' }}
          onClick={(e) => {
            e.stopPropagation();
            window.open(
              'https://github.com/TitanInSpirit/Project_Atelier#readme',
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
          Our team was tasked with creating a complete redesign of an outadated
          client-facing retail web-portal including but not limited to branding,
          and website functionality. This project comprises a complete redesign
          of the retail portal intended to address the client's concerns and
          modernize the site.
        </p>
        <img
          className='portfolio-gif'
          src='https://media.giphy.com/media/UTUQxOIuzmxGlWXmOZ/giphy.gif'
          alt='overview component gif'
        />
        <h1 style={{ alignSelf: 'flex-start' }}>// Components:</h1>
        <p style={{ alignSelf: 'flex-start' }}>
          The product detail page shows relevant information for a single
          product in the catalog. One single product can be associated with many
          sizes and styles which each result in unique SKUs (stock keeping
          units). The product detail page presents items at the product level.
          Further breakdown by style or size is only reflected within the
          product detail page. The same product detail page is shown for every
          product in the catalog. Upon navigating to the product detail page or
          selecting a new product to display, the contents of the page updates
          to show information relevant to the selected product.
        </p>
        <p style={{ alignSelf: 'flex-start' }}>
          The item detail page consists of three distinct modules.
        </p>
        <ul style={{ alignSelf: 'flex-start' }}>
          <li>Overview</li>
          <li>Ratings & Reviews</li>
          <li>Questions & Answers</li>
        </ul>
        <h2 style={{ fontSize: '1.25rem', alignSelf: 'flex-start' }}>
          > Overview:
        </h2>
        <p style={{ alignSelf: 'flex-start' }}>
          The Overview module is the top-most module on the Product Detail page.
          The functionality contained within this module can be divided into
          several pieces:
        </p>
        <ul style={{ alignSelf: 'flex-start' }}>
          <li>Image gallery</li>
          <li>Product information</li>
          <li>Style selector</li>
          <li>Add to cart</li>
        </ul>
        <p style={{ alignSelf: 'flex-start' }}>
          This component guides the customer through selecting a specific style
          and size to add to their cart.
        </p>
        <h2 style={{ fontSize: '1.25rem', alignSelf: 'flex-start' }}>
          > Image Gallery:
        </h2>
        <img
          className='portfolio-gif'
          src='https://camo.githubusercontent.com/bf9ca6f5db258ccdbc887c650d9bea6554cb9a714f802bd5c4f8747305c4d15e/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f6b48363856354f61333839596a484a684f642f67697068792e676966'
          alt='overview component gif'
        />
        <p style={{ alignSelf: 'flex-start' }}>
          The largest piece of the Overview module is the photo gallery which
          shows images of the product. The photos presented in this gallery are
          specific to the currently selected product style. Each time a new
          style is chosen, the gallery updates to show photos corresponding to
          the new style. Each style has a set of images associated with it and
          the gallery allows customers to browse between and zoom in on these
          photos.
        </p>
        <p style={{ alignSelf: 'flex-start' }}>
          The gallery is viewable in two states. A default collapsed view, and
          an expanded view.
        </p>
        <h2 style={{ fontSize: '1.25rem', alignSelf: 'flex-start' }}>
          > Product Information:
        </h2>
        <img
          className='portfolio-gif'
          src='https://camo.githubusercontent.com/26e2455dbdfab62d6c924ad7dccdbd6c247a6e34920dd4057df4c7e06dbddd5b/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f55545551784f49757a6d78476c57586d4f5a2f67697068792e676966'
          alt='overview component gif'
        />
        <p style={{ alignSelf: 'flex-start' }}>
          General information about the product is displayed at the top of the
          Overview component. The following information is shown:
        </p>
        <ul style={{ alignSelf: 'flex-start' }}>
          <li>
            Star Rating
            <ul>
              <li>
                Each product has an average rating based on its reviews. The
                average rating of the product is represented by an array of
                solid or outlined stars, where the number of solid stars
                represents the review score. The number of stars filled in
                coresponds to the average score.
              </li>
              <li>
                The visual for rating is representative of up to a quarter of a
                review point. For example, if the average is 3.8, this will
                display as 3¾ solid stars and 1¼ outlined stars.
              </li>
            </ul>
          </li>
          <li>
            Next to the star rating, a link stating “Read all [#] reviews” is
            shown Clicking this link automatically scrolls the page to the
            Ratings & Reviews component
          </li>
        </ul>
        <h2 style={{ fontSize: '1.25rem', alignSelf: 'flex-start' }}>
          > Questions & Answers:
        </h2>
        <p style={{ alignSelf: 'flex-start' }}>
          The Questions & Answers component allows the end user to ask and
          answer questions for the product selected. The functionality contained
          within this module can be divided into several pieces:
        </p>
        <ul style={{ alignSelf: 'flex-start' }}>
          <li>View questions</li>
          <li>Search for a question</li>
          <li>Asking a question</li>
          <li>Answering a question</li>
        </ul>
        <p style={{ alignSelf: 'flex-start' }}>
          This component extends the ability to view and search questions, ask
          questions, answer questions and provide feedback on questions about
          the current product.
        </p>
        <img
          className='portfolio-gif'
          src='https://camo.githubusercontent.com/fbcdc5b151069972abebe3f7883d32fede0467a0e5a317fa11c75ccc50c37263/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f31493065745a76524b59547a3969505445752f67697068792e676966'
          alt='overview component gif'
        />
        <p style={{ alignSelf: 'flex-start' }}>
          The search bar that appears above the Questions List allows the end
          user to search the submitted questions and answers. The search
          function will begin to automatically filter the results within the
          component once three or more characters have been entered. The search
          filter will be automatically removed if the search bar is cleared or
          if the search term is less than three characters in length.
        </p>
        <img
          className='portfolio-gif'
          src='https://camo.githubusercontent.com/913e3cb41f9e62d9c030272d8db9888efe444b4573d6080a0fb74486ac8397b1/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f75757a565a4c76344257507a4f4949554d6c2f67697068792e676966'
          alt='overview component gif'
        />
        <p style={{ alignSelf: 'flex-start' }}>
          If the end user is unable to find the answer they are looking for,
          they are able to submit their own questions by clicking on the "Add a
          Question +" button located on the bottom of the component. Clicking
          this button will open a modal form that will require the end user to
          submit their "nickname" (login) as well as an email address and their
          question. Upon clicking submit, the question will be added to the
          shown list of questions for other users to answer or interact with
        </p>
        <p style={{ alignSelf: 'flex-start' }}>
          Much like asking a question, users are also able to submit answers to
          the questions of other users by clicking on the "Add an Answer" button
          located in-line with each question. Doing so will open a modal form
          that requires the same information as adding a question along with the
          ability to attach up to 5 photos.
        </p>
      </div>
    </>
  );
};

export default SoleInc;
