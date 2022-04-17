import React from "react";

const Blogs = () => {
  return (
    <div className="w-100 container my-5">
      <h2 className="text-warning text-center py-3">
        Quation and Answer part
      </h2>
      <div class="accordion" id="accordionPanelsStayOpenExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              Difference between Authentication and Authorization
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="panelsStayOpen-headingOne"
          >
            <div class="accordion-body">
              <h5>Authentication</h5>
              <ol>
                <li>
                  Authentication is the process of identifying users
                  and validating who they claim to be. One of the most
                  common and obvious factors to authenticate identity
                  is a password
                </li>
                <li>
                  Password-based authentication is a simple method of
                  authentication that requires a password to verify
                  the user’s identity.{" "}
                </li>
                <li>
                  Passwordless authentication is where a user is
                  verified through OTP or a magic link delivered to
                  the registered email or phone numbe
                </li>
                <li>It needs usually user’s login details.</li>
                <li>Authentication determines whether the person is user or not.</li>
              </ol>
              <h5>Authorization </h5>
              <ol>
                <li>
                  Authorization happens after a user’s identity has
                  been successfully authenticated. It is about
                  offering full or partial access rights to resources
                  like database, funds, and other critical information
                </li>

                <li>
                  Role-based access controls can be implemented for
                  system-to-system and user-to-system privilege
                  management
                </li>
                <li>
                  open standard for securely transmitting data between
                  parties, and users are authorized using a
                  public/private key pair.
                </li>
                <li>While it needs user’s privilege or security levels.</li>
                <li>While it determines What permission do user have?</li>
              </ol>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
            >
               Why are you using firebase? What other options do you have to implement authentication?
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingTwo"
          >
            <div class="accordion-body">
            Firebase by Google can be used for the following: Firebase manages all data real-time in the database. So, the exchange of data to and fro from the database is easy and quick.i have to other options of implement authentication-
            Auth0, MongoDB, Passport, Okta, and Firebase are the most popular alternatives and competitors to Firebase Authentication. We're currently weighing up the pros and cons of using Firebase Authentication vs something more OTB like Auth0 or Okta to manage end-user access management for a consumer digital content product. From what I understand so far, Something like Firebase Auth would require more dev effort but is likely to cost less overall, whereas OTB, we have a UI-based console which makes config by non-technical business users easier to manage. 
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2
            class="accordion-header"
            id="panelsStayOpen-headingThree"
          >
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree"
            >
              What other services does firebase provide other than authentication
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingThree"
          >
            <div class="accordion-body">
            Most web apps need to know the identity of a user. Knowing a user's identity allows an app to securely save user data in the cloud and provide the same personalized experience across all of the user's devices.The Firebase Realtime Database is a cloud-hosted database. Data is stored as JSON and synchronized in realtime to every connected client. When you build cross-platform apps with our Apple platforms.Firebase Hosting is production-grade web content hosting for developers.Firebase Hosting is production-grade web content hosting for developers can send notification messages to drive user re-engagement and retention. For use cases such as instant messaging, a message can transfer.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
