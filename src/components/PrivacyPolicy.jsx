import React from "react";

const privacyStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "min-content",
  backgroundColor: "#dde5ff",
};

const privacyMax = {
  maxWidth: "62.5rem",
  margin: "48px auto 0",
  width: "100%",
  height: "min-content",
};

const privacyMaxStyle = {
  margin: "0 20px",
  padding: "64px 0 35px",
};

const privacyTextStyle = {
  fontSize: "18px",
};

const privacyHeadingText = {
  fontSize: "32px",
};

const privacySubHeadingText = {
  fontSize: "22px",
};

const boldText600 = {
  fontWeight: "600",
};

const boldText500 = {
  fontWeight: "500",
};

const padding10Px = {
  padding: "10px 0",
};

const padding15Px = {
  padding: "15px 0",
};

const padding8Px = {
  padding: "8px 0",
};

const paddingL18px = {
  paddingLeft: "18px",
};

const blueText = {
  color: "#1034a6",
};

function PrivacyPolicy() {
  return (
    <div style={privacyStyle}>
      <div style={privacyMax}>
        <div style={privacyMaxStyle}>
          <h1 style={{ ...privacyHeadingText, ...boldText600 }}>
            Privacy Policy for <span style={blueText}>"Decmeds"</span>, Mobile
            Application
          </h1>
          <p style={{ ...boldText500, ...privacyTextStyle }}>
            <p style={padding10Px}>Effective Date: 29-10-2024</p>
            Welcome to <span style={blueText}>"Decmeds"</span>, a mobile
            application designed to provide convenient access to healthcare
            services. This Privacy Policy explains how we collect, use,
            disclose, and safeguard your personal information when you use our
            mobile application <span style={blueText}>"Decmeds"</span> or
            interact with our services. We are committed to ensuring that we
            respect your privacy, only collect the information necessary for you
            to use the platform safely and easily, and that we are transparent
            in the way we handle your data.
          </p>
          <div style={padding15Px}>
            <h3 style={{ ...privacySubHeadingText, ...boldText600 }}>
              Definitions
            </h3>
            <div style={paddingL18px}>
              <ol
                type="a"
                style={{ ...privacyTextStyle, ...boldText500, ...padding10Px }}
              >
                <li>
                  “We”, “Our”, and “Us” shall mean and refer to the creators of
                  this privacy policy.
                </li>
                <li>
                  “You”, “Your”, “Yourself” and “User” shall mean and refer to
                  natural and legal individuals who use the Application,
                  including End-Users, Patients, general Users and
                  Practitioners.
                </li>
                <li>
                  “Application” shall mean and refer to Decmeds Users and
                  Doctors Application.
                </li>
                <li>
                  “Personal Information” shall mean and refer to any personally
                  identifiable information that We may collect from You.
                </li>
                <li>
                  “Third Parties” refer to any application, website, company or
                  individual apart from the User and the creator of the
                  Application.
                </li>
              </ol>
            </div>
          </div>
          <div>
            <h3 style={{ ...privacySubHeadingText, ...boldText600 }}>
              Informations We Collect
            </h3>
            <div
              style={{ ...privacyTextStyle, ...boldText500, ...padding10Px }}
            >
              <ul style={paddingL18px}>
                <li>
                  Personal Information for Signup When you sign up for
                  "Decmeds," we may collect the following personal information
                  as well as additional information if needed, to facilitate
                  communication regarding your healthcare services.
                </li>
              </ul>
              <p style={padding8Px}>
                <span style={blueText}>Your full name:</span> We collect your
                name to identify you accurately and associate the appointment
                with your account.
              </p>
              <p style={padding8Px}>
                <span style={blueText}>Age:</span> We collect your age to ensure
                that healthcare professionals have the necessary information for
                providing appropriate care.
              </p>
              <p style={padding8Px}>
                <span style={blueText}>Father's\Husband’s\Spouse name:</span> We
                may collect this to identify you correctly and ensure accurate
                record-keeping.
              </p>
              <p>
                <span style={blueText}>Mobile number:</span> We may request your
                mobile number to facilitate communication related to your
                appointment.
              </p>
              <p style={padding8Px}>
                <span style={blueText}>Device Information:</span> Device type,
                operating system, device ID, mobile network, location data,
                Information about how you interact with the App, such as
                accessed pages, features used, and session durations, to ensure
                compatibility and functionality.
              </p>
              <p style={padding8Px}>
                <span style={blueText}>Address:</span> We may collect your
                address to assist in identifying nearby healthcare providers and
                enable location-based services.
              </p>
              <p style={padding8Px}>
                <span style={blueText}>Password:</span> We securely store your
                password to authenticate your identity and protect your account.
              </p>
              <p style={padding8Px}>
                <span style={blueText}>Firebase token:</span> We collect your
                Firebase token to authenticate and authorize your access to our
                App's features.
              </p>
              <p style={padding8Px}>
                <span style={blueText}>Date of appointment:</span> We collect
                the date of your appointment to schedule and confirm your
                requested time slot.
              </p>
              <p style={padding8Px}>
                <span style={blueText}>AI Responses:</span> We collect
                AI-generated responses based on your interactions to enhance
                personalized care.
              </p>
              <p style={padding8Px}>
                <span style={blueText}>AI Request Questions:</span>We collect to
                understand your inquiries and tailor responses to your
                healthcare needs.
              </p>
              <p style={padding8Px}>
                <span style={blueText}>Medical History:</span> Collected to
                provide healthcare professionals with a comprehensive view of
                your health for accurate treatment and diagnosis.
              </p>
              <p style={padding8Px}>
                You can keep your personal information up to date directly
                through the relevant profile section on our mobile app.
              </p>
            </div>
          </div>
          <div style={padding15Px}>
            <h3 style={{ ...privacySubHeadingText, ...boldText600 }}>
              How We Use Your Information
            </h3>
            <div style={{ ...privacyTextStyle, ...boldText500 }}>
              <p style={padding8Px}>
                We use the personal information we collect for the following
                purposes: To create and manage your account.
              </p>
              <p style={padding8Px}>
                To provide you with access to healthcare services through our
                App. To facilitate appointment bookings and ensure a smooth
                scheduling process. To communicate with you, including
                confirming appointments and providing important updates.
              </p>
              <p style={padding8Px}>
                To personalize your experience and improve our services. How We
                Protect Your Information
              </p>
              <p style={padding8Px}>
                We implement appropriate security measures to protect your
                personal information from unauthorized access, alteration,
                disclosure, or destruction. However, please be aware that no
                method of transmission over the internet or electronic storage
                is completely secure, and we cannot guarantee absolute security
                of your information.
              </p>
            </div>
          </div>
          <div>
            <h3 style={{ ...privacySubHeadingText, ...boldText600 }}>
              Data Retention
            </h3>
            <div style={{ ...privacyTextStyle, ...boldText500 }}>
              <p style={padding8Px}>
                We retain your personal information for as long as necessary to
                fulfil the purposes outlined in this Privacy Policy, unless a
                longer retention period is required or permitted by law.
              </p>
              <p style={padding8Px}>
                Information Sharing and Disclosure We do not sell, trade, rent,
                or otherwise disclose your personal information to third parties
                for marketing purposes. All credit/debit cards’ & Aadhar card
                details and personally identifiable information will NOT be
                stored, sold, shared, rented or leased to any person.
              </p>
              <p style={padding8Px}>
                However, we may share your information with the following
                entities:
              </p>
              <p style={padding8Px}>
                <span style={blueText}>Healthcare providers:</span> We may share
                your personal information with healthcare professionals and
                organizations to facilitate the delivery of healthcare services
                through our App.
              </p>
              <p style={padding8Px}>
                <span style={blueText}>Service providers:</span> We may engage
                third-party service providers to assist us in operating and
                maintaining the App. These service providers have access to your
                personal information but are obligated not to disclose or use it
                for any other purpose.
              </p>
              <p style={padding8Px}>
                <span style={blueText}>Legal requirements:</span> We may
                disclose your personal information if required to do so by law
                or in response to valid requests from public authorities.
                Third-Party Links and Services Our App may contain links to
                third-party websites, services, or resources that are not
                operated by us. We are not responsible for the privacy practices
                of these third parties. We recommend reviewing the privacy
                policies of any third-party websites or services before
                providing any personal information.
              </p>
              <p style={padding8Px}>
                Decmeds also reserves the right to use information provided by
                or about the End-User for the following purposes:
              </p>
              <div style={paddingL18px}>
                <ul
                  type="a"
                  style={{
                    ...privacyTextStyle,
                    ...boldText500,
                    ...padding10Px,
                  }}
                >
                  <li>Publishing such information on the Website.</li>
                  <li>
                    Contacting End-Users to offer new products or services.
                  </li>
                  <li>
                    Contacting End-Users to gather feedback on products and
                    services.
                  </li>
                  <li>
                    Analyzing software usage patterns to improve product design
                    and utility.
                  </li>
                  <li>
                    Analyzing anonymized practice information for commercial
                    purposes.
                  </li>
                  <li>
                    Processing payment instructions, including those through
                    independent third-party service providers such as payment
                    gateways, banking and financial institutions, pre-paid
                    instruments, and wallet providers for handling payment
                    transactions or facilitating deferred payment options.
                  </li>
                </ul>
              </div>
              <p style={padding8Px}>
                If you have voluntarily provided your Personal Information to
                Decmeds for any of the purposes stated above, you hereby consent
                to such collection and use of such information by Decmeds.
              </p>
            </div>
          </div>
          <div style={padding15Px}>
            <h3 style={{ ...privacySubHeadingText, ...boldText600 }}>
              User Control And Rights
            </h3>
            <div
              style={{ ...privacyTextStyle, ...boldText500, ...padding10Px }}
            >
              <p style={padding8Px}>
                <span style={blueText}>Data Access:</span> You may request
                access to view, update, or correct your data at any time via
                your account settings or by contacting us.
              </p>
              <p style={padding8Px}>
                <span style={blueText}>Privacy Controls:</span> We provide
                privacy settings allowing you to control what data you share and
                with whom.
              </p>
              <p style={padding8Px}>
                <span style={blueText}>Data Portability:</span> Upon request, we
                can provide your personal information in a structured, commonly
                used, and machine-readable format.
              </p>
              <p>
                <span style={blueText}>Consent Withdrawal:</span> You can
                withdraw your consent for certain data processing activities,
                such as location tracking, at any time by updating your device
                settings or contacting us.
              </p>
              <p style={padding8Px}>
                <span style={blueText}>Opt-Out of Communications:</span> You may
                opt-out of marketing or promotional communications by using the
                unsubscribe link provided in these communications.
              </p>
              <p style={padding8Px}>
                <span style={blueText}>Right to Restrict Processing:</span> You
                may request that we limit the processing of your personal
                information in certain cases, such as if you dispute the
                accuracy of your data.
              </p>
            </div>
          </div>
          <div>
            <h3 style={{ ...privacySubHeadingText, ...boldText600 }}>
              Children's And Minor's Privacy
            </h3>
            <div style={{ ...privacyTextStyle, ...boldText500 }}>
              <p style={padding8Px}>
                Decmeds strongly encourages parents and guardians to supervise
                the online activities of their minor children and consider using
                parental control tools available from online services and
                software manufacturers to help provide a child-friendly online
                environment. These tools also can prevent minors from disclosing
                their name, address, and other personally identifiable
                information online without parental permission. Although the
                Decmeds Services are not intended for use by minors.
              </p>
            </div>
          </div>
          <div style={padding15Px}>
            <h3 style={{ ...privacySubHeadingText, ...boldText600 }}>
              Cookies And Tracking Technologies
            </h3>
            <div style={{ ...privacyTextStyle, ...boldText500 }}>
              <p style={padding8Px}>
                We may use cookies and similar tracking technologies to improve
                user experience, analyze usage patterns, and personalize
                services. You have the option to manage your cookie preferences
                or disable cookies through your device settings, although doing
                so may affect some features of the App.
              </p>
            </div>
          </div>
          <div>
            <h3 style={{ ...privacySubHeadingText, ...boldText600 }}>
              Decmeds Privacy
            </h3>
            <div style={{ ...privacyTextStyle, ...boldText500 }}>
              <p style={padding8Px}>
                We have put this privacy policy together to let you know how we
                collect your data, how we handle it and what we do, and don’t
                do. There may be links to other sites on our website or in our
                apps, so make sure you also read their privacy policy when
                visiting those other sites.
              </p>
            </div>
          </div>
          <div style={padding15Px}>
            <h3 style={{ ...privacySubHeadingText, ...boldText600 }}>
              Consent To This Policy
            </h3>
            <div style={{ ...privacyTextStyle, ...boldText500 }}>
              <p style={padding8Px}>
                You acknowledge that this Privacy Policy is a part of the Terms
                of Use of the Application and the other Services, and you
                unconditionally agree that becoming a User of the its Services
                signifies your (i) assent to this Privacy Policy, and (ii)
                consent to Decmeds using, collecting, processing and/or
                disclosing your Personal Information in the manner and for the
                purposes set out in this Privacy Policy. Your visit to the
                Website and use of the Services is subject to this Privacy
                Policy and the Terms of Use.
              </p>
            </div>
          </div>
          <div>
            <h3 style={{ ...privacySubHeadingText, ...boldText600 }}>
              Dispute Resolution
            </h3>
            <div style={{ ...privacyTextStyle, ...boldText500 }}>
              <p style={padding8Px}>
                In case of any disputes regarding data privacy or this Privacy
                Policy, you agree to contact us first for resolution. We are
                committed to resolving privacy complaints promptly and
                transparently.
              </p>
            </div>
          </div>
          <div style={padding15Px}>
            <h3 style={{ ...privacySubHeadingText, ...boldText600 }}>
              Contact Us
            </h3>
            <div style={{ ...privacyTextStyle, ...boldText500 }}>
              <p style={padding8Px}>
                If you have any questions or concerns about our Privacy Policy
                or the practices described herein, you may contact us at
              </p>
              <p style={padding8Px}>
                <span style={blueText}>*Email:</span> support@decmeds.com
              </p>
              <p style={padding8Px}>
                <span style={blueText}>*Regd Address:</span> BN-11/2, Ground
                Floor, Jyangra High School, Desh Bandhu Nagar, North 24
                Parganas, West Bengal-700059 IN
              </p>
              <p style={padding8Px}>
                Please note that this Privacy Policy may be updated from time to
                time. We will notify you of any material changes by posting the
                updated Privacy Policy on our App. Your continued use of the App
                after such modifications will constitute your acknowledgment of
                the modified Privacy Policy and your agreement to abide and be
                bound by its terms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
