import React, {Component} from 'react'
import { useRouter } from 'next/router';
import Layout from '../src/components/Layout'

const Page = () => {
  const router = useRouter();

  return (
    <Layout>
      <h1>{router.query.name}</h1>
      <p>This is the blog post content.</p>
    </Layout>
  );
};

export default Page;