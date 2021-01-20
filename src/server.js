import sirv from 'sirv';
// import polka from 'polka';
import express from 'express';
import compression from 'compression';
import * as sapper from '@sapper/server';
import { json } from 'body-parser';

const ex = express();

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

const url = dev ? '/' : 'marikang';

ex.use(express.urlencoded({extended: true}))
ex.use(express.json())

ex.use(
		url,
		json(),
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		sapper.middleware()
	)
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});
