# Firebase Studio

This is a NextJS starter in Firebase Studio.

To get started, take a look at src/app/page.tsx.

## How to run locally

1.  **Install dependencies:** This command downloads all the necessary packages for the project.
    ```bash
    npm install
    ```

2.  **Start the development server:** This command runs the application so you can see it in your browser.
    ```bash
    npm run dev
    ```

After running the second command, you can view your application by opening `http://localhost:9002` in your browser.

## How to export for hosting (like Hostinger)

To generate the static HTML, CSS, and JavaScript files to upload to a hosting service, run the following command:

```bash
npm run build
```

This will create an `out` folder. Upload the contents of this `out` folder to your hosting provider.
