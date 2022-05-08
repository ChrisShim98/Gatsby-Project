import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const AboutPage = () => {
    return ( 
        <div>
            <Layout>
            <h1>About Me</h1>
            <p>Hello, my name is Chris from Arbiter Studios and I am a game developer. 
                Arbiter Studios is a small startup, based in Jamaica, that focuses on game development.</p>
            <p>You can contact me here: <Link to='/contact'>Contact me!</Link></p>
            </Layout>
        </div>
     );
}
 
export default AboutPage;