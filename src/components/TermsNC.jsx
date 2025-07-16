import React from "react";

const termsStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "min-content",
  backgroundColor: "#dde5ff",
};

const termsMax = {
  maxWidth: "62.5rem",
  margin: "48px auto 0",
  width: "100%",
  height: "min-content",
};

const termsMaxStyle = {
  margin: "0 20px",
  padding: "64px 0 35px",
};

const termsTextStyle = {
  fontSize: "18px",
};

const termsHeadingText = {
  fontSize: "32px",
};

const termsSubHeadingText = {
  fontSize: "22px",
};

const boldText600 = {
  fontWeight: "600",
};

const boldText500 = {
  fontWeight: "500",
};

const padding5Px = {
  padding: "5px 0",
};

const padding8Px = {
  padding: "8px 0",
};

const padding10Px = {
  padding: "10px 0",
};

const paddingL18px = {
  paddingLeft: "18px",
};

const blueText = {
  color: "#1034a6",
};

function TermsNC() {
  return (
    <div style={termsStyle}>
      <div style={termsMax}>
        <div style={termsMaxStyle}>
          <h1 style={{ ...termsHeadingText, ...boldText600 }}>
            Terms & Conditions for <span style={blueText}>"Decmeds"</span>,
            Mobile Application
          </h1>
          <p style={{ ...boldText500, ...termsTextStyle }}>
            <p style={padding10Px}>Effective Date: 29-10-2024</p>
          </p>
          <div style={{ ...paddingL18px, ...boldText500 }}>
            <ol type="1">
              <li>
                <h3 style={{ ...termsSubHeadingText, ...boldText600 }}>
                  Acceptance of Terms
                </h3>
                <p style={{ ...termsTextStyle, ...padding5Px }}>
                  By accessing or using our mobile application "Decmeds," you
                  agree to be bound by these Terms of Service. If you disagree
                  with any part of these Terms, please do not use the App.
                </p>
              </li>
              <li style={padding10Px}>
                <h3 style={{ ...termsSubHeadingText, ...boldText600 }}>
                  User Account
                </h3>
                <p style={{ ...termsTextStyle, ...padding5Px }}>
                  To access certain features of the App, you may need to create
                  a user account. You are solely responsible for maintaining the
                  confidentiality of your account information and for all
                  activities that occur under your account. You agree to notify
                  us immediately of any unauthorized use of your account or any
                  other breach of security.
                </p>
              </li>
              <li>
                <h3 style={{ ...termsSubHeadingText, ...boldText600 }}>
                  Data Privacy and Security
                </h3>
                <p style={{ ...termsTextStyle, ...padding5Px }}>
                  We prioritize the privacy and security of your data. Any
                  personal information you provide will be handled in accordance
                  with our “Privacy Policy”, which outlines how data is
                  collected, used, managed and protected. By using the App, you
                  consent to the processing of your information as described in
                  our Privacy Policy.
                </p>
              </li>
              <li style={padding10Px}>
                <h3 style={{ ...termsSubHeadingText, ...boldText600 }}>
                  Intellectual Property
                </h3>
                <p style={{ ...termsTextStyle, ...padding5Px }}>
                  The App and its content, including but not limited to text,
                  graphics, logos, images, and software, are protected by
                  copyright and other intellectual property laws. You may not
                  use, reproduce, modify, distribute, or display any content
                  from the App without our express written consent.
                </p>
              </li>
              <li>
                <h3 style={{ ...termsSubHeadingText, ...boldText600 }}>
                  User Conduct
                </h3>
                <p style={{ ...termsTextStyle, ...padding5Px }}>
                  You agree not to:
                  <ul style={paddingL18px}>
                    <li>
                      Use the App for any illegal or unauthorized purpose.
                    </li>
                    <li>
                      Interfere with or disrupt the operation of the App or
                      servers.
                    </li>
                    <li>
                      Upload or transmit any harmful or malicious content,
                      including viruses or malware.
                    </li>
                    <li>
                      Attempt to gain unauthorized access to the App or its
                      systems or to circumvent any security measures.{" "}
                    </li>
                    <li>
                      Collect or harvest any personal data from other users
                      without their explicit or implicit consent.{" "}
                    </li>
                    <li>
                      Engage in any misconduct whether intentionally or
                      unintentionally that restricts or inhibits any other user
                      from using or enjoying the App.{" "}
                    </li>
                  </ul>
                </p>
              </li>
              <li style={padding10Px}>
                <h3 style={{ ...termsSubHeadingText, ...boldText600 }}>
                  Medical Disclaimer
                </h3>
                <p style={{ ...termsTextStyle, ...padding5Px }}>
                  Any health-related information provided through the App,
                  including AI-generated responses, is for informational
                  purposes only and is not intended as medical advice. The
                  AI-based recommendations and information provided are meant to
                  assist but should not be considered definitive or conclusive
                  medical advice. Decmeds Technologies Private Limited is not
                  responsible for any inaccuracies in AI generated content. The
                  App may use automated systems, including AI algorithms, to
                  provide health insights and recommendations. However, these
                  insights should not be taken as medical advice. We recommend
                  consulting a healthcare professional before making any
                  health-related decisions based on AI-generated content.
                </p>
              </li>
              <li>
                <h3 style={{ ...termsSubHeadingText, ...boldText600 }}>
                  Fair usage policy
                </h3>
                <p style={{ ...termsTextStyle, ...padding5Px }}>
                  The Services of Decmeds cannot be used for personal gains or
                  in conjunction with any commercial activity including but not
                  limited to using on the application. Decmeds reserves the
                  right to limit, suspend, disable or discontinue your Service
                  in the event that it is discovered that the Service is being
                  used in conjunction with any commercial activity including but
                  not limited to using on the application or for commercial
                  gains or misuse of service for not intended purpose.
                </p>
              </li>
              <li style={padding10Px}>
                <h3 style={{ ...termsSubHeadingText, ...boldText600 }}>
                  Third-Party Links and Content
                </h3>
                <p style={{ ...termsTextStyle, ...padding5Px }}>
                  The App may contain links to third-party websites or content
                  that we do not control or endorse. We are not responsible for
                  the content, privacy policies, or practices of any third-party
                  websites or services.
                </p>
              </li>
              <li>
                <h3 style={{ ...termsSubHeadingText, ...boldText600 }}>
                  User Content
                </h3>
                <p style={{ ...termsTextStyle, ...padding5Px }}>
                  You retain ownership of any content you submit to the App;
                  however, by submitting content, you grant, Decmeds
                  Technologies Private Limited, company a non-exclusive,
                  royalty-free, worldwide license to use, modify, display, and
                  distribute such content for operational and promotional
                  purposes.
                </p>
              </li>
              <li style={padding10Px}>
                <h3 style={{ ...termsSubHeadingText, ...boldText600 }}>
                  Limitation of Liability
                </h3>
                <p style={{ ...termsTextStyle, ...padding5Px }}>
                  In no event shall Decmeds Technologies Private Limited, its
                  members, directors, shareholders, or affiliates be liable for
                  any direct, indirect, incidental, special, consequential, or
                  punitive damages, including but not limited to loss of
                  profits, revenues, data, use, goodwill, or other intangible
                  losses, resulting from your access to or use of, or inability
                  to access or use, the App.
                </p>
              </li>
              <li>
                <h3 style={{ ...termsSubHeadingText, ...boldText600 }}>
                  Disclaimer of Warranties
                </h3>
                <p style={{ ...termsTextStyle, ...padding5Px }}>
                  The App is provided "as is" without warranty of any kind,
                  either express or implied, including but not limited to the
                  implied warranties of merchantability, fitness for a
                  particular purpose, and non infringement. We do not guarantee
                  that the App will be uninterrupted, secure, or free of errors.
                  Additionally, the company is not responsible for any
                  AI-generated answers provided through the App. Users are
                  encouraged to verify the information and consult with
                  qualified professionals regarding any health-related
                  decisions.
                </p>
              </li>
              <li style={padding10Px}>
                <h3 style={{ ...termsSubHeadingText, ...boldText600 }}>
                  Practitioner Display
                </h3>
                <p style={{ ...termsTextStyle, ...padding5Px }}>
                  Decmeds collects, directly or indirectly, and displays on the
                  Application, relevant information regarding the profile and
                  practice of the Practitioners listed on the Application, such
                  as their specialization, qualification, area of practice,
                  experience, fees, location, visiting hours, and similar
                  details. Although we take reasonable efforts to ensure that
                  such information is accurate and updated at frequent
                  intervals, we cannot be held liable for any inaccuracies or
                  incompleteness represented on the Application pertaining to
                  Practitioner Content.
                  <p style={padding8Px}>
                    It is hereby expressly clarified that, the Information that
                    you obtain or receive from Decmeds, is for informational and
                    User’s personal purposes only. We make no guarantees,
                    representations or warranties, whether expressed or implied,
                    with respect to professional qualifications, quality of
                    work, expertise or other information pertaining to the
                    Practitioners provided on the Website.
                  </p>
                  <p style={padding8Px}>
                    In no event shall we be liable to you or anyone else for any
                    decision made or action taken by you in reliance on such
                    information. Decmeds is not meant to be a substitute for
                    Emergency Medical Care.
                  </p>
                </p>
              </li>
              <li>
                <h3 style={{ ...termsSubHeadingText, ...boldText600 }}>
                  Appointment Cancellations and Refunds
                </h3>
                <p style={{ ...termsTextStyle, ...padding5Px }}>
                  If a doctor is unable to take your appointment for any reason,
                  we shall refund your payment. However, we are not liable for
                  any cancellations made by the doctor, and any disputes
                  regarding such cancellations should be directed to the
                  respective healthcare provider. In any way The Company is not
                  responsible for any delay in refund process of amount from
                  cancellation.
                </p>
              </li>
              <li style={padding10Px}>
                <h3 style={{ ...termsSubHeadingText, ...boldText600 }}>
                  User Cancellations and Charges
                </h3>
                <p style={{ ...termsTextStyle, ...padding5Px }}>
                  If you initiate a cancellation for any appointment,
                  cancellation charges may apply. The company is not responsible
                  for these charges, and you agree to accept any applicable fees
                  related to your cancellation.
                </p>
              </li>
              <li>
                <h3 style={{ ...termsSubHeadingText, ...boldText600 }}>
                  Indemnification
                </h3>
                <p style={{ ...termsTextStyle, ...padding5Px }}>
                  You agree to indemnify, defend, and hold harmless Decmeds
                  Technologies Private Limited, its affiliates, and their
                  respective officers, directors, and employees from any claims,
                  losses, liabilities, damages, costs, or expenses (including
                  reasonable attorneys' fees) arising out of or related to your
                  use of the App, your violation of these Terms, or your
                  violation of any rights of another party.
                </p>
              </li>
              <li style={padding10Px}>
                <h3 style={{ ...termsSubHeadingText, ...boldText600 }}>
                  Termination
                </h3>
                <p style={{ ...termsTextStyle, ...padding5Px }}>
                  We may terminate or suspend your access to the App at any
                  time, with or without notice, for any reason, including if we
                  believe you have violated these Terms. Upon termination, your
                  right to use the App will cease immediately.
                </p>
              </li>
              <li>
                <h3 style={{ ...termsSubHeadingText, ...boldText600 }}>
                  Changes to Terms
                </h3>
                <p style={{ ...termsTextStyle, ...padding5Px }}>
                  We may modify these Terms at any time. Your continued use of
                  the App after such modifications constitutes your acceptance
                  of the revised Terms. We encourage you to review these Terms
                  periodically for updates.
                </p>
              </li>
              <li style={padding10Px}>
                <h3 style={{ ...termsSubHeadingText, ...boldText600 }}>
                  Governing Law
                </h3>
                <p style={{ ...termsTextStyle, ...padding5Px }}>
                  These Terms shall be governed by and construed in accordance
                  with the Applicable laws of India, without regard to its
                  conflict of law principles. Any disputes arising under or in
                  connection with these Terms shall be subject to the exclusive
                  jurisdiction of the courts located in Company’s jurisdiction.
                </p>
              </li>
              <li>
                <h3 style={{ ...termsSubHeadingText, ...boldText600 }}>
                  Severability
                </h3>
                <p style={{ ...termsTextStyle, ...padding5Px }}>
                  If any provision of these Terms is found to be invalid or
                  unenforceable, the remaining provisions shall continue in full
                  force and effect.
                </p>
              </li>
              <li style={padding10Px}>
                <h3 style={{ ...termsSubHeadingText, ...boldText600 }}>
                  Copyright
                </h3>
                <p style={{ ...termsTextStyle, ...padding5Px }}>
                  All information, content, services and software displayed on,
                  transmitted through, or used in connection with the
                  Application, including for example text, photographs, images,
                  illustrations, audio clips, video, html, source and object
                  code, trademarks, logos, and the like (collectively and
                  hereinafter referred to as the “Decmeds Content”), as well as
                  its selection and arrangement, is owned by Us other Third
                  Parties. You may use the App Content only through the
                  Application, and solely for your personal, non-commercial use.
                  <p style={padding8Px}>
                    You may not, republish any portion of the App Content on any
                    Internet, Intranet or extranet site or incorporate the App
                    Content in any database, compilation, archive or cache. You
                    may not distribute any App Content to others, whether or not
                    for payment or other consideration, and you may not modify,
                    copy, frame, cache, reproduce, sell, publish, transmit,
                    display or otherwise use any portion of the App Content. You
                    may not scrape or otherwise copy the App Content without
                    permission. You agree not to decompile, reverse engineer or
                    disassemble any software or other products or processes
                    accessible through the Application; not to insert any code
                    or product or manipulate the content of the Application in
                    any way that affects the user's experience, and not to use
                    any data mining, data gathering or extraction method.
                  </p>
                </p>
              </li>
              <li>
                <h3 style={{ ...termsSubHeadingText, ...boldText600 }}>
                  Entire Agreement
                </h3>
                <p style={{ ...termsTextStyle, ...padding5Px }}>
                  By downloading and / or using this Application, you hereby
                  agree to be bound by the Terms of Use / Service, Privacy
                  Policy, and other Policies as set forth herein. It is hereby
                  further specified that all the Terms and Policies here on the
                  App shall be coterminous to these terms. These Terms, along
                  with any referenced policies such as our Privacy Policy,
                  constitute the entire agreement between you and Decmeds
                  Technologies Private Limited concerning your use of the App.
                  We shall not be liable for any failure to perform our
                  obligations under these Terms if such failure results from any
                  cause beyond our reasonable control, including but not limited
                  to mechanical, electronic, or communications failure or
                  degradation.
                </p>
              </li>
              <li style={padding10Px}>
                <h3 style={{ ...termsSubHeadingText, ...boldText600 }}>
                  Contact Us
                </h3>
                <p style={{ ...termsTextStyle, ...padding5Px }}>
                  If you have any questions about these Terms of services,
                  please contact us at [
                  <a
                    href="mailto:support@decmeds.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    support@decmeds.com
                  </a>
                  ].
                </p>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TermsNC;
