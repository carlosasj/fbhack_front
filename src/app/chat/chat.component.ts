import { Component, OnInit, Input, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OpenVidu, Session, Stream } from 'openvidu-browser';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  public message = '';
  public messages = [];
  private timer;
  private isTutor = false;

  OV: OpenVidu;
  session: Session;

  // Streams to feed StreamComponent's
  remoteStreams: Stream[] = [];
  localStream: Stream;

  // Join form
  sessionId: string;
  userName = '';

  // Main video of the page, will be 'localStream' or one of the 'remoteStreams',
  // updated by an Output event of StreamComponent children
  @Input() mainVideoStream: Stream;

  constructor(
    private route: ActivatedRoute,
  ) {
    this.generateParticipantInfo();
    this.isTutor = this.route.snapshot.params.roomId.endsWith('_');
    this.userName = this.isTutor ? 'Nome do especialista' : 'Nome do usuário';
  }

  @HostListener('window:beforeunload')
  beforeunloadHandler() {
    // On window closed leave session
    this.leaveSession();
    clearInterval(this.timer);
  }

  ngOnDestroy() {
    // On component destroyed leave session
    this.leaveSession();
    clearInterval(this.timer);
  }

  joinSession() {

    // --- 1) Get an OpenVidu object and init a session with a sessionId ---
    // Init OpenVidu object
    this.OV = new OpenVidu();

    // We will join the video-call "sessionId". As there's no server, this parameter must start with the URL of
    // OpenVidu Server (with secure websocket protocol: "wss://") and must include the OpenVidu secret at the end
    this.session = this.OV.initSession('ws://' + location.hostname + ':8443/' + this.sessionId + '?secret=MY_SECRET');


    // --- 2) Specify the actions when events take place ---
    // On every new Stream received...
    this.session.on('streamCreated', (event) => {

      // Add the new stream to 'remoteStreams' array
      this.remoteStreams.push(event.stream);

      // Subscribe to the Stream to receive it. Second parameter is an empty string
      // so OpenVidu doesn't create an HTML video by its own
      this.session.subscribe(event.stream, '');
    });

    // On every Stream destroyed...
    this.session.on('streamDestroyed', (event) => {

      // Avoid OpenVidu trying to remove the HTML video element
      event.preventDefault();

      // Remove the stream from 'remoteStreams' array
      this.deleteRemoteStream(event.stream);
    });


    // --- 3) Connect to the session ---
    // First param irrelevant if your app has no server-side. Second param will be received by every user
    // in Stream.connection.data property, which will be appended to DOM as the user's nickname
    this.session.connect(null, '{"clientData": "' + this.userName + '"}', (error) => {

      // If connection successful, initialize a publisher and publish to the session
      if (!error) {

        // --- 4) Get your own camera stream with the desired resolution ---
        // Both audio and video will be active. Second parameter is an empty string
        // so OpenVidu doesn't create an HTML video by its own
        let publisher = this.OV.initPublisher('', {
          audio: true,        // Whether you want to transmit audio or not
          video: true,        // Whether you want to transmit video or not
          audioActive: true,  // Whether you want to start the publishing with your audio unmuted or muted
          videoActive: true,  // Whether you want to start the publishing with your video enabled or disabled
          quality: 'MEDIUM',  // The quality of your video ('LOW', 'MEDIUM', 'HIGH')
          screen: false       // true to get your screen as video source instead of your camera
        });

        // Store your webcam stream in 'localStream' object
        this.localStream = publisher.stream;
        // Set the main video in the page to display our webcam
        this.mainVideoStream = this.localStream;

        // --- 5) Publish your stream ---
        this.session.publish(publisher);

      } else {
        console.log('There was an error connecting to the session:', error.code, error.message);
      }
    });

    return false;
  }

  leaveSession() {
    // --- 6) Leave the session by calling 'disconnect' method over the Session object ---
    if (this.session) { this.session.disconnect(); };

    // Empty all properties...
    this.remoteStreams = [];
    this.localStream = null;
    this.session = null;
    this.OV = null;
    this.generateParticipantInfo();
  }


  private generateParticipantInfo() {
    // Random user nickname and sessionId
    this.sessionId = 'SessionA';
    this.userName = 'Participant' + Math.floor(Math.random() * 100);
  }

  private deleteRemoteStream(stream: Stream): void {
    let index = this.remoteStreams.indexOf(stream, 0);
    if (index > -1) {
      this.remoteStreams.splice(index, 1);
    }
    clearInterval(this.timer);
  }

  private getMainVideoStream(stream: Stream) {
    this.mainVideoStream = stream;
  }

  ngOnInit() {
    this.sessionId = this.route.snapshot.params.roomId;
    this.sessionId = this.sessionId.endsWith('_') ? this.sessionId.substr(0, this.sessionId.length - 1) : this.sessionId;
    this.joinSession();
    this.timer = setInterval(() => {
      this.messages = JSON.parse(localStorage.getItem('messages')) || [];
    }, 500);
  }

  submit(message) {
    this.messages.push({isTutor: this.isTutor, message});
    localStorage.setItem('messages', JSON.stringify(this.messages));
    this.message = '';
  }

}
