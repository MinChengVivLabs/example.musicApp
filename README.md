<p align="Center">
  <img src="https://bixbydevelopers.com/dev/docs-assets/resources/dev-guide/bixby_logo_github-11221940070278028369.png">
  <br/>
  <h1 align="Center">Bixby Example Capsule -- example.musicApp</h1>
</p>

**Purpose**

The purpose of this example is to create a capsule that able to excute REST HTTP command over JSON server on localhost port 3000

  - json-server needs to run on localhost port 3000 as min.cheng$ ./json-server --watch json.db
  - rgrok also needs to run as min.cheng$ ./ngrok http 3000
  - the above 2 termial window should keep running
  - inside capsule change localhost to the ngrok forwarding url
  - actual REST https server will not require the above steps
  - This example is written by Min Cheng. 
    
**Before you start!**

  - You will first need to create a Samsung account by navigating to https://bixbydevelopers.com/ and clicking on the "Login/Sign Up" button at the top right corner of the page. Once you have signed up, download the IDE to start creating the capsule.
  - Install NODE JS first by downloading from offical website https://nodejs.org/en/download/
  - Checkout gitHub repository and install json-server https://github.com/typicode/json-server
  - Follow instruction to start json-server https://itnext.io/using-json-server-to-create-a-restful-server-in-5-seconds-78b85ccf832b
  - download ngrok excutable from ngrok.com (registration is required, may need to switch wifi)
  - Ctrl-C terminates both process

**Resources**

Bixby Developer Resources:
  - Bixby Developer Center: https://bixbydevelopers.com/
  - Bixby Developer Support Help Center: https://support.bixbydevelopers.com/hc/en-us
    - You may find the  FAQ section useful as it contains articles that provide insight into common pitfalls first-time developers may encounter.

**Need Help?**
  - If you are stuck or need assistance, feel free to reach out to us. We are here to help you with any questions or point you to the right areas of the Bixby Developer Center or the Bixby Help Center. You can reach us by sending your questions via email to support@bixbydevelopers.com.
