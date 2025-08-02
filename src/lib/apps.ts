import fuzzysort from 'fuzzysort';
import { List } from 'swisslist';

type App = {
	name: string;
	desc: string;
	lang: Lang;
	circle?: boolean;
};

export enum Lang {
	C = 'C',
	CPlusPlus = 'C++',
	CSharp = 'CSharp',
	Crystal = 'Crystal',
	Go = 'Go',
	JavaScript = 'JavaScript',
	Lua = 'Lua',
	Python = 'Python',
	Rust = 'Rust',
	Scheme = 'Scheme',
	Swift = 'Swift',
	TypeScript = 'TypeScript',
	Vala = 'Vala',
	Perl = 'Perl'
}

const APP_MAP: Record<string, App> = {
	'io.bassi.Amberol': {
		name: 'Amberol',
		desc: 'Plays music, and nothing else',
		lang: Lang.Rust,
		circle: true
	},
	'net.natesales.Aviator': {
		name: 'Aviator',
		desc: 'Your Video Copilot: AV1/OPUS Video Encoder',
		lang: Lang.Python
	},
	'io.github.Bavarder.Bavarder': {
		name: 'Bavarder',
		desc: 'Chit-chat with an AI',
		lang: Lang.Python
	},
	'com.raggesilver.BlackBox': {
		name: 'Black Box',
		desc: 'A beautiful GTK 4 terminal',
		lang: Lang.Vala
	},
	'com.rafaelmardojai.Blanket': {
		name: 'Blanket',
		desc: 'Listen to ambient sounds',
		lang: Lang.Python,
		circle: true
	},
	'com.usebottles.bottles': {
		name: 'Bottles',
		desc: 'Run Windows Software',
		lang: Lang.Python
	},
	'org.gnome.Builder': {
		name: 'Builder',
		desc: 'An IDE for GNOME',
		lang: Lang.C
	},
	'page.kramo.Cartridges': {
		name: 'Cartridges',
		desc: 'Launch all your games',
		lang: Lang.Python,
		circle: true
	},
	'org.gnome.Snapshot': {
		name: 'Camera',
		desc: 'Take pictures and videos',
		lang: Lang.Rust
	},
	'org.nickvision.cavalier': {
		name: 'Cavalier',
		desc: 'Visualize audio with CAVA',
		lang: Lang.CSharp
	},
	'com.github.rafostar.Clapper': {
		name: 'Clapper',
		desc: 'Lean back and enjoy videos',
		lang: Lang.C
	},
	'org.gnome.design.Contrast': {
		name: 'Contrast',
		desc: 'Check contrast between two colors',
		lang: Lang.Rust
	},
	'io.gitlab.adhami3310.Converter': {
		name: 'Switcheroo',
		desc: 'Convert and manipulate images',
		lang: Lang.Rust,
		circle: true
	},
	'com.github.huluti.Curtail': {
		name: 'Curtail',
		desc: 'Compress your images',
		lang: Lang.Python,
		circle: true
	},
	'com.belmoussaoui.Decoder': {
		name: 'Decoder',
		desc: 'Scan and Generate QR Codes',
		lang: Lang.Rust,
		circle: true
	},
	'org.nickvision.money': {
		name: 'Denaro',
		desc: 'Manage your personal finances',
		lang: Lang.CSharp
	},
	'app.drey.Dialect': {
		name: 'Dialect',
		desc: 'Translate between languages',
		lang: Lang.Python,
		circle: true
	},
	'me.dusansimic.DynamicWallpaper': {
		name: 'Dynamic Wallpaper',
		desc: 'Dynamic wallpaper creator for Gnome 42',
		lang: Lang.Python
	},
	'com.github.wwmm.easyeffects': {
		name: 'Easy Effects',
		desc: 'Audio Effects for PipeWire Applications',
		lang: Lang.CPlusPlus
	},
	'io.github.mrvladus.List': {
		name: 'Errands',
		desc: 'Manage your tasks',
		lang: Lang.Python,
		circle: true
	},
	'io.github.cleomenezesjr.Escambo': {
		name: 'Escambo',
		desc: 'Test and develop APIs',
		lang: Lang.Python
	},
	'com.mattjakeman.ExtensionManager': {
		name: 'Extension Manager',
		desc: 'Browse, install, and manage GNOME Shell Extensions',
		lang: Lang.C
	},
	'com.github.finefindus.eyedropper': {
		name: 'Eyedropper',
		desc: 'Pick and format colors',
		lang: Lang.Rust,
		circle: true
	},
	'com.github.ADBeveridge.Raider': {
		name: 'File Shredder',
		desc: 'Permanently delete your files',
		lang: Lang.C,
		circle: true
	},
	'de.schmidhuberj.Flare': {
		name: 'Flare',
		desc: 'Chat with your friends on Signal',
		lang: Lang.Rust
	},
	'com.github.tchx84.Flatseal': {
		name: 'Flatseal',
		desc: 'Manage Flatpak permissions',
		lang: Lang.JavaScript
	},
	'io.github.giantpinkrobots.flatsweep': {
		name: 'Flatsweep',
		desc: 'Flatpak leftover cleaner',
		lang: Lang.Python
	},
	'io.github.diegoivanme.flowtime': {
		name: 'Flowtime',
		desc: 'Spend your time wisely',
		lang: Lang.Vala
	},
	'com.mardojai.ForgeSparks': {
		name: 'Forge Sparks',
		desc: 'Get Git forges notifications',
		lang: Lang.JavaScript,
		circle: true
	},
	'de.haeckerfelix.Fragments': {
		name: 'Fragments',
		desc: 'Manage torrents',
		lang: Lang.Rust,
		circle: true
	},
	'io.github.realmazharhussain.GdmSettings': {
		name: 'GDM Settings',
		desc: 'Customize your login screen',
		lang: Lang.Python
	},
	'dev.Cogitri.Health': {
		name: 'Health',
		desc: 'Track your fitness goals',
		lang: Lang.Rust,
		circle: true
	},
	'org.gnome.Loupe': {
		name: 'Image Viewer',
		desc: 'View images',
		lang: Lang.Rust
	},
	'io.gitlab.adhami3310.Impression': {
		name: 'Impression',
		desc: 'Create bootable drives',
		lang: Lang.Rust,
		circle: true
	},
	'io.gitlab.gregorni.Letterpress': {
		name: 'Letterpress',
		desc: 'Create beautiful ASCII art',
		lang: Lang.Python,
		circle: true
	},
	'org.gnome.design.Lorem': {
		name: 'Lorem',
		desc: 'Generate placeholder text',
		lang: Lang.Rust,
		circle: true
	},
	'fr.romainvigier.MetadataCleaner': {
		name: 'Metadata Cleaner',
		desc: 'View and clean metadata in files',
		lang: Lang.Python
	},
	'io.missioncenter.MissionCenter': {
		name: 'Mission Center',
		desc: 'Monitor system resource usage',
		lang: Lang.Rust
	},
	'io.github.seadve.Mousai': {
		name: 'Mousai',
		desc: 'Identify songs in seconds',
		lang: Lang.Rust,
		circle: true
	},
	'io.gitlab.news_flash.NewsFlash': {
		name: 'Newsflash',
		desc: 'Keep up with your feeds',
		lang: Lang.Rust,
		circle: true
	},
	'com.belmoussaoui.Obfuscate': {
		name: 'Obfuscate',
		desc: 'Censor private information',
		lang: Lang.Rust,
		circle: true
	},
	'org.nickvision.tubeconverter': {
		name: 'Parabolic',
		desc: 'Download web video and audio',
		lang: Lang.CSharp
	},
	'org.gnome.World.PikaBackup': {
		name: 'Pika Backup',
		desc: 'Keep your data safe',
		lang: Lang.Rust,
		circle: true
	},
	'org.gnome.Podcasts': {
		name: 'Podcasts',
		desc: 'Listen to your favorite shows',
		lang: Lang.Rust,
		circle: true
	},
	'com.github.marhkb.Pods': {
		name: 'Pods',
		desc: 'Keep track of your podman containers',
		lang: Lang.Rust
	},
	'net.nokyan.Resources': {
		name: 'Resources',
		desc: 'Keep an eye on system resources',
		lang: Lang.Rust,
		circle: true
	},
	'com.rafaelmardojai.SharePreview': {
		name: 'Share Preview',
		desc: 'Test social media cards locally',
		lang: Lang.Rust,
		circle: true
	},
	'de.haeckerfelix.Shortwave': {
		name: 'Shortwave',
		desc: 'Listen to internet radio',
		lang: Lang.Rust,
		circle: true
	},
	'it.mijorus.smile': {
		name: 'Smile',
		desc: 'An emoji picker',
		lang: Lang.Python
	},
	'org.gnome.Solanum': {
		name: 'Solanum',
		desc: 'Balance working time and break time',
		lang: Lang.Rust,
		circle: true
	},
	'xyz.ketok.Speedtest': {
		name: 'Speedtest',
		desc: 'Measure your internet connection speed',
		lang: Lang.Python
	},
	'dev.alextren.Spot': {
		name: 'Spot',
		desc: 'Listen to music on Spotify',
		lang: Lang.Rust
	},
	'io.gitlab.liferooter.TextPieces': {
		name: 'Text Pieces',
		desc: "Developer's scratchpad",
		lang: Lang.Rust,
		circle: true
	},
	'me.iepure.Ticketbooth': {
		name: 'Ticket Booth',
		desc: 'Keep track of your favorite shows',
		lang: Lang.Python
	},
	'de.philippun1.turtle': {
		name: 'Turtle',
		desc: 'Manage your git repositories',
		lang: Lang.Python
	},
	'io.gitlab.theevilskeleton.Upscaler': {
		name: 'Upscaler',
		desc: 'Upscale and enhance images',
		lang: Lang.Python
	},
	'com.github.unrud.VideoDownloader': {
		name: 'Video Downloader',
		desc: 'Download web videos',
		lang: Lang.Python
	},
	'org.gnome.gitlab.YaLTeR.VideoTrimmer': {
		name: 'Video Trimmer',
		desc: 'Trim videos quickly',
		lang: Lang.Rust,
		circle: true
	},
	'io.github.flattool.Warehouse': {
		name: 'Warehouse',
		desc: 'Manage all things Flatpak',
		lang: Lang.Python
	},
	'app.drey.Warp': {
		name: 'Warp',
		desc: 'Fast and secure file transfer',
		lang: Lang.Rust,
		circle: true
	},
	'com.github.hugolabe.Wike': {
		name: 'Wike',
		desc: 'Search and read Wikipedia articles',
		lang: Lang.Python,
		circle: true
	},
	're.sonny.Workbench': {
		name: 'Workbench',
		desc: 'Prototype with GNOME technologies',
		lang: Lang.JavaScript,
		circle: true
	},
	'org.gnome.Music': {
		name: 'Music',
		desc: 'Play and organize your music collection',
		lang: Lang.Python
	},
	'org.gnome.Calendar': {
		name: 'Calendar',
		desc: 'Manage your schedule',
		lang: Lang.C
	},
	'org.gnome.Weather': {
		name: 'Weather',
		desc: 'Show weather conditions and forecast',
		lang: Lang.TypeScript
	},
	'org.gnome.Maps': {
		name: 'Maps',
		desc: 'Find places around the world',
		lang: Lang.JavaScript
	},
	'org.gnome.clocks': {
		name: 'Clocks',
		desc: 'Keep track of time',
		lang: Lang.Vala
	},
	'org.gnome.Epiphany': {
		name: 'Web',
		desc: 'Browse the web',
		lang: Lang.C
	},
	'io.github.nate_xyz.Resonance': {
		name: 'Resonance',
		desc: 'Harmonize your listening experience',
		lang: Lang.Rust
	},
	'org.gnome.Decibels': {
		name: 'Audio Player',
		desc: 'Play audio files',
		lang: Lang.TypeScript
	},
	'com.belmoussaoui.Authenticator': {
		name: 'Authenticator',
		desc: 'Generate two-factor codes',
		lang: Lang.Rust,
		circle: true
	},
	'org.gnome.World.Secrets': {
		name: 'Secrets',
		desc: 'Manage your passwords',
		lang: Lang.Python,
		circle: true
	},
	'com.github.neithern.g4music': {
		name: 'Gapless',
		desc: 'Play your music elegantly',
		lang: Lang.Vala
	},
	'io.github.diegopvlk.Dosage': {
		name: 'Dosage',
		desc: 'Keep track of your treatments',
		lang: Lang.JavaScript
	},
	'org.gnome.Todo': {
		name: 'Endeavour',
		desc: 'Manage your tasks',
		lang: Lang.C
	},
	'org.gnome.DejaDup': {
		name: 'Déjà Dup Backups',
		desc: 'Protect yourself from data loss',
		lang: Lang.Vala,
		circle: true
	},
	'de.haeckerfelix.AudioSharing': {
		name: 'Audio Sharing',
		desc: 'Share your computer audio',
		lang: Lang.Rust,
		circle: true
	},
	'io.github.nate_xyz.Chromatic': {
		name: 'Chromatic',
		desc: 'Fine-tune your instruments',
		lang: Lang.Rust
	},
	'org.nickvision.tagger': {
		name: 'Tagger',
		desc: 'Tag your music',
		lang: Lang.CSharp
	},
	'app.drey.EarTag': {
		name: 'Ear Tag',
		desc: 'Edit audio file tags',
		lang: Lang.Python,
		circle: true
	},
	'io.github.celluloid_player.Celluloid': {
		name: 'Celluloid',
		desc: 'Plays videos',
		lang: Lang.C
	},
	'com.pojtinger.felicitas.Multiplex': {
		name: 'Multiplex',
		desc: 'Watch torrents with your friends',
		lang: Lang.Go
	},
	'io.gitlab.adhami3310.Footage': {
		name: 'Footage',
		desc: 'Polish your videos',
		lang: Lang.Rust
	},
	'io.github.seadve.Kooha': {
		name: 'Kooha',
		desc: 'Elegantly record your screen',
		lang: Lang.Rust
	},
	'org.gnome.gitlab.YaLTeR.Identity': {
		name: 'Identity',
		desc: 'Compare images and videos',
		lang: Lang.Rust,
		circle: true
	},
	'io.github.nokse22.asciidraw': {
		name: 'ASCII Draw',
		desc: 'Sketch anything using characters',
		lang: Lang.Python
	},
	'dev.geopjr.Calligraphy': {
		name: 'Calligraphy',
		desc: 'Turn text into ASCII banners',
		lang: Lang.Python
	},
	'io.github.tfuxu.Halftone': {
		name: 'Halftone',
		desc: 'Dither your images',
		lang: Lang.Python
	},
	'io.github.dubstar_04.design': {
		name: 'Design',
		desc: '2D CAD for GNOME',
		lang: Lang.JavaScript
	},
	'io.github.dlippok.photometric-viewer': {
		name: 'Photometry',
		desc: 'View photometric files',
		lang: Lang.Python
	},
	'com.rafaelmardojai.WebfontKitGenerator': {
		name: 'Webfont Kit Generator',
		desc: 'Create @font-face kits easily',
		lang: Lang.Python,
		circle: true
	},
	'nl.g4d.Girens': {
		name: 'Girens for Plex',
		desc: 'Watch your Plex content',
		lang: Lang.Python
	},
	'io.github.bytezz.IPLookup': {
		name: 'IP Lookup',
		desc: 'Find info about an IP address',
		lang: Lang.Python
	},
	'im.dino.Dino': {
		name: 'Dino',
		desc: 'Modern XMPP chat client',
		lang: Lang.Vala
	},
	'org.gabmus.gfeeds': {
		name: 'Feeds',
		desc: 'News reader for GNOME',
		lang: Lang.Python
	},
	'dev.geopjr.Tuba': {
		name: 'Tuba',
		desc: 'Browse the Fediverse',
		lang: Lang.Vala,
		circle: true
	},
	're.sonny.Tangram': {
		name: 'Tangram',
		desc: 'Browser for your pinned tabs',
		lang: Lang.JavaScript,
		circle: true
	},
	'info.febvre.Komikku': {
		name: 'Komikku',
		desc: 'Discover and read manga & comics',
		lang: Lang.Python,
		circle: true
	},
	'se.sjoerd.Graphs': {
		name: 'Graphs',
		desc: 'Plot and manipulate data',
		lang: Lang.Python,
		circle: true
	},
	'com.github.cassidyjames.dippi': {
		name: 'Dippi',
		desc: 'Calculate display info like DPI',
		lang: Lang.Vala
	},
	'org.gabmus.whatip': {
		name: 'What IP',
		desc: 'Info on your IP',
		lang: Lang.Python
	},
	'ir.imansalmani.IPlan': {
		name: 'IPlan',
		desc: 'Your plan for improving personal life and workflow',
		lang: Lang.Rust
	},
	'com.feaneron.Boatswain': {
		name: 'Boatswain',
		desc: 'Control your Elgato Stream Decks',
		lang: Lang.C,
		circle: true
	},
	'garden.turtle.Jellybean': {
		name: 'Stockpile',
		desc: 'Keep count of restockable items',
		lang: Lang.Vala
	},
	'org.gnome.Characters': {
		name: 'Characters',
		desc: 'Character map application',
		lang: Lang.C
	},
	'com.clarahobbs.chessclock': {
		name: 'Chess Clock',
		desc: 'Time games of over-the-board chess',
		lang: Lang.Python,
		circle: true
	},
	'io.github.lainsce.Khronos': {
		name: 'Khronos',
		desc: 'Log the time it took to do tasks',
		lang: Lang.Vala
	},
	're.sonny.Retro': {
		name: 'Retro',
		desc: 'Customizable clock widget',
		lang: Lang.JavaScript
	},
	'com.github.vikdevelop.timer': {
		name: 'Timer',
		desc: 'Simple countdown timer',
		lang: Lang.Python
	},
	'io.github.dgsasha.Remembrance': {
		name: 'Reminders',
		desc: 'Set reminders for yourself',
		lang: Lang.Python
	},
	'dev.geopjr.Collision': {
		name: 'Collision',
		desc: 'Check hashes for your files',
		lang: Lang.Crystal,
		circle: true
	},
	'pm.mirko.Atoms': {
		name: 'Atoms',
		desc: 'Manage Chroot and Containers',
		lang: Lang.Python
	},
	're.sonny.Playhouse': {
		name: 'Playhouse',
		desc: 'Playground for HTML/CSS/JavaScript',
		lang: Lang.JavaScript
	},
	'org.gnome.World.Citations': {
		name: 'Citations',
		desc: 'Manage your bibliography',
		lang: Lang.Rust,
		circle: true
	},
	'com.felipekinoshita.Wildcard': {
		name: 'Wildcard',
		desc: 'Test your regular expressions',
		lang: Lang.Rust
	},
	'de.philippun1.Snoop': {
		name: 'Snoop',
		desc: 'Snoop through your files',
		lang: Lang.Vala
	},
	'me.iepure.devtoolbox': {
		name: 'Dev Toolbox',
		desc: 'Development tools at your fingertips',
		lang: Lang.Python
	},
	're.sonny.Commit': {
		name: 'Commit',
		desc: 'Commit message editor',
		lang: Lang.JavaScript,
		circle: true
	},
	'io.github.lainsce.Emulsion': {
		name: 'Emulsion',
		desc: 'Stock up on colors',
		lang: Lang.Vala
	},
	'org.gnome.design.IconLibrary': {
		name: 'Icon Library',
		desc: 'Symbolic icons for your apps',
		lang: Lang.Rust
	},
	'io.github.nate_xyz.Paleta': {
		name: 'Paleta',
		desc: 'Generate color palettes with ease',
		lang: Lang.Python
	},
	'org.gnome.design.SymbolicPreview': {
		name: 'Symbolic Preview',
		desc: 'Symbolics Made Easy',
		lang: Lang.Rust
	},
	'com.hunterwittenborn.Celeste': {
		name: 'Celeste',
		desc: 'Sync your cloud files',
		lang: Lang.Rust
	},
	'com.felipekinoshita.Kana': {
		name: 'Kana',
		desc: 'Learn Japanese characters',
		lang: Lang.Rust
	},
	'com.ranfdev.Notify': {
		name: 'Notify',
		desc: 'Receive notifications from ntfy.sh.',
		lang: Lang.Rust
	},
	'fr.sgued.ten_forward': {
		name: 'Ten Forward',
		desc: 'Control a NAT-PMP gateway',
		lang: Lang.Rust
	},
	'dev.zelikos.rollit': {
		name: 'Chance',
		desc: 'Roll the dice',
		lang: Lang.Rust
	},
	'io.github.fkinoshita.Telegraph': {
		name: 'Telegraph',
		desc: 'Write and decode morse',
		lang: Lang.Python
	},
	'com.gitlab.guillermop.MasterKey': {
		name: 'Master Key',
		desc: 'A password manager application',
		lang: Lang.Python
	},
	'io.github.eminfedar.vaktisalah-gtk-rs': {
		name: 'Vakt-i Salah',
		desc: 'Simple prayer times app',
		lang: Lang.Rust
	},
	'io.gitlab.azymohliad.WatchMate': {
		name: 'Watchmate',
		desc: 'Manage your PineTime',
		lang: Lang.Rust
	},
	'io.github.diegoivan.pdf_metadata_editor': {
		name: 'Paper Clip',
		desc: 'Edit PDF document metadata',
		lang: Lang.Vala,
		circle: true
	},
	'org.gnome.Chess': {
		name: 'GNOME Chess',
		desc: 'Play the classic two-player board game of chess',
		lang: Lang.Vala
	},
	'org.gnome.World.Iotas': {
		name: 'Iotas',
		desc: 'Simple note taking',
		lang: Lang.Python,
		circle: true
	},
	'de.k_bo.Televido': {
		name: 'Televido',
		desc: 'Access German-language public TV',
		lang: Lang.Rust
	},
	'de.schmidhuberj.DieBahn': {
		name: 'Railway',
		desc: 'Find all your travel information',
		lang: Lang.Rust,
		circle: true
	},
	'com.belmoussaoui.ReadItLater': {
		name: 'Read It Later',
		desc: 'Save and read web articles',
		lang: Lang.Rust
	},
	'so.libdb.dissent': {
		name: 'Dissent',
		desc: 'Tiny native Discord app',
		lang: Lang.Go
	},
	'com.github.joseexposito.touche': {
		name: 'Touché',
		desc: 'Multi-touch gestures',
		lang: Lang.JavaScript
	},
	'it.mijorus.gearlever': {
		name: 'Gear Lever',
		desc: 'Manage AppImages',
		lang: Lang.Python
	},
	'im.bernard.Nostalgia': {
		name: 'Nostalgia',
		desc: 'Set historic GNOME Wallpapers',
		lang: Lang.Vala
	},
	'io.github.vikdevelop.SaveDesktop': {
		name: 'SaveDesktop',
		desc: 'Save your desktop configuration',
		lang: Lang.Python
	},
	'io.frama.tractor.carburetor': {
		name: 'Carburetor',
		desc: 'Browse anonymously',
		lang: Lang.Python
	},
	'cool.ldr.lfy': {
		name: 'lfy',
		desc: 'Translation software for read paper',
		lang: Lang.Python
	},
	'art.taunoerik.tauno-monitor': {
		name: 'Tauno Monitor',
		desc: 'Serial port monitor',
		lang: Lang.Python
	},
	'io.github.giantpinkrobots.varia': {
		name: 'Varia',
		desc: 'Download files and torrents',
		lang: Lang.Python
	},
	'app.drey.Biblioteca': {
		name: 'Biblioteca',
		desc: 'Read GNOME documentation offline',
		lang: Lang.JavaScript,
		circle: true
	},
	'org.gnome.Fractal': {
		name: 'Fractal',
		desc: 'Chat on Matrix',
		lang: Lang.Rust
	},
	'io.github.leolost2605.gradebook': {
		name: 'Gradebook',
		desc: 'Keep track of your grades',
		lang: Lang.Vala
	},
	'io.github.alainm23.planify': {
		name: 'Planify',
		desc: 'Forget about forgetting things',
		lang: Lang.Vala
	},
	'net.krafting.Playlifin': {
		name: 'Playlifin',
		desc: 'Sync YouTube playlists to Jellyfin',
		lang: Lang.Python
	},
	'dev.bragefuglseth.Fretboard': {
		name: 'Fretboard',
		desc: 'Look up guitar chords',
		lang: Lang.Rust,
		circle: true
	},
	'cafe.avery.Delfin': {
		name: 'Delfin',
		desc: 'Stream movies and TV shows from Jellyfin',
		lang: Lang.Rust
	},
	'io.gitlab.daikhan.stable': {
		name: 'Daikhan',
		desc: 'Play Videos/Music with style',
		lang: Lang.Vala
	},
	'io.github.FailurePoint.RandomNumberFive': {
		name: 'Random Number Five',
		desc: 'Random number generator for For the Linux desktop!',
		lang: Lang.Python
	},
	'org.freedesktop.Bustle': {
		name: 'Bustle',
		desc: 'Visualize D-Bus activity',
		lang: Lang.Rust,
		circle: true
	},
	'com.quexten.Goldwarden': {
		name: 'Goldwarden',
		desc: 'A Bitwarden compatible desktop client',
		lang: Lang.Go
	},
	'com.github.johnfactotum.Foliate': {
		name: 'Foliate',
		desc: 'Read e-books in style',
		lang: Lang.JavaScript
	},
	'app.drey.KeyRack': {
		name: 'Key Rack',
		desc: 'View and edit passwords',
		lang: Lang.Rust
	},
	'io.github.fizzyizzy05.binary': {
		name: 'Binary',
		desc: 'Convert numbers between bases',
		lang: Lang.Python,
		circle: true
	},
	'org.gaphor.Gaphor': {
		name: 'Gaphor',
		desc: 'Simple UML and SysML modeling tool',
		lang: Lang.Python,
		circle: true
	},
	'page.codeberg.libre_menu_editor.LibreMenuEditor': {
		name: 'Main Menu',
		desc: 'Customize the menu',
		lang: Lang.Python
	},
	'io.github.fabrialberio.pinapp': {
		name: 'Pins',
		desc: 'Create and edit application shortcuts',
		lang: Lang.C
	},
	'it.mijorus.whisper': {
		name: 'Whisper',
		desc: 'Listen to your mic',
		lang: Lang.Python
	},
	'de.schmidhuberj.tubefeeder': {
		name: 'Pipeline',
		desc: 'Follow video creators',
		lang: Lang.Rust
	},
	'xyz.tytanium.DoorKnocker': {
		name: 'Door Knocker',
		desc: 'Check the availability of portals',
		lang: Lang.C
	},
	'io.github.sigmasd.stimulator': {
		name: 'Stimulator',
		desc: 'Keep your computer awake',
		lang: Lang.TypeScript
	},
	'io.github.idevecore.Valuta': {
		name: 'Valuta',
		desc: 'Convert between currencies',
		lang: Lang.Python,
		circle: true
	},
	'io.github.amit9838.mousam': {
		name: 'Mousam',
		desc: 'Weather at a glance',
		lang: Lang.Python
	},
	'it.mijorus.collector': {
		name: 'Collector',
		desc: 'Drag and Drop to the next level',
		lang: Lang.Python
	},
	'org.sigxcpu.Livi': {
		name: 'Light Video',
		desc: 'A simple GTK4 based video player for mobile phones',
		lang: Lang.C
	},
	'net.krafting.PleasureDVR': {
		name: 'Pleasure DVR',
		desc: 'DVR for the Chaturbate website',
		lang: Lang.Python
	},
	'io.github.unrud.RecentFilter': {
		name: 'Recent Filter',
		desc: 'Exclude files and folders from recently used files',
		lang: Lang.Python
	},
	'io.github.davidoc26.wallpaper_selector': {
		name: 'Wallpaper Selector',
		desc: 'Downloads and applies wallpapers',
		lang: Lang.Rust
	},
	'com.github.tenderowl.frog': {
		name: 'Frog',
		desc: 'Extract text from images',
		lang: Lang.Python
	},
	'xyz.slothlife.Jogger': {
		name: 'Jogger',
		desc: 'Fitness tracker',
		lang: Lang.Rust
	},
	'com.github.rogercrocker.badabib': {
		name: 'Bada Bib!',
		desc: 'View and edit BibTeX entries',
		lang: Lang.Python
	},
	'com.github.cassidyjames.clairvoyant': {
		name: 'Clairvoyant',
		desc: 'Ask questions, get psychic answers',
		lang: Lang.Vala,
		circle: true
	},
	'io.github.xverizex.RetroSpriteEditor': {
		name: 'Retro Sprite',
		desc: 'Pixel Editor for Retro Consoles',
		lang: Lang.C
	},
	'io.github.phastmike.tags': {
		name: 'Tags',
		desc: 'Color logs based on tags',
		lang: Lang.Vala
	},
	'io.github.santiagocezar.maniatic-launcher': {
		name: 'Maniatic Launcher',
		desc: 'A Retro Engine v5 launcher',
		lang: Lang.Python
	},
	'io.github.nokse22.minitext': {
		name: 'Mini Text',
		desc: 'Ephemeral scratch pad',
		lang: Lang.Python
	},
	'io.github.nokse22.ultimate-tic-tac-toe': {
		name: 'Ultimate Tic Tac Toe',
		desc: '(Tic Tac Toe)²',
		lang: Lang.Python
	},
	'io.github.nokse22.inspector': {
		name: 'Inspector',
		desc: 'View information about your system',
		lang: Lang.Python
	},
	'io.github.nokse22.trivia-quiz': {
		name: 'Trivia Quiz',
		desc: 'Respond to endless questions',
		lang: Lang.Python
	},
	'io.github.nokse22.teleprompter': {
		name: 'Teleprompter',
		desc: 'Stay on track during speeches',
		lang: Lang.Python
	},
	'me.ppvan.psequel': {
		name: 'psequel',
		desc: 'A minimal SQL client',
		lang: Lang.Vala
	},
	'dev.tchx84.Portfolio': {
		name: 'Portfolio',
		desc: 'Manage files on the go',
		lang: Lang.Python
	},
	'io.github.dvlv.boxbuddyrs': {
		name: 'BoxBuddy',
		desc: 'A Graphical Distrobox Manager',
		lang: Lang.Rust
	},
	'io.github.weclaw1.ScoreTracker': {
		name: 'Score Tracker',
		desc: 'Application for tracking player scores in card and board games',
		lang: Lang.Rust
	},
	'dev.mufeed.Wordbook': {
		name: 'Wordbook',
		desc: 'Lookup definitions for any English term',
		lang: Lang.Python
	},
	'com.github.huluti.Coulr': {
		name: 'Coulr',
		desc: 'Enjoy colors and feel happy',
		lang: Lang.Python
	},
	'org.nicotine_plus.Nicotine': {
		name: 'Nicotine+',
		desc: 'Browse the Soulseek network',
		lang: Lang.Python
	},
	'dev.skynomads.Seabird': {
		name: 'Seabird',
		desc: 'A simple Kubernetes IDE for GNOME',
		lang: Lang.Go
	},
	'io.github.zefr0x.hashes': {
		name: 'Hashes',
		desc: 'Identify hashing algorithms',
		lang: Lang.Python
	},
	'com.toolstack.Folio': {
		name: 'Folio',
		desc: 'Take notes in Markdown',
		lang: Lang.Vala
	},
	'org.cvfosammmm.Lemma': {
		name: 'Lemma',
		desc: 'Note-Taking App',
		lang: Lang.Python
	},
	'io.github.david_swift.Flashcards': {
		name: 'Memorize',
		desc: 'Study flashcards',
		lang: Lang.Swift
	},
	'app.drey.Elastic': {
		name: 'Elastic',
		desc: 'Design spring animations',
		lang: Lang.Vala,
		circle: true
	},
	'com.github.geigi.cozy': {
		name: 'Cozy',
		desc: 'Listen to audio books',
		lang: Lang.Python
	},
	'com.github.Darazaki.Spedread': {
		name: 'Spedread',
		desc: 'GTK speed reading software: Read like a speedrunner!',
		lang: Lang.Vala
	},
	'im.bernard.Memorado': {
		name: 'Memorado',
		desc: 'Memorize anything',
		lang: Lang.Python
	},
	'de.wagnermartin.Plattenalbum': {
		name: 'Plattenalbum',
		desc: 'Browse music with MPD',
		lang: Lang.Python
	},
	'io.github.finefindus.Hieroglyphic': {
		name: 'Hieroglyphic',
		desc: 'Find LaTeX symbols',
		lang: Lang.Rust,
		circle: true
	},
	'com.core447.StreamController': {
		name: 'StreamController',
		desc: 'Control your Elgato Stream Decks with plugin support',
		lang: Lang.Python
	},
	'org.gnome.gitlab.cheywood.Buffer': {
		name: 'Buffer',
		desc: 'Embrace ephemeral text',
		lang: Lang.Python
	},
	'io.gitlab.leesonwai.Tactics': {
		name: 'Tactics',
		desc: 'Build your soccer lineup',
		lang: Lang.C
	},
	'io.gitlab.leesonwai.Sums': {
		name: 'Sums',
		desc: 'Calculate with postfix notation',
		lang: Lang.C
	},
	'io.github.halfmexican.Mingle': {
		name: 'Mingle',
		desc: "Combine emojis with Google's Emoji Kitchen",
		lang: Lang.Vala
	},
	'io.github.cleomenezesjr.aurea': {
		name: 'Aurea',
		desc: 'Flatpak metainfo banner previewer',
		lang: Lang.Python
	},
	'org.gnome.gitlab.somas.Apostrophe': {
		name: 'Apostrophe',
		desc: 'Edit Markdown in style',
		lang: Lang.Python,
		circle: true
	},
	'app.drey.Damask': {
		name: 'Damask',
		desc: 'Automatic wallpapers from the Internet',
		lang: Lang.Vala
	},
	'dev.tchx84.Gameeky': {
		name: 'Gameeky',
		desc: 'Play, create and learn',
		lang: Lang.Python
	},
	'io.github.Foldex.AdwSteamGtk': {
		name: 'AdwSteamGtk',
		desc: 'Give Steam the Adwaita treatment',
		lang: Lang.Python
	},
	'org.gnome.SimpleScan': {
		name: 'Document Scanner',
		desc: 'Make a digital copy of your photos and documents',
		lang: Lang.Vala
	},
	'org.gnome.design.AppIconPreview': {
		name: 'App Icon Preview',
		desc: 'Tool for designing applications icons',
		lang: Lang.Rust
	},
	'io.github.andreibachim.shortcut': {
		name: 'Shortcut',
		desc: 'Make app shortcuts',
		lang: Lang.Rust
	},
	'io.github.mpobaschnig.Vaults': {
		name: 'Vaults',
		desc: 'Keep important files safe',
		lang: Lang.Rust
	},
	'com.github.johnfactotum.QuickLookup': {
		name: 'Quick Lookup',
		desc: 'Look up words quickly',
		lang: Lang.JavaScript
	},
	'io.github.fsobolev.TimeSwitch': {
		name: 'Time Switch',
		desc: 'Set a task to run after a timer',
		lang: Lang.Python
	},
	'cz.ondrejkolin.Barcoder': {
		name: 'Barcoder',
		desc: 'Create barcodes',
		lang: Lang.Rust
	},
	'io.github.achetagames.epic_asset_manager': {
		name: 'Epic Asset Manager',
		desc: 'Manage your Epic assets',
		lang: Lang.Rust
	},
	'org.gnome.gitlab.bazylevnik0.Convolution': {
		name: 'Convolution',
		desc: 'Maze escaping game',
		lang: Lang.JavaScript
	},
	'xyz.safeworlds.hiit': {
		name: 'Exercise Timer',
		desc: 'Train and rest with high intensity',
		lang: Lang.Rust,
		circle: true
	},
	'net.codelogistics.webapps': {
		name: 'Web Apps',
		desc: 'Install websites as apps',
		lang: Lang.Python
	},
	'com.jeffser.Alpaca': {
		name: 'Alpaca',
		desc: 'Chat with local AI models',
		lang: Lang.Python
	},
	'app.devsuite.Schemes': {
		name: 'Schemes',
		desc: 'Create syntax highlighting schemes',
		lang: Lang.C
	},
	'nl.v0yd.Capsule': {
		name: 'Capsule',
		desc: 'Medication tracker',
		lang: Lang.JavaScript
	},
	'garden.jamie.Morphosis': {
		name: 'Morphosis',
		desc: 'Convert your documents',
		lang: Lang.Python
	},
	'app.fotema.Fotema': {
		name: 'Fotema',
		desc: 'Admire your photos',
		lang: Lang.Rust
	},
	'org.gnome.Crosswords.Editor': {
		name: 'Crossword Editor',
		desc: 'Create crossword puzzles',
		lang: Lang.C
	},
	'org.gnome.Crosswords': {
		name: 'Crosswords',
		desc: 'Solve crossword puzzles',
		lang: Lang.C
	},
	'io.gitlab.cyberphantom52.sudoku_solver': {
		name: 'Sudoku Solver',
		desc: 'A simple Sudoku Sovler',
		lang: Lang.Rust
	},
	'io.github.nokse22.Exhibit': {
		name: 'Exhibit',
		desc: 'Preview your 3D models',
		lang: Lang.Python
	},
	'io.github.pieterdd.RcloneShuttle': {
		name: 'Rclone Shuttle',
		desc: 'Upload your files to anywhere',
		lang: Lang.Rust
	},
	'io.gitlab.elescoute.spacelaunch': {
		name: 'Space Launch',
		desc: 'Rocket launches tracker',
		lang: Lang.Vala
	},
	'xyz.parlatype.Parlatype': {
		name: 'Parlatype',
		desc: 'Media player for transcription',
		lang: Lang.C
	},
	'app.devsuite.Manuals': {
		name: 'Manuals',
		desc: 'Read developer documentation',
		lang: Lang.C
	},
	'dev.bragefuglseth.Keypunch': {
		name: 'Keypunch',
		desc: 'Practice your typing skills',
		lang: Lang.Rust,
		circle: true
	},
	'net.danigm.loop': {
		name: 'Loop',
		desc: 'A simple audio loop machine for GNOME',
		lang: Lang.Python
	},
	'org.gnome.gitlab.ilhooq.Bookup': {
		name: 'Bookup',
		desc: 'Streamline notes with Markdown!',
		lang: Lang.C
	},
	'io.github.lainsce.Countdown': {
		name: 'Countdown',
		desc: 'Track events until they happen or since they happened',
		lang: Lang.Vala
	},
	'io.github.lainsce.DotMatrix': {
		name: 'Dot Matrix',
		desc: 'The creativity playground of lines and curves',
		lang: Lang.Vala
	},
	'app.drey.Blurble': {
		name: 'Blurble',
		desc: 'Word guessing game',
		lang: Lang.Vala
	},
	'me.sanchezrodriguez.passes': {
		name: 'Passes',
		desc: 'Manage your digital passes',
		lang: Lang.Python
	},
	'de.hummdudel.Libellus': {
		name: 'Libellus',
		desc: 'View DnD information in style',
		lang: Lang.JavaScript
	},
	'com.saivert.pwvucontrol': {
		name: 'pwvucontrol',
		desc: 'Volume control for pipewire',
		lang: Lang.Rust
	},
	'app.devsuite.Ptyxis': {
		name: 'Ptyxis',
		desc: 'Container-oriented terminal',
		lang: Lang.C
	},
	'io.github.smolblackcat.Progress': {
		name: 'Progress',
		desc: 'Kanban-style task organiser',
		lang: Lang.CPlusPlus
	},
	'org.gnome.Sudoku': {
		name: 'GNOME Sudoku',
		desc: 'Test your logic skills in this number grid puzzle',
		lang: Lang.Vala
	},
	'io.github.lo2dev.Echo': {
		name: 'Echo',
		desc: 'Ping websites',
		lang: Lang.Python
	},
	'io.github.getnf.embellish': {
		name: 'Embellish',
		desc: 'Install nerd fonts',
		lang: Lang.Go
	},
	'nl.emphisia.icon': {
		name: 'Iconic',
		desc: 'Easily add icons on top of folders',
		lang: Lang.Rust
	},
	'com.github.ztefn.haguichi': {
		name: 'Haguichi',
		desc: 'Manage your Hamachi networks',
		lang: Lang.Vala
	},
	'com.oyajun.ColorCode': {
		name: 'Color Code',
		desc: 'Color Code to Resistance Value',
		lang: Lang.Python
	},
	'es.danirod.Cartero': {
		name: 'Cartero',
		desc: 'Make HTTP requests and test APIs',
		lang: Lang.Rust
	},
	'io.github.lawstorant.boxflat': {
		name: 'Boxflat',
		desc: 'Configure Moza Racing hardware',
		lang: Lang.Python
	},
	'org.gnome.gitlab.cheywood.Pulp': {
		name: 'Pulp',
		desc: 'Skim excessive feeds',
		lang: Lang.Python
	},
	'org.gnome.Showtime': {
		name: 'Showtime',
		desc: 'Watch without distraction',
		lang: Lang.Python
	},
	'de.z_ray.Facetracker': {
		name: 'Facetracker',
		desc: 'Face tracking made easy',
		lang: Lang.Python
	},
	'io.github.sigmasd.share': {
		name: 'Share',
		desc: 'Easily share files',
		lang: Lang.TypeScript
	},
	'com.lynnmichaelmartin.TimeTracker': {
		name: 'Time Tracker',
		desc: 'Track and sync time, local-first',
		lang: Lang.JavaScript
	},
	'org.gnome.Papers': {
		name: 'Papers',
		desc: 'Read documents',
		lang: Lang.C
	},
	'net.codelogistics.clicker': {
		name: 'Clicker',
		desc: 'Simulate user input repeatedly',
		lang: Lang.Python
	},
	'org.skytemple.Randomizer': {
		name: 'SkyTemple Randomizer',
		desc: 'Randomizer for Pokémon Mystery Dungeon Explorers of Sky',
		lang: Lang.Python
	},
	'com.adrienplazas.Metronome': {
		name: 'Metronome',
		desc: 'Keep the tempo',
		lang: Lang.Rust
	},
	'io.github.mezoahmedii.Picker': {
		name: 'Picker',
		desc: 'A simple app to pick something out of a list of things',
		lang: Lang.Python
	},
	'dev.geopjr.Archives': {
		name: 'Archives',
		desc: 'Create and view web archives',
		lang: Lang.Vala
	},
	'com.github.gmg137.netease-cloud-music-gtk': {
		name: 'NetEase Cloud Music Gtk4',
		desc: 'Linux muisc player for NetEase Cloud Music',
		lang: Lang.Rust
	},
	'com.github.ryonakano.pinit': {
		name: 'Pin It!',
		desc: 'Pin portable apps to the launcher',
		lang: Lang.Vala
	},
	'com.github.ryonakano.konbucase': {
		name: 'KonbuCase',
		desc: 'Convert case in your text',
		lang: Lang.Vala
	},
	'dev.deedles.Trayscale': {
		name: 'Trayscale',
		desc: 'Unofficial GUI for Tailscale',
		lang: Lang.Go
	},
	'io.github.seadve.Delineate': {
		name: 'Delineate',
		desc: 'View and edit graphs',
		lang: Lang.Rust
	},
	'de.leopoldluley.Clapgrep': {
		name: 'Clapgrep',
		desc: 'One app to search through all your files, powered by ripgrep',
		lang: Lang.Rust
	},
	'eu.nokun.MirrorHall': {
		name: 'Mirror Hall',
		desc: 'Use Linux devices as virtual displays in a peer-to-peer fashion',
		lang: Lang.Python
	},
	'org.pipewire.Helvum': {
		name: 'Helvum',
		desc: 'Patchbay for PipeWire',
		lang: Lang.Rust
	},
	'io.github.kelvinnovais.Kasasa': {
		name: 'Kasasa',
		desc: 'Create ephemeral floating screenshot windows',
		lang: Lang.C
	},
	'io.github.vmkspv.netsleuth': {
		name: 'Netsleuth',
		desc: 'Calculate IP subnets',
		lang: Lang.Python
	},
	'space.rirusha.Cassette': {
		name: 'Cassette',
		desc: 'Unofficial Yandex Music client',
		lang: Lang.Vala
	},
	'org.gnome.Calculator': {
		name: 'Calculator',
		desc: 'Perform arithmetic, scientific or financial calculations',
		lang: Lang.Vala
	},
	'hu.irl.sysex-controls': {
		name: 'SysEx Controls',
		desc: 'SysEx Controls for Linux',
		lang: Lang.C
	},
	'io.github.philippkosarev.bmi': {
		name: 'BMI',
		desc: 'A body mass index calculator',
		lang: Lang.Python
	},
	'ca.vlacroix.Tally': {
		name: 'Tally',
		desc: 'Count anything',
		lang: Lang.Lua
	},
	'org.gnome.design.Typography': {
		name: 'Typography',
		desc: 'Look up text styles',
		lang: Lang.C
	},
	'org.gnome.design.Palette': {
		name: 'Palette',
		desc: 'Color Palette tool',
		lang: Lang.Vala
	},
	'net.krafting.PedantiK': {
		name: 'PedantiK',
		desc: 'Find the Wikipedia page',
		lang: Lang.Python
	},
	'io.github.buonhobo.Katharsis': {
		name: 'Katharsis',
		desc: 'A simple Kathara GUI to test emulated computer networks',
		lang: Lang.Python
	},
	'ca.edestcroix.Recordbox': {
		name: 'Recordbox',
		desc: 'Browse and play your local music',
		lang: Lang.Rust
	},
	'com.konstantintutsch.Caffeine': {
		name: 'Caffeine',
		desc: 'Calculate your coffee',
		lang: Lang.C
	},
	'dev.qwery.AddWater': {
		name: 'Add Water',
		desc: 'Keep Firefox in Fashion',
		lang: Lang.Python
	},
	'com.dz4k.FruitCredits': {
		name: 'Fruit Credits',
		desc: 'Keep plaintext accounts',
		lang: Lang.Vala
	},
	'de.swsnr.turnon': {
		name: 'Turn On',
		desc: 'Turn on devices in your network',
		lang: Lang.Rust
	},
	'net.krafting.HexColordle': {
		name: 'Hex Colordle',
		desc: 'Find the color',
		lang: Lang.Python
	},
	'io.gitlab.guillermop.Counters': {
		name: 'Counters',
		desc: 'Keep track of anything',
		lang: Lang.TypeScript
	},
	'io.github.efogdev.mpris-timer': {
		name: 'Play Timer',
		desc: 'Native-feeling timers for GNOME',
		lang: Lang.Go
	},
	'io.github.plrigaux.sysd-manager': {
		name: 'SysD Manager',
		desc: 'A GUI to manage systemd units',
		lang: Lang.Rust
	},
	'com.github.flxzt.rnote': {
		name: 'Rnote',
		desc: 'Sketch and take handwritten notes',
		lang: Lang.Rust
	},
	'io.github.qwersyk.Newelle': {
		name: 'Newelle',
		desc: 'Your AI-Powered System Assistant',
		lang: Lang.Python
	},
	'net.krafting.SemantiK': {
		name: 'Semantik',
		desc: 'Find the secret word',
		lang: Lang.Python
	},
	'net.krafting.Reddy': {
		name: 'Reddy',
		desc: 'Repost Reddit images to Lemmy',
		lang: Lang.Python
	},
	'io.github.Q1CHENL.fig': {
		name: 'Fig',
		desc: 'Sleek GIF editor',
		lang: Lang.Python
	},
	'io.github.alescdb.mailviewer': {
		name: 'MailViewer',
		desc: 'EML and MSG file viewer',
		lang: Lang.Rust
	},
	'org.gnome.Gtranslator': {
		name: 'Translation Editor',
		desc: 'Translate and localize applications and libraries',
		lang: Lang.C
	},
	'io.github.OkuBrowser.oku': {
		name: 'Oku',
		desc: 'A Web browser with an emphasis on local-first data storage',
		lang: Lang.Rust
	},
	'io.github.dzheremi2.lrcmake-gtk': {
		name: 'Chronograph',
		desc: 'Sync lyrics of your loved songs',
		lang: Lang.Python
	},
	'io.github.kriptolix.Poliedros': {
		name: 'Poliedros',
		desc: 'Poliedros is a multi-type dice roller',
		lang: Lang.Python
	},
	'com.konstantintutsch.Lock': {
		name: 'Lock',
		desc: 'Process data with GnuPG',
		lang: Lang.C
	},
	'org.gnome.baobab': {
		name: 'Disk Usage Analyzer',
		desc: 'Check folder sizes and available disk space',
		lang: Lang.Vala
	},
	'org.gnome.design.Emblem': {
		name: 'Emblem',
		desc: 'Generate project avatars',
		lang: Lang.Rust,
		circle: true
	},
	'org.gnome.Contacts': {
		name: 'Contacts',
		desc: 'Manage your contacts',
		lang: Lang.Vala
	},
	'org.gnome.Firmware': {
		name: 'Firmware',
		desc: 'Install firmware on devices',
		lang: Lang.C
	},
	'org.gnome.font-viewer': {
		name: 'Fonts',
		desc: 'View fonts on your system',
		lang: Lang.C
	},
	'org.gnome.Logs': {
		name: 'Logs',
		desc: 'View detailed event logs for the system',
		lang: Lang.C
	},
	'org.gnome.Mahjongg': {
		name: 'Mahjongg',
		desc: 'Match tiles and clear the board',
		lang: Lang.Vala
	},
	'org.gnome.TextEditor': {
		name: 'Text Editor',
		desc: 'Edit text files',
		lang: Lang.C
	},
	'org.gnome.Polari': {
		name: 'Polari',
		desc: 'Talk to people on IRC',
		lang: Lang.JavaScript,
		circle: true
	},
	'page.tesk.Refine': {
		name: 'Refine',
		desc: 'Tweak various aspects of GNOME',
		lang: Lang.Python
	},
	'org.gnome.dspy': {
		name: 'D-Spy',
		desc: 'Analyze D-Bus connections',
		lang: Lang.C
	},
	'org.gnome.GHex': {
		name: 'GHex',
		desc: 'Inspect and edit binary files',
		lang: Lang.C
	},
	'org.gnome.Calls': {
		name: 'Calls',
		desc: 'Make phone and SIP calls',
		lang: Lang.C
	},
	'sm.puri.Chatty': {
		name: 'Chats',
		desc: 'Messaging application for mobile and desktop',
		lang: Lang.C
	},
	'org.gnome.FileRoller': {
		name: 'File Roller',
		desc: 'Open, modify and create compressed archive files',
		lang: Lang.C
	},
	'org.gnome.SoundRecorder': {
		name: 'Sound Recorder',
		desc: 'A simple, modern sound recorder for GNOME',
		lang: Lang.TypeScript
	},
	'org.gnome.LightsOff': {
		name: 'Lights Off',
		desc: 'Turn off all the lights',
		lang: Lang.Vala
	},
	'org.gnome.Mines': {
		name: 'Mines',
		desc: 'Clear hidden mines from a minefield',
		lang: Lang.Vala
	},
	'org.gnome.Nibbles': {
		name: 'Nibbles',
		desc: 'Guide a worm around a maze',
		lang: Lang.Vala
	},
	'org.gnome.Robots': {
		name: 'GNOME Robots',
		desc: 'Avoid the robots and make them crash into each other',
		lang: Lang.Rust
	},
	'org.gnome.SwellFoop': {
		name: 'Swell Foop',
		desc: 'Clear the screen by removing groups of colored and shaped tiles',
		lang: Lang.Vala
	},
	're.sonny.Junction': {
		name: 'Junction',
		desc: 'Application chooser',
		lang: Lang.JavaScript,
		circle: true
	},
	'io.github.revisto.drum-machine': {
		name: 'Drum Machine',
		desc: 'Create and play drum beats',
		lang: Lang.Python,
		circle: true
	},
	'com.ranfdev.DistroShelf': {
		name: 'DistroShelf',
		desc: 'Manage Distrobox containers',
		lang: Lang.Rust
	},
	'io.github.flattool.Ignition': {
		name: 'Ignition',
		desc: 'Manage startup apps and scripts',
		lang: Lang.TypeScript
	},
	'io.github.nozwock.Packet': {
		name: 'Packet',
		desc: 'Share files easily',
		lang: Lang.Rust
	},
	'be.alexandervanhee.gradia': {
		name: 'Gradia',
		desc: 'Make your screenshots ready for all',
		lang: Lang.Python
	},
	'io.github.cgueret.Scriptorium': {
		name: 'Scriptorium',
		desc: 'An all in one book editing tool for GNOME',
		lang: Lang.Python
	},
	'io.github.justinrdonnelly.bouncer': {
		name: 'Bouncer',
		desc: 'Choose the correct firewall zone for Wi-Fi',
		lang: Lang.JavaScript
	},
	'app.drey.MultiplicationPuzzle': {
		name: 'Multiplication Puzzle',
		desc: 'A simple multiplication puzzle game',
		lang: Lang.Vala
	},
	'org.altlinux.Tuner': {
		name: 'Tuner',
		desc: 'Extensible control center for GNOME',
		lang: Lang.Vala
	},
	'com.jeffser.Pigment': {
		name: 'Pigment',
		desc: 'Get color palettes from images',
		lang: Lang.Python
	},
	'page.codeberg.zynequ.Kapitano': {
		name: 'Kapitano',
		desc: 'Stay safe from malware',
		lang: Lang.Python
	},
	'io.github.Cookiiieee.WSelector': {
		name: 'WSelector',
		desc: 'Wallpaper Selector Manager',
		lang: Lang.Python
	},
	'de.swsnr.keepmeawake': {
		name: 'Keep Me Awake',
		desc: 'Inhibit lock screen and suspend',
		lang: Lang.Rust
	},
	'io.github.dzheremi2.lexi': {
		name: 'Lexi',
		desc: 'Build your own dictionary',
		lang: Lang.Python
	},
	'io.github.johnfactotum.Runemaster': {
		name: 'Runemaster',
		desc: 'Unleash the magic of Unicode characters',
		lang: Lang.JavaScript
	},
	'de.capypara.FieldMonitor': {
		name: 'Field Monitor',
		desc: 'Access VMs and external screens',
		lang: Lang.Rust
	},
	'com.github.PintaProject.Pinta': {
		name: 'Pinta',
		desc: 'Edit images and paint digitally',
		lang: Lang.CSharp
	},
	'net.rosebirch.nextgroove': {
		name: 'NextGroove',
		desc: 'Play music from Nextcloud',
		lang: Lang.Python
	},
	'io.github.debasish_patra_1987.linuxthemestore': {
		name: 'Linux Theme Store',
		desc: 'Browse, preview, and install desktop themes',
		lang: Lang.Rust
	},
	'io.github.swordpuffin.wardrobe': {
		name: 'Wardrobe',
		desc: 'Prettify your desktop effortlessly',
		lang: Lang.Python
	},
	'com.her01n.BatteryInfo': {
		name: 'Battery Info',
		desc: 'Show information about the system battery',
		lang: Lang.Scheme
	},
	'io.github.herve4m.Length': {
		name: 'Length',
		desc: 'Measure objects on screen',
		lang: Lang.Python
	},
	'io.github.josephmawa.Bella': {
		name: 'Bella',
		desc: 'Pick a color from the screen',
		lang: Lang.JavaScript
	},
	'org.gabmus.swatch': {
		name: 'Swatch',
		desc: 'Color palette manager',
		lang: Lang.Python
	},
	'io.github.heidefinnischen.cuneo': {
		name: 'Cuneo',
		desc: 'Widget-like Calculator and Conversion tool',
		lang: Lang.Python
	},
	'com.vixalien.sticky': {
		name: 'Sticky Notes',
		desc: 'Pin notes to your desktop',
		lang: Lang.TypeScript
	},
	'io.github.swordpuffin.hunt': {
		name: 'Hunt',
		desc: 'An easy word search game',
		lang: Lang.Python
	},
	'io.github.swordpuffin.splices': {
		name: 'Splices',
		desc: 'A word making game',
		lang: Lang.Python
	},
	'io.github.fastrizwaan.WineCharm': {
		name: 'WineCharm',
		desc: 'A Charming Wine GUI',
		lang: Lang.Python
	},
	'io.github.josephmawa.SpellingBee': {
		name: 'Spelling Bee',
		desc: 'Learn new English words',
		lang: Lang.JavaScript
	},
	're.sonny.Eloquent': {
		name: 'Eloquent',
		desc: 'Your proofreading assistant',
		lang: Lang.JavaScript
	},
	'io.github.nokse22.high-tide': {
		name: 'High Tide',
		desc: 'Third party unofficial TIDAL music client',
		lang: Lang.Python
	},
	'io.github.josephmawa.Egghead': {
		name: 'Egghead',
		desc: 'A simple trivia (quiz) app to enjoy in your free time',
		lang: Lang.JavaScript
	},
	'net.sapples.LiveCaptions': {
		name: 'Live Captions',
		desc: 'Realtime automatic subtitles for the Linux desktop',
		lang: Lang.C
	},
	'io.github.zaedus.spider': {
		name: 'Spider',
		desc: 'Install web apps on GNOME desktop',
		lang: Lang.Rust
	},
	'io.github.vallabhvidy.CubeTimer': {
		name: 'Cube Timer',
		desc: '3x3 Rubiks Cube timer',
		lang: Lang.Python
	},
	'org.muttum.muttum': {
		name: 'muttum',
		desc: 'Guess a word in few attempts',
		lang: Lang.Rust
	},
	'vn.hoabinh.quan.CoBang': {
		name: 'CoBang',
		desc: 'QR code scanner for Linux desktop',
		lang: Lang.Python
	},
	'de.gunibert.Hackgregator': {
		name: 'Hackgregator',
		desc: 'Hacker News Reader',
		lang: Lang.Rust
	},
	'page.codeberg.bjawebos.Filmbook': {
		name: 'Filmbook',
		desc: 'Track analog film usage in cameras',
		lang: Lang.Rust
	},
	'io.github.josephmawa.EncodingExplorer': {
		name: 'Encoding Explorer',
		desc: 'Transform characters into binary',
		lang: Lang.JavaScript
	},
	'io.github.josephmawa.TextCompare': {
		name: 'Text Compare',
		desc: 'Text snippet comparison',
		lang: Lang.JavaScript
	},
	'io.github.tobagin.secrets': {
		name: 'Secrets Manager',
		desc: 'Modern GTK4 password manager with TOTP support and intelligent setup',
		lang: Lang.Python
	},
	'net.base_art.Glide': {
		name: 'Glide',
		desc: 'Play movies and audio files',
		lang: Lang.Rust
	},
	'dev.geopjr.Turntable': {
		name: 'Turntable',
		desc: 'Scrobble your music',
		lang: Lang.Vala
	},
	're.sonny.OhMySVG': {
		name: 'Oh My SVG',
		desc: 'Reduce the size of SVGs',
		lang: Lang.JavaScript
	},
	'io.github.ronniedroid.concessio': {
		name: 'Concessio',
		desc: 'Understand file permissions',
		lang: Lang.JavaScript
	},
	'com.ranfdev.Geopard': {
		name: 'Geopard',
		desc: 'Browse Gemini pages',
		lang: Lang.Rust
	},
	'com.ranfdev.Lobjur': {
		name: 'Lobjur',
		desc: 'A simple lobste.rs client',
		lang: Lang.Rust
	},
	'org.zrythm.Zrythm': {
		name: 'Zrythm',
		desc: 'Digital audio workstation',
		lang: Lang.CPlusPlus
	},
	'io.github.rsvzz.csven': {
		name: 'csven',
		desc: 'Order English words',
		lang: Lang.C
	},
	'net.kirgroup.confy': {
		name: 'Confy',
		desc: 'Conference schedules viewer',
		lang: Lang.Python
	},
	'pro.saladin.Eeman': {
		name: 'Eeman',
		desc: 'Track Salah, Read the Quran',
		lang: Lang.Python
	},
	'io.github.johannesboehler2.BmiCalculator': {
		name: 'BMI Calculator',
		desc: 'Calculate your BMI',
		lang: Lang.Rust
	},
	'page.codeberg.dudenix.escritoire': {
		name: 'Escritoire',
		desc: 'Write letters with confidence',
		lang: Lang.Rust
	},
	'me.ogarcia.lptk': {
		name: 'LPTK',
		desc: 'Stateless password manager',
		lang: Lang.Rust
	},
	'de.swsnr.pictureoftheday': {
		name: 'Picture Of The Day',
		desc: 'Your daily wallpaper',
		lang: Lang.Rust
	},
	'com.somaxa8.earx': {
		name: 'Ear X',
		desc: "Control your Nothing earbuds' settings",
		lang: Lang.Rust
	},
	'page.codeberg.petsoi.words': {
		name: 'Words!',
		desc: 'Have fun guessing Words',
		lang: Lang.Rust
	},
	'io.github.leolost2605.emergency-alerts': {
		name: 'Emergency Alerts',
		desc: 'Receive emergency alerts',
		lang: Lang.Vala
	},
	'it.dottorblaster.cauldron': {
		name: 'Cauldron',
		desc: 'Collect content from the web',
		lang: Lang.Rust
	},
	'com.daniel15.wcc': {
		name: 'WebCamControl',
		desc: 'Control webcam pan/tilt/zoom settings and more',
		lang: Lang.CSharp
	},
	'io.github.ladaapp.lada': {
		name: 'Lada',
		desc: 'Recover pixelated adult videos',
		lang: Lang.Python
	},
	'io.github.aganzha.Stage': {
		name: 'Stage',
		desc: 'Git GUI client inspired by Magit',
		lang: Lang.Rust
	},
	'me.sergiotarxz.Exd': {
		name: 'Hiperthermia',
		desc: 'Program your thermal printer',
		lang: Lang.Perl
	},
	'me.sergiotarxz.JapaChar': {
		name: 'Japachar',
		desc: 'Learn Japanese characters',
		lang: Lang.Perl
	},
	'de.z_ray.OptimusUI': {
		name: 'OptimusUI',
		desc: 'Interface for nVidia Optimus',
		lang: Lang.Python
	},
	'io.github.sss_says_snek.diurnals': {
		name: 'Diurnals',
		desc: 'Get daily Todoist notifications',
		lang: Lang.Python
	},
	'io.github.tfuxu.floodit': {
		name: 'Flood It',
		desc: 'Flood the board',
		lang: Lang.Go
	},
	'io.github.ecotubehq.player': {
		name: 'EcoTubeHQ',
		desc: 'Energy Efficient Video Player',
		lang: Lang.C
	},
	'co.logonoff.awakeonlan': {
		name: 'Awake on LAN',
		desc: 'Remotely wake up computers',
		lang: Lang.Python
	},
	'io.github.itprojects.MasVisGtk': {
		name: 'MasVisGtk',
		desc: 'Audio analysis tool for your music',
		lang: Lang.Python
	},
	'io.github.Samuel_Schlemper_Schlemuel.SignWriter': {
		name: 'SignWriter',
		desc: 'Write in SignWriting',
		lang: Lang.Python
	},
	'io.github.TanmayPatil105.verse': {
		name: 'verse',
		desc: 'Get currently playing Spotify song lyrics',
		lang: Lang.Python
	},
	'io.gitlab.elescoute.password': {
		name: 'Password',
		desc: 'Password calculator and generator',
		lang: Lang.Vala
	},
	'net.krafting.PlaylifinVoyager': {
		name: 'Playlifin Voyager',
		desc: 'Transfer playlists to/from Jellyfin',
		lang: Lang.Python
	},
	'io.github.dida_code.OpstaKultura': {
		name: 'Opsta Kultura',
		desc: 'Game, knowledge quiz',
		lang: Lang.Python
	},
	'io.github.lxndr.gswatcher': {
		name: 'Game Server Watcher',
		desc: 'A simple game server monitor and an administrative tool.',
		lang: Lang.Vala
	},
	'com.belmoussaoui.snowglobe': {
		name: 'Snowglobe',
		desc: 'Virtualization viewer using QEMU over DBus',
		lang: Lang.C
	},
	'xyz.aguno.CubeTimer': {
		name: 'CubeTimer',
		desc: 'Like a StackMat but for Linux',
		lang: Lang.Python
	},
	'org.tabos.saldo': {
		name: 'Saldo',
		desc: 'Check your bank accounts',
		lang: Lang.Python
	},
	'io.github.dyegoaurelio.simple-wireplumber-gui': {
		name: 'Simple Wireplumber GUI',
		desc: 'A simple GTK4 GUI for PipeWire',
		lang: Lang.Python
	},
	'io.github.pieterdd.StretchBreak': {
		name: 'Stretch Break',
		desc: 'Reminds you to take regular breaks',
		lang: Lang.Rust
	},
	'org.roojs.roobuilder': {
		name: 'roobuilder',
		desc: 'Vala and Javascript IDE',
		lang: Lang.JavaScript
	},
	'org.adishatz.Screenshot': {
		name: 'Screenshot',
		desc: 'Take screenshots',
		lang: Lang.C
	},
	'org.gnome.NetworkDisplays': {
		name: 'GNOME Network Displays',
		desc: 'Screencasting for GNOME, Supports the Miracast and Chromecast protocols',
		lang: Lang.C
	},
	'com.github.lachhebo.Gabtag': {
		name: 'GabTag',
		desc: 'An audio tagging tool',
		lang: Lang.Python
	},
	'io.github.fastrizwaan.WebkitWord': {
		name: 'WebkitWord',
		desc: 'Rich text editor using WebKit',
		lang: Lang.Python
	},
	'app.drey.Typewriter': {
		name: 'Typewriter',
		desc: 'Compose documents faster with typst',
		lang: Lang.Rust
	},
	'io.github.otaxhu.MQTTy': {
		name: 'MQTTy',
		desc: 'GUI for consuming MQTT topics',
		lang: Lang.Rust
	},
	'io.github.radiolamp.mangojuice': {
		name: 'Mango Juice',
		desc: 'The MangoHUD customization assistant',
		lang: Lang.Vala
	},
	'io.github.cleomenezesjr.Serigy': {
		name: 'Serigy',
		desc: 'A proof of concept for a "clipboard pinner" for GNOME',
		lang: Lang.Python
	},
	'com.mastropaolo.www.tabela': {
		name: 'Tabëla',
		desc: 'Format tables to Markdown or HTML',
		lang: Lang.Rust
	},
	'io.github.alfianlosari.GTKChatGPT': {
		name: 'XCA AI Chat',
		desc: 'Chat with AI - Powered by ChatGPT API',
		lang: Lang.Swift
	},
	'io.github.jorchube.monitorets': {
		name: 'Monitorets',
		desc: 'Have always at a glance the usage of system resources',
		lang: Lang.Python
	},
	'io.github.dynobo.sphereview': {
		name: 'SphereView',
		desc: 'Image viewer for 360° equirectangular images like photospheres and panoramas.',
		lang: Lang.Rust
	},
	'eu.jumplink.Learn6502': {
		name: 'Learn 6502 Assembly',
		desc: '6502 Assembly Learning Environment',
		lang: Lang.TypeScript
	},
	'net.hypatiaproject.Hypatia': {
		name: 'Hypatia',
		desc: 'Find definitions, explanations, and answers related to the text on your display',
		lang: Lang.Vala
	},
	'io.github.Ethanscharlie.albumripper': {
		name: 'Album Ripper',
		desc: 'Download Albums from YT Music',
		lang: Lang.Python
	},
	'io.github.tobagin.keysmith': {
		name: 'KeySmith',
		desc: 'SSH Key Management Application',
		lang: Lang.Python
	},
	'io.github.tobagin.digger': {
		name: 'Digger',
		desc: 'Modern DNS lookup tool with a graphical interface',
		lang: Lang.Python
	},
	'com.ml4w.dotfilesinstaller': {
		name: 'Dotfiles Installer',
		desc: 'Install Dotfiles easily, fast and secure',
		lang: Lang.Python
	},
	'io.github.tobagin.karere': {
		name: 'Karere',
		desc: 'GTK4 WhatsApp Client',
		lang: Lang.Python
	},
	'io.github.wartybix.Constrict': {
		name: 'Constrict',
		desc: 'Compress videos to target sizes',
		lang: Lang.Python
	},
	'io.github.tobagin.sonar': {
		name: 'Sonar',
		desc: 'Webhook inspector for developers',
		lang: Lang.Python
	},
	'io.github.tobagin.tempo': {
		name: 'Tempo',
		desc: 'A modern metronome for musicians',
		lang: Lang.Python
	},
	'com.nedrichards.octopusagile': {
		name: 'Octopus Agile Prices',
		desc: 'Track Octopus electricity prices',
		lang: Lang.Python
	},
	'io.github.josephmawa.Gauge': {
		name: 'Gauge',
		desc: 'Unit converter',
		lang: Lang.JavaScript
	},
	'io.github.swordpuffin.rewaita': {
		name: 'Rewaita',
		desc: 'Bring Color to Adwaita',
		lang: Lang.Python
	},
	'page.codeberg.lo_vely.Nucleus': {
		name: 'Nucleus',
		desc: 'Browse the chemical elements',
		lang: Lang.Python
	},
	'io.github.zingytomato.netpeek': {
		name: 'NetPeek',
		desc: 'Discover devices on your local network',
		lang: Lang.Python
	},
	'codes.loers.Karlender': {
		name: 'Events',
		desc: 'Manage your schedule',
		lang: Lang.Rust
	}
};

const appArray = Object.entries(APP_MAP).map(([id, app]) => ({ id, ...app }));

const appList = List.from(appArray).map((app) => ({
	...app,
	name: fuzzysort.prepare(app.name),
	desc: fuzzysort.prepare(app.desc),
	lang: fuzzysort.prepare(app.lang)
}));

export default appList;

export type PreparedApp = typeof appList extends List<infer T> ? T : never;

const EDITORS_CHOICE_IDS = [
	'de.haeckerfelix.Fragments',
	'org.gnome.gitlab.somas.Apostrophe',
	'net.natesales.Aviator',
	'io.github.alainm23.planify',
	'org.nickvision.tubeconverter',
	'com.github.finefindus.eyedropper'
];

export const editorsChoice = appList.filter((app) => EDITORS_CHOICE_IDS.includes(app.id));
