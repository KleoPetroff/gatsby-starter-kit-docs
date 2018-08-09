import React from 'react';
import { graphql } from 'gatsby';

import Branding from '../../../../mynpms/react-website-themes/src/docs/Branding';
import Footer from '../../../../mynpms/react-website-themes/src/docs/Footer';
import Header from '../../../../mynpms/react-website-themes/src/docs/Header';
import Hero from '../../../../mynpms/react-website-themes/src/docs/Hero';
import Layout from '../../../../mynpms/react-website-themes/src/docs/Layout';
import Menu from '../../../../mynpms/react-website-themes/src/docs/Menu';
import Seo from '../../../../mynpms/react-website-themes/src/docs/Seo';

// ../../../../mynpms/react-website-themes/src/docs/

import config from 'content/meta/config';
import menuItems from 'content/meta/menu';

const IndexPage = props => {
  const {
    data: {
      footerLinks: { html: footerLinksHTML },
      hero: { html: heroHTML },
      copyright: { html: copyrightHTML },
    },
  } = props;

  const { headerTitle, headerSubTitle } = config;

  return (
    <Layout>
      <Header>
        <Branding title={headerTitle} subTitle={headerSubTitle} />
        <Menu items={menuItems} />
      </Header>
      <Hero html={heroHTML} />
      <Footer links={footerLinksHTML} copyright={copyrightHTML} />
      <Seo config={config} />
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    hero: markdownRemark(fileAbsolutePath: { regex: "/content/parts/hero/" }) {
      html
    }
    footerLinks: markdownRemark(
      fileAbsolutePath: { regex: "/content/parts/footerLinks/" }
    ) {
      html
    }
    copyright: markdownRemark(
      fileAbsolutePath: { regex: "/content/parts/copyright/" }
    ) {
      html
    }
  }
`;
