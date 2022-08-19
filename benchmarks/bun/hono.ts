import { Hono } from '../../src/index'
import { RegExpRouter } from '../../src/router/reg-exp-router'

const app = new Hono({ router: new RegExpRouter() })

app.get('/', (c) => c.text('Hono'))
app.get('/user', (c) => c.text('User'))
app.get('/user/comments', (c) => c.text('User Comments'))
app.get('/user/avatar', (c) => c.text('User Avatar'))
app.get('/user/lookup/email/:address', (c) => c.text('User Lookup Email Address'))
app.get('/event/:id', (c) => c.text('Event'))
app.get('/event/:id/comments', (c) => c.text('Event Comments'))
app.post('/event/:id/comments', (c) => c.text('POST Event Comments'))
app.post('/status', (c) => c.text('Status'))
app.get('/very/deeply/nested/route/hello/there', (c) => c.text('Very Deeply Nested Route'))
app.get('/user/lookup/username/:username', async (c) => {
  return c.json({ message: `Hello ${c.req.param('username')}` })
})

export default app
