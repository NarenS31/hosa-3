import React from 'react';
import Layout from '../components/Layout';

const PrivacyPage: React.FC = () => {
  return (
    <Layout title="Privacy Policy | Marvin Ridge HOSA" description="Privacy Policy for Marvin Ridge HOSA website.">
      <div className="bg-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl max-w-3xl">
            Our commitment to protecting your privacy and personal information.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none">
          <p>
            Last updated: June 1, 2024
          </p>
          
          <h2>Introduction</h2>
          <p>
            Marvin Ridge HOSA ("we," "our," or "us") respects your privacy and is committed to protecting it through our compliance with this policy. This Privacy Policy describes the types of information we may collect from you or that you may provide when you visit our website and our practices for collecting, using, maintaining, protecting, and disclosing that information.
          </p>
          
          <h2>Information We Collect</h2>
          <p>
            We collect several types of information from and about users of our website, including:
          </p>
          <ul>
            <li>Personal information such as name, email address, phone number, and grade level when you submit forms on our website.</li>
            <li>Information about your internet connection, the equipment you use to access our website, and usage details.</li>
            <li>Non-personal information such as browser type, time spent on pages, and click patterns.</li>
          </ul>
          
          <h2>How We Use Your Information</h2>
          <p>
            We use information that we collect about you or that you provide to us:
          </p>
          <ul>
            <li>To present our website and its contents to you.</li>
            <li>To provide you with information about HOSA events, meetings, and activities.</li>
            <li>To process membership applications and competition registrations.</li>
            <li>To communicate with you about chapter activities and opportunities.</li>
            <li>To improve our website and user experience.</li>
          </ul>
          
          <h2>Disclosure of Your Information</h2>
          <p>
            We may disclose personal information that we collect or you provide as described in this privacy policy:
          </p>
          <ul>
            <li>To our school administrators and HOSA advisors.</li>
            <li>To HOSA International and NC HOSA for official membership purposes.</li>
            <li>To comply with any court order, law, or legal process, including to respond to any government or regulatory request.</li>
          </ul>
          
          <h2>Data Security</h2>
          <p>
            We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. All information you provide to us is stored on secure servers behind firewalls.
          </p>
          
          <h2>Children's Privacy</h2>
          <p>
            Our website is primarily designed for high school students. We do not knowingly collect personal information from children under 13 without parental consent. If you are under 13, please do not provide any personal information on this website.
          </p>
          
          <h2>Changes to Our Privacy Policy</h2>
          <p>
            We may update our privacy policy from time to time. We will post any changes on this page and encourage you to review our privacy policy periodically.
          </p>
          
          <h2>Contact Information</h2>
          <p>
            If you have any questions or concerns about our Privacy Policy, please contact us at:
          </p>
          <p>
            Marvin Ridge HOSA<br />
            2825 Crane Road<br />
            Waxhaw, NC 28173<br />
            Email: hosa@marvinridge.edu
          </p>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <a href="/" className="text-blue-600 hover:text-blue-800">
            ← Back to Home
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPage; 