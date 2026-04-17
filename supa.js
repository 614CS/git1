import { Client } from '/git1/node_modules/@neondatabase/serverless';

export default {
  async fetch(request, env, ctx) {
    // 1. Initialize the client using the environment variable
    const client = new Client(env.DATABASE_URL);

    try {
      // 2. Connect to Neon
      await client.connect();

      // 3. Execute your query
      const { rows } = await client.query('SELECT * FROM test LIMIT 10');

      // 4. Return results as JSON
      return new Response(JSON.stringify(rows), {
        headers: { 'content-type': 'application/json' },
      });
    } catch (e) {
      return new Response(e.message, { status: 500 });
    } finally {
      // 5. Always close the connection
      ctx.waitUntil(client.end());
    }
  },
};
