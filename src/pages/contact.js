import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const ContactPage = () => {
    return ( 
        <div>
            <Layout>
            <h1>Contact Me</h1>
            <p>Here is my contact details...</p>
            <p>Twitter: <Link to='https://twitter.com/ChrisShim_' target={'_blank'}>@ChrisShim_</Link></p>
            </Layout>
        </div>
     );
}
 
export default ContactPage;