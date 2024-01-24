<template>
  <div class="App">
    <h1>Guess my fart?</h1>
    <button @touchstart="initiateAudio" @click="initiateAudio">Play</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      initiated: false,
    };
  },
  methods: {
    initiateAudio() {
      if (!this.initiated) {
        const audioFiles = [
          require('@/assets/audio01.mp3'),
          require('@/assets/audio02.mp3'),
          require('@/assets/audio03.mp3'),
          require('@/assets/audio04.mp3')
        ];

        const randomAudio = audioFiles[Math.floor(Math.random() * audioFiles.length)];
        const audioPlayer = new Audio(randomAudio);

        audioPlayer.addEventListener('error', (e) => {
          console.error('Erreur de lecture audio:', e);
        });

        audioPlayer.addEventListener('canplaythrough', () => {
          audioPlayer.play()
            .then(() => {
              console.log('Lecture audio démarrée avec succès');
            })
            .catch((error) => {
              console.error('Erreur de démarrage de la lecture audio:', error);
            });
        });

        this.initiated = true;
      }
    }
  }
}
</script>

<style>
.App {
  background-color: black;
  color: white;
  width: 100vw;
  height: 100vh;
  margin: 0;
  display: flex;
  flex-direction: column; 
  align-items: center;
  justify-content: center;
}

h1 {
  margin: 0;
}

button {
  margin-top: 6px;
}
</style>
