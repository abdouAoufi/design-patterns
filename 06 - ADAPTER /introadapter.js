class MediaPlayer {
  play(type, fileName) {}
}

class AdvancedPlayer {
  playVlc(fileName) {}
  playMp4(fileName) {}
}

class VlcPlayer extends AdvancedPlayer {
  playVlc(fileName) {
    console.log("Playing VLC file", fileName+".vlc");
  }
}

class Mp4Player extends AdvancedPlayer {
  playMp4(fileName) {
    console.log("Playing MP4 file", fileName+".mp4");
  }
}

class MediaAdapter extends MediaPlayer {
  advancedPlayer;
  constructor(type) {
      super();
    if (type == "vlc") {
      this.advancedPlayer = new VlcPlayer();
    }
    if (type == "mp4") {
      this.advancedPlayer = new Mp4Player();
    }
  }
  play(type, fileName) {
    if (type == "vlc") {
      this.advancedPlayer.playVlc(fileName);
    }
    if (type == "mp4") {
      this.advancedPlayer.playMp4(fileName);
    }
  }
}

class AudioPlayer extends MediaPlayer {
  mediaAdapter;

  play(type, fileName) {
    if (type === "mp3") {
      console.log("Playig MP3 ", fileName+".mp3");
    }
    if (type === "vlc" || type === "mp4") {
      this.mediaAdapter = new MediaAdapter(type);
      this.mediaAdapter.play(type, fileName);
    }
    else {
        console.log("Uknown type !!")
    }
  }
}

const audio = new AudioPlayer();
audio.play("vlcc" , "loseyourself")
