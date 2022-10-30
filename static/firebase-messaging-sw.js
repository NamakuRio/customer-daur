
    importScripts(
      'https://www.gstatic.com/firebasejs/9.13.0/firebase-app-compat.js'
    )
    importScripts(
      'https://www.gstatic.com/firebasejs/9.13.0/firebase-messaging-compat.js'
    )
    firebase.initializeApp({"apiKey":"AIzaSyDxC4pAw6doaTPn78lTxpkLyLu1RZROey8","authDomain":"personal-waste-management.firebaseapp.com","projectId":"personal-waste-management","storageBucket":"personal-waste-management.appspot.com","messagingSenderId":"41443225848","appId":"1:41443225848:web:0f6eb71a62323666180b0d","measurementId":"G-XT6PVC1D4X"})

    // Retrieve an instance of Firebase Messaging so that it can handle background
    // messages.
    const messaging = firebase.messaging()

    