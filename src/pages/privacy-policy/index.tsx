const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8 px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow-lg rounded-lg max-w-3xl w-full p-6">
        <h1 className="text-3xl font-bold text-purple-600 text-center mb-6">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-600 text-center mb-4">
          Effective Date: 19/11/2024 | Last Updated: 19/11/2024
        </p>
        <div className="space-y-6 text-gray-700 text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              1. Information We Collect
            </h2>
            <p>
              We collect minimal information necessary to deliver your email
              message to your specified recipient. This includes:
            </p>
            <ul className="list-disc list-inside ml-4">
              <li>Your email address (sender).</li>
              <li>The recipient’s email address.</li>
              <li>The email subject and message content.</li>
              <li>The selected time duration for sending the message.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              2. How We Use Your Information
            </h2>
            <p>
              The information you provide is used solely for delivering your
              email message to the intended recipient after the specified delay.
              We <strong>do not</strong>:
            </p>
            <ul className="list-disc list-inside ml-4">
              <li>Share your data with third parties for marketing purposes.</li>
              <li>Use your data for purposes other than delivering the service.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              3. Data Retention
            </h2>
            <p>
              Your email data is stored securely until the scheduled delivery
              time. Once the message is sent, your data may be deleted. We do
              not guarantee permanent storage or recovery of any message you
              send.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              4. No Guarantees on Delivery
            </h2>
            <p>
              This is a free and experimental project. While we make our best
              effort to send your email as scheduled, we <strong>do not
              guarantee</strong>:
            </p>
            <ul className="list-disc list-inside ml-4">
              <li>Successful delivery of your message.</li>
              <li>Delivery within the specified timeframe.</li>
              <li>Retention of your message if technical issues occur.</li>
            </ul>
            <p className="mt-2">
              By using this service, you acknowledge it is for entertainment
              purposes only and accept the risk that your email may not be sent
              as expected.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              5. Security
            </h2>
            <p>
              We take reasonable steps to protect your information from
              unauthorized access, use, or disclosure. However, as this is a
              free project, we cannot guarantee absolute security.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              6. Third-Party Services
            </h2>
            <p>
              We may use third-party email services or hosting providers to
              facilitate message delivery. These services may have access to
              your data solely for processing purposes and are bound by
              confidentiality agreements.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              7. Your Responsibilities
            </h2>
            <p>
              By using this service, you confirm that:
            </p>
            <ul className="list-disc list-inside ml-4">
              <li>You have the recipient's permission to send them an email.</li>
              <li>
                Your message does not contain harmful, abusive, or illegal
                content.
              </li>
            </ul>
            <p className="mt-2">
              We are not responsible for any misuse of this service or any
              unintended consequences of sending your message.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              8. Changes to This Privacy Policy
            </h2>
            <p>
              We may update this privacy policy from time to time to reflect
              changes in our practices or legal requirements. Any updates will
              be posted on this page, and your continued use of the service
              constitutes your acceptance of the revised terms.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              9. Contact Us
            </h2>
            <p>
              If you have any questions or concerns about this privacy policy or
              the service, you can reach out to us at:
            </p>
            <p className="mt-2 text-purple-600">
              <a href="mailto:yourprojectemail@example.com">
                yourprojectemail@example.com
              </a>
            </p>
          </section>
        </div>
        <p className="text-xs text-gray-500 mt-6 text-center">
          By using "Email Your Beloved Ex," you agree to this privacy policy and
          understand the limitations of this fun and experimental project.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
