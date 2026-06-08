// This is just an example of the config for the BulgaR Loading Screen script
// This is just an example of the config for the BulgaR Loading Screen script
// This is just an example of the config for the BulgaR Loading Screen script

// =====================================================
// LOADING SCREEN SETTINGS
// =====================================================
// Edit the values below to customize your loading screen.
//
// Background Type:
//  - "image" : Display image/GIF background
//  - "video" : Display MP4 video background
//
// Audio Source:
//  - "mp3"   : Play music from assets/music.mp3
//  - "video" : Use audio from the video file
// =====================================================

const LoadingScreenSettings = {
    // General
	WelcomeText: "Welcome, Traveler!", // LEAVE EMPTY IF U WANT
    Title: "BulgaR Scripts", // LEAVE EMPTY IF U WANT
    Subtitle: "Loading RedM server...", // LEAVE EMPTY IF U WANT

    // Background
    Type: "video", // "image" or "video" // Using a video background may slightly impact the video performance, especially when many scripts are being downloaded.

    Image: "assets/background.gif",
    Video: "assets/background.mp4",

    // Audio
    AudioSource: "mp3", // "mp3" or "video" // Use "video" only when Type is set to "video".

    // Texts
    Downloading: "Downloading resources",
    Loading: "Loading resources",
    Scripts: "Starting scripts",
    Finishing: "Finishing loading",
    Ready: "Server ready",
    Start: "START GAME",
    Entering: "ENTERING...",
	
	InfoLabel: "INFO",

	  // IF U SET Info: [], then its disabled
  	Info: [
  		{ label: "Owner", value: "BulgaR" },
  		{ label: "Developer", value: "BulgaR" },
  		{ label: "Website", value: "example.com", url: "https://www.example.com" },
  		{ label: "Discord", value: "discord.gg/dcyY2e5kb3", url: "https://discord.gg/dcyY2e5kb3" }
  		// U CAN ADD MORE HERE IF U WANT
  	],
	
  	TipLabel: "TIP",
  
  	Tips: [
  		"Read the server rules before starting your adventure.",
  		"Your choices shape your story and reputation.",
  		"Roleplay quality is more important than winning.",
  		"Use local businesses to support the economy.",
  		"Cooperation often leads to greater rewards.",
  		"Explore the frontier to discover hidden opportunities.",
  		"Respect the law — or be prepared to face the consequences.",
  		"Every town has its own unique atmosphere and stories.",
  		"Keep your horse healthy for longer journeys.",
  		"Join community events to meet other players."
  		// U CAN ADD MORE HERE IF U WANT
  	],
  
  	TipChangeInterval: 5000
};
