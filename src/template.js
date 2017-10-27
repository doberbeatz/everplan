export default ({ title }) => {
    return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>${title}</title>
      </head>
      
      <body>
        <div id="root"></div>
      </body>
      
      <script src="/assets/bundle.js"></script>
    </html>
  `;
};