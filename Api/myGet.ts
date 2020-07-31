import { NextPageContext } from 'next';
import fetch from 'isomorphic-unfetch';
import Router from 'next/router';

const myGet = async (url: string, ctx:NextPageContext) => {
    const cookie = ctx.req?.headers.cookie;
  const resp = await fetch(url, {
    headers: {
      cookie: cookie,
    },
  });

  // client side
  if (resp.status === 401 && !ctx.req) {
    Router.replace(`/login`);
    return {};
  }

  // server side
  if (resp.status === 401 && ctx.req) {
    ctx.res?.writeHead(302, {
      Location: `http://localhost:3000/login`,
    });
    ctx.res?.end();
    return;
  }
  const json = await  resp.json();
  return json;
}

export default myGet;