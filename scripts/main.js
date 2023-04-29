
let contentTable = null;
let isBuilded = false;
let showSettings = false;
var hpheal = false;
var spawnorset = false;
var lockkill = false;
var editorc = false;

	
			
Events.run(Trigger.update, () => {
    if (!Core.settings.getBool("eui-showInteractSettings", true)) {
        if (isBuilded) {
            clearTable();
        }
        return;
    };
    if (isRebuildNeeded()) rebuildTable();
});

Events.on(ClientLoadEvent, () => {
    Vars.ui.hudGroup.fill(null, t => {
        contentTable = t.table().get();
        t.center().right();		        
        t.pack();
    });
    contentTable.visibility = () => tableVisibility();
});



	
function isRebuildNeeded() {
    if (!isBuilded) return true;
    return false;
}

function rebuildTable() {
    clearTable();
    buildTable();
}

function buildTable() {
	if (!contentTable) return;
    isBuilded = true;
	
	var votekick = Core.atlas.find("admpanel-votekick");
	var core_shard = Core.atlas.find("admpanel-coreshard");
	var core_foundation = Core.atlas.find("admpanel-corefoundation");
	var core_nucleus = Core.atlas.find("admpanel-corenucleus");
	var mono = Core.atlas.find("admpanel-mono0");
	var mega = Core.atlas.find("admpanel-mega0");
	var flare = Core.atlas.find("admpanel-flare0");
	var poly = Core.atlas.find("admpanel-poly0");
	var pulsar = Core.atlas.find("admpanel-pulsar0");
	var quasar = Core.atlas.find("admpanel-quasar0");
	var zenith = Core.atlas.find("admpanel-zenith0");
	var quad = Core.atlas.find("admpanel-quad0");
	var antumbra = Core.atlas.find("admpanel-antumbra0");
	var corvus = Core.atlas.find("admpanel-corvus0");
	var eclipse = Core.atlas.find("admpanel-eclipse0");
	var oct = Core.atlas.find("admpanel-oct0");
	var omura = Core.atlas.find("admpanel-omura0");
	var reign = Core.atlas.find("admpanel-reign0");
	var toxopid = Core.atlas.find("admpanel-toxopid0");
	var team_sharded = Core.atlas.find("admpanel-gammay");
	var team_crux = Core.atlas.find("admpanel-gammar");
	var team_purple = Core.atlas.find("admpanel-gammap");
	var team_green = Core.atlas.find("admpanel-gammagr");
	var team_blue = Core.atlas.find("admpanel-gammabl");
	var team_derelict = Core.atlas.find("admpanel-gammade");
	var rtvwave = Core.atlas.find("admpanel-rtvwave");
	var killenemy = Core.atlas.find("admpanel-killenemy");
	var killall = Core.atlas.find("admpanel-killall");
	var health = Core.atlas.find("admpanel-health0");
			
	var vanquish = Core.atlas.find("admpanel-vanquish0");
	var tecta = Core.atlas.find("admpanel-tecta0");
	var quell = Core.atlas.find("admpanel-quell0");
	var disruptmissile = Core.atlas.find("admpanel-disrupt-missile0");
	var incite = Core.atlas.find("admpanel-incite0");
	var emanate = Core.atlas.find("admpanel-emanate0");
	
	var conquer = Core.atlas.find("admpanel-conquer0");
	var collaris = Core.atlas.find("admpanel-collaris0");
	var disrupt = Core.atlas.find("admpanel-disrupt0");
	var renale = Core.atlas.find("admpanel-renale0");
	var latum = Core.atlas.find("admpanel-latum0");
	var scathemissile = Core.atlas.find("admpanel-scathe-missile0");
	
	
	let togglestyle = Styles.clearTogglei;	
	let style = Styles.defaulti;
	
    contentTable.button(Icon.leftOpen, Styles.selecti, () => {
        showSettings = !showSettings;
        rebuildTable();
    }).width(16).height(16).marginRight(3);
    if (!showSettings) return;

    contentTable.row();
    const buttonTable = contentTable.table().get();
        buttonTable.defaults().size(32);
        

		buttonTable.button(new TextureRegionDrawable(core_shard), style, run(()=>{
			Call.sendChatMessage("/core small");
		})).width(40).height(40).name("sc").tooltip("Small core");
		
		buttonTable.button(new TextureRegionDrawable(core_foundation), style, run(()=>{
			Call.sendChatMessage("/core medium");
		})).width(40).height(40).name("mc").tooltip("Medium core");
		
		buttonTable.button(new TextureRegionDrawable(core_nucleus), style, run(()=>{
			Call.sendChatMessage("/core big");
		})).width(40).height(40).name("bc").tooltip("Big core");
		
		buttonTable.button(new TextureRegionDrawable(mono), style, run(()=>{
			if(spawnorset){	
				Call.sendChatMessage("/set mono");			
			}else{		
				Call.sendChatMessage("/spawn mono 10");			
			}
		})).width(40).height(40).name("mono").tooltip("Spawn mono");
		
		buttonTable.button(new TextureRegionDrawable(mega), style, run(()=>{
			if(spawnorset){		
				Call.sendChatMessage("/set mega");					
			}else{			
				Call.sendChatMessage("/spawn mega 1");			
			}		
		})).width(40).height(40).name("mega").tooltip("Spawn mega");	
				
		buttonTable.button(new TextureRegionDrawable(poly), style, run(()=>{			
			if(spawnorset){				
				Call.sendChatMessage("/set poly");		
			}else{	
				Call.sendChatMessage("/spawn poly 3");
			}					
		})).width(40).height(40).name("poly").tooltip("Spawn poly");		
		
		buttonTable.row();	
			
		buttonTable.button(new TextureRegionDrawable(corvus), style, run(()=>{			
			if(spawnorset){		
				Call.sendChatMessage("/set corvus");				
			}else{	
				Call.sendChatMessage("/spawn corvus 1");
			}			
		})).width(40).height(40).name("corvus").tooltip("Spawn corvus");
		
		buttonTable.button(new TextureRegionDrawable(omura), style, run(()=>{			
			if(spawnorset){		
				Call.sendChatMessage("/set omura");				
			}else{			
				Call.sendChatMessage("/spawn omura 1");
			}			
		})).width(40).height(40).name("omura").tooltip("Spawn omura");
		
		buttonTable.button(new TextureRegionDrawable(toxopid), style, run(()=>{			
			if(spawnorset){		
				Call.sendChatMessage("/set toxopid");				
			}else{	
				Call.sendChatMessage("/spawn toxopid 1");
			}			
		})).width(40).height(40).name("toxopid").tooltip("Spawn toxopid");
		
		buttonTable.button(new TextureRegionDrawable(oct), style, run(()=>{			
			if(spawnorset){		
				Call.sendChatMessage("/set oct");				
			}else{	
				Call.sendChatMessage("/spawn oct 1");
			}			
		})).width(40).height(40).name("oct").tooltip("Spawn oct");		
						
		buttonTable.button(new TextureRegionDrawable(eclipse), style, run(()=>{			
			if(spawnorset){		
				Call.sendChatMessage("/set eclipse");				
			}else{		
				Call.sendChatMessage("/spawn eclipse 1");
			}			
		})).width(40).height(40).name("eclipse").tooltip("Spawn eclipse");
		
		buttonTable.button(new TextureRegionDrawable(reign), style, run(()=>{			
			if(spawnorset){		
				Call.sendChatMessage("/set reign");				
			}else{		
				Call.sendChatMessage("/spawn reign 1");
			}			
		})).width(40).height(40).name("reign").tooltip("Spawn reign");		
		
		buttonTable.row();
		
		buttonTable.button(new TextureRegionDrawable(vanquish), style, run(()=>{			
			if(spawnorset){		
				Call.sendChatMessage("/set vanquish");				
			}else{		
				Call.sendChatMessage("/spawn vanquish 1");	
			}					
		})).width(40).height(40).name("vanquish").tooltip("Spawn vanquish");
		
		buttonTable.button(new TextureRegionDrawable(tecta), style, run(()=>{			
			if(spawnorset){		
				Call.sendChatMessage("/set tecta");				
			}else{	
				Call.sendChatMessage("/spawn tecta 1");	
			}							
		})).width(40).height(40).name("tecta").tooltip("Spawn tecta");
	
		buttonTable.button(new TextureRegionDrawable(flare), style, run(()=>{			
			if(spawnorset){	
				Call.sendChatMessage("/set flare");					
			}else{		
				Call.sendChatMessage("/spawn flare 10");			
			}			
		})).width(40).height(40).name("flare").tooltip("Spawn flare");
		
		buttonTable.button(new TextureRegionDrawable(team_sharded), style, run(()=>{			
			if(spawnorset){	
				Call.sendChatMessage("/set gamma");					
			}else{		
				Call.sendChatMessage("/spawn gamma 10");			
			}			
		})).width(40).height(40).name("gamma").tooltip("Spawn gamma");
								
		buttonTable.button(new TextureRegionDrawable(emanate), style, run(()=>{			
			if(spawnorset){		
				Call.sendChatMessage("/set emanate");				
			}else{	
				Call.sendChatMessage("/spawn emanate 1");	
			}							
		})).width(40).height(40).name("emanate").tooltip("Spawn emanate");		
		
				
		buttonTable.button(new TextureRegionDrawable(quell), togglestyle, run(()=>{			

			Call.sendChatMessage("/editor");	
			editorc=!editorc;									
		})).update(b => b.setChecked(!!editorc)).width(40).height(40).name("/editor").tooltip("/editor");
				
			
		buttonTable.row();		
		
		buttonTable.button(new TextureRegionDrawable(conquer), style, run(()=>{			
			if(spawnorset){	
				Call.sendChatMessage("/set conquer");					
			}else{		
				Call.sendChatMessage("/spawn conquer 1");	
			}							
		})).width(40).height(40).name("conquer").tooltip("Spawn conquer");
		
		buttonTable.button(new TextureRegionDrawable(collaris), style, run(()=>{			
			if(spawnorset){	
				Call.sendChatMessage("/set collaris");					
			}else{	
				Call.sendChatMessage("/spawn collaris 1");	
			}							
		})).width(40).height(40).name("collaris").tooltip("Spawn collaris");
		
		buttonTable.button(new TextureRegionDrawable(disrupt), style, run(()=>{			
			if(spawnorset){	
				Call.sendChatMessage("/set disrupt");					
			}else{		
				Call.sendChatMessage("/spawn disrupt 1");		
			}						
		})).width(40).height(40).name("disrupt").tooltip("Spawn disrupt");
		
		buttonTable.button(new TextureRegionDrawable(renale), style, run(()=>{			
			if(spawnorset){	
				Call.sendChatMessage("/set renale");					
			}else{		
				Call.sendChatMessage("/spawn renale 10");	
			}						
		})).width(40).height(40).name("renale").tooltip("Spawn renale");		
						
		buttonTable.button(new TextureRegionDrawable(latum), style, run(()=>{			
			if(spawnorset){	
				Call.sendChatMessage("/set latum");					
			}else{	
				Call.sendChatMessage("/spawn latum 1");
			}
		})).width(40).height(40).name("latum").tooltip("Spawn latum");
		
		buttonTable.button(new TextureRegionDrawable(scathemissile), style, run(()=>{						
			Call.sendChatMessage("/s");													
		})).width(40).height(40).name("/s").tooltip("/s");					
		buttonTable.row();
		
		buttonTable.button(new TextureRegionDrawable(health), togglestyle, run(()=>{
			hpheal=!hpheal;				
		})).update(b => b.setChecked(!!hpheal)).width(40).height(40).name("immortal").tooltip("IMMORTAL");
		
		buttonTable.button(new TextureRegionDrawable(rtvwave), togglestyle, run(()=>{
			spawnorset=!spawnorset;	
		})).update(b => b.setChecked(!!spawnorset)).width(40).height(40).name("spawnorset").tooltip("spawnorset");
								
		buttonTable.button(new TextureRegionDrawable(disruptmissile), togglestyle, run(()=>{
			lockkill=!lockkill;				
		})).update(b => b.setChecked(!!lockkill)).width(40).height(40).name("lockkill").tooltip("lockkill");
				
		buttonTable.button(new TextureRegionDrawable(incite), style, run(()=>{	
			Call.sendChatMessage("/health -999999999");														
		})).width(40).height(40).name("suicide").tooltip("Suicide");		
		
		buttonTable.button(new TextureRegionDrawable(killenemy), style, run(()=>{
			if(lockkill){ Call.sendChatMessage("/kill enemy");}			
		})).width(40).height(40).name("killenemy").tooltip("Kill enemy");
			
		buttonTable.button(new TextureRegionDrawable(killall), style, run(()=>{
			if(lockkill){ Call.sendChatMessage("/kill all");}
		})).width(40).height(40).name("killall").tooltip("KILL ALL");

		buttonTable.row();
		
		buttonTable.button(new TextureRegionDrawable(team_sharded), style, run(()=>{
			Call.sendChatMessage("/team sharded");
		})).width(40).height(40).name("team_sharded").tooltip("Team sharded");
		
		buttonTable.button(new TextureRegionDrawable(team_crux), style, run(()=>{
			Call.sendChatMessage("/team crux");
		})).width(40).height(40).name("team_crux").tooltip("Team crux");
			
		buttonTable.button(new TextureRegionDrawable(team_purple), style, run(()=>{
			Call.sendChatMessage("/team malis");
		})).width(40).height(40).name("team_purple").tooltip("Team purple");
		
		buttonTable.button(new TextureRegionDrawable(team_green), style, run(()=>{
			Call.sendChatMessage("/team green");
		})).width(40).height(40).name("team_green").tooltip("Team green");
		
		buttonTable.button(new TextureRegionDrawable(team_blue), style, run(()=>{
			Call.sendChatMessage("/team blue");
		})).width(40).height(40).name("team_blue").tooltip("Team blue");
		
		buttonTable.button(new TextureRegionDrawable(team_derelict), style, run(()=>{
			Call.sendChatMessage("/team derelict");
		})).width(40).height(40).name("team_derelict").tooltip("Team derelict");					
}


function clearTable() {
    if (!isBuilded) return;

    contentTable.clearChildren();
    isBuilded = false;
}

function tableVisibility() {
    return Vars.ui.hudfrag.shown && isBuilded;
}


Events.run(Trigger.draw, () => {
	if(hpheal){

		if(Vars.player.unit().type == UnitTypes.block) return;		
		if(Vars.player.unit().maxHealth > 30) {
		if(Vars.player.unit().health <= 100000) {
			if(Vars.player.timer.get(1, 50)) { Call.sendChatMessage("/health 99999999");}				
	}}}	
		
	var camera = Core.camera;
	var avgx = Math.floor(camera.position.x / Vars.tilesize);
	var avgy = Math.floor(camera.position.y / Vars.tilesize);
	var rangex = Math.floor(camera.width / Vars.tilesize / 2) + 3;
	var rangey = Math.floor(camera.height / Vars.tilesize / 2) + 3;
});

