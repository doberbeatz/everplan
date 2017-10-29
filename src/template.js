export default ({ title, body }) => {
    return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>${title}</title>
        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"/>
      </head>
      
      <body>
        <div id="root">${body}</div>
      </body>
      
      <script src="/assets/bundle.js"></script>
    </html>
  `;
};