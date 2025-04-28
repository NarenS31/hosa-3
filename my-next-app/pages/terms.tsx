import React from 'react';
import Layout from '../components/Layout';

const TermsPage: React.FC = () => {
  return (
    <Layout title="Terms of Use | Marvin Ridge HOSA" description="Terms of Use for Marvin Ridge HOSA website.">
      <div className="bg-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Terms of Use</h1>
          <p className="text-xl max-w-3xl">
            Please read these terms carefully before using our website.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none">
          <p>
            Last updated: June 1, 2024
          </p>
          
          <h2>Acceptance of Terms</h2>
          <p>
            By accessing or using the Marvin Ridge HOSA website, you agree to be bound by these Terms of Use and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
          </p>
          
          <h2>Use License</h2>
          <p>
            Permission is granted to temporarily view the materials on Marvin Ridge HOSA's website for personal, non-commercial use only. This is the grant of a license, not a transfer of title, and under this license you may not:
          </p>
          <ul>
            <li>Modify or copy the materials;</li>
            <li>Use the materials for any commercial purpose or for any public display;</li>
            <li>Attempt to decompile or reverse engineer any software contained on the website;</li>
            <li>Remove any copyright or other proprietary notations from the materials; or</li>
            <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
          </ul>
          
          <h2>Disclaimer</h2>
          <p>
            The materials on Marvin Ridge HOSA's website are provided on an 'as is' basis. Marvin Ridge HOSA makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>
          
          <h2>Limitations</h2>
          <p>
            In no event shall Marvin Ridge HOSA or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on the website, even if Marvin Ridge HOSA or a Marvin Ridge HOSA authorized representative has been notified orally or in writing of the possibility of such damage.
          </p>
          
          <h2>Accuracy of Materials</h2>
          <p>
            The materials appearing on the Marvin Ridge HOSA website could include technical, typographical, or photographic errors. Marvin Ridge HOSA does not warrant that any of the materials on its website are accurate, complete, or current. Marvin Ridge HOSA may make changes to the materials contained on its website at any time without notice.
          </p>
          
          <h2>Links</h2>
          <p>
            Marvin Ridge HOSA has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Marvin Ridge HOSA of the site. Use of any such linked website is at the user's own risk.
          </p>
          
          <h2>Modifications</h2>
          <p>
            Marvin Ridge HOSA may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
          </p>
          
          <h2>Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws of North Carolina and you irrevocably submit to the exclusive jurisdiction of the courts in that State.
          </p>
          
          <h2>Contact Information</h2>
          <p>
            If you have any questions about these Terms of Use, please contact us at:
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

export default TermsPage; 