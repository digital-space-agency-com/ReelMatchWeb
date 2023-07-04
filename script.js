var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '100%',
    width: '100%',
    videoId: 't9QQ113xnGo',
    playerVars: {
      autoplay: 1,
      controls: 0,
      showinfo: 0,
      modestbranding: 1,
      loop: 1,
      playlist: 't9QQ113xnGo',
      fs: 0,
      cc_load_policy: 0, // Fix typo here
      iv_load_policy: 3,
      autohide: 0,
      rel: 0,
      mute: 1
    },
    events: {
      'onReady': onPlayerReady,
    }
  });
}

function onPlayerReady(event) {
  event.target.mute();
  event.target.playVideo(); // Add parentheses here
}

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID
};

// Initialize Firebase with your configuration
firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

// Get the form element
const emailForm = document.getElementById('email-form');

// Listen for form submission
emailForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get the email input value
  const emailInput = document.getElementById('email-input');
  const email = emailInput.value;

  // Validate the email address (optional)

  // Save the email to Firestore
  firestore.collection('website_emails').add({ email })
    .then(() => {
      // Email saved successfully
      console.log('Email saved to Firestore.');

      // Clear the email input field
      emailInput.value = '';

      // Show success message
      const successMessage = document.getElementById('success-message');
      successMessage.style.display = 'block';
    })
    .catch((error) => {
      // Error occurred while saving the email
      console.error('Error saving email:', error);
    });
});

// Listen for form submission
emailForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get the email input value
  const emailInput = document.getElementById('email-input');
  const email = emailInput.value;

  // Validate the email address (optional)

  // Save the email to Firestore
  firestore.collection('website_emails').add({ email })
    .then(() => {
      // Email saved successfully
      console.log('Email saved to Firestore.');

      // Clear the email input field
      emailInput.value = '';
    })
    .catch((error) => {
      // Error occurred while saving the email
      console.error('Error saving email:', error);
    });
});
